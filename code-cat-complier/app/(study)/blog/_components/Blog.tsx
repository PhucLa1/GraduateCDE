"use client"
import { faReadme } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'
import '../_components/Blog.css'
import { faArrowRight, faBookmark, faCheck, faHeart, faPenToSquare, faSave } from '@fortawesome/free-solid-svg-icons'
export default function Blog() {
  const [heart, setHeart] = useState(false)
  const [save, setSave] = useState(false)
  console.log(save)
  return (
    <li className={`product-card`} data-tilt>
      <div className="badge">Hot</div>
      <div className="product-tumb">
        <img src='https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/2854e725e238a1571ea61cc435b80c0f?_a=AQAEuiZ' alt="" />
      </div>
      <div className="product-details mt-2">
        <span className="product-catagory">4 phút trước</span>
        <h4 >
          <a style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', wordBreak: 'break-word' }} className='lg:text-sm text-slate-50  text-sm font-bold' href="#">Docker vs Podman: A New Era in Secure Orchestration</a>
        </h4>
        <div className='flex-wrap h-[25px] overflow-hidden justify-start flex gap-2 text-xs text-[#333] mb-4'>
          <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Toán</div>
          <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Đệ quy</div>
          <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>+2</div>
        </div>
        <div className="product-bottom-details">
          <div className="product-price hover:text-slate-50 flex items-center">
            <Link href='blog/123'>
              <span className=''>Đọc thêm</span>
              <FontAwesomeIcon className='ml-1' icon={faArrowRight} />
            </Link>

          </div>
          <div className="product-links flex flex-end">
            <div onClick={() => setHeart(!heart)} className={`flex items-center justify-start ${heart ? 'hover:text-slate-50 text-yellow-500' : 'hover:text-yellow-500 text-slate-50'}`}>
              <span className='mr-1'>170</span>
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div onClick={() => setSave(!save)} className={`flex items-center justify-start ${save ? 'hover:text-slate-50 text-yellow-500 ' : 'hover:text-yellow-500 text-slate-50'}`}>
              <span className='mr-1'>70</span>
              <FontAwesomeIcon icon={faBookmark} />
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
