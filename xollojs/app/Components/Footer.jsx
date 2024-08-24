import React from 'react'

const Footer = () => {
  return (
    <footer className='purple-section h-full mt-[-20px]'>
        <section className='center flex flex-col h-full'>
            <div className=' flex items-center flex-col mt-60 '>
                <div className="text-center text-[#141414] text-8xl font-thin font-['Archivo-thin'] leading-tight">
                    <span>READY <br/> TO START THE <br/> PROJECT?</span>
                </div>
                <button className='w-60 h-12 bg-[#0b0b0b] rounded-3xl mt-10 mb-32'>
                    <span className="text-center text-[#ececec] text-2xl font-normal font-['Archivo-thin']">
                     See more works
                    </span>
                </button>
            </div>
            <div className='flex flex-row mb-10 w-full justify-between items-center'>
                <span className="w-[140px] text-[#141414] text-base font-normal font-['Archivo-thin'] ">092 Cakeroon Rd, abia state</span>
                <div className="opacity-70 text-[#0b0b0b] text-base font-normal font-['Archivo-thin'] cursor-pointer">
                    <p>XOLLO.COM</p>
                </div>
                <button className='w-64 h-12 border border-black rounded-3xl'>
                    <span className="text-center text-black text-2xl font-normal font-['Archivo-thin']">
                    info@xollo.studio.com
                    </span>
                </button>
            </div>
            </section>
    </footer>
  )
}

export default Footer