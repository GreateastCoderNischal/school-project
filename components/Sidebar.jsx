"use client";

import { sidebarList } from '@/constants/constant';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Sidebar = () => {
    const [active, setActive] = useState('');
    const path=usePathname();
    useEffect(() => {
        const realObj=sidebarList.find(item=>item.route==path);
      setActive(realObj.label)
    }, [path])
    
    
    return (
        <div className="w-[18rem] h-screen bg-gray-900 py-12 px-4">
            <h1 className="text-center text-white text-2xl mb-8">
                Select From Here
            </h1>
            <div className="text-xl flex flex-col gap-4">
                {sidebarList.map((item, index) => (
                    <Link href={item.route} key={index}>
                        <div 
                            onClick={() => setActive(item.label)} 
                            className={cn(
                                'cursor-pointer font-semibold p-4 w-full border border-transparent rounded-lg transition-all duration-300',
                                {
                                    'bg-blue-600 text-white shadow-lg': active === item.label,
                                    'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:border-gray-400': active !== item.label,
                                }
                            )}
                        >
                            {item.label}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
