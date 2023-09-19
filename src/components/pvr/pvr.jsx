"use client"
import { ThemeContext } from '@/context/ThemeContext';
import React from 'react'

const pvr = ({children}) => {
  const {theme} =useContext(ThemeContext);
    return (
    <div className={theme}> {children}</div>
  )
}

export default pvr