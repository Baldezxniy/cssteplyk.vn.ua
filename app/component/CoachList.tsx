'use client'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {coaches} from "@/app/utils/coachesEntities";
import Image from "next/image";

const CoachList = () => {
  return (
    <Swiper className=''
            autoplay={{
              waitForTransition: true,
              delay: 1000
            }}

            loop={true}
            slidesPerView={2}
            freeMode={true}
            breakpoints={{
              310: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1240: {
                slidesPerView: 2,
              },
              1650: {
                slidesPerView: 2,
              }
            }}
    >
      {
        coaches.map(el => (
          <SwiperSlide key={el.name}
                       className=' swiper-slide flex-grow flex flex-shrink-0 max-w-full w-full [50%] h-auto'>
            <div
              className='flex-shrink relative flex-grow min-w-[auto] max-w-full m-[10px] rounded-[30px] overflow-hidden'>
              <div className='rounded-[30px] overflow-hidden relative w-full'>
                <div className='block w-full h-[350px] rounded-[30px] transition-all duration-300 ease-in'>
                  <Image src={el.img} alt={"Фото " + el.name} className={'w-full h-full ' + el.classPhoto}/>
                </div>
              </div>
              <div className='absolute w-full bottom-0 p-[35px] top-auto bg-t-img'>
                <div className='text-[24px] leading-normal flex text-white font-sans font-bold'>
                  <span className="flex-grow max-w-full">{el.name}</span>
                </div>
                <div className='flex relative font-medium text-white/70 font-sans mt-[5px] leading-[100%]'>
                  <span className="flex-grow max-w-full">{el.description}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}
export default CoachList
