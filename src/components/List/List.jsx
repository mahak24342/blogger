import React from 'react'
import "@/components/List/List.css"
import Image from 'next/image'
import Card from '../Card/Card'
import Pagi from '../Pagi/Pagi'
const List = () => {
  return (
    <div className='of'>
<h1 className="ti">
    Recent Post
</h1>
<div className="poq">
    <div className="pl">
        <Card/>
        <Card/>
        <Card/>
       
        <Pagi/>
    </div>
</div>
    </div>
  )
}

export default List