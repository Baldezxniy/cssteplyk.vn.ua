
import Drawer from 'react-modern-drawer'

import 'react-modern-drawer/dist/index.css'
import React from "react";
import Image from "next/image";

import t3Image from '../../public/t3.jpg'
import Link from "next/link";

import {coachesInPage} from "@/app/utils/coachesEntities";

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
                  Тренери
                </span>
              </div>
              <h1
                className="text-[25px] mb-[10px] sm:text-[30px] md:text-[35px] lg:text-[3vw] leading-[100%] sm:mb-[20px] font-bold font-sans">
                Тренери
              </h1>
              <div className='w-full relative text-black font-sans [#676767]'>
                <div className='pt-[25px] lg:pt-[25px] pb-[50px] lg:pb-[100px] z-10'>
                  <div className='w-auto flex flex-col z-10'>
                    <div
                      className="flex-col lg:flex-row flex justify-around lg:gap-12 mb-[20px] sm:mb-[30px] md:mb-[40px] lg:mb-[60px]">
                      <div className="flex flex-col lg:w-[45%] mb-[30px]">
                        <h2
                          className="font-semibold font-sans  leading-[110%] text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] lg:mb-8">
                          Наша віддана команда тренерів - це ключовий фактор у реалізації спортивних мрій та формування
                          майбутніх чемпіонів.
                        </h2>
                        <div className="text-[18px] leading-[160%] xl:text-xl hidden lg:block">
                          Тренери нашої команди - це віддані фахівці, які не лише володіють глибоким розумінням та
                          досвідом у своїх галузях, але й активно створюють стимулююче середовище для розвитку та
                          досягнень учнів. Вони індивідуально пристосовані до потреб кожного спортсмена, не лише
                          передаючи технічні аспекти гри, але й виховуючи дисципліну та надихаючи на успіх у спортивному
                          шляху.
                        </div>
                      </div>
                      <div className='lg:w-[55%]'>
                        <Image src={t3Image} className='border-2 border-black/20 w-full rounded-[20px] shadow-2xl shadow-slate-200 min-h-full lg:h-[400px] object-cover' alt="Main Image"/>
                        <div className="text-[16px] sm:text-[20px] leading-[130%] lg:hidden mt-[30px]">
                          Тренери нашої команди - це віддані фахівці, які не лише володіють глибоким розумінням та
                          досвідом у своїх галузях, але й активно створюють стимулююче середовище для розвитку та
                          досягнень учнів. Вони індивідуально пристосовані до потреб кожного спортсмена, не лише
                          передаючи технічні аспекти гри, але й виховуючи дисципліну та надихаючи на успіх у спортивному
                          шляху.
                        </div>
                      </div>
                    </div>

                    <div className='-mx-[5px]'>
                      <div className='w-full h-full'>
                        <div className='flex flex-wrap w-full md:gap-0'>
                          {/**/}
                          <CoachesPhotos/>

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

export default Page;


const CoachesPhotos = () => {
  return (
    <>
      {
        coachesInPage.map(coach => (
          <div key={coach.name} className='flex max-w-full w-full md:w-[50%] lg:w-[33%] h-auto'>
            <div
              className='shadow-slate-500 shadow-lg border-2 flex-shrink flex-grow min-w-[auto] max-w-full m-[5px] my-[10px] sm:m-[10px] flex flex-col items-start justify-start rounded-[20px] bg-white p-[20px]'>
              <div
                className='relative overflow-hidden w-full h-[270px] bg-no-repeat bg-auto bg-scroll bg-black/0 rounded-[20px] '>
                <Image src={coach.img} alt={'qrew'} className={'w-full h-full ' + coach.classPhoto}/>
              </div>
              <div className='mt-[15px] w-full flex flex-col mb-[10px]'>
                <div className='text-[20px] md:text-[22px] flex font-bold flex-shrink'>
                  <span className="text-block-wrap-div">{coach.name}</span>
                </div>
              </div>
              <div className='flex flex-col gap-2 text-[15px] text-[#878787] flex-grow'>
                <p className='leading-[110%]'>
                  {coach.firstParagraph}
                </p>
                <p className='leading-[110%]'>
                  {coach.secondParagraph}
                </p>
              </div>
              {/*<div className="flex gap-2 items-center mt-[10px]">*/}
              {/*  <div*/}
              {/*    className='hover:bg-blue-400 shadow-blue-400 shadow-lg hover:text-white duration-300 transition-all relative rounded-[8px]'>*/}
              {/*    <a className="" href="#">*/}
              {/*      <div className='p-3'>*/}
              {/*        <FaFacebookF className='text-[18px]'/>*/}
              {/*      </div>*/}
              {/*    </a>*/}
              {/*  </div>*/}
              {/*  <div*/}
              {/*    className='hover:bg-red-400 shadow-red-400 shadow-lg hover:text-white duration-300 transition-all relative rounded-[8px]'>*/}
              {/*    <a className="" href="#">*/}
              {/*      <div className='p-3'>*/}
              {/*        <FaInstagram className='text-[18px]'/>*/}
              {/*      </div>*/}
              {/*    </a>*/}
              {/*  </div>*/}
              {/*  <div*/}
              {/*    className='hover:bg-sky-400 shadow-sky-400 shadow-lg hover:text-white duration-300 transition-all relative rounded-[8px]'>*/}
              {/*    <a className="" href="#">*/}
              {/*      <div className='p-3'>*/}
              {/*        <FaTelegramPlane className='text-[18px]'/>*/}
              {/*      </div>*/}
              {/*    </a>*/}
              {/*  </div>*/}
              {/*  <div*/}
              {/*    className='hover:bg-indigo-400 shadow-indigo-400 shadow-lg hover:text-white duration-300 transition-all relative rounded-[8px]'>*/}
              {/*    <a className="" href="#">*/}
              {/*      <div className='p-3'>*/}
              {/*        <FaViber className='text-[18px]'/>*/}
              {/*      </div>*/}
              {/*    </a>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        ))
      }
    </>
  )
}