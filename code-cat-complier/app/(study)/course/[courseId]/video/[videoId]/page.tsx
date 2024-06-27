"use client"

import React, { useState } from 'react'

import VideoContent from './_components/VideoContent'
import ListVideo from '../../_components/ListVideo';

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

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3 '>
            <div className='col-span-2 p-3 border-gray-700 border rounded-md'>
                <VideoContent />
            </div>
            <div>
                {/*<div className='p-3 text-center rounded-sm bg-slate-700 flex flex-col gap-3'>
                    <h2 className='text-[22px] font-bold text-white'>Enroll to the Course</h2>
                    <h2 className='text-white font-light'>Enroll Now to Start Learning and Building the Project</h2>
                    <Button className='bg-white text-slate-700 hover:bg-white hover:text-gray-500'>Enroll Now</Button>
                </div>*/}
                <div className='p-3 bg-slate-500 rounded-sm overflow-auto h-[720px]'>
                    <h2>Nội dung bài học</h2>
                    <ListVideo/>
                </div>
            </div>
        </div>
    )
}
