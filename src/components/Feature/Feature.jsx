import React from 'react'
import "@/components/Feature/Feature.css"
import Image from 'next/image'
const Feature = () => {
  return (
    <div className='containerr'>
        <h1 className='title'>
            <b>
                Hey There, How Are You!
            </b>
            Discover my stories and ideas here
        </h1>
        <div className="post">
            <div className="img">
                <Image src="/p1.jpeg" alt="" fill className='ig'/>
            </div>
            <div className="txt">
                <h1 className='tt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi a eaque tempora magnam dolorem. Iusto maiores nesciunt ipsum blanditiis fugit!</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolore molestias asperiores impedit quibusdam exercitationem illo, maiores doloremque facere itaque corrupti architecto praesentium cumque officia provident totam dolor ad, tempore error incidunt ab nemo iure dignissimos? Suscipit, dolorum alias nemo molestias optio nobis facilis sint quia nihil assumenda nulla tenetur.</p>
<button className='btn'>Explore More</button>
            </div>
        </div>
    </div>
  )
}

export default Feature