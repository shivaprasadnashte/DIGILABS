"use client"
import { RiNotification2Line } from "react-icons/ri";

export default function Home() {
  
  return (
    <>
      <div className=" w-full h-screen flex justify-center">
      <div className="w-full md:w-1/3 py-5 h-screen justify-evenly flex flex-col items-center">
        <div className=" flex flex-col text-center ">
          <p className=" text-2xl ">Lorem Ipsum...</p>
          <p className=" text-gray-400">Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="circle-container   ">
          <div className="circle  "></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className=" notify rounded-full top-24 absolute left-48 h-20 w-20 flex justify-center items-center">
            <RiNotification2Line className="text-5xl " />
          </div>
        </div>
        <button className="btn-grad p-1 w-1/2 rounded-xl">
          Send Notification
        </button>
      </div>
      </div>
    </>
  );
}
