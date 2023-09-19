import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "@/components/Cat/Cat.css"
const Cat = () => {
  return (
    <div className='contaiiner'>
<h1 className="titlee">
    Popular Categories
</h1>
<div className="cate">
   
        <Link href="/blog?cat=style" className="catyy i1">
        <Image src="/style.png" alt="" width={32} height={32} className="imgg"/>
Style        
        </Link>
        <Link href="/blog?cat=style" className="catyy i2 ">
        <Image src="/6.png" alt="" width={32} height={32} className="imgg"/>
      Fashion  
        </Link>
        <Link href="/blog?cat=style" className="catyy i3">
        <Image src="/3.png" alt="" width={32} height={32} className="imgg"/>
           Food
        </Link>
        <Link href="/blog?cat=style" className="catyy i4">
        <Image src="/2.png" alt="" width={32} height={32} className="imgg"/>
Tavel           
        </Link>
        <Link href="/blog?cat=style" className="catyy i5">
        <Image src="/4.png" alt="" width={32} height={32} className="imgg"/>
           Culture
        </Link>
        <Link href="/blog?cat=style" className="catyy i6">
        <Image src="/1.png" alt="" width={32} height={32} className="imgg"/>
           Coding
        </Link>

    </div>
</div>
    
  )
}

export default Cat