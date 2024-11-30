import Navbar from "../_components/Navbar";
import Background_B from "../_backgrounds/Background_B";
import LoginCard from './LoginCard'

export default function Login() {
  return (
    <>
      <Background_B />
      <div className="w-screen h-screen overflow-y-auto">
        <Navbar />
        <LoginCard />
      </div>
    </>
  );
}
