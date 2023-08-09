'use client'
import Image from 'next/image'
import { useState , useEffect} from 'react'
import Link from 'next/link'
import Modal from './modal'
import { TwitterIcon, YouTubeIcon } from './svg-icons'

import Logo from './logo'
import Button from './button'
import IconButton from './icon-button'
import { TextLink } from './text-link'

export default function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [headerStyle, setheaderStyle] = useState({    
    color: '#262f5a',
  fontSize: 15,
  padding: '25px 15px',
  cursor:'pointer',
  fontWeight: 600,
  fontFamily: 'Poppins,sans-serif',
  textTransform: 'capitalize',
  lineHeight: 1,
  
})
const [Srcoll, setSrcoll] = useState({}); // Initial background color is white

// Function to handle the scroll event
const handleScroll = () => {
  if (window.scrollY > 0) {
    setSrcoll({...{  
      position: 'fixed',
       top: 0,
       left: 0,
       boxShadow: '0 0 50px 0 rgba(0,0,0,.1)',
       transition: 'all .5s',
       background: '#fff',
       backdropFilter: 'blur(10px)',
       zIndex:1,
      //  backgroundColor:backgroundColor,
       // display:'flex',
       // justifyContent:'center',
       marginLeft:'auto',
       marginRight:'auto'}});
  } else {
    setSrcoll({});
  }
};

// Attach scroll event listener when the component mounts
useEffect(() => {
  window.addEventListener('scroll', handleScroll);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <div >
      <nav className="
      relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between  px-4 py-1 lg:px-2 
      text-headerblue"
     style={Srcoll}
      >
        <Link aria-label="SydJS" className="pr-8" href="/" >
          {/* <Logo /> */}
          <Image
      src="	https://cloudactivelabs.com/images/CALlogo2.svg"
      width={225}
      height={56}
      alt="Picture of the author"
    />
        </Link>
        <ul className="flex justify-end gap-1">
          <li className="text-lg/none font-semibold text-headerFontSize font-normal hover:no-underline" style={{...headerStyle}}>
            <TextLink href="/">Home</TextLink>
          </li>
          <li className="text-lg/none font-semibold hover:text-headeryellow text-headerFontSize font-normal" style={{...headerStyle}}>
            <TextLink href="/about">About Us</TextLink>
          </li>
      
          <li className="font-normal text-lg/none font-semibold hover:text-headeryellow " style={{...headerStyle}}>
            <TextLink href="/services">services</TextLink>
          </li>
          <li style={{...headerStyle}}>
            <TextLink href="/technologies">Technologies</TextLink>
          </li>
          <li className="text-lg/none font-semibold text-headerFontSize font-normal" style={{...headerStyle}}
          >
            <TextLink href="/blog">Blog</TextLink>
          </li>
          <li className="text-lg/none font-semibold text-headerFontSize font-normal" 
          style={headerStyle}
          >
            <TextLink href="/contact">Contact Us</TextLink>
          </li>
        <div style={{display:'flex', marginTop:'auto' , marginBottom:'auto', 
          // width: 80,
          border: '0.5px solid #006180',
          // height: 40, 
          borderRadius: 5,
          padding:3
      }}>
     <select style={
      {
        border: 'none',
        outline: 'none',
        scrollBehavior: 'smooth',
     fontWeight:'500',
        width: 65,
        height: 25,
        position: 'relative',
        padding: '0 10px'
        
      }
     }
     className='text-lg/none font-semibold text-headerFontSize font-normal'
     >
      <option style={{fontWeight:'500'}}>
        
        En</option>
      <option style={{fontWeight:'500' , color:''}}>Hi</option>
     </select>
        </div>
        </ul>
      </nav>
    
    </div>
  )
}
