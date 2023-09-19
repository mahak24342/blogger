import React from 'react'
import "@/components/Comments/Comments.css"
import Link from 'next/link';
import Image from 'next/image';
const Comments = () => {
    const status="authenticated";
  return (
    
<div className="container">
    <h1 className="titll">
        Comments
</h1>
{status==="authenticated" ? (
    <div className="writ">
        <textarea placeholder='Write a Comment' className='kll'/>
        <button className="bn">
            Send
        </button>
    </div>
):(<Link href="/login">Login to write a commment</Link>
)
}
<div className="coment">
    <div className="cm">
        <div className="kii">
            <Image src="/p1.jpeg" alt="" width={50} height={50} className="ll"/>
            <div className="h1">
                <span className="h2">John Deo</span>
          <span className="h3">01.01.2022</span>
            </div>
        </div>
    <div className="ko">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempore dolor numquam vero omnis, at facilis quasi exercitationem possimus voluptatem perferendis ipsum dignissimos sint libero doloribus accusamus, ipsa, vitae velit!
        </p>
    </div>
    </div>
</div>
   
   
</div>
   
  )
}

export default Comments