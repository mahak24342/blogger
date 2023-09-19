import React from 'react'
import "@/components/Menu/Menu.css"
import Link from 'next/link'
import Image from 'next/image'

const Menu = () => {
  return (
   <div className="container">
    <h2 className='sub'>
{"Whats new"} 

    </h2>
    <h1 className='titlee'>Most Popular</h1>
<div className="items">
    <Link href="/" className='item'>
        <div className="conp">
            <Image src="/p1.jpeg" alt="" fill className='mg'/>
        </div>
        <div className="txtt">
            <span className='cot  '>Food</span>
            <h3 className='pst'>Lorem ipsum dolor sit amet consectetur </h3>
<div className="detail">
      <span className='user'>John Doe</span>
      <span className='ok'>- 10.03.2023</span>
    </div>
        </div>
    </Link>
    <Link href="/" className='item'>
        <div className="conp">
            <Image src="/p1.jpeg" alt="" fill className='mg'/>
        </div>
        <div className="txtt">
            <span className='cot lv'>Love</span>
            <h3 className='pst'>Lorem ipsum dolor sit amet consectetur </h3>
<div className="detail">
      <span className='user'>John Doe</span>
      <span className='ok'>- 10.03.2023</span>
    </div>
        </div>
    </Link>
    <Link href="/" className='item'>
        <div className="conp">
            <Image src="/p1.jpeg" alt="" fill className='mg'/>
        </div>
        <div className="txtt">
            <span className='cot fv'>Travel</span>
            <h3 className='pst'>Lorem ipsum dolor sit amet consectetur </h3>
<div className="detail">
      <span className='user'>John Doe</span>
      <span className='ok'>- 10.03.2023</span>
    </div>
        </div>
    </Link>
    <Link href="/" className='item'>
        <div className="conp">
            <Image src="/p1.jpeg" alt="" fill className='mg'/>
        </div>
        <div className="txtt">
            <span className='cot fo'>Travel</span>
            <h3 className='pst'>Lorem ipsum dolor sit amet consectetur </h3>
<div className="detail">
      <span className='user'>John Doe</span>
      <span className='ok'>- 10.03.2023</span>
    </div>
        </div>
    </Link>
</div>

<div className='ofc'>
    <div className='lok'>
<h2 className="sub">Discover By Topic
   </h2>
<h1 className='titlee' >
    Categories
</h1>
</div>
<div className="list">
    <Link href="#" className='fv oj'>Style</Link>
    <Link href="#" className='lv oj'>Travel</Link>
    <Link href="#" className='fo oj'>Fashion</Link>
    <Link href="#" className='fv oj'>Food</Link>
    <Link href="#" className='lv oj'>Travel</Link>
    <Link href="#" className='fo oj'>Fashion</Link>
    <Link href="#" className='fv oj'>Food</Link>
</div>
   </div>
   <div className="items ">
    <div className='ko'>
    <h3 className='sub kl'>Chosen By Editors</h3>
    <h2 className='titlee'>Latest News</h2></div>
    <Link href="/" className='item'>
        <div className="conp">
            <Image src="/p1.jpeg" alt="" fill className='mg'/>
        </div>
        <div className="txtt">
            <span className='cot  '>Food</span>
            <h3 className='pst'>Lorem ipsum dolor sit amet consectetur </h3>
<div className="detail">
      <span className='user'>John Doe</span>
      <span className='ok'>- 10.03.2023</span>
    </div>
        </div>
    </Link>
    <Link href="/" className='item'>
        <div className="conp">
            <Image src="/p1.jpeg" alt="" fill className='mg'/>
        </div>
        <div className="txtt">
            <span className='cot lv'>Love</span>
            <h3 className='pst'>Lorem ipsum dolor sit amet consectetur </h3>
<div className="detail">
      <span className='user'>John Doe</span>
      <span className='ok'>- 10.03.2023</span>
    </div>
        </div>
    </Link>
    <Link href="/" className='item'>
        <div className="conp">
            <Image src="/p1.jpeg" alt="" fill className='mg'/>
        </div>
        <div className="txtt">
            <span className='cot fv'>Travel</span>
            <h3 className='pst'>Lorem ipsum dolor sit amet consectetur </h3>
<div className="detail">
      <span className='user'>John Doe</span>
      <span className='ok'>- 10.03.2023</span>
    </div>
        </div>
    </Link>
    <Link href="/" className='item'>
        <div className="conp">
            <Image src="/p1.jpeg" alt="" fill className='mg'/>
        </div>
        <div className="txtt">
            <span className='cot fo'>Travel</span>
            <h3 className='pst'>Lorem ipsum dolor sit amet consectetur </h3>
<div className="detail">
      <span className='user'>John Doe</span>
      <span className='ok'>- 10.03.2023</span>
    </div>
        </div>
    </Link>
</div>

   </div>
  )
}

export default Menu