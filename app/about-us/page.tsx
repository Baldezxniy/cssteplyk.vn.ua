import React from 'react'
import Link from "next/link";

import 'react-modern-drawer/dist/index.css'
import Image from "next/image";
import mainImg from "@/public/img/about-us/main.jpg";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Про нас - Теплицька спортивна школа',
  description: 'Дізнайтеся більше про Теплицьку спортивну школу в місті Теплику. Ми пропонуємо різноманітні спортивні програми та можливості для розвитку молоді в різних спортивних напрямках.',
  keywords: [
    'школа теплик інфо',
    'спортшкола теплик інфо',
    'теплик школа про нас',
    'теплик тренування ми',
    'про нас тепликцька школа',
    'теплик стадіон інфомація',
    'теплик спорт інфомація',
    'інфомація школа теплик',
    'інфомація спорт теплик',
    'інфомація теплик змаганя',
    'контакти спорт теплик',
    'контакти теплик школа',
    'борьба теплик'// Добавляем ключевую фразу для лучшего определения сайта по запросу "спорт школа Теплик".
  ],
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
                  Про нас
                </span>
              </div>
              <h1
                className="text-[25px] mb-[10px] sm:text-[30px] md:text-[35px] lg:text-[3vw] leading-[100%] sm:mb-[20px] font-bold font-sans">
                Про нас
              </h1>
              {/**/}
              <div className='w-full relative text-black font-sans [#676767]'>
                <div className='pt-[25px]  z-10'>
                  <div className='w-auto flex flex-col z-10'>
                    {/*  */}
                    <div
                      className="flex-col lg:flex-row flex lg:gap-12 mb-[20px] sm:mb-[30px] md:mb-[40px] lg:mb-[60px]">
                      <div className="flex flex-col lg:w-[45%] mb-[30px]">
                        <h2
                          className="font-semibold font-sans  leading-[110%] text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] lg:mb-8">
                          Наша спортивна школа – це місце, де здійснюються мрії та формується нове покоління чемпіонів.
                        </h2>
                        <div className="text-[18px] leading-[160%] xl:text-xl hidden lg:block">
                          <span className='font-medium'>Наша спортивна школа </span> - це місце, де викладачі не лише
                          мають глибоке розуміння та досвід у своїх галузях, але й активно створюють стимулююче
                          середовище для розвитку та досягнень учнів. Вони індивідуально пристосовані до потреб кожного
                          учня, не лише передаючи технічні аспекти навчання, але й виховуючи дисципліну та надихаючи на
                          успіх у спортивному шляху.
                        </div>
                      </div>
                      <div className='lg:w-[55%]'>
                        <Image src={mainImg}
                               className='border-2 border-black/20 w-full rounded-[20px] shadow-2xl shadow-slate-200 min-h-full lg:h-[400px] object-cover'
                               alt="Головна"/>
                        <div className="text-[16px] sm:text-[20px] leading-[130%] lg:hidden mt-[30px]">
                          Тренери нашої команди - це віддані фахівці, які не лише володіють глибоким розумінням та
                          досвідом у своїх галузях, але й активно створюють стимулююче середовище для розвитку та
                          досягнень учнів. Вони індивідуально пристосовані до потреб кожного спортсмена, не лише
                          передаючи технічні аспекти гри, але й виховуючи дисципліну та надихаючи на успіх у спортивному
                          шляху.
                        </div>
                      </div>
                    </div>
                    {/*  */}

                  </div>
                </div>
              </div>
              <div className='w-full relative text-black font-sans [#676767]'>
                <div className='pt-[25px] lg:pt-[25px] pb-[50px] lg:pb-[100px] z-10'>
                  <div className='w-auto flex flex-wrap z-10'>
                    <div
                      className="flex  flex-shrink-0 max-w-full w-[100%]  md:w-[50%] lg:w-[33.333333333333336%] h-auto">
                      <div
                        className="border-2 flex-shrink flex-grow min-w-[auto] max-w-full m-[5px] p-5 rounded-[10px] flex flex-col sm:flex-row items-start advantage-elem">
                        <div className="flex w-auto flex-shrink flex-grow-0 flex-col items-start justify-center">
                          <div
                            className="w-full flex flex-col justify-start items-center text-center sm:text-left">
                            <div className="text-[18px] m-0 font-semibold flex text-[#749BFF]"><span
                              className="flex-grow max-w-full">34 роки роботи</span></div>
                          </div>
                          <div
                            className="block text-[15px] font-sans font-semibold  leading-[120%] sm:text-left mt-[10px] text-black/[0.64] text-center">
                            <p className="flex-grow max-w-full text-center">
                              Вже 34 роки ми працюємо над розвитком та формуванням спортивних навичок у молодого
                              покоління.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='flex flex-shrink-0 max-w-full w-[100%]  md:w-[50%] lg:w-[33.333333333333336%] h-auto'>
                      <div
                        className="justify-start border-2 flex-shrink flex-grow min-w-[auto] max-w-full m-[5px] p-5 rounded-[10px] flex flex-col sm:flex-row items-start advantage-elem">
                        <div className='flex w-auto flex-shrink flex-grow-0 flex-col items-start justify-start'>
                          <div className='w-full flex flex-col items-center text-left'>
                            <div className='text-[18px] m-0 font-semibold flex text-[#82DC3B]'>
                              <span className="flex-grow max-w-full">297+ учнів</span>
                            </div>
                          </div>
                          <div
                            className='block font-sans font-semibold text-[15px] leading-[120%] sm:text-left mt-[10px] text-black/[0.64] text-center'>
                            <p className="flex-grow max-w-full text-center">
                              У нас навчається – 297 учнів, які з ентузіазмом розвивають свої
                              спортивні таланти під пильним керівництвом наших тренерів.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='flex flex-shrink-0 max-w-full w-[100%]  md:w-[50%] lg:w-[33.333333333333336%] h-auto'>
                      <div
                        className="justify-start border-2 flex-shrink flex-grow min-w-[auto] max-w-full m-[5px] p-5 rounded-[10px] flex flex-col sm:flex-row items-start advantage-elem">
                        <div className='flex w-auto flex-shrink flex-grow-0 flex-col items-start justify-start'>
                          <div className='w-full flex flex-col items-center text-left'>
                            <div className='text-[18px] m-0 font-semibold flex text-[#EE8B53]'>
                              <span className="flex-grow max-w-full">5 видів спорту</span>
                            </div>
                          </div>
                          <div
                            className='block font-sans font-semibold text-[15px] leading-[120%] sm:text-left mt-[10px] text-black/[0.64] text-center'>
                            <p className="flex-grow max-w-full text-center">
                              {/* eslint-disable-next-line react/no-unescaped-entities */}
                              В нашій спортивній школі є п'ять різновидів спорту, де наші молоді спортсмени
                              з інтересом розвивають свої здібності під керівництвом відмінних тренерів.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='flex flex-shrink-0 max-w-full w-[100%]  md:w-[50%] lg:w-[33.333333333333336%] h-auto'>
                      <div
                        className="justify-start border-2 flex-shrink flex-grow min-w-[auto] max-w-full m-[5px] p-5 rounded-[10px] flex flex-col sm:flex-row items-start advantage-elem">
                        <div className='flex w-auto flex-shrink flex-grow-0 flex-col items-start justify-start'>
                          <div className='w-full flex flex-col items-center text-left'>
                            <div className='text-[18px] m-0 font-semibold flex text-[#749BFF]'>
                              <span className="flex-grow max-w-full">Наш коллектив</span>
                            </div>
                          </div>
                          <div
                            className='block font-sans font-semibold text-[15px] leading-[120%] sm:text-left mt-[10px] text-black/[0.64] text-center'>
                            <p className="flex-grow max-w-full text-center">
                              {/* eslint-disable-next-line react/no-unescaped-entities */}
                              У нашому колективі спортивної школи об'єднані 15 спеціалістів своєї справи, які допомагають
                              створювати атмосферу підтримки та дружби.


                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='flex flex-shrink-0 max-w-full w-[100%] md:w-[50%] lg:w-[33.333333333333336%] h-auto'>

                      <div
                        className="border-2 flex-shrink flex-grow min-w-[auto] max-w-full
                        m-[5px] p-5 rounded-[10px] flex flex-col sm:flex-row items-tart advantage-elem">
                        <div className='flex w-full h-full flex-shrink flex-grow-0 flex-col items-start justify-start'>
                          <div className='w-full flex flex-col items-center text-center sm:text-left'>
                            <div className='text-[18px] m-0 font-semibold flex text-[#82DC3B]'>
                              <span className="flex-grow max-w-full">Статут КЗ Теплицька ДЮСШ</span>
                            </div>
                          </div>
                          <div
                            className='flex flex-col flex-grow items-center justify-center h-full w-full font-sans font-semibold  text-[15px] leading-[120%] sm:text-left mt-[10px] text-black/[0.64] text-center'>
                            <a target='_blank' href="/img/about-us/statut.pdf"
                               className='flex cursor-pointer py-[12px] px-[80px] bg-[#82DC3B]/80 rounded-xl transition-all duration-300 hover:bg-green-300 ease-in text-white'>
                              <div className='font-sans'>
                                <span className="flex-grow max-w-full">Дивитись</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div
                      className='flex flex-shrink-0 max-w-full w-[100%] md:w-[50%] lg:w-[33.333333333333336%] h-auto'>
                      <div
                        className="border-2 flex-shrink flex-grow min-w-[auto] max-w-full
                        m-[5px] p-5 rounded-[10px] flex flex-col sm:flex-row items-tart advantage-elem">
                        <div className='flex w-full h-full flex-shrink flex-grow-0 flex-col items-start justify-start'>
                          <div className='w-full flex flex-col items-center text-center sm:text-left'>
                            <div className='text-[18px] m-0 font-semibold flex text-[#EE8B53]'>
                              <span className="flex-grow max-w-full">Положення</span>
                            </div>
                          </div>
                          <div
                            className='flex flex-col flex-grow items-center justify-center h-full w-full font-sans font-semibold  text-[15px] leading-[120%] sm:text-left mt-[10px] text-black/[0.64] text-center'>
                            <a target='_blank' href="/img/about-us/regulations.pdf"
                               className='flex cursor-pointer py-[12px] px-[80px] bg-[#EE8B53] rounded-xl transition-all duration-300 hover:bg-red-300 ease-in text-white'>
                              <div className='font-sans'>
                                <span className="flex-grow max-w-full">Дивитись</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className='flex flex-shrink-0 max-w-full w-[100%] md:w-[50%] lg:w-[33.333333333333336%] h-auto'>
                      <div
                        className="border-2 flex-shrink flex-grow min-w-[auto] max-w-full
                        m-[5px] p-5 rounded-[10px] flex flex-col sm:flex-row items-tart advantage-elem">
                        <div className='flex w-full h-full flex-shrink flex-grow-0 flex-col items-start justify-start'>
                          <div className='w-full flex flex-col items-center text-center sm:text-left'>
                            <div className='text-[18px] m-0 font-semibold flex text-[#749BFF]'>
                              <span className="flex-grow max-w-full">Наказ</span>
                            </div>
                          </div>
                          <div
                            className='flex flex-col flex-grow items-center justify-center h-full w-full font-sans font-semibold  text-[15px] leading-[120%] sm:text-left mt-[10px] text-black/[0.64] text-center'>
                            <a target='_blank' href="/img/about-us/order.pdf"
                               className='flex cursor-pointer py-[12px] px-[80px] bg-[#749BFF] rounded-xl 400 [#E63338] transition-all duration-300 hover:bg-blue-300 ease-in text-white'>
                              <div className='font-sans'>
                                <span className="flex-grow max-w-full">Дивитись</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className='flex flex-shrink-0 max-w-full w-[100%] md:w-[50%] lg:w-[33.333333333333336%] h-auto'>
                      <div
                        className="border-2 flex-shrink flex-grow min-w-[auto] max-w-full
                        m-[5px] p-5 rounded-[10px] flex flex-col sm:flex-row items-tart advantage-elem">
                        <div className='flex w-full h-full flex-shrink flex-grow-0 flex-col items-start justify-start'>
                          <div className='w-full flex flex-col items-center text-center sm:text-left'>
                            <div className='text-[18px] m-0 font-semibold flex text-[#82DC3B]'>
                              <span className="flex-grow max-w-full">Розклад Тренувань</span>
                            </div>
                          </div>
                          <div
                            className='flex flex-col flex-grow items-center justify-center h-full w-full font-sans font-semibold  text-[15px] leading-[120%] sm:text-left mt-[10px] text-black/[0.64] text-center'>
                            <a target='_blank' href="/img/about-us/schedule.pdf"
                               className='flex cursor-pointer py-[12px] px-[80px] bg-[#82DC3B]/80 rounded-xl transition-all duration-300 hover:bg-green-300 ease-in text-white'>
                              <div className='font-sans'>
                                <span className="flex-grow max-w-full">Дивитись</span>
                              </div>
                            </a>
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
