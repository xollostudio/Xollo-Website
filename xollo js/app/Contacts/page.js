import React from 'react'

const page = () => {
  return (
    <main className="flex min-h-screen font-['Archivo-thin'] flex-col items-center  justify-between p-24">
      <div className="flex items-center justify-start w-full py-16">
        <h1 className="xl:text-8xl text-xl w-2/3 "> Hey! Tell us about your project</h1>
      </div>
      <div className='w-full'>
        <p className='py-10 xl:text-2xl text-xl '>I'm inetrested in....</p>
        <div className='flex flex-col'>
          <p className='text-sm text-gray-400'>
            Development
          </p>
          <div className='flex xl:text-2xl text-xl gap-4'>
            <button>Website redesign</button>
            <button>UI/UX Design</button>
            <button>Logo Design</button>
          </div>
        </div>
        <div className='flex flex-col py-6'>
          <p className='text-sm text-gray-400'>
            Design
          </p>
          <div className='flex xl:flex-row flex-col gap-4'>
          <div className='flex xl:text-2xl text-xl gap-4'>
            <button>Branding/Brand Identity Design</button>
            <button>Logo Re-design</button>
          </div>
          <div className='flex xl:text-2xl text-xl gap-4'>
            <button>Motion Design</button>
            <button>Art</button>
            <button>Illustration</button>
          </div>
          </div>
        </div>
        <div className='flex flex-col py-6'>
          <p className='text-sm text-gray-400'>
            Art/Illustration
          </p>
          <div className='flex xl:text-2xl text-xl gap-4'>
            <button>Brand Re-design</button>
            <button>Site from scratch</button>
          </div>
          
          <p className='py-10 xl:text-2xl text-xl '>I am.....</p>
        </div>
      </div>
      <div className='w-full flex flex-col'>
      <input type='text' placeholder='My name is:' className=' border-b p-4 w-full focus:border-none my-8'/>
      <input type='email' placeholder='Email' className=' border-b p-4 w-full focus:border-none my-8'/>
      <div className='flex mt-8'>
      <input type='text' placeholder='About my project' className=' border-b p-4 w-2/3 focus:outline-none mr-4'/>
      <input type='text' placeholder='Additional Details' className=' border-b p-4 w-1/3 focus:outline-none '/>
      </div>
      </div>
    </main>
  )
}

export default page