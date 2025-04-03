'use client'
import React, { useEffect, useState } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { FaComputer } from 'react-icons/fa6';
import { useTheme } from 'next-themes';

const ThemeSwitch = () => {

      //for theme mode dark/light
  const [mounted, setMounted] = useState(false)
    const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();
    
    useEffect(() => {
            setMounted(true);//for theme to check if component is mounted so it can reach useTheme

    }, [])
    console.log(systemTheme, resolvedTheme, mounted)

    if (!mounted) {
        return (
                <div className='flex cursor-pointer w-fit items-center'>
                    System <FaComputer />
                </div>
        )
    } 
    if (theme === 'system') {
        if (systemTheme === 'dark') {
            return (
                <div   className='group relative flex items-center cursor-pointer gap-1 z-[10]' onClick={() => setTheme('light')} >
                    System <FaComputer/>
                <div className='hidden xl:group-hover:block absolute bg-gray-600 text-gray-300 py-1 px-4 mt-[0.5rem] top-8 w-max rounded text-sm'>system-theme</div>
                </div>
        )
        }else if (systemTheme === 'light') {
            return (
                <div   className='group relative flex items-center cursor-pointer gap-1 z-[10]' onClick={() => setTheme('light')} >
                    System <FaComputer/>
                <div className='hidden xl:group-hover:flex absolute bg-gray-200  py-1 px-4 mt-[0.5rem] rounded top-8 w-max text-sm'>system-theme</div>
                </div>
        ) 
        }
    } 

    if (resolvedTheme === 'light') {
        return (
                <div onClick={() => setTheme('dark')}  className='group relative flex items-center cursor-pointer gap-1 z-[10]'>
                Dark <IoMoon />
                <div className='invisible opacity-0 xl:group-hover:opacity-100 xl:group-hover:visible  absolute bg-gray-400/30  py-1 px-4 mt-[0.5rem] rounded top-8 w-max text-sm transition-all duration-[200ms]'>dark-theme</div>
                </div>
        )
    }
    if (resolvedTheme === 'dark') {
        return (
                <div onClick={() => setTheme('light')}   className='group relative flex items-center cursor-pointer gap-1 z-[10]'>
                Light <IoSunny />
                <div className='invisible opacity-0 xl:group-hover:opacity-100 xl:group-hover:visible absolute bg-gray-600 text-gray-300 py-1 px-4 mt-[0.5rem] top-8 w-max rounded text-sm transition-all duration-[200ms]'>light-theme</div>

                </div>
        )
    }
}

export default ThemeSwitch