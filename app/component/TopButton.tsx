'use client'
import React from 'react'

const TopButton = () => {
  const scrollToHeader = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }
  return (
    <button onClick={scrollToHeader}
            className='md:right-[50px] md:top-[50px] top-[100px] right-[40px] absolute border flex justify-center items-center rounded-full w-[50px] h-[50px] border-white/50 transition-all duration-300 hover:bg-[#EFEFEF]/20 z-20'>
            <span className='flex justify-center  items-center h-[16px] w-[16px]'>
              <TopIcon/>
            </span>
    </button>
  )
}

const TopIcon = () => (
  <svg fill='white' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 46.999 29.969"
       data-prefix="ih7qzmjv5">
    <path d="M41.176 29.977L23.5 11.903 5.824 29.977.001 24.024l23.5-24.027 23.5 24.027z" fill-rule="evenodd"
          className="path-ibmfwgtyz"></path>
  </svg>
)
export default TopButton

