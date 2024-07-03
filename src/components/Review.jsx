import pic1 from "../assets/image1.png";
import pic2 from "../assets/image2.png";
import pic3 from "../assets/image.png";
import { IoMdStar } from "react-icons/io";
export default function Review() {
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="max-w-sm mx-auto bg-[#FFFFF5] p-5 rounded-2xl">
        <h1 className="text-2xl font-bold pb-4">
          Expertise and Compassion Combined
        </h1>
        <p className="text-sm text-gray-500 pb-4">
          I can not thank enough for their exceptional care. The doctors and
          staff showed incredible expertise and compassion throughout my
          treatment journey. I felt truly cared for every step of the way.
        </p>
        <div className="flex items-center gap-5">
          <div>
            <img
              src={pic1}
              alt=""
              className="w-10 h-10 object-cover rounded-full"
            />
          </div>
          <div>
            <p className="text-md font-semibold">
              Sarah D,{" "} 
              <span className="text-sm text-gray-500">IT Professional</span>
            </p>
            <p className="flex items-center text-yellow-500 gap-2">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-sm mx-auto bg-[#FFFFF5] p-5 rounded-2xl">
        <h1 className="text-2xl font-bold pb-4">
          Life-Saving Care, Life-Changing Experience
        </h1>
        <p className="text-sm text-gray-500 pb-4">
          My experience at [Healthcare Provider Name] was life-changing. The
          prompt and accurate diagnosis, coupled with the advanced treatments
          they provided, saved my life.
        </p>
        <div className="flex items-center gap-5">
          <div>
            <img
              src={pic2}
              alt=""
              className="w-10 h-10 object-cover rounded-full"
            />
          </div>
          <div>
            <p className="text-md font-semibold">
              Michael R,{" "} 
              <span className="text-sm text-gray-500">Business Executive</span>
            </p>
            <p className="flex items-center text-yellow-500 gap-2">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-sm mx-auto bg-[#FFFFF5] p-5 rounded-2xl">
        <h1 className="text-2xl font-bold pb-4">A Partner in Health and Wellness</h1>
        <p className="text-sm text-gray-500 pb-4">
          As a busy professional, I appreciate the convenience and quality of
          care I receive at DOC+. From telemedicine
          consultations to routine check-ups, they have become my trusted.
        </p>
        <div className="flex items-center gap-5">
          <div>
            <img
              src={pic3}
              alt=""
              className="w-10 h-10 object-cover rounded-full"
            />
          </div>
          <div>
            <p className="text-md font-semibold">
              David S,{" "} 
              <span className="text-sm text-gray-500">Lawyer</span>
            </p>
            <p className="flex items-center text-yellow-500 gap-2">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
