import Link from 'next/link'
import React from 'react'
export default function Course() {
    return (
        <div className='transition-all hover:bg-gray-500 bg-[#1f202a] hover:-translate-y-4 hover:shadow-lg hover:cursor-pointer' style={{
            border: '1px solid #1f202a', borderRadius: '1rem', boxShadow: 'none',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxSizing: 'border-box',
            padding: '30px',
            minHeight: '183px',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            transition: 'background 0.1s ease-in-out 0s'
        }}>
            <h3 style={{
                overflow: 'hidden',
                maxHeight: '72.8px',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                position: 'relative',
                zIndex: 1,
                color: 'rgb(14, 20, 30)',
                fontWeight: 700,
                fontSize: '20px'
            }}>
                <span style={{
                    paddingRight: '5px',
                    color: '#eef4fc',
                    display: 'inline',
                    verticalAlign: 'middle',
                    lineHeight: '1.4',
                    fontWeight: 600
                }}>Problem Solving (Basic)</span>
            </h3>
            <div style={{ display: 'inline' }}>
                <h2 style={{ color: '#c9c9cf', marginBottom: '40px', opacity: .75, textTransform: 'uppercase', lineHeight: 1.4, fontWeight: 400, letterSpacing: '.6px', fontSize: '12px' }}>Cao Thị Luyên</h2>
            </div>
            <Link href='/course/123' className='hover:bg-slate-700 border border-gray-300 rounded-md p-2' style={{}}>Xem khóa học</Link>

            <img style={{
                position: 'absolute',
                right: '-10%',
                bottom: '0px',
                height: '85%',
                opacity: '0.1',
                pointerEvents: 'none'
            }} src="https://hrcdn.net/s3_pub/hr-assets/dashboard/ProblemSolving.svg" alt="" />
        </div>
    )
}
