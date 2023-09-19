import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "@/components/Footer/Footer.css"
const Footer = () => {
  return (
    <div className='cont'>
      <div className="ingo">
        <div className="log">
          <Image src="/i1.jpg" alt="" width={60} height={70} className='jk'/>
          <span className="te">Blogger</span>
        </div>
        <p className='dox'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum non deleniti magni modi odio expedita corporis error similique animi soluta ex ducimus beatae voluptatum numquam nostrum iure blanditiis, nisi perferendis impedit, necessitatibus deserunt. Quibusdam exercitationem esse officia hic deserunt quos dicta eveniet nostrum minus inventore. Facilis nihil officiis nostrum cupiditate?</p>
    <div className="so">
    <Image src="/i.png" alt="" width={24} height={24}/>
<Image src="/t.png" alt="" width={24} height={24}/>
<Image src="/y.png" alt="" width={24} height={24}/>
<Image src="/fb.png" alt="" width={24} height={24}/>
    </div>
      </div>
      <div className="linkss">
        <div className="lis">
          <span className='Tik'>Links</span>
          <Link href="/" >HomePage</Link>
          <Link href="/" >Blog</Link>
          <Link href="/" >About</Link>
          <Link href="/" >Contact</Link>

        </div>
        <div className="listt">
          <span className="Tik">Tags</span>
          <Link href="/" >HomePage</Link>
          <Link href="/" >Blog</Link>
          <Link href="/" >About</Link>
          <Link href="/" >Contact</Link>
        </div>
        <div className="listt">
        <span className="Tik">Social</span>
          <Link href="/" >Facebook</Link>
          <Link href="/" >Instagram</Link>
          <Link href="/" >tiktok</Link>
          <Link href="/" >Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer