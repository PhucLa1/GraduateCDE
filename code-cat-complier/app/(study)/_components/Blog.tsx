import Link from 'next/link'
import React from 'react'

export default function Blog() {
    return (
        <Link href='#'>
            <div style={{ background: '#1f202a' }} className='rounded-md py-2 px-2 hover:-translate-y-1.5 duration-200 hover:opacity-100 pb-2 mb-3 grid lg:grid-cols-[160px_auto] gap-4 relative border-b'>
                <div className='absolute top-[-5px] left-1 z-10'>
                    <div className='relative'>
                        <div className='mt-3 ml-1 ' style={{ width: '5.875rem', boxSizing: 'border-box' }}>
                            <figure style={{ margin: '0px', display: 'block', boxSizing: 'border-box' }}>
                                <div className='relative' style={{ boxSizing: 'border-box' }}>
                                    <img style={{ objectFit: 'contain', width: '5.875rem', height: '2.625rem', display: 'block', border: '0px', borderRadius: '0rem', verticalAlign: 'middle' }} src="/logo/top1.png" alt="" />
                                </div>
                            </figure>
                        </div>
                        <div className='absolute top-[15%] text-center text-white font-[800] w-full text-[13px]'>Top 1</div>
                    </div>
                </div>
                <div style={{ width: '100%', boxSizing: 'border-box' }}>
                    <img className='border rounded-md mt-1' src="https://s3-sgn09.fptcloud.com/codelearnstorage/Upload/Blog/huong-dan-lam-game-ran-san-moi-trong-cpp-63721179615.8205.jpg" alt="" />
                </div>
                <div className='flex flex-col text-sm align-middle items-center'>
                    <span className="font-semibold" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        wordBreak: 'break-word',
                        lineHeight:1.4
                    }}>
                        Hướng Dẫn Code Game Rắn Săn Mồi Trong C++
                    </span>
                    <span className='text-sm mt-1 text-gray-400' style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        wordBreak: 'break-word',
                        
                    }}>
                        Rắn săn mồi là một phần tuổi thơ của đa số các lập trình viên. Tại sao chúng ta không thử code lại tựa game này và trải nghiệm thêm một lần nữa nhỉ?
                    </span>
                </div>
            </div>
        </Link>
    )
}
