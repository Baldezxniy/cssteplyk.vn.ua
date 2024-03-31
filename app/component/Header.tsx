'use client'
import Link from "next/link";
import {Menu} from "@/app/component/Menu";
import 'react-modern-drawer/dist/index.css'

export const Header = () => {


  return (
    <>
      <div
        className='block w-full relative px-[5%]  text-black cursor-auto font-normal leading-normal not-italic tracking-normal bg-[#2B282F] py-4 text-tra normal-case shadow-none text-left mb-4'>
        <div className='w-full max-w-[1300px] my-0 mx-auto relative flex justify-between items-center flex-row'>
          <div className='relative flex-grow my-auto pr-[25px]'>
            <div className='flex relative justify-start items-center flex-wrap w-auto overflow-[upset]'>
              <Link href="/"
                    className='text-[14px] flex justify-between items-center p-[15px] transition-all duration-300 ease-in text-white uppercase hover:opacity-30'>
                    <span>
                      Головна
                    </span>
              </Link>
            </div>
          </div>
          <div className='relative hidden my-auto md:block'>
            <div className='flex relative justify-start items-center overflow-[upset]'>
              <ul
                className='p-0 m-0 list-none flex justify-start items-start flex-grow flex-shrink h-[46] w-[1%]'>
                <li>
                  <Link href="/about-us"
                        className='text-[14px] flex justify-between items-center p-[15px] transition-all duration-300 ease-in text-white uppercase hover:opacity-30'>
    <span>
      Про нас
  </span>
                  </Link>
                </li>
                <li>
                  <Link href="/coaches"
                        className='text-[14px] flex justify-between items-center p-[15px] transition-all duration-300 ease-in text-white uppercase hover:opacity-30'>
  <span>
    Тренери
  </span>
                  </Link>
                </li>
                <li>
                  <Link href="/news"
                        className='text-[14px] font-normal flex justify-between items-center p-[15px] transition-all duration-300 ease-in text-white uppercase hover:opacity-30'>
  <span>
    Новини
  </span>
                  </Link>
                </li>
                <li>
                  <Link href="/contacts"
                        className='text-[14px] font-normal flex justify-between items-center p-[15px] transition-all duration-300 ease-in text-white uppercase hover:opacity-30'>
    <span>
      Контакти
    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Menu/>
        </div>

      </div>


    </>
  )
}