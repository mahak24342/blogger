"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import "@/components/Auth/Auth.css"
import { signOut } from 'next-auth/react'
const Auth = () => {
    const [open,setOpen]=useState(false)
  const status="notauthenticated"
  
    return (
    <>
{status==="notauthenticated" ? (
    <Link href="/login" className='linkk'>Login</Link>
):(
    <>
    <Link href="/write" className='linkk'>Write</Link>
<span className='linkk' onClick={signOut}>Logout</span>
</>
)}
<div className="burger" onClick={()=>setOpen(!open)}>
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
</div>
{open && (
    <div className='rev'>
<Link href="/" className="li">Home</Link>
<Link href="/" className="li">Contact</Link>
<Link href="/" className="li">About</Link>
{status==="notauthenticated" ? (
    <Link href="/login" >Login</Link>
):(
    <>
    <Link href="/write">Write</Link>
<span className='linkk'>Logout</span>
</>
)}
    </div>
)}

    </>
    )
}

export default Auth