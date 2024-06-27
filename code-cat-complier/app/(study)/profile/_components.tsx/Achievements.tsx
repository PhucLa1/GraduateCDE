import { faCheck, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Achievements() {
    return (
        <div style={{ border: '1px solid #3a3a40', borderRadius: '1rem', background: '#121418', padding: '1.5rem', minWidth: 'auto', maxWidth: '636px', width: '100%', margin: '0px', boxSizing: 'border-box' }}>
            <div className='flex items-center justify-between'>
                <h3 className='my-0' style={{ fontSize: '18px', lineHeight: 1.4, fontWeight: 700 }}>Thành tích học tập</h3>
                <div>
                    <div className='flex items-center cursor-pointer justify-center'>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <ul style={{ marginBottom: '10px', paddingLeft: 0 }}>
                    <li style={{ flexBasis: '50%', fontSize: '1.4rem', lineHeight: 1.6, marginBottom: '12px', position: 'relative', padding: '0 24px' }}>
                        <FontAwesomeIcon className='text-green-400 text-sm absolute left-0 top-3' icon={faCheck} />
                        <span className='text-sm text-gray-400 ml-1'>Tham gia CLB SFIT, được làm phó chủ nhiệm</span>
                    </li>
                    <li style={{ flexBasis: '50%', fontSize: '1.4rem', lineHeight: 1.6, marginBottom: '12px', position: 'relative', padding: '0 24px' }}>
                        <FontAwesomeIcon className='text-green-400 text-sm absolute left-0 top-3' icon={faCheck} />
                        <span className='text-sm text-gray-400 ml-1'>Giải nhất nghiên cứu khoa học năm 2022 - 2024</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
