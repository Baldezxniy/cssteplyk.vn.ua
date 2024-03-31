'use client'

import Drawer from "react-modern-drawer";
import Link from "next/link";
import {useState} from "react";
import 'react-modern-drawer/dist/index.css'

export const Menu = () => {


  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <>
      <div className='mobile-nav-btn md:hidden' onClick={toggleDrawer}>
        <div className={"nav-icon"}></div>
      </div>
      <Drawer

        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        lockBackgroundScroll={true}
        // zIndex={1000}
        className='bg-right-menu px-[5%] w-[340px]'
      >
        <div className='h-full py-4 flex flex-col'>
          <div className='flex justify-between py-[15px] leading-[160%] mb-[10px]'>
            <div className='text-[22px] mr-[40px] inline-flex text-white font-bold'>
              <span className="flex-grow max-w-full">Навігація по сайті</span>
            </div>
            <div className='mobile-nav-btn md:hidden relative' onClick={toggleDrawer}>
              <div className={"nav-icon nav-icon--active"}></div>
            </div>

          </div>
          <div className='relative flex-grow w-full mx-0'>
            <ul className='flex flex-col gap-4'>
              <li onClick={toggleDrawer}>
                <Link href="/"
                      className='text-white/90 text-[22px] py-[7px] duration-300 transition-all font-sans ease-in'>
  <span className='flex-grow max-w-full'>
  Головна
  </span>
                </Link>
              </li>
              <li onClick={toggleDrawer}>
                <Link href="/about-us"
                      className='text-white/90 text-[22px] py-[7px] duration-300 transition-all font-sans ease-in'>
  <span className='flex-grow max-w-full'>
    Про нас
  </span>
                </Link>
              </li>
              <li onClick={toggleDrawer}>
                <Link href="/coaches"
                      className='text-white/90 text-[22px] py-[7px] duration-300 transition-all font-sans ease-in'>
  <span className='flex-grow max-w-full'>
  Тренери
  </span>
                </Link>
              </li>
              <li onClick={toggleDrawer}>
                <Link href="/news"
                      className='text-white/90 text-[22px] py-[7px] duration-300 transition-all font-sans ease-in'>
  <span className='flex-grow max-w-full'>
  Новини
  </span>
                </Link>
              </li>
              <li onClick={toggleDrawer}>
                <Link href="/contacts"
                      className='text-white/90 text-[22px] py-[7px] duration-300 transition-all font-sans ease-in'>
  <span className='flex-grow max-w-full'>
    Контакти
    </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex w-full justify-center'>
            <div role='button'
                 className=' flex justify-center cursor-pointer py-[18px] px-[30px] bg-[#E63338] mt-5 rounded-[250px] text-white hover:bg-red-400 duration-300'>
    <span>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      Зв'язатися з нами
  </span>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  )
}