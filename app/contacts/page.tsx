'use client'
import React, {ReactElement, useEffect, useRef, useState} from 'react'

import Drawer from 'react-modern-drawer'

import 'react-modern-drawer/dist/index.css'

// AIzaSyD5hwYSz363sVVRNjrDW1clhseIMzKPDIc
import {Status, Wrapper} from "@googlemaps/react-wrapper";
import LatLng = google.maps.LatLng;

const Page = () => {

  const scrollToHeader = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }


  const center = {lat: 48.672712, lng: 29.74321};
  const zoom = 18;

  return (
    <main
      className={' relative min-h-screen flex flex-col text-base overflow-x-hidden overflow-y-hidden'}>
      <div
        className='block w-full relative px-[5%] z-10 text-black cursor-auto font-normal leading-normal not-italic tracking-normal bg-[#2B282F] py-4 text-tra normal-case shadow-none text-left mb-4'>
        <div className='w-full max-w-[1300px] my-0 mx-auto relative flex justify-between items-center flex-row'>
          <div className='relative flex-grow my-auto pr-[25px]'>
            <div className='flex relative justify-start items-center flex-wrap w-auto overflow-[upset]'>
              <a href=""
                 className='text-[14px] flex justify-between items-center p-[15px] transition-all duration-300 ease-in text-white uppercase hover:opacity-30'>
                  <span>
                        Головна
                  </span>
              </a>
            </div>
          </div>
          <div className='relative hidden my-auto md:block'>
            <div className='flex relative justify-start items-center overflow-[upset]'>
              <ul
                className='p-0 m-0 list-none flex justify-start items-start flex-grow flex-shrink h-[46] w-[1%]'>
                <li>
                  <a href=""
                     className='text-[14px] flex justify-between items-center p-[15px] transition-all duration-300 ease-in text-white uppercase hover:opacity-30'>
                      <span>
                        Про нас
                    </span>
                  </a>
                </li>
                <li>
                  <a href=""
                     className='text-[14px] flex justify-between items-center p-[15px] transition-all duration-300 ease-in text-white uppercase hover:opacity-30'>
                      <span>
                        Тренери
                    </span>
                  </a>
                </li>
                <li>
                  <a href=""
                     className='text-[14px] font-normal flex justify-between items-center p-[15px] transition-all duration-300 ease-in text-white uppercase hover:opacity-30'>
                      <span>
                        Новини
                      </span>
                  </a>
                </li>
                <li>
                  <a href=""
                     className='text-[14px] font-normal flex justify-between items-center p-[15px] transition-all duration-300 ease-in text-white uppercase hover:opacity-30'>
                      <span>
                        Контакти
                      </span>
                  </a>
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
          <div className='flex  justify-between py-[15px] leading-[160%] mb-[10px]'>
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
                <a href="#"
                   className='text-white/90 text-[22px] py-[7px] duration-300 transition-all font-sans ease-in'>
                      <span className='flex-grow max-w-full'>
                        Головна
                      </span>
                </a>
              </li>
              <li>
                <a href="#"
                   className='text-white/90 text-[22px] py-[7px] duration-300 transition-all font-sans ease-in'>
                      <span className='flex-grow max-w-full'>
                        Про нас
                      </span>
                </a>
              </li>
              <li>
                <a href="#"
                   className='text-white/90 text-[22px] py-[7px] duration-300 transition-all font-sans ease-in'>
                      <span className='flex-grow max-w-full'>
                        Тренери
                      </span>
                </a>
              </li>
              <li>
                <a href="#"
                   className='text-white/90 text-[22px] py-[7px] duration-300 transition-all font-sans ease-in'>
                      <span className='flex-grow max-w-full'>
                        Новини
                      </span>
                </a>
              </li>
              <li>
                <a href="#"
                   className='text-white/90 text-[22px] py-[7px] duration-300 transition-all font-sans ease-in'>
                      <span className='flex-grow max-w-full'>
                        Контакти
                      </span>
                </a>
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
      {/**/}

      <div className='w-full block flex-grow flex-shrink-0'>
        <div className='w-full px-[5%] py-[30px] sm:py-[70px]'>
          <div className='max-w-[1300px] mx-auto flex flex-row'>
            <div className='w-full relative'>
              <div className='block text-[14px] text[#5B5B5B] mb-[10px] '>
                <a href="#" className='inline-block py-[2px] px-[3px] text-[#E63338] underline'>
                  <span className="flex-grow  max-w-full inline">Головна</span>
                </a>
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
                <div className='py-[40px] '>
                  <div className='text-left relative'>
                    <div className='sm:-mx-[16px] flex-col-reverse flex sm:flex-row-reverse'>
                      <div className='min-h-[240px] sm:w-[60%] flex flex-grow'>
                        <Wrapper apiKey={"AIzaSyD5hwYSz363sVVRNjrDW1clhseIMzKPDIc"} render={render}>
                          <MyMapComponent center={center} zoom={zoom}>
                            <Marker position={center} />
                          </MyMapComponent>
                        </Wrapper>
                      </div>
                      <div className='sm:w-[40%] sm:mx-[16px]  sm:h-auto '>
                        <div className='block '>
                          <div className='mb-[32px] flex items-start flex-col'>
                            <div
                              className='font-bold font-sans text-[16px] leading-[1.2] text-left mb-1'>Безкоштовно
                              по Україні
                            </div>
                            <div className='font-bold font-sans text-[16px] leading-[1.2] text-left'>

                              <a href="tel:+38 099 999 99 99">+38 099 999 99 99</a>
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
                              Україна, Вінницька область, смт. Теплик, в. Незалежності 3А
                            </div>
                          </div>
                          <div className='mb-[32px] flex items-start flex-col'>
                            <div
                              className='font-bold font-sans text-[16px] leading-[1.2] text-left mb-1'>Для листів:
                            </div>
                            <div className='text-blue-500 font-sans text-[16px] leading-[1.2] text-left'>
                              <a href="mailto:gmail@gmail.com">gmail@gmail.com</a>
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
      {/*  */}

      <div
        className='w-full relative bg-[#2B282F] px-[5%] lg:pb-[70px] pb-[35px]  lg:pt-[100px] pt-[50px] text-[16px] break-words text-white text-left'>
        <div
          className='w-full max-w-[1300px] flex flex-col lg:flex-row lg:items-start lg:justify-between mx-auto items-center'>
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
                      <a className="flex-grow max-w-full" href="tel:+380999999999">+38 099 999 99 99</a>
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
                      <span
                        className='flex-grow max-w-full'>Україна, Вінницька область, смт. Теплик, в. Незалежності 3А</span>
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
                      <a className='flex-grow max-w-full' href='mailto:gmail@gmail.com'>gmail@gmail.com</a>
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
            <div
              className='flex cursor-pointer py-[20px] px-[35px] bg-[#E63338] mt-[40px] rounded-[250px] transition-all duration-300 hover:bg-red-400 ease-in text-white'>
              <div className='font-sans'>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <span className="flex-grow max-w-full">Зв'язатися з нами</span>
              </div>
            </div>
          </div>
          <div className='hidden w-[33.333%] relative lg:flex px-[60px] flex-col'>
            <div className='text-[20px] mb-[15px] inline-flex text-white font-bold'>
              <span className="flex-grow max-w-full">Навігація по сайті</span>
            </div>
            <div className='relative w-full mx-0'>
              <ul className='flex flex-col gap-2.5'>
                <li>
                  <a href="#"
                     className='text-white/60 text-[16px] py-[7px] duration-300 transition-all font-sans ease-in hover:text-[#E63338]'>
                      <span className='flex-grow max-w-full'>
                        Головна
                      </span>
                  </a>
                </li>
                <li>
                  <a href="#"
                     className='text-white/60 text-[16px] py-[7px] duration-300 transition-all font-sans ease-in hover:text-[#E63338]'>
                      <span className='flex-grow max-w-full'>
                        Про нас
                      </span>
                  </a>
                </li>
                <li>
                  <a href="#"
                     className='text-white/60 text-[16px] py-[7px] duration-300 transition-all font-sans ease-in hover:text-[#E63338]'>
                      <span className='flex-grow max-w-full'>
                        Тренери
                      </span>
                  </a>
                </li>
                <li>
                  <a href="#"
                     className='text-white/60 text-[16px] py-[7px] duration-300 transition-all font-sans ease-in hover:text-[#E63338]'>
                      <span className='flex-grow max-w-full'>
                        Новини
                      </span>
                  </a>
                </li>
                <li>
                  <a href="#"
                     className='text-white/60 text-[16px] py-[7px] duration-300 transition-all font-sans ease-in hover:text-[#E63338]'>
                      <span className='flex-grow max-w-full'>
                        Контакти
                      </span>
                  </a>
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
    </main>
  )
}
export default Page


const TopIcon = () => (
  <svg fill='white' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 46.999 29.969"
       data-prefix="ih7qzmjv5">
    <path d="M41.176 29.977L23.5 11.903 5.824 29.977.001 24.024l23.5-24.027 23.5 24.027z" fill-rule="evenodd"
          className="path-ibmfwgtyz"></path>
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

const render = (status: Status): any => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

function MyMapComponent({
                          children,
                          center,
                          zoom,
                        }: {
  children: React.ReactNode;
  center: google.maps.LatLngLiteral;
  zoom: number;
}) {
  const ref = useRef();

  useEffect(() => {
    // @ts-ignore
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  }, [center, zoom]);

  // @ts-ignore
  return <div ref={ref} id="map" className='flex-grow'>
    {children}
  </div>
}


const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = React.useState<google.maps.Marker>();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      //{lat: 48.672712, lng: 29.74321}
      console.log(new google.maps.LatLng(48.672712, 29.74321))
      marker.setPosition(new google.maps.LatLng(48.672712, 29.74321));
      marker.setOptions(options)
    }
  }, [marker, options]);

  return null;
};