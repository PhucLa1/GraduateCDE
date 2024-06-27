import { faCheck, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function Exercise() {
    return (
        <Link style={{ background: '#1f202a' }} href='#' className='hover:opacity-100 h-full flex flex-col justify-between shadow-md border rounded-xl flex-auto transition-all hover:-translate-y-1.5 hover:shadow-lg'>
            <div className='p-4 flex flex-col gap-2'>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <span style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden', wordBreak: 'break-word' }} className='font-semibold text-center lg:text-sm text-slate-50 text-sm'>Bài toán đi về nhà</span>
                    <div className='text-sm h-[24px] font-semibold flex-none px-3 rounded-xl text-white flex items-center justify-center capitalize bg-[#77C148] mantine-1rwoko8'>Đơn giản</div>
                </div>
                <div className='flex-wrap h-[25px] overflow-hidden justify-center flex gap-2 text-xs text-[#333] mt-3'>
                    <div className='bg-[#F5F6F7] px-[5px] h-[25px] flex items-center rounded-md'>Toán</div>
                    <div className='bg-[#F5F6F7] px-[5px] h-[25px] flex items-center rounded-md'>Đệ quy</div>
                    <div className='bg-[#F5F6F7] px-[5px] h-[25px] flex items-center rounded-md'>+2</div>
                </div>
            </div>
            <div className='rounded-b-xl mt-auto h-[42px] font-semibold text-sm text-[#65656D] bg-[#F5F6F7] px-4 flex items-center justify-between opacity-85'>
                <div className='flex gap-[6px] items-center'>
                    <span className='box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;'>
                        <FontAwesomeIcon icon={faUserTie} />
                        <span className='ml-1'>120</span>
                    </span>
                </div>
                <div className='flex gap-[6px] items-center'>
                    <span className='box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;'>
                        <FontAwesomeIcon style={{ color: '7bc043' }} icon={faCheck} />
                        <span className='ml-1'>85,63%</span>
                    </span>
                </div>
            </div>
        </Link>
    )
}
