import React from 'react'

import 'react-modern-drawer/dist/index.css'

import Link from "next/link";
import {Map} from "@/app/component/Map";
import {Metadata} from "next";
export const metadata: Metadata = {
  title: '...',
  description: '...',
}

const Page = () => {

  return (
    <main
      className={' relative min-h-screen flex flex-col text-base overflow-x-hidden overflow-y-hidden'}>
      <div className='w-full block flex-grow flex-shrink-0'>
        <div className='w-full px-[5%] py-[30px] sm:py-[70px]'>
          <div className='max-w-[1300px] mx-auto flex flex-row'>
            <div className='w-full relative'>
              <div className='block text-[14px] text-[#5B5B5B] mb-[10px] '>
                <Link href="/" className='inline-block py-[2px] px-[3px] text-[#E63338] underline'>
                  <span className="flex-grow  max-w-full inline">Головна</span>
                </Link>
                <span className='inline-block py-[2px] px-[3px] text-[#5B5B5B]'>
                  /
                </span>
                <span className='inline-block py-[2px] px-[3px] text-[#5B5B5B]'>
                  Контакти
                </span>
              </div>
              <h1
                className="text-[25px] mb-[10px] sm:text-[30px] md:text-[35px] lg:text-[3vw] leading-[100%] sm:mb-[20px] font-bold font-sans">
                Контакти
              </h1>
              <div className='w-full text-[#676767]'>
                <div className='py-[40px]'>
                  <div className='text-left relative'>
                    <div className='sm:-mx-[16px] flex-col-reverse flex sm:flex-row-reverse'>
                      <div className='min-h-[240px] sm:w-[60%] flex flex-grow'>
                        <Map/>
                      </div>
                      <div className='sm:w-[40%] sm:mx-[16px]  sm:h-auto '>
                        <div className='block '>
                          <div className='mb-[32px] flex items-start flex-col'>
                            <div
                              className='font-bold font-sans text-[16px] leading-[1.2] text-left mb-1'>Безкоштовно
                              по Україні
                            </div>
                            <div className='font-bold font-sans text-[16px] leading-[1.2] text-left'>

                              <a className="flex-grow max-w-full" href="tel:+380972148030">+380 97 214 80 30</a>
                            </div>
                          </div>
                          <div className='mb-[32px] flex items-start flex-col'>
                            <div
                              className='font-bold font-sans text-[16px] leading-[1.2] text-left mb-1'>Режим роботи:
                            </div>
                            <div className=' font-medium font-sans text-[16px] leading-[1.2] text-left'>
                              З 8:00 до 18:00 пн-пт
                            </div>
                          </div>
                          <div className='mb-[32px] flex items-start flex-col'>
                            <div
                              className='font-bold font-sans text-[16px] leading-[1.2] text-left mb-1'>Адреса:
                            </div>
                            <div className='font-sans text-[16px] leading-[1.2] text-left'>
                              <span
                                className='flex-grow max-w-full'>Україна, Вінницька область, смт. Теплик, вул. Незалежності 1А</span>
                            </div>
                          </div>
                          <div className='mb-[32px] flex items-start flex-col'>
                            <div
                              className='font-bold font-sans text-[16px] leading-[1.2] text-left mb-1'>Для листів:
                            </div>
                            <div className='text-blue-500 font-sans text-[16px] leading-[1.2] text-left'>
                              <a className='flex-grow max-w-full'
                                 href='mailto:cssteplyk@gmail.com'>cssteplyk@gmail.com</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Page
