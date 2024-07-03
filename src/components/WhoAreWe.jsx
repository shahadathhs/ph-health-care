import { FaArrowRight } from "react-icons/fa";
import pic1 from "../assets/Rectangle 24.png";

export default function WhoAreWe() {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 justify-between py-10 gap-10">
      <div className="mx-auto max-w-lg p-4 pt-12 space-y-4 ">
        <button className="border-[1px] px-6 py-2 rounded-3xl border-[#020043]">
          Who are we
        </button>
        <p className="text-3xl font-bold">We Help To Get </p>
        <p className="text-3xl font-bold">Solutions</p>
        <p className="text-sm text-gray-500">
        We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.

        </p>
        <button className="btn btn-outline btn-md bg-yellow-500 border-0">
          Learn More <FaArrowRight className="-rotate-45" />
        </button>
      </div>

      <div className="mx-auto max-w-md md:max-w-lg relative">
        <img src={pic1} alt="" className="rounded-3xl w-full" />
        <div className="bg-violet-500 text-white w-3/4 p-5 rounded-3xl absolute left-5 md:-left-16 bottom-5 md:-bottom-5">
          <p className="font-bold text-xl">Our mission is simple</p>
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-light pt-3">
            To provide high-quality healthcare services that are accessible, personalized, and patient-centered.
            </p>
            <button className="btn btn-outline rounded-full bg-yellow-500 text-white border-0 text-xl">
              <FaArrowRight className="-rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
