"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getSubEventByName } from "@/app/utils/api";
import Image from "next/image";
import Background_E from "@/app/_backgrounds/Background_E";
export default function SubEventPage() {
  const { id, name } = useParams();
  const [subEvent, setSubEvent] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();
  useEffect(() => {
    if (!id || !name) return;
    getSubEventByName(id, name)
      .then((res) => setSubEvent(res))
      .catch((err) => setError(err.message));
  }, [id, name]);

  if (error) {
    return <div className="text-red-400">Error: {error}</div>;
  }
  if (!subEvent) {
    return <div className="text-white">Loading subEvent...</div>;
  }

  return (
    <div className="text-white flex flex-col items-center p-8">
      <Background_E />
      {/* Header Image */}
      <div className="w-full max-w-4xl mb-6">
        <Image
          src={subEvent.imgsrc}
          alt={subEvent.name}
          width={800}
          height={400}
          className="rounded-lg object-cover w-full h-[300px] sm:h-[400px] md:h-[500px]"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Event Title */}
      <h1 className="text-5xl font-bold mb-4 text-center">{subEvent.name}</h1>

      {/* Event Schedule */}
      <p className="text-xl text-gray-300 mb-6">
        Event Schedule:{" "} TO BE DECIDED SOON !!
{/*         <span className="text-white font-semibold">
          From {new Date(subEvent.sDate).toLocaleString()} to{" "}
          {new Date(subEvent.eDate).toLocaleString()}
        </span> */}
      </p>

      {/* Event Description */}
      <div className="bg-gray-800 p-6 rounded-lg max-w-3xl w-full mb-6">
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p className="text-gray-300">{subEvent.desc}</p>
      </div>

      {/* Event Sub-Description */}
      <div className="bg-gray-800 p-6 rounded-lg max-w-3xl w-full mb-6">
        <h2 className="text-2xl font-semibold mb-2">Details</h2>
        <p className="text-gray-300">{subEvent.sub_desc}</p>
      </div>

      {/* GitHub Button */}
      {subEvent.github && (
        <a
          href={subEvent.github}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-lg mb-4"
        >
          View Details on GitHub
        </a>
      )}

      {/* Go Back Button */}
      <button
        onClick={() => router.push("/events")}
        className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-md text-lg"
      >
        Go Back
      </button>
    </div>
  );
}
