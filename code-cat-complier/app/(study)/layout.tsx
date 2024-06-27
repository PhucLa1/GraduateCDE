"use client"
import React from 'react'
import Footer from './_components/Footer/Footer'
import Header from './_components/Header/Header'


export default function layout({children}:{children: React.ReactNode}) {
  return (
    <div className='dark:bg-slate-800 bg-slate-300'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
