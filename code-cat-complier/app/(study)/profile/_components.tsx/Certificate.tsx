"use client"

import React, { useState } from 'react'

export default function Certificate() {
    const [openMore, setOpenMore] = useState(false)
    return (
        <div style={{ border: '1px solid #3a3a40', borderRadius: '1rem', background: '#121418', padding: '1.5rem', minWidth: 'auto', maxWidth: '636px', width: '100%', margin: '0px', boxSizing: 'border-box' }}>
            <h3 className='my-0' style={{ fontSize: '18px', lineHeight: 1.4, fontWeight: 700 }}>Chứng chỉ</h3>
            <div className=''>
                <div className='mt-4'>
                    <img className='round-md' src="/image/certificate.png" alt="" />
                </div>
                <div className='mt-4'>
                    <img className='round-md' src="/image/certificate.png" alt="" />
                </div>
                {
                    openMore && <div>
                        <div className='mt-4'>
                            <img className='round-md' src="/image/certificate.png" alt="" />
                        </div>
                        <div className='mt-4'>
                            <img className='round-md' src="/image/certificate.png" alt="" />
                        </div>
                    </div>
                }
            </div>
            <div onClick={() => setOpenMore(!openMore)} className="w-full flex justify-center mt-4">
                <span className="cursor-pointer text-sm">{openMore ? 'Đóng lại' : 'Xem thêm ...'}</span>
            </div>
        </div>
    )
}
