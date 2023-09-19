import React from 'react'
import "@/components/Card/Card.css"
import Image from 'next/image';
import Link from 'next/link';
const  Card = () => {
  return (
    <div className='containner' >
        <div className="mg">
            <Image src="/p1.jpeg" alt="" fill className='ol'/>
        </div>
        <div className="cor">
            <div className="detail">
                <span className="date">11.02.2023 -</span>
                <span className="cap">CULTURE</span>
            </div>
            <Link href="/">
            <h1>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores cum adipisci quaerat 
            </h1>
            </Link>
<p className='des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis excepturi ab quisquam quod iste aspernatur rem nihil aliquam? A, suscipit et dolor ipsa quos ad nesciunt nam, quasi ipsam facilis dolorum corrupti autem sint explicabo. Officiis vel quis ab commodi vitae, debitis repellat repellendus nam, ut quos corporis deleniti facilis!

</p>
<Link href="/" className='lof'>Read More</Link>
        </div>
    </div>
  )
}

 export default Card;