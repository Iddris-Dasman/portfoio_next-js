import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className=' mt-20 my-12 '>
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-fuchsia-500 border-0 rounded"></hr>
        </h1>
        <form className=' '>
            <div className='   w-fit mx-auto space-y-3'>

            <div className=' flex flex-col  space-x-2   items-center justify-center space-y-3'>
            <input type="text" className=' py-2 rounded-lg outline-none px-2 border-2 border-fuchsia-600 bg-transparent text-gray-500' placeholder='Name' />
            <input type="text" className=' py-2 rounded-lg outline-none px-2 border-2 border-fuchsia-600 bg-transparent text-gray-700 'placeholder='Email' />
            </div>
            
            <textarea className=' p-10 outline-none px-2 border-2 border-fuchsia-600 bg-transparent text-gray-500 rounded-lg w-fit' />

            <button className='bg-fuchsia-700  py-3 font-bold rounded-lg'>Submit</button>
            </div>

        </form>
    </section>
  )
}

export default Contact