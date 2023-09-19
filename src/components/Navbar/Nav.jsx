import React from 'react'
import "@/components/Navbar/Nav.css"
import Image from 'next/image'
import Link from 'next/link'
import Theme from '../Theme/Theme'
import Auth from '../Auth/Auth'
const Nav = () => {
  return (
    <div className='con'>
<div className="social">
<Image src="/i.png" alt="" width={24} height={24}/>
<Image src="/t.png" alt="" width={24} height={24}/>
<Image src="/y.png" alt="" width={24} height={24}/>
<Image src="/fb.png" alt="" width={24} height={24}/>
</div>
<div className="logo">Bloom</div>
<div className="links">
    <Theme/>
<Link href="/" className="lii">Home</Link>
<Link href="/" className="lii">Contact</Link>
<Link href="/" className="lii">About</Link>
<Auth/>
</div>
    </div>
  )
}

export default Nav