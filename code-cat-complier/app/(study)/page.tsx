import React from 'react'
import Contest from '@/app/(study)/_components/Contest';
import CoursePrepare from './_components/CoursePrepare';
import Course from './_components/Course';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUserTie } from '@fortawesome/free-solid-svg-icons';
import Exercise from './_components/Exercise';
import Blog from './_components/Blog';
const CoursePrepareData = [
  {
    id: 1,
    teacher: 'Nguyễn Xuân Tích',
    name: 'Khóa học C/C++ căn bản',
    complete: 10
  },
  {
    id: 2,
    teacher: 'Cao Thị Luyên',
    name: 'Khóa học JavaScript nâng cao',
    complete: 25
  },
  {
    id: 3,
    teacher: 'Bùi Xuân Huấn',
    name: 'Khóa học Python căn bản',
    complete: 15
  },
  {
    id: 4,
    teacher: 'Phạm Huy Hoàng',
    name: 'Khóa học React từ cơ bản đến nâng cao',
    complete: 30
  }
];
export default function HomePage() {
  
  return (
    <div className='pb-12' style={{ minWidth: 'auto', boxSizing: 'border-box', margin: '0 auto', paddingRight: '20px', paddingLeft: '20px', maxWidth: '1240px' }}>
      <section className='section-prepare'>
        <style>
          {`
          .section-prepare {
            --dashboard-item-columns: 2;
            --dashboard-column-gap: 40px;
          }
        `}
        </style>
        <div className='flex mt-10 mb-5 items-baseline'>
          <h2 style={{ fontWeight: 700, fontSize: '18px', lineHeight: 1.4 }}>Các khóa học đã học</h2>
        </div>
        <div style={{ display: 'grid', gap: '40px 30px', gridTemplateColumns: 'repeat(2, 1fr)', paddingBottom: '10px', }}>
          {
            CoursePrepareData.map((item) => {
              return <CoursePrepare key={item.id} teacher={item.teacher} name={item.name} complete={item.complete} id={item.id} />
            })
          }
        </div>
      </section>
      <section>
        <div className='flex mt-10 mb-5 items-baseline'>
          <h2 style={{ fontSize: '18px', lineHeight: 1.4, fontWeight: 700 }}>Các khóa học được gợi ý</h2>
        </div>
        <div style={{
          display: 'grid',
          gap: '40px 50px', // Thiết lập row gap và column gap
          gridTemplateColumns: 'repeat(3, 1fr)', // Thiết lập 2 cột với kích thước 1fr
          paddingBottom: '10px',
        }}>
          <Course />
          <Course />
          <Course />
          <Course />
        </div>
      </section>
      <section className='secton-contest'>
        <style>
          {`
          .secton-contest {
            --dashboard-item-columns: 2;
          }
        `}
        </style>
        <div className='flex mt-10 mb-5 items-baseline'>
          <h2 style={{ fontSize: '18px', lineHeight: 1.4, fontWeight: 700 }}>Các cuộc thi lập trình trên SFIT - UTC</h2>
        </div>
        <div style={{
          display: 'grid',
          gap: '40px 50px', // Thiết lập row gap và column gap
          gridTemplateColumns: 'repeat(2, 1fr)', // Thiết lập 2 cột với kích thước 1fr
          paddingBottom: '10px',
        }}>
          <Contest />
          <Contest />
          <Contest />
        </div>
      </section>
      <section className='mt-10' style={{ boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '92.5rem', marginLeft: 'auto', marginRight: 'auto', width: '100%', paddingLeft: '1.25rem', paddingRight: '1.25rem' }}>
          <div className=' grid lg:grid-cols-[7fr_5fr] lg:gap-8 gap-5'>
            <div className='flex flex-col h-full'>
              <div className='flex gap-5 flex-wrap justify-between items-center'>
                <h3 className='my-0' style={{ fontSize: '18px', lineHeight: 1.4, fontWeight: 700 }}>Luyện tập hàng ngày</h3>
                <Link href='#'>Xem tất cả</Link>
              </div>
              <div className='mt-5 p-5 rounded-md flex-auto border border-gray-700'>
                <div className='grid lg:grid-cols-3 gap-5'>
                  <div style={{ background: '#1f202a' }} className='lg:text-[20px] border border-dashed p-4 flex flex-col rounded-md border-gray-700'>
                    <div className='font-semibold text-[#7bc043]'>0/852</div>
                    <div>Đơn giản</div>
                  </div>
                  <div style={{ background: '#1f202a' }} className='lg:text-[20px] border border-dashed p-4 flex flex-col rounded-md border-gray-700'>
                    <div className='font-semibold text-[#faa05e]'>0/514</div>
                    <div>Trung bình</div>
                  </div>
                  <div style={{ background: '#1f202a' }} className='lg:text-[20px] border border-dashed p-4 flex flex-col rounded-md border-gray-700'>
                    <div className='font-semibold text-[#e64f4a]'>0/112</div>
                    <div>Khó</div>
                  </div>
                </div>
                <div className='grid lg:grid-cols-3 lg:mt-7 mt-5 lg:gap-7 gap-5'>
                  <Exercise />
                  <Exercise />
                  <Exercise />
                </div>
              </div>
            </div>
            <div className='flex flex-col h-full'>
              <div className='flex gap-5 flex-wrap justify-between items-center'>
                <h3 className='my-0' style={{ fontSize: '18px', lineHeight: 1.4, fontWeight: 700 }}>Các bài viết</h3>
                <Link href='#'>Xem tất cả</Link>
              </div>
              <div className='mt-5 flex flex-col gap-3 border-gray-700 px-5 pt-5 rounded-md flex-auto border'>
                <Blog />
                <Blog />
                <Blog />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


