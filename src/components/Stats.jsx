import circle from "../assets/stats/Group 12.png";
import youtube from "../assets/stats/Group (2).png";
import contact from "../assets/stats/contract (1) 1.png";
import coin from "../assets/stats/Group (3).png";
import pics from "../assets/stats/Group 7.png";
import { IoMdStar } from "react-icons/io";

export default function Stats() {
  return (
    <div className="container mx-auto pt-3 pb-5 text-[#020043]">
      {/* for :md */}
      <div className="hidden lg:grid grid-cols-5 gap-9 justify-between items-end">
        <div className="border-2 rounded-3xl bg-base-100 p-8 space-y-4">
          <p className="text-3xl font-bold">90%</p>
          <p className="text-gray-500">
            Patient satisfaction rate, reflecting our commitment.
          </p>
          <div className="flex justify-center">
            <img src={circle} alt="" />
          </div>
        </div>
        <div className="col-span-3">
          <p className="text-center max-w-sm text-4xl font-bold mx-auto py-4">
            Comprehensive Care for Every Patient
          </p>
          <div className="grid grid-cols-3 gap-9 items-end">
            <div className="border-2 rounded-3xl bg-base-100 p-8 space-y-2 relative">
              <p className="text-3xl font-bold">500+</p>
              <p className="text-gray-500 pb-10">Board-certified doctors</p>
              <img src={contact} alt="" className="absolute top-32 xl:top-24 right-5" />
            </div>
            <div className="border-2 rounded-3xl bg-base-100 p-6 space-y-2">
              <p className="text-3xl font-bold flex gap-2 items-center">
                4.8{" "}
                <span className=" text-yellow-500 =">
                  <IoMdStar />
                </span>
              </p>
              <p className="text-gray-500">Over 20,000 Patient</p>
              <img src={pics} alt="" />
            </div>
            <div className="border-2 rounded-3xl bg-base-100 p-8 space-y-2 relative">
              <p className="text-3xl font-bold">$5000</p>
              <p className="text-gray-500 pb-10">
                Money spend for poor patient
              </p>
              <img src={coin} alt="" className="absolute top-32 xl:top-24 right-5" />
            </div>
          </div>
        </div>
        <div className="border-2 rounded-3xl bg-base-100 p-8 space-y-4">
          <p className="text-3xl font-bold">50+</p>
          <p className="text-gray-500">Free lesson video for patient</p>
          <div className="flex justify-center">
            <img src={youtube} alt="" />
          </div>
        </div>
      </div>
      {/* for :sm */}
      <div className="grid grid-cols-1 lg:hidden gap-3 px-4">
        <div className="">
          <p className="text-center max-w-sm text-4xl font-bold mx-auto py-4">
            Comprehensive Care for Every Patient
          </p>
          <div className="grid grid-cols-3 gap-2 items-end">
            <div className="border-2 rounded-3xl bg-base-100 p-2 sm:p-4 space-y-2 h-full">
              <p className="text-xl sm:text-3xl font-bold">500+</p>
              <p className="text-gray-500">Board-certified doctors</p>
              <img src={contact} alt="" />
            </div>
            <div className="border-2 rounded-3xl bg-base-100 p-2 sm:p-4 space-y-2">
              <p className="text-xl sm:text-3xl font-bold flex gap-2 items-center">
                4.8{" "}
                <span className=" text-yellow-500 =">
                  <IoMdStar />
                </span>
              </p>
              <p className="text-gray-500">Over 20,000 Patient</p>
              <img src={pics} alt="" />
            </div>
            <div className="border-2 rounded-3xl bg-base-100 p-2 sm:p-4 space-y-2">
              <p className="text-xl sm:text-3xl font-bold">$5000</p>
              <p className="text-gray-500">
                Money spend for poor patient
              </p>
              <img src={coin} alt=""/>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="border-2 rounded-3xl bg-base-100 p-4 space-y-4">
            <p className="text-3xl font-bold">90%</p>
            <p className="text-gray-500">
              Patient satisfaction rate, reflecting our commitment.
            </p>
            <div className="flex justify-center">
              <img src={circle} alt="" />
            </div>
          </div>
          <div className="border-2 rounded-3xl bg-base-100 p-4 space-y-4">
            <p className="text-3xl font-bold">50+</p>
            <p className="text-gray-500">Free lesson video for patient</p>
            <div className="flex justify-center">
              <img src={youtube} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
