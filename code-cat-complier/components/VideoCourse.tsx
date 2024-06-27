"use client"
import ReactMarkdown from 'react-markdown'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faLock } from '@fortawesome/free-solid-svg-icons'
import { Play } from 'lucide-react'

const ContentCourses = [
    {
        title: "Giới thiệu về C++ và Cài đặt môi trường",
        lessons: [
            "Giới thiệu về C++, Cài đặt môi trường",
            "Lịch sử và ứng dụng của C++",
            "Cấu trúc chương trình C++",
            "Viết chương trình C++ đầu tiên"
        ]
    },
    {
        title: "Kiểu dữ liệu và toán tử",
        lessons: [
            "Các kiểu dữ liệu cơ bản trong C++",
            "Khai báo biến và hằng",
            "Các toán tử cơ bản",
            "Nhập/xuất dữ liệu: cin và cout"
        ]
    },
    {
        title: "Cấu trúc điều khiển và vòng lặp",
        lessons: [
            "Cấu trúc điều khiển: if, else, switch",
            "Vòng lặp: for, while, do-while",
            "Câu lệnh break và continue",
            "Cấu trúc điều khiển lồng nhau"
        ]
    },
    {
        title: "Hàm",
        lessons: [
            "Khái niệm về hàm trong C++",
            "Định nghĩa và gọi hàm",
            "Tham số và giá trị trả về",
            "Hàm đệ quy và ứng dụng"
        ]
    },
    {
        title: "Mảng và chuỗi",
        lessons: [
            "Giới thiệu về mảng trong C++",
            "Khai báo và sử dụng mảng một chiều",
            "Mảng hai chiều và mảng đa chiều",
            "Chuỗi ký tự và xử lý chuỗi"
        ]
    },
    {
        title: "Con trỏ",
        lessons: [
            "Khái niệm về con trỏ trong C++",
            "Khai báo và sử dụng con trỏ",
            "Con trỏ và mảng",
            "Con trỏ hàm và con trỏ void"
        ]
    },
    {
        title: "Lập trình hướng đối tượng (OOP)",
        lessons: [
            "Lập trình hướng đối tượng (OOP)",
            "Khái niệm về lớp và đối tượng",
            "Định nghĩa lớp và tạo đối tượng",
            "Các phương thức và thuộc tính của lớp"
        ]
    },
    {
        title: "Kế thừa và đa hình",
        lessons: [
            "Tính kế thừa trong OOP",
            "Đa hình và tính trừu tượng",
            "Nạp chồng hàm và nạp chồng toán tử",
            "Lớp cơ sở và lớp dẫn xuất"
        ]
    },
    {
        title: "Xử lý tập tin",
        lessons: [
            "Xử lý tập tin trong C++",
            "Đọc/ghi tập tin văn bản",
            "Đọc/ghi tập tin nhị phân",
            "Xử lý ngoại lệ và lỗi tập tin"
        ]
    },
    {
        title: "Quản lý bộ nhớ động",
        lessons: [
            "Quản lý bộ nhớ động",
            "Toán tử new và delete",
            "Con trỏ thông minh (smart pointers)",
            "Quản lý tài nguyên và RAII"
        ]
    }
];




export default function VideoCourse() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [open, setOpen] = useState<Number[]>([])

    const toggleNumberInOpen = (number: number) => {
        setOpen(prevOpen => 
          prevOpen.includes(number) ? prevOpen.filter(n => n !== number) : [...prevOpen, number]
        );
      };
    const getNumberContent = (indexGive:number) => {
        let contentNumber = 0
        ContentCourses.map((item,index) => {
            if(indexGive > index){
                contentNumber += item.lessons.length
            }
            
        })
        return contentNumber + 1
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3 '>
            <div className='col-span-2 p-3 border-gray-700 border rounded-md'>
                <div className='ml-6'>
                    <h2 className='text-[20px] font-semibold'>Khóa học C/C++ cơ bản</h2>
                    <h2 className='text-gray-500 text-[14px] mb-3'>Cao Thị Luyên</h2>
                    <iframe className='rounded-md' width="900" height="550" src="https://www.youtube.com/embed/DftPnavWAM8" allowFullScreen></iframe>
                    <h2 className='mt-5 text-[17px] font-semibold'>About this course</h2>
                    <div>
                        <ReactMarkdown className='text-[13px] font-light mt-2 leading-7' children={'Xin chao'} />
                    </div>

                </div>
            </div>
            <div>
                {/*<div className='p-3 text-center rounded-sm bg-slate-700 flex flex-col gap-3'>
                    <h2 className='text-[22px] font-bold text-white'>Enroll to the Course</h2>
                    <h2 className='text-white font-light'>Enroll Now to Start Learning and Building the Project</h2>
                    <Button className='bg-white text-slate-700 hover:bg-white hover:text-gray-500'>Enroll Now</Button>
                </div>*/}
                <div className='p-3 bg-slate-500 rounded-sm overflow-auto h-[720px]'>
                    <h2>Nội dung bài học</h2>
                    {
                        ContentCourses.map((item, index) => {
                            return <div>
                                <h2 onClick={() => toggleNumberInOpen(index)} className={`p-2 text-[14px] flex justify-between items-center text-slate-700 font-medium
                            border rounded-sm px-4 cursor-pointer m-2 hover:bg-gray-200 hover:text-gray-500 ${activeIndex == 0 && 'bg-primary text-slate-700'}`}>
                                    {index + 1} . {item.title}
                                    {open.includes(index) ? <FontAwesomeIcon className='h-4 w-4' icon={faAngleDown} /> : <FontAwesomeIcon className='h-4 w-4' icon={faAngleUp} /> }
                                </h2>
                                {open.includes(index) &&
                                    item.lessons.map((lesson,indexLesson) => {
                                        return <h2 className={`p-2 pl-10 text-[14px] flex justify-between items-center text-slate-700 font-medium
                                            border rounded-sm px-4 cursor-pointer m-2 hover:bg-gray-200 hover:text-gray-900 ${activeIndex == 0 && 'bg-primary text-slate-700'}`}>
                                            {index == 0 ? index + 1 + indexLesson : getNumberContent(index) + indexLesson} . { lesson}
                                            {activeIndex == indexLesson + index ? <Play className='h-4 w-4' /> : <FontAwesomeIcon className='h-4 w-4' icon={faLock} />}
                                        </h2>
                                    })
                                }

                            </div>
                        })
                    }

                </div>
            </div>
        </div>
    )
}
