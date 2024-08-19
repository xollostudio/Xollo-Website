import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    
    <div className='h-[50px] w-full justify-between flex items-center p-5'>
      <div className=" cursor-pointer">
        <Link href="/" className="text-xl font-bold">
          Xollo
        </Link>
      </div>
      <div className=" cursor-pointer">
        <ul className="flex justify-between gap-10">
          <Link href="/">Home</Link>
          <Link href="/WhatWeDo">What we do</Link>
          <Link href="/Projects">Our Projects</Link>
          <Link href="/Tutorials">Tutorials</Link>
          <Link href="/Company">The Company</Link>
          <Link href="/Contacts">Contacts</Link>
          <Link href="/Team">Meet the team</Link>
        </ul>
      </div>
    </div>
  )
}

