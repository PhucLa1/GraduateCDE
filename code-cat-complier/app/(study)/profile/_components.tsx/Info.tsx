import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { faGraduationCap, faPenToSquare, faSignature, faUserGraduate, faUsersLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Info() {
    return (
        <div  style={{ border: '1px solid #3a3a40', borderRadius: '1rem', background: '#121418', padding: '1.5rem', minWidth: 'auto', maxWidth: '636px', width: '100%', margin: '0px', boxSizing: 'border-box' }}>
            <div className='flex items-center justify-between'>
                <Avatar style={{ width: '50px', height: '50px' }}>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                    <div className='flex items-center cursor-pointer justify-center'>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </div>
                </div>
            </div>
            <div className='flex items-center' style={{ marginTop: '24px' }}>
                <h1 style={{ display: 'block', overflow: 'hidden', maxWidth: '300px', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: '1.75rem', lineHeight: '2.25rem', fontWeight: 700, letterSpacing: '-0.063rem' }}>Phuc La</h1>
                <div style={{ marginLeft: '0.5rem' }} className='items-center flex'>
                    <img width='20px' src="/logo/chat-bubble.png" alt="1" />
                </div>
            </div>
            <p style={{ marginTop: '-2px', fontWeight: 400, fontSize: '0.875rem', lineHeight: '1.25rem' }}>@phucminhbeos</p>
            <div style={{ display: 'flex', flexDirection: 'column', boxSizing: 'border-box', minHeight: '80px', marginTop: '20px' }}>
                <div className='flex items-center mt-2'>
                    <div style={{ fontWeight: 600, fontSize: '1rem', lineHeight: '1.5rem' }}>
                        <FontAwesomeIcon icon={faSignature} />
                    </div>
                    <span className='text-gray-400 text-sm ml-2'>Họ và tên : <strong className='text-slate-100'>Lã Hồng Phúc</strong></span>
                </div>
                <div className='flex items-center mt-3'>
                    <div style={{ fontWeight: 600, fontSize: '1rem', lineHeight: '1.5rem' }}>
                        <FontAwesomeIcon icon={faUserGraduate} />
                    </div>
                    <span className='text-gray-400 text-sm ml-3'>Lớp : <strong className='text-slate-100'>CNTTVA1</strong></span>
                </div>
                <div className='flex items-center mt-2'>
                    <div style={{ fontWeight: 600, fontSize: '1rem', lineHeight: '1.5rem' }}>
                        <FontAwesomeIcon icon={faGraduationCap} />
                    </div>
                    <span className='text-gray-400 text-sm ml-3'>Khóa : <strong className='text-slate-100'>K62</strong></span>
                </div>
                <div className='flex items-center mt-2'>
                    <div style={{ fontWeight: 600, fontSize: '1rem', lineHeight: '1.5rem' }}>
                        <FontAwesomeIcon icon={faUsersLine} />
                    </div>
                    <span className='text-gray-400 text-sm ml-3'>Tham gia từ  <strong className='text-slate-100'>19 tháng 4 năm 2021</strong></span>
                </div>
            </div>
        </div>
    )
}
