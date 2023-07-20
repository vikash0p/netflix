import Image from 'next/image'
import React from 'react'
import imgs from '../images/wave.svg'

const HeroSection = ({ heading, para, img, btn }) => {
  return (
    <section className='h-[110vh] md:h-[85vh] w-full relative bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300'>
      <div className=' pt-8 w-[75%] items-center m-auto h-full md:columns-2 '>

        <div className=''>
          <h1 className='font-bold text-5xl'>{heading} </h1>
          <p className='text-xl mt-4'>{para} </p>
          <button type="button" className='rounded-full bg-red-700 px-6 py-2 mt-4 text-lg text-white hover:bg-red-950'>{btn} </button>
        </div>
        <div className='pt-12 md:grid-cols-2 md:pt-0'>
          <Image src={img} alt='images' className='object-fill ' width={800} height={750} />
        </div>
      </div>


      <Image src={imgs} alt='images' className='absolute bottom-0' />

    </section>
  )
}

export default HeroSection
