"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import Background_B from "@/app/_backgrounds/Background_B";
const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;
import { fetchProfile, patchUserProfile } from "@/app/utils/api";

export default function EditProfilePage() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  // Existing user info
  const [name, setName] = useState("");
  const [institute, setInstitute] = useState("");
  const [city, setCity] = useState("");
  const [year, setYear] = useState<number | string>("");
  const [branch, setBranch] = useState("");
  const [phone, setPhone] = useState("");

  // For password changes
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // 1) On mount, read token from localStorage (or wherever you store it), fetch existing user data
  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (!localToken) {
      setError("No token found. Please login first.");
      setLoading(false);
      return;
    }
    setToken(localToken);

    // Optional: fetch user data to prefill form
    fetchProfile(localToken)
      .then((profile) => {
        setName(profile.name || "");
        setInstitute(profile.institute || "");
        setCity(profile.city || "");
        setYear(profile.year || "");
        setBranch(profile.branch || "");
        setPhone(profile.phone || "");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  // 2) Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!oldPassword) {
      setError("Old password is required.");
      return;
    }
    setError(null);
    setSuccess(null);

    if (!token) {
      setError("No token found, cannot update profile.");
      return;
    }

    const payload = {
      name,
      old_password: oldPassword,
      new_password: newPassword,
      institute,
      city,
      year: year ? Number(year) : 0,
      branch,
      phone,
    };

    try {
      const response = await patchUserProfile(token, payload);
      setSuccess(response.message || "Profile updated successfully.");
      // Optionally: redirect or re-fetch profile
      // router.push("/profile"); // if you want to go back to profile
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "An Error occurred while Editing profile");
      } else {
        setError("An unexpected error occurred");
      }
      setError(err as string);
    }
  };

  useEffect(()=>{
    if(success !== null){
      setTimeout(() => router.push("/profile"), 1000)
    }
  },[success])

  if (loading) {
    return (
      <>
        <Background_B>
          <Navbar />
          <main className="min-h-screen flex items-center justify-center text-white">
            Loading user data...
          </main>
          <Footer />
        </Background_B>
      </>
    );
  }

  return (
    <>
      <Background_B>
        <Navbar />
        <main className="min-h-screen py-20 mt-10 px-4 flex flex-col items-center text-white">
          <div
            className="
            w-full max-w-xl
            p-6
            bg-[#2B2A2A]/80
            border-4 border-[#454242]
            rounded-lg
            pixel-font
          "
          >
            <h1 className="text-3xl font-bold mb-6 text-center">
              Update Your Profile
            </h1>

            {error && <p className="text-red-400 mb-4">{error}</p>}
            {success && (
              <>
                <p className="text-green-400 mb-4">{success}</p>
              </>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Name</label>
                <input
                  type="text"
                  className="bg-[#3B3B3B] p-2 rounded"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Old Password */}
              <div className="flex flex-col">
                <label className="font-semibold mb-1">
                  Old Password (required)
                </label>
                <input
                  type="password"
                  className="bg-[#3B3B3B] p-2 rounded"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                />
              </div>

              {/* New Password */}
              <div className="flex flex-col">
                <label className="font-semibold mb-1">
                  New Password (leave blank to keep old)
                </label>
                <input
                  type="password"
                  className="bg-[#3B3B3B] p-2 rounded"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>

              {/* Institute */}
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Institute</label>
                <input
                  type="text"
                  className="bg-[#3B3B3B] p-2 rounded"
                  value={institute}
                  onChange={(e) => setInstitute(e.target.value)}
                />
              </div>

              {/* City */}
              <div className="flex flex-col">
                <label className="font-semibold mb-1">City</label>
                <input
                  type="text"
                  className="bg-[#3B3B3B] p-2 rounded"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              {/* Year */}
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Year</label>
                <input
                  type="number"
                  className="bg-[#3B3B3B] p-2 rounded"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>

              {/* Branch */}
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Branch</label>
                <input
                  type="text"
                  className="bg-[#3B3B3B] p-2 rounded"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Phone</label>
                <input
                  type="text"
                  className="bg-[#3B3B3B] p-2 rounded"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="bg-green-600 px-4 py-2 rounded font-bold hover:bg-green-500 transition"
              >
                Save Changes
              </button>
            </form>
          </div>
        </main>
        <Footer />
      </Background_B>
    </>
  );
}
