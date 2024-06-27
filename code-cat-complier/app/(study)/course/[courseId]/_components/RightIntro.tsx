import { Button } from '@/components/ui/button'
import { faBook, faClock, faHourglassEnd, faPersonChalkboard, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function RightIntro() {
    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', marginBottom: '60px', marginLeft: '24px', paddingBottom: '20px', position: 'sticky', top: '110px' }}>
            <div style={{ borderRadius: '16px', margin: '2px 0 20px', overflow: 'hidden', position: 'relative', userSelect: 'none', width: 'calc(100% - 2px)' }}>
                <div style={{ backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat', backgroundSize: '100% auto', paddingTop: '56.25%', width: '100%', backgroundImage: 'url(https://files.fullstack.edu.vn/f8-prod/courses/12.png)' }}></div>
                <FontAwesomeIcon className='text-white text-6xl left-1/2 absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-linear z-10 inline-block h-4 align-middle fill-current' icon={faPlay} />
                <p className="bottom-0 text-white text-sm font-semibold left-0 absolute right-0 text-center w-full z-10">Xem giới thiệu khóa học</p>
            </div>
            <h5 className='text-primary text-3xl font-normal mx-auto opacity-80'>Miễn Phí</h5>
            <Button className='text-2sm mt-4 min-w-[180px] py-2.5 px-4 rounded-full font-semibold outline-none select-none whitespace-nowrap bg-[#1f202a] hover:bg-gray-500' style={{ textTransform: 'uppercase' }} variant="secondary">
                <Link href='/course/123/video/1'>Đăng kí học</Link>
            </Button>
            <ul className='inline-block m-0 p-[12px_0_5px_2px] text-left ml-12'>
                <li className='relative mb-[10px] pl-[35px] text-[#494949] text-[1.4rem] leading-[1.6] mr-2'>
                    <FontAwesomeIcon className='overflow-visible box-content left-0 absolute top-3 inline-block h-4 align-middle fill-current text-white' icon={faPersonChalkboard} />
                    <span className='text-sm text-gray-400'><strong className='text-white'>Phạm Xuân Tích</strong></span>
                </li>
                <li className='relative mb-[10px] pl-[35px] text-[#494949] text-[1.4rem] leading-[1.6] mr-2'>
                    <FontAwesomeIcon className='overflow-visible box-content left-0 absolute top-3 inline-block h-4 align-middle fill-current text-white' icon={faBook} />
                    <span className='text-sm text-gray-400'>Tổng số  <strong className='text-white'>28</strong> bài học</span>
                </li>
                <li className='relative mb-[10px] pl-[35px] text-[#494949] text-[1.4rem] leading-[1.6] mr-2'>
                    <FontAwesomeIcon className='overflow-visible box-content left-0 absolute top-3 inline-block h-4 align-middle fill-current text-white' icon={faClock} />
                    <span className='text-sm text-gray-400'>Thời lượng  <strong className='text-white'>08 giờ 47 phút</strong></span>
                </li>
                <li className='relative mb-[10px] pl-[35px] text-[#494949] text-[1.4rem] leading-[1.6] mr-2'>
                    <FontAwesomeIcon className='overflow-visible box-content left-0 absolute top-3 inline-block h-4 align-middle fill-current text-white' icon={faHourglassEnd} />
                    <span className='text-sm text-gray-400'>Học mọi lúc mọi nơi</span>
                </li>
            </ul>
        </div>
    )
}
