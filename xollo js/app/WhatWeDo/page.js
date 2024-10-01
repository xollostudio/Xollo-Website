/** @format */

import React from "react";

const page = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
        <div className=" min-h-screen flex flex-col  justify-between w-full font-['Archivo-thin'] border-b-4 py-10">
          <h1 className="xl:text-8xl text-xl mb-4 w-2/3">
            {" "}
            We create memorable websites
          </h1>
          <p className="w-full text-center">Xollo Studio</p>
          <h1 className="xl:text-8xl text-xl mb-4 text-start">
            {" "}
            Heres what we do
          </h1>
        </div>
      </main>
      <div className="h-[40vh] flex xl:flex-row flex-col justify-end px-16">
        <div className="h-full w-full xl:w-1/2  flex gap-10">
          <p className="w-1/3">(CREATIVE DESIGN)</p>
          <p className="w-2/3">
            We dont do cookie-cutter solutions. Our user-centered design
            encourages productivity and boosts revenue.
          </p>
        </div>
      </div>
      <div className="flex flex-col px-16 rounded-2xl py-16 bg-[#F6F6F6] font-['Archivo-thin']">
        <div className="h-[60vh] flex justify-start items">
          <h1 className="xl:text-8xl text-xl mb-4 text-start w-full xl:w-1/2">
            {" "}
            Smart development
          </h1>
        </div>
        <div className="w-full h-[40vh] bg-[#CECECE] flex items-start xl:justify-end p-16 rounded-3xl">
          <p className="xl:w-1/4 w-full">
            We dont do cookie-cutter solutions. Our user-centered design
            encourages productivity and boosts revenue.
          </p>
        </div>
      </div>
      <div>
        <div className="p-16  xl:h-[90vh] h-[30vh] flex items-start justify-start border-b-4">
          <h1 className="xl:text-8xl text-xl mb-4 text-start w-full font-['Archivo-thin']">
            {" "}
            Design and branding
          </h1>
        </div>
        <div className="h-[40vh] flex xl:flex-row flex-col justify-end px-16">
        <div className="h-full w-full xl:w-1/2  flex gap-10">
          <p className="w-1/3">(CREATIVE DESIGN)</p>
          <p className="w-2/3">
            Combining unique design and rich technology, we build digital
            products exactly as they were designed, without shortcuts or
            simplifications.
          </p>
        </div>
        </div>
        <div className="flex flex-col px-16 rounded-2xl py-16 bg-[#F6F6F6] font-['Archivo-thin']">
        <div className="h-[60vh] flex justify-start items">
          <h1 className="xl:text-8xl text-xl mb-4 text-start w-full">
            {" "}
            Art and illustrations
          </h1>
        </div>
        <div className="w-full h-[40vh] bg-[#CECECE] flex items-start xl:justify-end p-16 rounded-3xl">
          <p className="xl:w-1/4 w-full">
            We dont do cookie-cutter solutions. Our user-centered design
            encourages productivity and boosts revenue.
          </p>
        </div>
      </div>
      <div className="h-[50vh] flex justify-center items-center font-['Archivo-thin']">
        <p className="xl:text-8xl text-xl mb-4 text-start w-full xl:w-1/2">Work with us</p>
      </div>
      </div>
    </>
  );
};

export default page;
