import React from 'react'
import { Button } from '../../../components/ui/button'

export default function Contest() {
    return (
        <div className='transition-all hover:bg-gray-500 bg-[#1f202a] hover:-translate-y-4 hover:shadow-lg hover:cursor-pointer' style={{ position: 'relative', overflow: 'hidden', padding: '25px', border: '1px solid #1f202a', borderRadius: '1rem', background: '#1f202a', boxShadow: 'none' }}>
            <div>
                <h3>
                    <a style={{
                        color: '#d6d7e4',
                        fontWeight: 700,
                        fontSize: '18px',
                        lineHeight: '1.4'
                    }} href="">
                        <span>1 Week Preparation Kit</span>
                    </a>
                </h3>
                <div style={{ letterSpacing: 0.5 }}>
                    <span className='text-gray-400 text-sm'>Số người tham gia : <strong className='text-slate-100'>30</strong>, </span>
                    <span className='text-gray-400 text-sm'>Số lượng bài : <strong className='text-slate-100'>5</strong>, </span>
                    <span className='text-gray-400 text-sm'>Tỉ lệ AC : <strong className='text-slate-100'>86.68%</strong>, </span>
                </div>
                <Button className='mt-6' variant="outline">Tham gia cuộc thi</Button>
                <img style={{
                    position: 'absolute',
                    right: '-10px',
                    bottom: '-10px',
                    opacity: 0.4,
                    pointerEvents: 'none'
                }} src="https://hr-assets.s3.amazonaws.com/interview/one-week-preparation-kit.svg" alt="" />
            </div>
        </div>
    )
}
