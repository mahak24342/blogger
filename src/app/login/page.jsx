"use client"
import React from 'react'
import "@/app/login/login.css"
import { useSession ,signIn} from 'next-auth/react'
import { useRouter } from 'next/navigation'
const page = () => {
  const {data,status}=useSession();
const router=useRouter()
  if (status==="loading"){
    return<div><h2>Loading...</h2></div>
  }
  if(status==="authenticated"){
    router.push("/")
  }
  return (
    
        <div className="i1">
    <div className="i2">
        <div className="i3"  onClick={()=>signIn("google")}>Sign in with Google</div>
        <div className="i3">Sign in with Github</div>
<div className="i3">Sign in with facebook</div>
    </div>
</div>
    
  )
}

export default page