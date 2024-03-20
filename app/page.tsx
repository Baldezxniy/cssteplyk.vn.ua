'use client'

import Image from "next/image";

import ATHLETICS from '../public/55352045_2.jpg'
import WORK from '../public/55315018.jpg'
import t_1Image from '../public/t_1.jpg'
import t_2Image from '../public/t_2.jpg'
import t_3Image from '../public/t_3.jpg'
import t_4Image from '../public/t_4.jpg'
import t_5Image from '../public/t_5.jpg'
import t_6Image from '../public/t-6.jpg'
import t_7Image from '../public/t-7.jpg'
import t_8Image from '../public/t-8.jpg'
import t_9Image from '../public/image_2024-03-18_15-49-06.jpg'

import img1 from '../public/1_2.png'
import img2 from '../public/2.png'

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {useState} from "react";

// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import Link from "next/link";
import {coaches} from "@/app/utils/coachesEntities";


export default function Home() {

  const scrollToHeader = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <main
      className={' relative min-h-screen flex flex-col text-base overflow-x-hidden overflow-y-hidden'}>
      <div
        className='block w-full relative px-[5%] z-10 text-black cursor-auto font-normal leading-normal not-italic tracking-normal bg-[#2B282F] py-4 text-tra normal-case shadow-none text-left mb-4'>
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
          <div className='mobile-nav-btn md:hidden' onClick={toggleDrawer}>
            <div className={"nav-icon"}></div>
          </div>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        lockBackgroundScroll={true}

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
              <li>
                <Link href="/"
                   className='text-white/90 text-[22px] py-[7px] duration-300 transition-all font-sans ease-in'>
                      <span className='flex-grow max-w-full'>
                        Головна
                      </span>
                </Link>
              </li>
              <li>
                <Link href="/about-us"
                   className='text-white/90 text-[22px] py-[7px] duration-300 transition-all font-sans ease-in'>
                      <span className='flex-grow max-w-full'>
                        Про нас
                      </span>
                </Link>
              </li>
              <li>
                <Link href="/coaches"
                   className='text-white/90 text-[22px] py-[7px] duration-300 transition-all font-sans ease-in'>
                      <span className='flex-grow max-w-full'>
                        Тренери
                      </span>
                </Link>
              </li>
              <li>
                <Link href="/news"
                   className='text-white/90 text-[22px] py-[7px] duration-300 transition-all font-sans ease-in'>
                      <span className='flex-grow max-w-full'>
                        Новини
                      </span>
                </Link>
              </li>
              <li>
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
      <div>
        <div className='flex relative bg-image-main bg-no-repeat px-[5%] pb-[25px] lg:pb-[50px]'>
          <div
            className='w-full max-w-[1400px] mx-auto relative flex-col md:flex-row flex  md:items-center flex-wrap min-h-[600px] px-[5%] rounded-[30px] bg-image-main-2'>
            <div
              className='w-full md:w-[60%] relative z-20 flex flex-col items-center sm:items-start mt-auto md:mb-[40px] mb-[20px] bg-color-main-image rounded-[30px] py-[30px] border border-white/40 p-[30px]'>
              <div
                className='relative flex items-center bg-color-main-image pr-5 mb-5 pl-[5px] pb-[5px] pt-[5px] rounded-[250px]'>
                <div className='flex w-[50px] items-center justify-center h-[50px] bg-color-icon rounded-[250px]'>
                  <span className='h-[20px] w-[20px] flex items-center justify-center overflow-hidden'>
                    <CheckSvg/>
                  </span>
                </div>
                <div
                  className='inline-flex relative text-white text-[14px] sm:text-[16px] lg:text-[20px] font-light pl-[20px]'>
                  <span className='flex-grow w-full font-sans'>Вперед до перемог!</span>
                </div>
              </div>
              <div className='inline-flex text-[3vw]'>
                <span
                  className='flex-grow w-full font-light items-center leading-[90%] text-white lg:text-[3vw] text-[24px] sm:text-[26px]'>
                  Спорт - це наша гра,
                </span>
              </div>
              <div
                className='flex font-sans leading-[100%] text-[14px] tracking-[1px] sm:text-[20px] md:text-[25px] mt-[10px] lg:mt-[12px] lg:text-[3.4vw] font-bold uppercase bg-[#E63338] rounded p-2'>
                УСПІХ - НАША МЕТА!
              </div>
              <div role='button'
                   className='hidden lg:flex cursor-pointer py-[20px] px-[35px] bg-[#E63338] mt-5 rounded-[250px] text-white hover:bg-red-400 duration-300'>
                <a href="tel:+380972148030">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Зв'язатися з нами
                </a>
              </div>
            </div>
            <div
              className='w-full md:w-[30%] relative block ml-auto z-20 mb-[20px] md:mb-0 md:mt-auto lg:mt-0 md:py-[30px]'>
              <div className='-ml-[5px] -mr-[5px]'>
                <div className='w-full h-full'>
                  <div className='flex flex-wrap md:flex-col h-auto'>
                    <div className='flex w-full sm:w-[50%] md:w-full max-w-full h-auto'>
                      <div
                        className='flex-grow flex-shrink min-w-[auto] max-w-full m-[5px] p-0 rounded-[30px] flex flex-col elem-main'>
                        <div className='p-5 flex w-full  flex-grow flex-col items-center text-center'>
                          <div className='flex w-auto mb-[10px]'>
                            <div className='w-[65px] h-[65px] overflow-hidden inline-block'>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <Image src={img1}
                                   alt={'qwre'} className='w-full h-full object-contain'/>
                            </div>
                          </div>
                          <div className='flex flex-col items-center'>
                            <div className='lg:text-[24px] text-[16px] leading-[104%] flex font-extrabold font-sans'>
                              <span className='flex-grow max-w-full'>
                                Сучасні
                              </span>
                            </div>
                            <div className='text-[14px] lg:text-[17px] font-sans'>
                              <span className='flex-grow max-w-full text-white/70'>
                                тренувальні майданчики
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex w-full sm:w-[50%] md:w-full max-w-full h-auto'>
                      <div
                        className='flex-grow flex-shrink min-w-[auto] max-w-full m-[5px] p-0 rounded-[30px] flex flex-col elem-main'>
                        <div className='p-5 flex w-full  flex-grow flex-col items-center text-center'>
                          <div className='flex w-auto mb-[10px]'>
                            <div className='w-[65px] h-[65px] overflow-hidden inline-block'>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <Image src={img2}
                                   alt={'qwr'} className='w-full h-full object-contain'/>
                            </div>
                          </div>
                          <div className='flex flex-col items-center'>
                            <div className='lg:text-[24px] text-[16px] leading-[104%] flex font-extrabold font-sans'>
                              <span className='flex-grow max-w-full'>
                                Досвідчені
                              </span>
                            </div>
                            <div className='text-[14px] lg:text-[17px] font-sans'>
                              <span className='flex-grow max-w-full text-white/70'>
                                тренера та викладачі
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='hidden lg:inline-flex w-[200px] h-[200px] absolute ball-image object-contain -right-[135px] top-auto ms-animator-i ms-animator-rollIn'>
            </div>
          </div>
        </div>
      </div>
      <div className='block relative flex-grow w-full'>
        <div className='px-[5%] pt-[25px] lg:pt-[50px] pb-[50px] lg:pb-[100px] z-10 text-services'>
          <div className='w-auto max-w-[1300px] mx-auto flex flex-col z-10'>
            <div className='relative flex flex-col justify-start items-center sm:items-start gap-3'>
              <div
                className='hidden sm:flex text-[16px] text-white mb-[5px] uppercase px-[10px] py-[5px] bg-[#2B282F] rounded-[10px] '>
                  <span className='flex-grow max-w-full'>
                    Напрями нашої спортивної школи
                  </span>
              </div>
              <div className='text-[22px] sm:text-[30px] md:text-[35px] lg:text-[3vw] flex font-bold'>
                  <span className='flex-grow max-w-full'>
                  Наші напрямки
                </span>
              </div>
            </div>
          </div>
          {/**/}
          <div className='w-auto max-w-[1300px] mx-auto flex flex-col z-10'>
            <div className='mt-[30px] -mx-[5px]'>
              <div className='w-full h-full'>
                <div className='flex flex-wrap w-full gap-2 md:gap-0'>
                  {/**/}
                  <div className='flex max-w-full w-full md:w-[50%] h-auto'>
                    <div
                      className='flex-shrink flex-grow min-w-[auto] max-w-full m-[5px] flex flex-col items-start justify-start rounded-[30px] bg-white pb-[30px] px-[30px] pt-[8px]'>
                      <div
                        className='w-[60px] flex h-[60px] bg-white rounded-[250px] justify-center items-center -mb-[30px] z-10 ml-auto mr-[10px]'>
                        <span className='relative flex justify-center items-center h-[40px] w-[40px] bg-white'>
                          <BallSvg/>
                        </span>
                      </div>
                      <div
                        className='overflow-hidden w-full h-[200px] bg-no-repeat bg-auto bg-scroll bg-black/0 rounded-[20px]'>
                        <Image src={ATHLETICS} alt={'lasdf'} className='w-full h-full object-cover'/>
                      </div>
                      <div className='w-full flex flex-col mb-[15px]'>
                        <div
                          className='rounded-[250px] w-[35px] h-[35px] flex  justify-center items-center bg-white -mt-[20px] ml-[15px] mb-[20px]'>
                          <div className='flex'>
                            <span className="flex-grow w-full">01</span>
                          </div>
                        </div>
                        <div className='text-[20px] flex font-bold flex-shrink uppercase'>
                          <span className="flex-grow max-w-full">Волейбол</span>
                        </div>
                      </div>
                      <div className='flex text-[14px] text-[#878787] flex-grow'>
                        <span className='flex-grow w-full'>
                          Волейбол у нашій школі — це захоплюючі тренування та командна гра. Приєднуйтесь до нас для отримання нових навичок та веселих моментів!
                        </span>
                      </div>
                    </div>
                  </div>
                  {/**/}
                  {/**/}
                  <div className='flex max-w-full w-full md:w-[50%] h-auto'>
                    <div
                      className='flex-shrink flex-grow min-w-[auto] max-w-full m-[5px] flex flex-col items-start justify-start rounded-[30px] bg-white pb-[30px] px-[30px] pt-[8px]'>
                      <div
                        className='w-[60px] flex h-[60px] bg-white rounded-[250px] justify-center items-center -mb-[30px] z-10 ml-auto mr-[10px]'>
                        <span className='relative flex justify-center items-center h-[40px] w-[40px] bg-white'>
                          <BallSvg/>
                        </span>
                      </div>
                      <div
                        className='overflow-hidden w-full h-[200px] bg-no-repeat bg-auto bg-scroll bg-black/0 rounded-[20px]'>
                        <Image src={ATHLETICS} alt={'qrwe'} className='w-full h-full object-cover'/>
                      </div>
                      <div className='w-full flex flex-col mb-[15px]'>
                        <div
                          className='rounded-[250px] w-[35px] h-[35px] flex  justify-center items-center bg-white -mt-[20px] ml-[15px] mb-[20px]'>
                          <div className='flex'>
                            <span className="flex-grow w-full">02</span>
                          </div>
                        </div>
                        <div className='text-16px md:text-[20px] flex font-bold flex-shrink uppercase'>
                          <span className="flex-grow max-w-full">греко римська боротьба</span>
                        </div>
                      </div>
                      <div className='flex text-[14px] text-[#878787] flex-grow'>
                        <span className='flex-grow w-full'>
                          Греко-римська боротьба в нашій школі — це майстерні тренування та стратегічна гра. Приєднуйтесь до нас для вивчення навичок і задоволення від цього захоплюючого виду спорту!
                        </span>
                      </div>
                    </div>
                  </div>

                  {/**/}
                  <div className='flex max-w-full w-full md:w-[50%] h-auto'>
                    <div
                      className='flex-shrink flex-grow min-w-[auto] max-w-full m-[5px] flex flex-col items-start justify-start rounded-[30px] bg-white pb-[30px] px-[30px] pt-[8px]'>
                      <div
                        className='w-[60px] flex h-[60px] bg-white rounded-[250px] justify-center items-center -mb-[30px] z-10 ml-auto mr-[10px]'>
                        <span className='relative flex justify-center items-center h-[40px] w-[40px] bg-white'>
                          <BallSvg/>
                        </span>
                      </div>
                      <div
                        className='overflow-hidden w-full h-[200px] bg-no-repeat bg-auto bg-scroll bg-black/0 rounded-[20px]'>
                        <Image src={ATHLETICS} alt={'qrew'} className='w-full h-full object-cover'/>
                      </div>
                      <div className='w-full flex flex-col mb-[15px]'>
                        <div
                          className='rounded-[250px] w-[35px] h-[35px] flex  justify-center items-center bg-white -mt-[20px] ml-[15px] mb-[20px]'>
                          <div className='flex'>
                            <span className="flex-grow w-full">03</span>
                          </div>
                        </div>
                        <div className='text-16px md:text-[20px] flex font-bold flex-shrink uppercase'>
                          <span className="flex-grow max-w-full">ЛЕГКАЯ АТЛЕТИКА</span>
                        </div>
                      </div>
                      <div className='flex text-[14px] text-[#878787] flex-grow'>
                        <span className='flex-grow w-full'>
                          Легка атлетика у нашій школі це - біг, стрибки, та метання. Вчимо фізичному розвитку з досвідченими тренерами. Приєднуйтесь до яскравих спортивних вражень!
                        </span>
                      </div>
                    </div>
                  </div>
                  {/**/}


                  {/**/}
                  <div className='flex max-w-full w-full md:w-[50%] h-auto'>
                    <div
                      className='flex-shrink flex-grow min-w-[auto] max-w-full m-[5px] flex flex-col items-start justify-start rounded-[30px] bg-white pb-[30px] px-[30px] pt-[8px]'>
                      <div
                        className='w-[60px] flex h-[60px] bg-white rounded-[250px] justify-center items-center -mb-[30px] z-10 ml-auto mr-[10px]'>
                        <span className='relative flex justify-center items-center h-[40px] w-[40px] bg-white'>
                          <BallSvg/>
                        </span>
                      </div>
                      <div
                        className='overflow-hidden w-full h-[200px] bg-no-repeat bg-auto bg-scroll bg-black/0 rounded-[20px]'>
                        <Image src={ATHLETICS} alt={'werq'} className='w-full h-full object-cover'/>
                      </div>
                      <div className='w-full flex flex-col mb-[15px]'>
                        <div
                          className='rounded-[250px] w-[35px] h-[35px] flex  justify-center items-center bg-white -mt-[20px] ml-[15px] mb-[20px]'>
                          <div className='flex'>
                            <span className="flex-grow w-full">04</span>
                          </div>
                        </div>
                        <div className='text-16px md:text-[20px] flex font-bold flex-shrink uppercase'>
                          <span className="flex-grow max-w-full">Стрільба кульова</span>
                        </div>
                      </div>
                      <div className='flex text-[14px] text-[#878787] flex-grow'>
                        <span className='flex-grow w-full'>
                          Стрільба кульова в нашій школі — це високотехнічні тренування та вдосконалення навичок. Приєднуйтесь до нас, щоб вивчати техніку та досягати нових висот у цьому захопливому виді спорту!
                        </span>
                      </div>
                    </div>
                  </div>
                  {/**/}
                  <div className='flex md:mx-auto max-w-full w-full md:w-[50%] h-auto'>
                    <div
                      className='flex-shrink flex-grow min-w-[auto] max-w-full m-[5px] flex flex-col items-start justify-start rounded-[30px] bg-white pb-[30px] px-[30px] pt-[8px]'>
                      <div
                        className='w-[60px] flex h-[60px] bg-white rounded-[250px] justify-center items-center -mb-[30px] z-10 ml-auto mr-[10px]'>
                        <span className='relative flex justify-center items-center h-[40px] w-[40px] bg-white'>
                          <BallSvg/>
                        </span>
                      </div>
                      <div
                        className='overflow-hidden w-full h-[200px] bg-no-repeat bg-auto bg-scroll bg-black/0 rounded-[20px]'>
                        <Image src={ATHLETICS} alt={'qwreqwe'} className='w-full h-full object-cover'/>
                      </div>
                      <div className='w-full flex flex-col mb-[15px]'>
                        <div
                          className='rounded-[250px] w-[35px] h-[35px] flex  justify-center items-center bg-white -mt-[20px] ml-[15px] mb-[20px]'>
                          <div className='flex'>
                            <span className="flex-grow w-full">05</span>
                          </div>
                        </div>
                        <div className='text-16px md:text-[20px] flex font-bold flex-shrink uppercase'>
                          <span className="flex-grow max-w-full">Футбол</span>
                        </div>
                      </div>
                      <div className='flex text-[14px] text-[#878787] flex-grow'>
                        <span className='flex-grow w-full'>
                          Футбол у нашій школі — це емоційні тренування та командна гра. На уроках ми вдосконалюємо техніку гри та вчитимося працювати разом в команді. Приєднуйтесь до нас для отримання нових футбольних навичок та веселих моментів на полі!
                        </span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/*/*/}
        <div className='px-[5%] pt-[50px] py-[100px] z-10 mail-images'>
          <div className='w-full max-w-[1300px] mx-auto flex flex-col md:flex-row z-10'>
            <div className='hidden w-[25%] lg:flex pr-[30px] pb-[30px] mail-images-first rounded-[30px] flex-col'>
              <div className='w-full block mail-images-first-first-img-1 rounded-[30px] flex-grow mb-[20px]'>
              </div>
              <div className='flex flex-col items-center mr-auto ml-0 justify-start'>
                <div className=' relative h-[200px] mb-[12px] rounded-[20px] overflow-hidden'>
                  <Image src={WORK} alt={'rqwe'} className='object-fit-cover w-full h-full'/>
                  <div
                    className='flex absolute left-0 right-0 top-0 bottom-0 bg-[#2B282F]/40 flex-col items-center justify-center '>
                    <div className='font-bold inline-flex text-[80px] text-white'>
                      <span className="flex-grow w-full">32</span>
                    </div>
                  </div>
                </div>
                <div
                  className='text-[18px] -mt-[40px] flex text-[#262626] px-[20px] py-[10px] rounded-[20px] bg-white mail-images-first-first-img-2 z-40 justify-center'>
                  <span className="flex-grow w-full">років роботи</span>
                </div>
              </div>
            </div>
            <div className='w-full md:w-[60%] lg:w-[50%] lg:px-[50px] md:pr-[50px]  flex flex-col'>
              <h1
                className=' text-[25px] sm:text-[30px] md:text-[35px] lg:text-[3vw] mb-[20px] font-bold relative text-center md:text-left'>
                Наша мета
              </h1>
              <div className='relative max-w-full text-[16px] text-[#8C8C8C] leading-[22px] mt-[10px]'>
                <div className='flex flex-col flex-grow max-w-full gap-4 '>
                  <p>
                    Ласкаво просимо на веб-сайт Теплицької Спортивної Школи — місця, де збуваються мрії та формується
                    майбутнє чемпіонів!
                  </p>
                  <p>
                    Наша школа — інноваційний центр розвитку фізичних та розумових здібностей молоді.
                    Висококваліфікована команда тренерів та педагогів пропонує унікальні програми з різних видів спорту,
                    адаптовані до індивідуальних потреб кожного учня.
                  </p>
                  <p>
                    Присвячений розвитку та досягненням, наш сайт призначений для відкриття світу спорту та навчання в
                    енергійній та підтримуючій атмосфері нашої спортивної школи. Приєднуйтеся до нашої спільноти, де
                    кожен може стати справжнім чемпіоном!
                  </p>
                </div>
                <div className='mt-[20px]'>
                  <div className='text-[14px]'>
                    <div className='w-full h-full'>
                      <div className='py-[10px]'>
                        <div className='mb-[5px] text-[20px] sm:text-[18px] flex font-semibold text-black'>
                          <span className="flex-grow max-w-full">Індивідуальний Підхід</span>
                        </div>
                        <div className='leading-[22px] text-[16px] text-[#818181]'>
                          <span className="flex-grow max-w-full">У нашій спортивній школі ми віримо в унікальність кожного учня.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className=''>
                  <div className='text-[14px]'>
                    <div className='w-full h-full'>
                      <div className='py-[10px]'>
                        <div className='mb-[5px] text-[20px] sm:text-[18px] flex font-semibold text-black'>
                          <span className="flex-grow max-w-full">Комплексний Розвиток</span>
                        </div>
                        <div className='leading-[22px] text-[16px] text-[#818181]'>
                          <span className="flex-grow max-w-full">Ми прагнемо не лише до високого рівня фізичної підготовки, але й до розумового розвитку.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full md:w-[40%] lg:w-[25%] inline-flex flex-col'>
              <div className='w-full relative mb-5 mail-images-first-first-img-3 h-[55%] rounded-[30px]'>
              </div>
              <div
                className='min-h-[200px] md:min-h-auto w-full relative mail-images-first-first-img-4 flex-shrink h-[45%] rounded-[30px]'>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full relative md:pt-[100px] md:pb-[150px] pb-[100px] pt-[50px] px-[5%] advantage'>
          <div className='max-w-[1300px] w-full m-auto flex flex-col justify-start'>
            <div className='flex flex-col justify-start gap-1'>
              <div
                className='hidden sm:inline-flex justify-start self-start text-[16px] text-white leading-[100%] mb-[5px] px-[10px] py-[5px] bg-[#E63338] rounded-[10px] uppercase'>
                <span className="flex-grow max-w-full">Навчайтеся з нами та розвивайте свої найкращі здібності!</span>
              </div>
              <div className='lg:text-[3vw] leading-[120%] self-center sm:self-start sm:text-[30px] text-[25px] md:leading-[100%] font-bold flex'>
                <span className="flex-grow max-w-full">Що робить нашу школу особливою? </span>
              </div>
            </div>
            <div className='mt-[30px] sm:mt-[50px] flex-shrink w-full mr-auto leading-normal '>
              <div className='-mx-[5px] z-10 w-auto'>
                <div className='w-full h-full will-change-transform'>
                  <div className='flex flex-wrap flex-row h-auto'>

                    <div className='flex flex-shrink-0 max-w-full w-[100%]  md:w-[50%] lg:w-[33.333333333333336%] h-auto'>
                      <div
                        className='flex-shrink flex-grow min-w-[auto] max-w-full m-[5px] p-5 rounded-[30px] flex flex-col sm:flex-row items-center advantage-elem'>
                        <div
                          className='w-[70px] relative flex rounded-[250px] flex-shrink-0 h-[70px] bg-black/[0.02] items-center justify-center mr-[12px]'>
                            <span className='h-10 w-10 inline-flex justify-center items-center  svg_down'>
                              <FirstElem/>
                            </span>
                        </div>
                        <div className='flex w-auto flex-shrink flex-grow-0 flex-col items-start justify-center'>
                          <div className='w-full flex flex-col items-center sm:items-start text-center sm:text-left'>
                            <div className='text-[18px] m-0 font-semibold flex text-[#749BFF]'>
                              <span className="flex-grow max-w-full">Індивідуальний підхід</span>
                            </div>
                          </div>
                          <div className='block text-[15px] leading-[120%] sm:text-left mt-[10px] text-black/[0.64] text-center'>
                            <p className="flex-grow max-w-full">Ми віримо в унікальність кожної особи. Тому розвиваємо
                              тільки кращі навики.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-shrink-0 max-w-full w-[100%]  md:w-[50%] lg:w-[33.333333333333336%] h-auto'>

                      <div
                        className='flex-shrink flex-grow min-w-[auto] max-w-full m-[5px] p-5 rounded-[30px] flex flex-col sm:flex-row items-center advantage-elem'>
                        <div
                          className='w-[70px] relative flex rounded-[250px] flex-shrink-0 h-[70px] bg-black/[0.02] items-center justify-center mr-[12px]'>
                            <span className='h-10 w-10 inline-flex justify-center items-center  svg_down'>
                              <SecondElem/>
                            </span>
                        </div>
                        <div className='flex w-auto flex-shrink flex-grow-0 flex-col items-start justify-start'>
                          <div className='w-full flex flex-col items-center sm:items-start text-center text-left'>
                            <div className='text-[18px] m-0 font-semibold flex text-[#82DC3B]'>
                              <span className="flex-grow max-w-full">Сучасні тренувальні майданчики</span>
                            </div>
                          </div>
                          <div className='block text-[15px] leading-[120%] sm:text-left mt-[10px] text-black/[0.64] text-center'>
                            <p className="flex-grow max-w-full">Сучасне спортивне обладнання для комфортних тренувань та
                              змагань.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-shrink-0 max-w-full w-[100%] md:w-[50%] lg:w-[33.333333333333336%] h-auto'>

                      <div
                        className='flex-shrink flex-grow min-w-[auto] max-w-full m-[5px] p-5 rounded-[30px] flex flex-col sm:flex-row items-center advantage-elem'>
                        <div
                          className='w-[70px] relative flex rounded-[250px] flex-shrink-0 h-[70px] bg-black/[0.02] items-center justify-center mr-[12px]'>
                            <span className='h-10 w-10 inline-flex justify-center items-center svg_down'>
                              <ThirdElem/>
                            </span>
                        </div>
                        <div className='flex w-auto flex-shrink flex-grow-0 flex-col items-start justify-start'>
                          <div className='w-full flex flex-col items-center sm:items-start text-center sm:text-left'>
                            <div className='text-[18px] m-0 font-semibold flex text-[#EE8B53]'>
                              <span className="flex-grow max-w-full">Емоційна підтримка</span>
                            </div>
                          </div>
                          <div className='block text-[15px] leading-[120%] sm:text-left mt-[10px] text-black/[0.64] text-center'>
                            <p className="flex-grow max-w-full">Ми формуємо сильних особистостей через спорт з
                              психологічною підтримкою та командною роботою.</p>
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
        {/**/}
        <div className='flex w-full pb-[50px] px-[5%] bg-[#FCFCFF]'>
          <div
            className='w-full max-w-[1300px] md:-mt-[50px] -mt-[80px] mx-auto inline-block rounded-[30px] bg-[#2B282F] lg:p-[50px] px-[30px] py-[40px] text-white bg-join-us z-10'>
            <div className='w-full flex lg:flex-row-reverse'>
              <div className='w-full lg:w-[60%] flex flex-col lg:py-[40px] flex-shrink lg:pl-[50px] p-0 sm:items-start items-center'>
                <div className='relative flex flex-col sm:items-start items-center'>
                  <div
                    className='hidden sm:flex sm:text-[15px] lg:text-[16px] text-white leading-[100%] mb-[5px] uppercase px-[10px] py-[5px] bg-[#E63338] rounded-[10px]'>
                    <span className="flex-grow max-w-full">Завжди тут</span>
                  </div>
                  <div className='text-[25px] sm:text-[30px] md:text-[30px] lg:text-[3vw] leading-[110%] sm:leading-[100%] font-bold  text-center sm:text-left'>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <span className="flex-grow max-w-full">Зв'яжіться з нами</span>
                  </div>
                </div>
                {/**/}
                <div className='leading-[130%] text-[16px] mt-[10px] flex text-white/60 text-center sm:text-left'>
                  <span className="flex-grow max-w-full">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Якщо у вас є якісь питання, ви можете зв'язатися з нами прямо зараз
                  </span>
                </div>
                <a href="tel:+380972148030"
                  className='flex cursor-pointer py-[20px] px-[35px] bg-[#E63338] md:mt-[30px] mt-[20px] rounded-[250px] text-[16px] text-white transition-all duration-300 hover:bg-red-400 ease-in'>
                  <div className=''>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <span className="flex-grow max-w-full">Зв'язатися з нами</span>
                  </div>
                </a>
              </div>
              <div className='lg:block hidden bg-image-join-us ml-auto rounded-[30px] w-[40%]'>
              </div>
            </div>
          </div>
        </div>
        <div
          className='flex w-full md:py-[50px] pt-0 pb-[50px] px-[5%] bg-[#FCFCFF] bg-couch overflow-hidden flex-col items-center'>
          <div className='w-full max-w-[1300px] block'>
            <div className='flex flex-col sm:items-start w-full'>
              <div
                className='sm:leading-[150%] hidden sm:flex text-white mb-[5px] uppercase text-[16px] px-[10px] py-[5px] bg-[#2B282F] rounded-[10px] sm:mb-[12px]'>
                <span
                  className="flex-grow max-w-full">КРАЩІ ВЧИТЕЛЯ ДЛЯ ВАШОЇ ДИТИНИ: ДОСВІД ТА НАТХНЕННЯ </span>
              </div>
              <div className='text-[22px] sm:text-[30px] md:text-[35px] lg:text-[3vw] flex font-bold text-center'>
                <span className="flex-grow max-w-full">Наші тренера та вчителі</span>
              </div>
            </div>
            <div className='overflow-hidden mt-[30px] md:mt-[50px] -mx-[10px]'>
              <SwiperElement/>
            </div>
          </div>
        </div>
        <div
          className='w-full relative bg-[#2B282F] px-[5%] lg:pb-[70px] pb-[35px]  lg:pt-[100px] pt-[50px] text-[16px] break-words text-white text-left'>
          <div className='w-full max-w-[1300px] flex flex-col lg:flex-row lg:items-start lg:justify-between mx-auto items-center'>
            <div className='w-full lg:w-[33.333%] flex flex-col flex-shrink-0 relative items-center '>
              <div className='w-full flex flex-col lg:items-start items-center'>
                <div className='flex text-[20px] font-bold text-white mb-5'>
                  <span className="flex-grow max-w-full">Контактна інформація</span>
                </div>
                <div className='w-full flex justify-start items-start'>
                  <div
                    className='w-[20px] h-[20px] rounded-[250px] flex items-center justify-center mr-[15px]'>
                    <span className='inline-flex items-center justify-center h-full w-full relative top-1'>
                      <ContactSVG/>
                    </span>
                  </div>
                  <div className='w-full flex flex-col items-start justify-center '>
                    <div className='flex text-[14px] text-white/50 mb-[7px] text-left'>
                      <span className="flex-grow max-w-full">Телефонуйте за номером:</span>
                    </div>
                    <div className='block'>
                      <div className='flex items-center'>
                        <a className="flex-grow max-w-full" href="tel:+380972148030">+380 97 214 80 30</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full flex mt-[20px] justify-start items-start'>
                  <div
                    className='w-[20px] h-[20px] rounded-[250px] flex items-center justify-center mr-[15px]'>
                    <span className='inline-flex items-center justify-center h-full w-full'>
                      <AddressSVG/>
                    </span>
                  </div>
                  <div className='w-full flex flex-col items-start justify-center'>
                    <div className='flex text-[14px] text-white/50 mb-[7px] text-left'>
                      <span className="flex-grow max-w-full">Ми знаходимося за адресою:</span>
                    </div>
                    <div className='block'>
                      <div className='flex items-center'>
                        <span className='flex-grow max-w-full'>Україна, Вінницька область, смт. Теплик, вул. Незалежності 1А</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className='w-full flex mt-[20px] justify-start items-start'>
                  <div
                    className='w-[20px] h-[20px] rounded-[250px] flex items-center justify-center mr-[15px]'>
                    <span className='inline-flex items-center justify-center h-full w-full'>
                      <EmailSVG/>
                    </span>
                  </div>
                  <div className='w-full flex flex-col items-start justify-center'>
                    <div className='flex text-[14px] text-white/50 mb-[7px] text-left'>
                      <span className="flex-grow max-w-full">Електронна пошта:</span>
                    </div>
                    <div className='block'>
                      <div className='flex items-center font-bold text-[#E63338]'>
                        <a className='flex-grow max-w-full' href='mailto:cssteplyk@gmail.com'>cssteplyk@gmail.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='hidden lg:flex w-[33.333%]  flex-col order-10 items-start justify-start relative'>
              <div className='text-[20px] mb-[20px] inline-flex font-bold text-white'>
                <span className="flex-grow max-w-full">Не знайшли відповіді на важливе питання?</span>
              </div>
              <div className='flex text-[14px] text-white/50 mb-[7px] font-sans text-left'>
                <span className="flex-grow max-w-full">Отримайте відповідь на телефон або напишіть нам</span>
              </div>
              <a href="tel:+380972148030"
                className='flex cursor-pointer py-[20px] px-[35px] bg-[#E63338] mt-[40px] rounded-[250px] transition-all duration-300 hover:bg-red-400 ease-in text-white'>
                <div className='font-sans'>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <span className="flex-grow max-w-full">Зв'язатися з нами</span>
                </div>
              </a>
            </div>
            <div className='hidden w-[33.333%] relative lg:flex px-[60px] flex-col'>
              <div className='text-[20px] mb-[15px] inline-flex text-white font-bold'>
                <span className="flex-grow max-w-full">Навігація по сайті</span>
              </div>
              <div className='relative w-full mx-0'>
                <ul className='flex flex-col gap-2.5'>
                  <li>
                    <Link href="/"
                       className='text-white/60 text-[16px] py-[7px] duration-300 transition-all font-sans ease-in hover:text-[#E63338]'>
                      <span className='flex-grow max-w-full'>
                        Головна
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us"
                       className='text-white/60 text-[16px] py-[7px] duration-300 transition-all font-sans ease-in hover:text-[#E63338]'>
                      <span className='flex-grow max-w-full'>
                        Про нас
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/coaches"
                       className='text-white/60 text-[16px] py-[7px] duration-300 transition-all font-sans ease-in hover:text-[#E63338]'>
                      <span className='flex-grow max-w-full'>
                        Тренери
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/news"
                       className='text-white/60 text-[16px] py-[7px] duration-300 transition-all font-sans ease-in hover:text-[#E63338]'>
                      <span className='flex-grow max-w-full'>
                        Новини
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="contacts"
                       className='text-white/60 text-[16px] py-[7px] duration-300 transition-all font-sans ease-in hover:text-[#E63338]'>
                      <span className='flex-grow max-w-full'>
                        Контакти
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button onClick={scrollToHeader}
                  className='md:right-[50px] md:top-[50px] top-[100px] right-[40px] absolute border flex justify-center items-center rounded-full w-[50px] h-[50px] border-white/50 transition-all duration-300 hover:bg-[#EFEFEF]/20 z-20'>
            <span className='flex justify-center  items-center h-[16px] w-[16px]'>
              <TopIcon/>
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}


const CheckSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="230.79" height="177.375" viewBox="0 0 230.79 177.375"
       data-prefix="ix5ytosiy" fill={'white'}>
    <path
      d="M87.13 177.064a4.986 4.986 0 0 1-3.27-1.22l-82.13-71.03a5.004 5.004 0 1 1 6.55-7.568l82.13 71.029a5 5 0 0 1-3.28 8.789zm.31.31a5 5 0 0 1-3.86-8.191L221.93 1.806a5.006 5.006 0 1 1 7.72 6.375L91.3 175.557a4.994 4.994 0 0 1-3.86 1.818z"
      fillRule="evenodd" className="path-i4dozzyj8"></path>
  </svg>
)

const BallSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" data-prefix="iegv806on"
       fill={'red'}>
    <path data-name="1111.svg"
          d="M33.99 17.51a18.309 18.309 0 0 1-.13 2.35 15.269 15.269 0 0 1-4.08 8.28 4.278 4.278 0 0 0-.05-1.44c1.41-1.64 2.24-4.55 2.59-6.43a5.549 5.549 0 0 0 1.66-3.25c.01.16.01.32.01.49zm-4.24-3.33a19.97 19.97 0 0 0 .3-6.09 5.586 5.586 0 0 1 2.08 1.09 15.471 15.471 0 0 1 1.73 5.03q.105.945.12 1.92v.01a5.549 5.549 0 0 1-1.66 3.25 14.89 14.89 0 0 0-2.57-5.21zM24.27 2.86a4.343 4.343 0 0 0-1.07-1.73 15.527 15.527 0 0 1 8.49 7.15 5.586 5.586 0 0 0-2.08-1.09 15.371 15.371 0 0 0-5.34-4.33zm-6.74.72a17.494 17.494 0 0 0-5.3-1.49 6.77 6.77 0 0 1 2.6-1.93 16.14 16.14 0 0 1 2.32-.17 15.62 15.62 0 0 1 5.09.85 4.518 4.518 0 0 1 1.07 1.73 18.493 18.493 0 0 0-5.78 1.01zm-6.18-1.34a18.876 18.876 0 0 0-5.83 3.59 4.284 4.284 0 0 0-1.59.42A15.536 15.536 0 0 1 13.95.31a6.623 6.623 0 0 0-2.6 1.93zm-7.5 9.75A19.138 19.138 0 0 0 .9 16.51a4.381 4.381 0 0 1-.69-1.5A15.274 15.274 0 0 1 3.3 7.08a4.242 4.242 0 0 1 1.59-.42 11.872 11.872 0 0 0-1.04 5.33zM2.12 23.76a3.978 3.978 0 0 0-.03 1.29A15.31 15.31 0 0 1 0 17.3c0-.47.02-.94.06-1.4a4.381 4.381 0 0 0 .69 1.5 14.52 14.52 0 0 0 1.37 6.36zM4.2 12.79c1.76 1.01 4.91 2.37 4.92 2.37-.01-.01 1.05 5 1.82 7.26-.65.78-2.51 2.81-3.57 4.06a13.563 13.563 0 0 1-4.75-2.81 14.342 14.342 0 0 1-1.37-6.36 20.077 20.077 0 0 1 2.95-4.52zm3.24 14.55A12.512 12.512 0 0 0 11 31.67a3.924 3.924 0 0 1-1.89.2 15.551 15.551 0 0 1-6.45-6.05 3.985 3.985 0 0 1 .04-1.29 13.748 13.748 0 0 0 4.74 2.81zm4.4 4.82a20.852 20.852 0 0 0 6.81.83 3.436 3.436 0 0 0 1.75.61 15.564 15.564 0 0 1-10.46-1.24 3.965 3.965 0 0 0 1.9-.2zm11.56-2.93a15.984 15.984 0 0 0 5.57-1.74 3.969 3.969 0 0 1 .06 1.43 15.416 15.416 0 0 1-7.71 4.41 3.351 3.351 0 0 1-1.76-.61 11.193 11.193 0 0 0 3.84-3.49zm5.75-2.62a16.143 16.143 0 0 1-5.56 1.75c-1.34-2.01-2.2-3.39-3.14-4.89.03-.06.16-.27.22-.4 1.3-2.34 2.61-5.52 2.71-6.8a41.7 41.7 0 0 0 5.79-1.3 15.151 15.151 0 0 1 2.58 5.21c-.35 1.87-1.19 4.78-2.6 6.43zM23.87 3.3a15.4 15.4 0 0 1 5.34 4.34 19.942 19.942 0 0 1-.31 6.08 41.7 41.7 0 0 1-5.79 1.3 72.818 72.818 0 0 0-5.6-4.71c.12-2.14.48-4.42.58-5.99a18.429 18.429 0 0 1 5.78-1.02zm-1.36 25.68a11.338 11.338 0 0 1-3.84 3.48 20.211 20.211 0 0 1-6.8-.83A12.527 12.527 0 0 1 8.3 27.3c1.06-1.25 2.92-3.28 3.57-4.06a57.87 57.87 0 0 0 7.51.85c.95 1.5 1.8 2.88 3.13 4.89zM9.59 14.04c-.02-.01-3.16-1.37-4.92-2.37a11.738 11.738 0 0 1 1.04-5.33 18.7 18.7 0 0 1 5.82-3.59 17.42 17.42 0 0 1 5.29 1.49c-.1 1.58-.45 3.85-.58 5.99a63.464 63.464 0 0 0-6.65 3.81zm9.88 8.97a57.681 57.681 0 0 1-7.51-.85c-.77-2.25-1.83-7.27-1.82-7.25a62.59 62.59 0 0 1 6.66-3.81 72.4 72.4 0 0 1 5.6 4.71c-.11 1.35-1.57 4.84-2.93 7.2z"
          fillRule="evenodd" className="path-ifp7ys78s"></path>
  </svg>
)

const FirstElem = () => (
  <svg width="40" height="42" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M25.5556 20.1534C24.7778 20.1534 24.12 19.8791 23.5822 19.3306C23.0444 18.7821 22.7763 18.1119 22.7778 17.3201C22.7778 16.5267 23.0467 15.8558 23.5844 15.3073C24.1222 14.7587 24.7793 14.4852 25.5556 14.4867C26.3333 14.4867 26.9911 14.761 27.5289 15.3095C28.0667 15.8581 28.3348 16.5282 28.3333 17.3201C28.3333 18.1134 28.0644 18.7843 27.5267 19.3329C26.9889 19.8814 26.3319 20.1549 25.5556 20.1534ZM14.4444 20.1534C13.6667 20.1534 13.0089 19.8791 12.4711 19.3306C11.9333 18.7821 11.6652 18.1119 11.6667 17.3201C11.6667 16.5267 11.9356 15.8558 12.4733 15.3073C13.0111 14.7587 13.6681 14.4852 14.4444 14.4867C15.2222 14.4867 15.88 14.761 16.4178 15.3095C16.9556 15.8581 17.2237 16.5282 17.2222 17.3201C17.2222 18.1134 16.9533 18.7843 16.4156 19.3329C15.8778 19.8814 15.2207 20.1549 14.4444 20.1534ZM20 32.0534C17.7778 32.0534 15.7681 31.4301 13.9711 30.1834C12.1741 28.9367 10.8504 27.2934 10 25.2534H30C29.1481 27.2934 27.8244 28.9367 26.0289 30.1834C24.2333 31.4301 22.2237 32.0534 20 32.0534ZM20 41.1201C17.2222 41.1201 14.6207 40.5821 12.1956 39.5062C9.77037 38.4303 7.65926 36.9758 5.86222 35.1429C4.06519 33.3099 2.63926 31.1566 1.58444 28.6829C0.52963 26.2092 0.00148148 23.5549 0 20.7201C0 17.8867 0.528148 15.2332 1.58444 12.7595C2.64074 10.2858 4.06593 8.13251 5.86 6.29953C7.65704 4.46656 9.76815 3.01211 12.1933 1.9362C14.6185 0.860291 17.2207 0.321579 20 0.320068C22.7778 0.320068 25.38 0.85878 27.8067 1.9362C30.2333 3.01362 32.3444 4.46731 34.14 6.29727C35.9356 8.13025 37.3615 10.2836 38.4178 12.7573C39.4741 15.231 40.0015 17.8852 40 20.7201C40 23.5534 39.4726 26.2077 38.4178 28.6829C37.363 31.1581 35.937 33.3114 34.14 35.1429C32.343 36.9743 30.2318 38.4288 27.8067 39.5062C25.3815 40.5836 22.7793 41.1216 20 41.1201ZM20 36.5867C24.2963 36.5867 27.963 35.0378 31 31.9401C34.037 28.8423 35.5556 25.1023 35.5556 20.7201C35.5556 16.3378 34.037 12.5978 31 9.50007C27.963 6.40229 24.2963 4.8534 20 4.8534H19.3333C19.1111 4.8534 18.8889 4.89118 18.6667 4.96673C18.4444 5.1934 18.2963 5.43896 18.2222 5.7034C18.1481 5.96785 18.1111 6.25118 18.1111 6.5534C18.1111 7.34673 18.3793 8.01767 18.9156 8.5662C19.4519 9.11473 20.1096 9.38825 20.8889 9.38673C21.2222 9.38673 21.5281 9.33007 21.8067 9.21673C22.0852 9.1034 22.3719 9.04673 22.6667 9.04673C23.1111 9.04673 23.4815 9.21673 23.7778 9.55673C24.0741 9.89673 24.2222 10.2934 24.2222 10.7467C24.2222 11.6156 23.8237 12.1732 23.0267 12.4195C22.2296 12.6658 21.517 12.7882 20.8889 12.7867C19.2222 12.7867 17.7874 12.1732 16.5844 10.9462C15.3815 9.71918 14.7793 8.25491 14.7778 6.5534V6.2134C14.7778 6.10007 14.7963 5.94896 14.8333 5.76007C11.7593 6.8934 9.25926 8.80118 7.33333 11.4834C5.40741 14.1656 4.44444 17.2445 4.44444 20.7201C4.44444 25.1023 5.96296 28.8423 9 31.9401C12.037 35.0378 15.7037 36.5867 20 36.5867Z"
      fill="#2660F4"/>
  </svg>
)

const SecondElem = () => (
  <svg width="45" height="29" viewBox="0 0 45 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M35.1545 2.81211V25.309C35.1545 26.0548 34.8582 26.7701 34.3309 27.2975C33.8035 27.8249 33.0882 28.1211 32.3424 28.1211H29.5303C28.7845 28.1211 28.0692 27.8249 27.5418 27.2975C27.0144 26.7701 26.7182 26.0548 26.7182 25.309V15.4666H18.2818V25.309C18.2818 26.0548 17.9856 26.7701 17.4582 27.2975C16.9308 27.8249 16.2155 28.1211 15.4697 28.1211H12.6576C11.9118 28.1211 11.1965 27.8249 10.6691 27.2975C10.1418 26.7701 9.84549 26.0548 9.84549 25.309V2.81211C9.84549 2.06629 10.1418 1.35102 10.6691 0.823649C11.1965 0.296275 11.9118 0 12.6576 0H15.4697C16.2155 0 16.9308 0.296275 17.4582 0.823649C17.9856 1.35102 18.2818 2.06629 18.2818 2.81211V12.6545H26.7182V2.81211C26.7182 2.06629 27.0144 1.35102 27.5418 0.823649C28.0692 0.296275 28.7845 0 29.5303 0H32.3424C33.0882 0 33.8035 0.296275 34.3309 0.823649C34.8582 1.35102 35.1545 2.06629 35.1545 2.81211ZM6.33035 4.21817H5.62732C4.8815 4.21817 4.16623 4.51445 3.63885 5.04182C3.11148 5.56919 2.8152 6.28447 2.8152 7.03028V12.6545H1.4566C1.09325 12.6491 0.741348 12.7816 0.471681 13.0252C0.202015 13.2687 0.0345909 13.6054 0.00308936 13.9674C-0.00968101 14.1597 0.0172298 14.3527 0.0821503 14.5341C0.147071 14.7156 0.248614 14.8818 0.380474 15.0224C0.512333 15.163 0.671692 15.275 0.848652 15.3514C1.02561 15.4278 1.21639 15.467 1.40915 15.4666H2.8152V21.0909C2.8152 21.8367 3.11148 22.5519 3.63885 23.0793C4.16623 23.6067 4.8815 23.903 5.62732 23.903H6.33035C6.5168 23.903 6.69562 23.8289 6.82746 23.6971C6.9593 23.5652 7.03337 23.3864 7.03337 23.1999V4.9212C7.03337 4.73474 6.9593 4.55593 6.82746 4.42408C6.69562 4.29224 6.5168 4.21817 6.33035 4.21817ZM44.9969 13.9674C44.9654 13.606 44.7985 13.2699 44.5296 13.0264C44.2607 12.7829 43.9097 12.65 43.5469 12.6545H42.1848V7.03028C42.1848 6.28447 41.8885 5.56919 41.3611 5.04182C40.8338 4.51445 40.1185 4.21817 39.3727 4.21817H38.6697C38.4832 4.21817 38.3044 4.29224 38.1725 4.42408C38.0407 4.55593 37.9666 4.73474 37.9666 4.9212V23.1999C37.9666 23.3864 38.0407 23.5652 38.1725 23.6971C38.3044 23.8289 38.4832 23.903 38.6697 23.903H39.3727C40.1185 23.903 40.8338 23.6067 41.3611 23.0793C41.8885 22.5519 42.1848 21.8367 42.1848 21.0909V15.4666H43.5909C43.7836 15.467 43.9744 15.4278 44.1513 15.3514C44.3283 15.275 44.4877 15.163 44.6195 15.0224C44.7514 14.8818 44.8529 14.7156 44.9178 14.5341C44.9828 14.3527 45.0097 14.1597 44.9969 13.9674Z"
      fill="#5FA628"/>
  </svg>
)

const ThirdElem = () => (
  <svg width="37" height="48" viewBox="0 0 37 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M32.9869 31.746C33.6229 31.1456 34.1294 30.4228 34.4754 29.6216C34.8215 28.8204 35 27.9576 35 27.0856C35 26.2137 34.8215 25.3508 34.4754 24.5496C34.1294 23.7484 33.6229 23.0256 32.9869 22.4252C31.685 21.1968 29.9585 20.5119 28.1636 20.5119C26.3686 20.5119 24.6422 21.1968 23.3402 22.4252L18.5 27.237L13.6598 22.4252C12.3578 21.1968 10.6314 20.5119 8.83643 20.5119C7.0415 20.5119 5.31502 21.1968 4.01311 22.4252C3.3771 23.0256 2.87064 23.7484 2.52456 24.5496C2.17847 25.3508 2 26.2137 2 27.0856C2 27.9576 2.17847 28.8204 2.52456 29.6216C2.87064 30.4228 3.3771 31.1456 4.01311 31.746L18.5 45.7442L32.9869 31.746ZM18.5 15.4597C20.2954 15.4597 22.0173 14.7507 23.2868 13.4886C24.5564 12.2265 25.2696 10.5147 25.2696 8.72987C25.2696 6.945 24.5564 5.23323 23.2868 3.97113C22.0173 2.70904 20.2954 2 18.5 2C16.7046 2 14.9827 2.70904 13.7132 3.97113C12.4436 5.23323 11.7304 6.945 11.7304 8.72987C11.7304 10.5147 12.4436 12.2265 13.7132 13.4886C14.9827 14.7507 16.7046 15.4597 18.5 15.4597Z"
      stroke="#BF5214" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
)

const ContactSVG = () => (
  <svg fill='red' xmlns="http://www.w3.org/2000/svg" width="85" height="100" viewBox="0 0 85 100"
       data-prefix="irz8tht0a">
    <path
      d="M17.355 1.346A11.915 11.915 0 0 1 21.386 0c1.479.146 4.256.147 6.869 4.187a163.478 163.478 0 0 1 10.453 17.942 7.211 7.211 0 0 1-1.045 7.476 18.829 18.829 0 0 1-7.317 4.485 5 5 0 0 0-3.136 4.486 8.557 8.557 0 0 0 1.195 3.14 89.474 89.474 0 0 0 9.109 13.755c2.2 2.823 6 7.876 10.453 11.663a4.2 4.2 0 0 0 6.272-.15c1.85-2.427 4.032-5.62 5.077-6.279 1.178-.66 4.456-2.779 8.063.149 2.935 2.491 7.238 6.107 11.947 10.915 2.051 2.216 5.6 4.675 5.674 9.27-.092 1.3-.257 5.328-3.285 5.383a2.494 2.494 0 0 1-2.389-2.542 20.717 20.717 0 0 1 .746-2.542c-.107-.619-.282-2.461-1.792-3.14a162.437 162.437 0 0 0-12.543-11.961c-1.342-1.141-2.232-2.362-3.435-1.2s-4.622 5.647-4.778 5.831a9.7 9.7 0 0 1-6.72 2.691 9.365 9.365 0 0 1-7.018-3.289A108.089 108.089 0 0 1 30.2 54.126c-2.355-3.408-8.195-11.464-7.915-15.55.146-1.8-.024-5.741 5.526-8.971 3.834-1.648 6.75-3.179 6.57-4.635a16.905 16.905 0 0 0-1.344-2.841s-5.27-9.953-8.661-14.5c-.667-1.082-1.537-3.545-4.33-1.943-.678-1.365-2.691-4.34-2.691-4.34zM13.92 8.522l8.81 14.653s.655 2.122-.9 2.991a2.439 2.439 0 0 1-3.733-.9c-1.419-2.205-6.869-11.214-6.869-11.214s-5.987 7.366-6.272 11.812a36.729 36.729 0 0 0 2.091 8.223 124.8 124.8 0 0 0 6.869 16A109.287 109.287 0 0 0 26.31 68.926a97.392 97.392 0 0 0 14.933 15.251 101.362 101.362 0 0 0 13.738 9.569c1.011.536 2.737 1.935 7.168.6a25.43 25.43 0 0 0 9.109-4.635c-2.277-2.238-9.557-9.27-9.557-9.27a3.016 3.016 0 0 1 .448-3.289 2.457 2.457 0 0 1 3.584 0c1.393 1.4 11.05 10.765 11.05 10.765s2.133 2.136.149 3.887a29.435 29.435 0 0 1-12.095 7.028c-2.659.734-6.01 2.216-11.648 0a124.284 124.284 0 0 1-11.349-7.626c-2.839-2.24-11.5-9.2-17.322-16.447a118.692 118.692 0 0 1-13.589-19.587 104.937 104.937 0 0 1-9.258-21.53c-.874-2.831-1.865-5.62-1.642-9.271.4-1.683.891-4.091 4.031-9.12 1.613-2.37 5.215-7.841 7.616-8.074a2.7 2.7 0 0 1 2.244 1.345zm34.719 33.044a3.664 3.664 0 1 1-3.659 3.663 3.661 3.661 0 0 1 3.659-3.663zm10.3-7.775a3.664 3.664 0 1 1-3.658 3.663 3.661 3.661 0 0 1 3.661-3.663zm10-7.476a3.664 3.664 0 1 1-3.658 3.663 3.661 3.661 0 0 1 3.666-3.663zM79.1 18.69a3.663 3.663 0 1 1-3.658 3.663A3.661 3.661 0 0 1 79.1 18.69z"
      fill-rule="evenodd" className="path-impq7fu2w"></path>
  </svg>
)

const EmailSVG = () => (
  <svg fill='red' xmlns="http://www.w3.org/2000/svg" width="90" height="100" viewBox="0 0 90 100"
       data-prefix="isr6gsst9">
    <path
      d="M45 5.244a7.656 7.656 0 0 0-6.09 3.046c-2.689 2.728-5.813 6.3-6.936 6.428a6.5 6.5 0 0 1-1.015 0 2.73 2.73 0 0 1-2.03-2.706c.135-.88.246-1.053 2.03-2.876s5.921-5.922 5.921-5.922S39.223.221 45.338 0c1.14.024 5.709.517 8.628 3.722 3.234 3.24 14.041 14.211 14.041 14.211h1.523a7.616 7.616 0 0 1 7.613 6.936c-.006 1.961 0 2.369 0 2.369l9.3 9.474A12.407 12.407 0 0 1 90 45.17c-.043 5.439 0 42.126 0 42.126s.079 11.919-12.857 12.688c-10.1.034-64.455 0-64.455 0S.688 100.019 0 87.465C.084 79.116 0 45 0 45s.288-5.941 4.568-9.3c3.648-3.749 8.29-8.458 8.29-8.458v-2.2s.187-6.3 7.444-7.105c6.731-.037 40.263 0 40.263 0v-.339L49.738 6.94A6.848 6.848 0 0 0 45 5.244zm39.925 82.221s-.3 6.839-7.275 7.275c-5.985.025-65.3 0-65.3 0s-6.452-.077-7.274-7.275c.04-5.473 0-41.618 0-41.618s.106-3.51.677-3.214c1.1.993 23.853 24.023 23.853 24.023L12.011 84.589s-1.527 2.123.169 3.553a2.923 2.923 0 0 0 3.891-.17c1.5-1.564 23.177-23.515 23.177-23.515A7.425 7.425 0 0 1 45 61.581c1.363-.04 3.766.251 6.259 3.214 2.823 2.758 23.854 24.023 23.854 24.023a2.67 2.67 0 0 0 3.552-.338c.469-.926 1.155-2.123-.338-3.722s-17.763-18.1-17.763-18.1l23.684-24.023a6.769 6.769 0 0 1 .677 3.383c-.046 2.172 0 41.447 0 41.447zm-31.3-27.745a13 13 0 0 0-8.459-3.384 12.714 12.714 0 0 0-7.782 2.707c-2.493 2.439-4.06 4.06-4.06 4.06L8.966 38.4l3.891-3.891v3.215a2.507 2.507 0 0 0 2.538 2.537 2.545 2.545 0 0 0 2.537-2.707c.032-2.26 0-11.842 0-11.842a2.632 2.632 0 0 1 2.538-2.538h49.06a2.719 2.719 0 0 1 2.538 2.876c-.007 2.943 0 11.674 0 11.674a2.468 2.468 0 0 0 2.537 2.537 2.571 2.571 0 0 0 2.538-2.707c-.014-1.921 0-2.876 0-2.876l4.06 3.892L56.842 63.1zM28.759 31.129H61.41a2.649 2.649 0 0 1 2.2 2.537 2.6 2.6 0 0 1-2.707 2.707c-2.308-.007-31.8 0-31.8 0s-2.687-.173-2.707-2.537a2.589 2.589 0 0 1 2.363-2.707zm0 12.688H61.41a2.651 2.651 0 0 1 2.2 2.538 2.6 2.6 0 0 1-2.707 2.707c-2.308-.008-31.8 0-31.8 0s-2.687-.173-2.707-2.538a2.589 2.589 0 0 1 2.363-2.707z"
      fill-rule="evenodd" className="path-ikdtxza7w"></path>
  </svg>
)

const AddressSVG = () => (
  <svg fill='red' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"
       data-prefix="iz6xoj2qm">
    <path
      d="M81.6 17.956h5.786s11.892.622 12.61 13.8c.016 6.166 0 54.152 0 54.152s.3 13.4-13.946 14.094c-11.891-.052-73.138 0-73.138 0s-12.318-.8-12.907-13.8c.029-7.678 0-55.19 0-55.19s.373-11.573 12.758-13.056c5.54.044 5.489 0 5.489 0a2.558 2.558 0 0 1 2.374 2.671 2.681 2.681 0 0 1-2.522 2.522h-4.9s-7.672.546-8.011 8.605c-.008 7.935 0 18.842 0 18.842h22.7s2.457.043 2.523 3.264c-.018 3.3 0 15.429 0 15.429s5.434.68 7.121 7.122c4.161.008 31.154 0 31.154 0V53.118a2.538 2.538 0 0 1 2.819-2.522c2.889-.044 23.291 0 23.291 0V31.16s-.476-7.283-8.011-8.011c-4.524.055-4.895 0-4.895 0s-2.166.212-2.671-2.671c.111-1.15 1.176-2.604 2.376-2.522zM50.594.005a21.312 21.312 0 0 1 16.17 8.011 20.918 20.918 0 0 1 4.9 12.314c.006 2.525 0 2.671 0 2.671A26.727 26.727 0 0 1 68.4 33.683c-2.446 5.286-14.687 31.155-14.687 31.155A4.2 4.2 0 0 1 50 66.915c-.605.1-2.91-.094-4.3-3.115-1.318-2.911-15.874-33.826-15.874-33.826a23.367 23.367 0 0 1-1.483-7.715c.007-1.677 0-2.077 0-2.077s.263-8.943 7.417-14.836A22.016 22.016 0 0 1 50.589.005zm35.753 94.8c-3.767-.016-12.462 0-12.462 0v-13.35H94.8V86.8a8.792 8.792 0 0 1-8.458 8.007zM73.88 55.788H94.8v20.474H73.88V55.788zM30.413 86.054s.185-2.044-2.374-2.522c-.992.014-1.039 0-1.039 0a4.856 4.856 0 0 1-3.857-4.748 4.745 4.745 0 0 1 4.747-4.747 4.7 4.7 0 0 1 4.748 4.154c-.014 1.054 0 1.038 0 1.038s.208 2.93 4.6 2.226c3.714.034 31.451 0 31.451 0v13.352H30.413v-8.753zm33.824-55.635c-1.9 3.881-14.093 29.969-14.093 29.969H50l-15.28-32.2a16.113 16.113 0 0 1-1.187-5.786c.033-1.35 0-1.929 0-1.929A16.647 16.647 0 0 1 50.144 5.2s8.752.182 13.055 6.825a15.331 15.331 0 0 1 3.264 8.9c.006 1.907 0 1.928 0 1.928a19.041 19.041 0 0 1-2.226 7.566zm-45.99 45.843c-3.005-.023-13.055 0-13.055 0V55.788H25.22v13.353s-5.556 1.601-6.973 7.121zm0 5.193a10.345 10.345 0 0 0 6.973 6.973v6.379H13.055a8.835 8.835 0 0 1-7.863-8.16c-.038-2.669 0-5.192 0-5.192h13.055zM50 12.467s7.4.053 8.308 7.566v1.484s-.668 1.951-2.225 1.929a1.216 1.216 0 0 1-.594 0 2.557 2.557 0 0 1-2.373-2.374 1.67 1.67 0 0 0 0-.594A3.219 3.219 0 0 0 50 17.66a3.461 3.461 0 0 0-3.264 3.115 3.072 3.072 0 0 0 2.968 3.264c.9-.012.89 0 .89 0s2.065.541 2.077 2.225a8.78 8.78 0 0 1 0 .891s-.5 2.119-2.374 2.077a12.173 12.173 0 0 1-1.484 0s-6.513-.615-7.121-7.418c-.037-1.474 0-1.929 0-1.929s.46-6.647 8.308-7.418z"
      fill-rule="evenodd" className="path-iufv1225j"></path>
  </svg>
)

const TopIcon = () => (
  <svg fill='white' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 46.999 29.969"
       data-prefix="ih7qzmjv5">
    <path d="M41.176 29.977L23.5 11.903 5.824 29.977.001 24.024l23.5-24.027 23.5 24.027z" fill-rule="evenodd"
          className="path-ibmfwgtyz"></path>
  </svg>
)


const SwiperElement = () => {
  return <Swiper className=''
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
}