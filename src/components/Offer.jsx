import { FaArrowRight } from "react-icons/fa";
import offer from "../assets/Rectangle 32.png";
import logo from "../assets/logo light.png"

export default function Offer() {
  return (
    <div className="py-20 bg-violet-pattern">
      {/* inner div */}
      <div className="container mx-auto rounded-3xl relative">
        <img src={offer} alt="offer pic" className="w-full rounded-3xl h-[500px] object-cover" />
        <div
          className="absolute inset-0 container mx-auto rounded-3xl"
          style={{
            background: "radial-gradient(647.71% 142.52% at 98% 78%, rgb(2, 0, 67), rgba(2, 0, 67, 0.3) 100%)",
          }}
        ></div>
        <img src={logo} alt="" className="absolute right-10 top-20" />
        <div className="absolute bottom-32 left-16 space-y-8 text-3xl font-extrabold text-white">
          <p>Get Your </p>
          <p>First Appointment</p>
          <p>at 50% Off!</p>

          <div className="flex gap-5">
            <button className="btn btn-outline btn-md bg-yellow-500 border-0">
              Appointment <FaArrowRight className="-rotate-45" />
            </button>
            <button className="btn btn-outline btn-md text-white">
              Learn More <FaArrowRight className="-rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
