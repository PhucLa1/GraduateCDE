import React from 'react'

type Props = {
  id:number,
  teacher:string,
  name:string,
  complete:number
}

export default function CoursePrepare({id,teacher,name,complete} : Props) {
  return (
    <div className='relative '>
      <div className='h-full '>
        <div className='transition-all hover:-translate-y-1.5 hover:shadow-lg hover:bg-gray-500 bg-[#1f202a] hover:cursor-pointer' style={{ padding: '30px', transition: 'background-color .1s ease-in-out', border: '1px solid #121418!important', borderRadius: '1rem', boxShadow: 'none!important' }}>
          <h2 style={{ color: '#c9c9cf', marginBottom: '20px', opacity: .75, textTransform: 'uppercase', lineHeight: 1.4, fontWeight: 400, letterSpacing: '.6px', fontSize: '12px' }}>{teacher}</h2>
          <div>
            <h3 style={{ marginBottom: '15px', color: '#d6d7e4', fontWeight: 700, fontSize: '26px', lineHeight: 1.2 }}>{name}</h3>
            <div style={{ color: 'var(#9091a8,#738f93)', letterSpacing: 0, fontSize: '13px', lineHeight: 1.5, fontWeight: 400 }}>
              <div style={{ background: '#2e3441', minWidth: 'auto', position: 'relative', width: '100%', height: '5px', fontWeight: 400 }}>
                <div className='absolute h-full' style={{ top: 0, left: 0, transition: 'all .2s ease', background: '#eef4fc', width:`${complete}%` }}></div>
              </div>
              <div style={{ fontWeight: 400, marginTop: '20px', letterSpacing: 0, fontSize: '13px', lineHeight: 1.5, color: 'var(#c1c2d6,#738f93)' }}>
                <span style={{ color: 'var(#eef4fc)', fontWeight: 700, }}>{complete}%</span>
                <span> Hoàn thành khóa học để nhận chứng chỉ</span>
              </div>
            </div>
            <a className='hover:bg-green-700  bg-[#20d761]' style={{ marginTop: '20px', height: '3rem!important', display: 'inline-flex', boxSizing: 'border-box', padding: '.5rem .75rem', color: '#20d761', outline: 'none', border: 'none', borderRadius: '0.5rem', textDecoration: 'none', boxShadow: 'none', fontWeight: 600, fontSize: '.875rem', alignItems: 'center' }} href="">
              <div className='h-full flex items-center justify-center py-2'>
                <span className='text-sm hover:text-slate-300 text-gray-900'>Tiếp tục bài học</span>
              </div>
            </a>
          </div>

        </div>
      </div>
      <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '110px' }}>
        <div className='relative h-full'>
          <div className='ui-badge-wrap'>
            <style>
              {`
          .ui-badge-wrap::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        `}
            </style>
            <img src="./logo/cross.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
