import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="hilink-logo.svg" alt="logo" width={74} height={29} />
          </Link>
  
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) =>(
              <FooterColumn></FooterColumn>
            ))}
          </div>



        </div>
      </div>

    </footer>
  )
}


type FooterColumnProps={
  title:string;
  children:React.ReactNode;
}

const footerColumn=({title,children} : FooterColumnProps) => {
  return(
    <div className="flex flex-col gap-5">
   <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}


export default Footer