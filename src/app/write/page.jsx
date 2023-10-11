"use client"
import React, { useState } from 'react'
import "@/app/write/write.css"
import Image from 'next/image'
import ReactQuill from "react-quill"
const page = () => {
  const [open,setOpen]=useState(false);
  const [value,setValue]=useState("");
  return (
    <div className='container'>
<input type="text" placeholder="Title" className='j1'/>
<div className="editor">
  <button className='bnn' onClick={()=>setOpen(!open)}>
    <Image src="/i9.png" alt="" width={16} height={16}/>
  </button>
  {open && (
    <div className="div">
  <button className="bnn okl">
  <Image src="/i8.png" alt="" width={16} height={16}/>
  </button>
  <button className="bnn okl">
  <Image src="/i7.png" alt="" width={16} height={16}/>
  </button>
</div>
  )}
  <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder="Tell your storyyy.." className='fkk'/>
   
    </div>
    <button className='pubb'>Publish</button>
    </div>

  )
}

export default page