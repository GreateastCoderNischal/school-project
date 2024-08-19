import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full flex justify-between h-[60px] text-white py-10 px-8 bg-transparent items-center'>
            <span className="font-bold text-xl">
                Your Assistant
            </span>
            <div className="">
                <ul className='cursor-pointer flex gap-4 text-xl'>
                    <li className='p-3 hover:underline'>Chat Engine</li>
                    <li className='p-3 hover:underline'>| Send Email </li>
                    <li className='p-3 hover:underline'>| Open something </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar