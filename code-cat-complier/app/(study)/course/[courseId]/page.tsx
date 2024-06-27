"use client"
import React, { useState } from 'react'
import ListVideo from './_components/ListVideo'
import LearnAbout from './_components/LearnAbout'
import Required from './_components/Required'
import RightIntro from './_components/RightIntro'

export default function page() {
    const [openAll, setOpenAll] = useState(false)
    return (
        <div className='pb-12' style={{ minWidth: 'auto', boxSizing: 'border-box', margin: '0 auto', paddingRight: '20px', paddingLeft: '20px', maxWidth: '1240px', flex: '1 1' }}>
            <section style={{ margin: '0 auto' }} className='max-w-[1920px] p-0'>
                <section className='flex' style={{ marginTop: '24px' }}>
                    <section className='w-2/3'>
                        <h1 style={{ fontSize: '24px', fontWeight: 600, marginTop: '16px', minHeight: '33px' }}>Lập trình JAVASCRIPT nâng cao</h1>
                        <span className='text-gray-400 text-sm'>Hiểu sâu hơn về cách hoạt động của JS</span>
                        <div>
                            <h2 className='text-[20px] font-semibold' style={{ margin: '36px 0 4px' }}>Bạn sẽ học được gì</h2>
                            <LearnAbout />
                        </div>
                        <div>
                            <div style={{ paddingBottom: '4px', position: 'sticky', zIndex: 2 }}>
                                <div className='flex flex-wrap items-center justify-between'>
                                    <h2 className='text-[20px] font-semibold' style={{ margin: '36px 0 4px' }}>Nội dung khóa học</h2>
                                </div>
                                <div className='flex text-sm mt-[4px]'>
                                    <ul style={{ display: 'flex', margin: 0, paddingLeft: 0 }}>
                                        <li><strong>6</strong> chương</li>
                                        <li style={{ marginTop: '1px', opacity: 0.8, padding: '0 8px' }}>.</li>
                                        <li><strong>28</strong> bài học</li>
                                        <li style={{ marginTop: '1px', opacity: 0.8, padding: '0 8px' }}>.</li>
                                        <li>Thời lượng <strong>08 giờ 47 phút</strong></li>
                                    </ul>
                                    <div onClick={() => setOpenAll(!openAll)} className='cursor-pointer' style={{ fontWeight: 600, marginLeft: 'auto', userSelect: 'none' }} >{openAll ? 'Thu nhỏ tất cả' : 'Mở rộng tất cả'}</div>
                                </div>
                            </div>
                            <div>
                                <ListVideo openAll={openAll}/>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-[20px] font-semibold' style={{ margin: '36px 0 4px' }}>Yêu cầu</h2>
                            <Required />
                        </div>
                    </section>
                    <section className='w-1/3 ml-2'>
                        <RightIntro/>
                    </section>
                </section>
            </section>
        </div>
    )
}
