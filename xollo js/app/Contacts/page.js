/** @format */

import React from "react";

const page = () => {
  return (
    <>
      <main className="flex min-h-screen font-['Archivo-thin'] flex-col items-center  justify-between p-24">
        <div className="flex items-center justify-start w-full py-16">
          <h1 className="xl:text-8xl text-xl w-2/3 ">
            {" "}
            Hey! Tell us about your project
          </h1>
        </div>
        <div className="w-full">
          <p className="py-10 xl:text-2xl text-xl ">Im interested in....</p>
          <div className="flex flex-col">
            <p className="text-sm text-gray-400 py-1">Development</p>
            <div className="flex xl:text-2xl text-xl gap-4">
              <button className="py-1 px-3 rounded-full border border-black">
                Website redesign
              </button>
              <button className="py-1 px-3 rounded-full border border-black">
                UI/UX Design
              </button>
              <button className="py-1 px-3 rounded-full border border-black">
                Logo Design
              </button>
            </div>
          </div>
          <div className="flex flex-col py-6">
            <p className="text-sm text-gray-400">Design</p>
            <div className="flex xl:flex-row flex-col gap-4">
              <div className="flex xl:text-2xl text-xl gap-4">
                <button className="py-1 px-3 rounded-full border border-black">
                  Branding/Brand Identity Design
                </button>
                <button className="py-1 px-3 rounded-full border border-black">
                  Logo Re-design
                </button>
              </div>
              <div className="flex xl:text-2xl text-xl gap-4">
                <button className="py-1 px-3 rounded-full border border-black">
                  Motion Design
                </button>
                <button className="py-1 px-3 rounded-full border border-black">
                  Art
                </button>
                <button className="py-1 px-3 rounded-full border border-black">
                  Illustration
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-6">
            <p className="text-sm text-gray-400">Art/Illustration</p>
            <div className="flex xl:text-2xl text-xl gap-4">
              <button className="py-1 px-3 rounded-full border border-black">
                Brand Re-design
              </button>
              <button className="py-1 px-3 rounded-full border border-black">
                Site from scratch
              </button>
            </div>

            <p className="py-10 xl:text-2xl text-xl ">I am.....</p>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <input
            type="text"
            placeholder="My name is:"
            className=" border-b p-4 w-full focus:border-none my-8"
          />
          <input
            type="email"
            placeholder="Email"
            className=" border-b p-4 w-full focus:border-none my-8"
          />
          <div className="flex mt-8">
            <input
              type="text"
              placeholder="About my project"
              className=" border-b p-4 w-2/3 focus:outline-none mr-4"
            />
            <input
              type="text"
              placeholder="Additional Details"
              className=" border-b p-4 w-1/3 focus:outline-none "
            />
          </div>
          <div className="py-10">
            <div>
              <p className="py-10 xl:text-2xl text-xl">Project budget (USD)</p>
              <div className="flex xl:text-2xl text-xl gap-4 pb-10">
                <button className="py-1 px-3 rounded-full border border-black">
                  10 - 20K
                </button>
                <button className="py-1 px-3 rounded-full border border-black">
                  30 - 40K
                </button>
                <button className="py-1 px-3 rounded-full border border-black">
                  50 - 60K
                </button>
                <button className="py-1 px-3 rounded-full border border-black">
                  70 - 80K
                </button>
                <button className="py-1 px-3 rounded-full border border-black">
                  100K
                </button>
              </div>
            </div>
            <input
              type="text"
              placeholder="My Budget Is"
              className=" border-b p-4 w-full focus:outline-none "
            />
            <button className="xl:text-2xl text-xl py-1 my-5 px-3 rounded-full border border-black">
              Send Request
            </button>
          </div>
        </div>
      </main>
      <div className="min-h-screen font-['Archivo-thin'] w-full px-20 pt-30 pb-20 bg-[#F6F6F6] py-20 gap-5">
        <div className="flex gap-4">
          <div className="my-5">Socials</div>
          <div className="flex-col w-full pb-20">
            <p className="xl:text-8xl text-xl font-['Archivo-thin']">
              Instagram
            </p>
            <div className="flex gap-2 py-3">
              <p className="xl:text-8xl text-xl">Behance</p>
              <img
                alt=""
                src="/Assets/Star2.png"></img>
              <p className="xl:text-8xl text-xl">Linkedin</p>
              <img
                alt=""
                src="/Assets/Star2.png"></img>

              <p className="xl:text-8xl text-xl">GitHub</p>
            </div>
            <p className="xl:text-8xl text-xl">Facebook</p>
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-20 hidden xl:flex"></div>
          <div className="border-t py-10 flex justify-between w-full">
            <div>
              <p>Our Contact</p>
            </div>
            <div className="flex-col gap-3">
              <p>L: 202-1965 W 4th Ave Vancouver, Canada</p>
              <p>30 Chukarina StLviv, Ukraine</p>
            </div>
            <div>
              <button className="py-1 px-3 rounded-full border border-black">
                info@xollo.studio.com
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
