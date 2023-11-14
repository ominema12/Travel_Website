import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
  <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-500">
    <div className="hero-map"/>
<div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
<Image
  src="/camp.svg"
  alt="camp"
  width={50}
  height={50}
  className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
  />
  

</div>
  </section>
  )
}

export default Hero