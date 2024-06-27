import React from 'react'
import Course from '../_components/Course'

export default function page() {
  return (
    <div className='pb-12' style={{ minWidth: 'auto', boxSizing: 'border-box', margin: '0 auto', paddingRight: '20px', paddingLeft: '20px', maxWidth: '1240px' }}>
      <section>
        <div className='flex mt-10 mb-5 items-baseline'>
          <h2 style={{ fontSize: '18px', lineHeight: 1.4, fontWeight: 700 }}>Lập trình căn bản, cơ sở</h2>
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
    </div>

  )
}
