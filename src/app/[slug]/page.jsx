import React from 'react'
import "@/app/[slug]/page.css"
import Menu from '@/components/Menu/Menu'
import Image from 'next/image'
import Link from 'next/link'
import Comments from '@/components/Comments/Comments'
const page = () => {
  return (
    <div className='contentu'>
      
          
                <div className="v">
                    <div className="hk">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid perferendis </h1>
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, animi?</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ab! Magnam vero minus quas quaerat qui aperiam. Illo asperiores sint maiores quia. Facilis assumenda doloremque necessitatibus eos delectus. Ullam mollitia officiis atque cum soluta repudiandae perspiciatis aperiam, dignissimos placeat adipisci corporis optio ad, unde accusantium facilis harum iste voluptates Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, animi distinctio recusandae error aspernatur unde quo eius consectetur itaque voluptate explicabo iste nesciunt quibusdam blanditiis alias aliquid omnis ea id. Facere esse, nemo dolorum, quibusdam, quaerat deserunt in odio vel ab est itaque? Quo tempora odit iste excepturi, placeat dolorem.</p>
              </div>
    <div className="ki">            
<div className="picc">
    <Image src="/i1.jpg" alt='' className='opp'  width={500} height={500}/>
</div>

<div className="userr">
    <span>John Doe</span>
    <br/>
    <span>01.02.2024</span>
</div>
                        
</div> 
              
            </div>
         
   
    <div className="puf"></div>
  
    <div className="contento">
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
  
   </div>
</div>
<Comments/>
</div>
  )
}

export default page