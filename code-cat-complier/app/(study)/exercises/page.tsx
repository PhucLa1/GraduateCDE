import React from 'react'
import ExerciseIntro from './_components/ExerciseIntro'
import TagFilter from './_components/TagFilter'

export default function page() {
  return (
    <div className='pb-12' style={{ minWidth: 'auto', boxSizing: 'border-box', margin: '0 auto', paddingRight: '20px', paddingLeft: '20px', maxWidth: '1240px' }}>
      <div className='' style={{ boxSizing: 'inherit', display: 'flex', position: 'relative' }}>
        <section style={{ boxSizing: 'border-box', flex: 1, marginBottom: '30px', minWidth: 0 }}>
          <div className='flex mt-10 mb-5 items-baseline'>
            <h2 style={{ fontSize: '18px', lineHeight: 1.4, fontWeight: 700 }}>Luyện tập</h2>
          </div>
          <ExerciseIntro />
        </section>
        <section style={{ boxSizing: 'border-box', margin: '0 0 30px 30px', width: '280px' }}>
          <div style={{ boxSizing: 'border-box' }}>
            <div style={{ position: 'relative', transform: 'translate3d(0px, 0px, 0px)' }}>
              <div style={{ boxSizing: 'inherit' }}>
                <TagFilter />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
