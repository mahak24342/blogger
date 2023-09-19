import Cat from '@/components/Cat/Cat'
import Feature from '@/components/Feature/Feature'
import List from '@/components/List/List'
import Menu from '@/components/Menu/Menu'
import Nav from '@/components/Navbar/Nav'
import Pagi from '@/components/Pagi/Pagi'
import React from 'react'

const page = () => {
  return (
    <div className="container">

     <Feature/>
     <Cat/>
   <div className='contento'>
    <List/>
<Menu/>

   </div>
    </div>
  )
}

export default page