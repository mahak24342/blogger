"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import "@/components/Theme/Theme.css"
import { ThemeContext } from '@/context/ThemeContext'

const Theme = () => {
  const {toggle,theme}=useContext(ThemeContext)
  return (
    <div className='containe' onClick={toggle}  style={theme==="dark" ?{background:"white"}:{background:"black"}}>
<Image src="/M.png" alt="" width={14} height={14}/>
<div className="ball" style={theme==="dark" ?{left:1,background:"black"}:{right:1,background:"white"}}></div>
<Image src="/S.png" alt="" width={14} height={14}/>

    </div>
  )
}

export default Theme