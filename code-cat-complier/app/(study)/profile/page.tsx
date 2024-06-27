

import React from 'react'
import Info from './_components.tsx/Info'
import Achievements from './_components.tsx/Achievements'
import Certificate from './_components.tsx/Certificate'
import CourseProgress from './_components.tsx/CourseProgress'
import ContestParticipate from './_components.tsx/ContestParticipate'
import ExerciseInfo from './_components.tsx/ExerciseInfo'

export default function page() {
  return (
    <div style={{ flexGrow: 1 }}>
      <article style={{ minWidth: 'auto', fontWeight: 400, lineHeight: '1.2em', marginTop: '2em' }}>
        <div style={{ display: 'flex', boxSizing: 'border-box', margin: '0 auto', paddingRight: '20px', paddingLeft: '20px', maxWidth: '1240px', minWidth: 'auto' }}>
          <div className='mb-12' style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: '2rem', boxSizing: 'border-box', width: '380px', alignSelf: 'flex-start', flexShrink: 0 }}>
            <Info />
            <Achievements />
            <Certificate />
          </div>
          <div style={{ flex: 1, marginLeft: '2rem' }}>
            <CourseProgress/>
            <ContestParticipate/>
            <ExerciseInfo/> 
          </div>
        </div>
      </article>
    </div>
  )
}
