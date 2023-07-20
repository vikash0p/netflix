import HeroSection from '@/components/Herosection'
import React from 'react'

const About = () => {
  return (
    <div>
      <HeroSection
        heading='Our Story'
        para='A good story is about something the audience decides is interesting or important. A great story often does both by using storytelling to make important news interesting.'
        btn='About Me'
        img='/about.svg'
      />
    </div>
  )
}

export default About
