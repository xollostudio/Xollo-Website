"use client"
import Image from "next/image";
import { useState } from "react";
import Box from "./Components/Box";
import CarouselBox from "./Components/CarouselBox";

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    console.log('Toggling dark mode...');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section className="w-full flex flex-col h-[90vh]">
       <div className="w-[75%] h-[100%] center relative">
         <span className="text-black text-8xl font-thin font-['Archivo-thin'] leading-tight w-full h-full absolute top-[30%] " >
            We develop your
            <br/>
            digital 
            <button onClick={toggleDarkMode} className="cursor-pointer bg-slate-400 rounded">Tog</button>
            products  
            <span className="font-['Archivo'] p-3 italic ">
            from
            <br/> Scratch
            </span>
         </span>
       </div>
       <div className="text-center opacity-70 text-black text-base font-normal font-['Clash Display']">
        <p>XOLLO.COM</p>
       </div>
      </section>
      <section className="w-full h-[85vh] mt-10 bg-[#292f2d]">
        
      </section>
      <section className=" purple-section h-full mt-[-25px] pb-32">
        <div className="flex flex-col center h-full justify-between bg-red-6 pt-20 ">
          <div className="flex-2 text-black text-4xl font-thin font-['Archivo-thin'] leading-10">
              We help you create and manage <span className="font-['Archivo'] underline "> digital  
              <br/>
              products from scratch </span> you can start any day
              <br/>
               and it will be ready 
          </div>
          <div className="flex flex-1 flex-row justify-between items-start bg-blue-4 pt-28">
            <div className="flex-1 text-black text-xl font-light font-['Archivo-thin'] leading-10">
              What you can expect:
            </div>
            <div className="flex flex-1 flex-col gap-8">
              <span className="w-[430px] text-black text-lg font-thin font-['Archivo-thin'] leading-loose ">We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</span>
              <span className="w-[430px] text-black text-lg font-thin font-['Archivo-thin'] leading-loose ">We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating. </span>
              <span className="text-black text-xl font-normal font-['Archivo']  mt-6">See more works</span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full mt-[-30px] flex">
      <div class="box-one"></div>
      <div class="box-one"></div>
      <div class="box-one"></div>
      <div class="box-one"></div>
      </section>
      <section className="bg-fuchsia w-full h-full">
          <div className="section-heading center ">
          Featured  Works
          </div>

            <div className="ml-3 flex flex-col">
              <div className="flex flex-row overflow-hidden">
                <div><Box/></div>
                <div><Box/></div>
                <div><Box/></div>
                <div><Box/></div>
              </div>
              <div className="mt-5">
                <p className="text-center small-title">My project title</p>
              </div>
            </div>

            <div className="ml-3 flex flex-col">
              <div className="flex flex-row overflow-hidden">
                <div><Box/></div>
                <div><Box/></div>
                <div><Box/></div>
                <div><Box/></div>
              </div>
              <div className="mt-5">
                <p className="text-center small-title">My project title</p>
              </div>
            </div>

            <div className="ml-3 flex flex-col">
              <div className="flex flex-row overflow-hidden">
                <div><Box/></div>
                <div><Box/></div>
                <div><Box/></div>
                <div><Box/></div>
              </div>
              <div className="mt-5">
                <p className="text-center small-title">My project title</p>
              </div>
            </div>
      </section>
      <section className="w-full h-full mb-10">
        <div className="center">
          <div className="section-heading ">
            <span>Development <br/>
            and design resources</span>
          </div>
          <div className="flex justify-start overflow-y-auto no-scrollbar ">
            <div><CarouselBox/></div>
            <div><CarouselBox/></div>
            <div><CarouselBox/></div>
            <div><CarouselBox/></div>
            <div><CarouselBox/></div>
            <div><CarouselBox/></div>
          </div>
        </div>
      </section>
      <section className=" w-full h-[100vh] mb-16">
        <div className="center flex flex-col justify-between">
          <div className="flex-2 section-heading ">Our philosophy</div>
          <div className="flex flex-1 flex-col relative ">
            <div className=" flex flex-col justify-center items-start right-[15%] gap-8 absolute">
              <span className="w-[430px]  text-black text-lg font-thin font-['Archivo-thin'] leading-loose ">We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</span>
              <span className="w-[430px]  text-black text-lg font-thin font-['Archivo-thin'] leading-loose ">We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating. </span>
              <span className="text-black text-xl font-normal font-['Archivo'] mt-6">See more works</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
