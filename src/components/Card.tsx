import Link from 'next/link'
import Image from 'next/image'
import Logo from './logo'
import IconButton from '@/components/icon-button'
import { TwitterIcon, YouTubeIcon } from './svg-icons'

export const Card=()=> {
    // https://cloudactivelabs.com/images/service/productEng.svg
  return (
<div style={{width:'33%' ,backgroundColor:'aqua'}}>
 <div style={{display:'flex' , justifyContent:'center'}}>
 <Image
      src="https://cloudactivelabs.com/images/service/productEng.svg"
      width={100}
      height={100}
      alt="Picture of the author"
    />
 </div>
 
<div style={{
// overflow: 'hidden',
// marginTop: '10%'
}}>
<h4 style={{textAlign:'center',
fontFamily: 'Source Sans Pro,sans-serif',
fontWeight: '700',
color: '#1f2471',
marginBottom:15
}}>Product Engineering</h4>
<h4 style={{textAlign:'center', marginBottom:15, paddingLeft:20, paddingRight:20}}>
A process of innovating, designing, developing, testing and deploying a software product 
that can assist businesses to succeed by implementing our thoughtful innovation
</h4>
</div>
</div>
  )
}
