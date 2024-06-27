import React from 'react'
import ReactMarkdown from 'react-markdown'
export default function VideoContent() {
    return (
        <div className='ml-6'>
            <h2 className='text-[20px] font-semibold'>Khóa học C/C++ cơ bản</h2>
            <h2 className='text-gray-500 text-[14px] mb-3'>Cao Thị Luyên</h2>
            <iframe className='rounded-md' width="900" height="550" src="https://www.youtube.com/embed/DftPnavWAM8" allowFullScreen></iframe>
            <h2 className='mt-5 text-[17px] font-semibold'>About this course</h2>
            <div>
                <ReactMarkdown className='text-[13px] font-light mt-2 leading-7' children={'Xin chao'} />
            </div>

        </div>
    )
}
