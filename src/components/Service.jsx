import { FaArrowRight } from "react-icons/fa";
import pic1 from "../assets/Rectangle 27-2.png";
import pic2 from "../assets/Rectangle 27-1.png";
import pic3 from "../assets/Rectangle 27.png";

export default function Service() {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 justify-between py-10 gap-10">
      <div className="mx-auto max-w-lg p-4 pt-12 space-y-4 ">
        <button className="border-[1px] px-6 py-2 rounded-3xl border-[#020043]">
          Service
        </button>
        <p className="text-3xl font-bold">Empowering Health</p>
        <p className="text-3xl font-bold">Enriching Lives</p>
        <p className="text-sm text-gray-500">
          We are committed to providing high-quality, compassionate care to
          every patient we serve. Whatever your healthcare needs may be, you can
          trust us to be your partner in health and wellness.
        </p>
        <button className="btn btn-outline btn-md bg-yellow-500 border-0">
          Appointment <FaArrowRight className="-rotate-45" />
        </button>
      </div>

      <div className="mx-auto max-w-md md:max-w-lg relative">
        <img src={pic1} alt="" className="rounded-3xl w-full" />
        <div className="bg-violet-500 text-white w-3/4 p-5 rounded-3xl absolute left-5 bottom-5">
          <p className="font-bold text-xl">Advanced Technology</p>
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-light pt-3">
              Our surgeons are trained in the latest robotic surgical
              techniques, which allow for greater precision
            </p>
            <button className="btn btn-outline rounded-full bg-yellow-500 text-white border-0 text-xl">
              <FaArrowRight className="-rotate-45" />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-md md:max-w-lg relative">
        <img src={pic2} alt="" className="rounded-3xl w-full" />
        <div className="bg-violet-500 text-white w-3/4 p-5 rounded-3xl absolute left-5 bottom-5">
          <p className="font-bold text-xl">Online Doctor Meet</p>
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-light pt-3">
            Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
            </p>
            <button className="btn btn-outline rounded-full bg-yellow-500 text-white border-0 text-xl">
              <FaArrowRight className="-rotate-45" />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-md md:max-w-lg relative">
        <img src={pic3} alt="" className="rounded-3xl w-full" />
        <div className="bg-violet-500 text-white w-3/4 p-5 rounded-3xl absolute left-5 bottom-5">
          <p className="font-bold text-xl">Consultancy your health</p>
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-light pt-3">
            Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
            </p>
            <button className="btn btn-outline rounded-full bg-yellow-500 text-white border-0 text-xl">
              <FaArrowRight className="-rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
