import React from 'react'
import "@/app/blog/page.css"
import List from '@/components/List/List'
import Menu from '@/components/Menu/Menu'
const page = () => {
  return (
    <div className='container op'>
        <h1 className='tu'>Style Blog</h1>
<div className="contento ">
    <List/>
    <Menu/>
</div>
    </div>
  )
}

export default page