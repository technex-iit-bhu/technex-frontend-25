import Navbar from "../_components/Navbar";
import Background_B from "./../_backgrounds/Background_B";
import SignupCard from "./SignupCard";

export default function Signup() {
  return (
    <>
      <Background_B>
        <div className="w-screen h-screen overflow-y-auto">
          <Navbar />
          <SignupCard />
        </div>
      </Background_B>
    </>
  );
}
