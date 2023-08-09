import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/button'
import { EventListingCard } from '@/components/event-card/listing'
import AtlassianLogo from '@/components/svg-logos/atlassian'
import ThinkmillLogo from '@/components/svg-logos/thinkmill'
import LookaheadLogo from '@/components/svg-logos/lookahead'
import { ChevronRightIcon } from '@/components/svg-icons'
import { SkewImage } from '@/components/skew-image'
import { asyncComponent } from '@/lib/async-component'
import { getEvents } from '@/lib/get-data'
import { reader } from '../keystatic/reader'
import { TextLink } from '@/components/text-link'

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 justify-between w-full mx-auto" style={{width:'95%'}}>
 <div className=' w-full'>
<h6 style={{
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,color:'#006180'
}}>CONCEPT TO REALITY</h6>
<h1 style={{
      fontFamily: 'Source Sans Pro,sans-serif',
      fontWeight: '700',
      color: '#1f2471',
      fontSize: '3.375rem',
      marginBottom:20
}}>Plan, Design & Build Your <span style={{color:'#006180'}}>Concept</span></h1>
<p style={{
    lineHeight: 1.6,
    color: '#505489',
    fontSize: 15,
    width:'85%',
    marginBottom:30
}}>
  CloudActive Labs believes in Delivering Web/Mobile Application in Cloud Infrastructure through Partnership of Startups & Enterprise Business for Their Rapid Growth with Long Term Impacts.
  </p>
  <div style={{
        color: '#fff',
        padding: '12px 35px',
        display:' inline-block',
        borderRadius: 5,
        fontSize: 15,
        fontWeight: 500,
        backgroundColor:'#05868a'
  }} >
    <span className='flex'> <TextLink  href="/contact">Connect with Us </TextLink>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
</span>
  </div>
 
 </div>
 <div className='bg-yellow-500 w-full'>
{/* <Image
      src="https://cloudactivelabs.com/_next/static/media/banner.e2b73f5e.png"
      width={225}
      height={56}
      alt="Picture of the author"
    /> */}
       <Image
      src="	https://cloudactivelabs.com/images/CALlogo2.svg"
      width={225}
      height={56}
      alt="Picture of the author"
    />

 </div>
 
    </div>
  )
}



