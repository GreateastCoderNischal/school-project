"use client"
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { Roboto } from 'next/font/google'
import { openList } from '@/constants/constant';

const roboto = Roboto({ subsets: ["latin"], weight: ["700"] });

const page = () => {

    const Opener=async (url)=>{
        // await open(url)
    }

    return (
        <div className={'flex justify-center text-white text-xl p-8 ' + roboto.className}>
            <ul className='text-black'>
                {openList.map(item=>(

                    <li 
                    onClick={()=>Opener(item.url)}
                    className='bg-white p-4 m-6 flex cursor-pointer items-center gap-2 text-bold rounded-xl shadow-lg shadow-green-400'>
                    <SocialIcon url={item.url} network={false} className='pointer-events-none' />
                    Open {item.name}
                </li>
                ))}
            </ul>
        </div>
    )
}

export default page