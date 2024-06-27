import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Required() {
    return (
        <section>
            <section className='w-full'>
                <ul style={{ flexDirection: 'column', display: 'flex', flexWrap: 'wrap', marginBottom: '10px', paddingLeft: '0', listStyleType: 'none' }}>
                    <li style={{ flexBasis: '50%', fontSize: '1.4rem', lineHeight: 1.6, marginBottom: '12px', position: 'relative', padding: '0 24px' }}>
                        <FontAwesomeIcon className='text-green-400 text-sm absolute left-0 top-3' icon={faCheck} />
                        <span className='text-sm text-gray-400 ml-1'>Được học kiến thức miễn phí với nội dung chất lượng hơn mất phí</span>
                    </li>
                    <li style={{ flexBasis: '50%', fontSize: '1.4rem', lineHeight: 1.6, marginBottom: '12px', position: 'relative', padding: '0 24px' }}>
                        <FontAwesomeIcon className='text-green-400 text-sm absolute left-0 top-3' icon={faCheck} />
                        <span className='text-sm text-gray-400 ml-1'>Được học kiến thức miễn phí với nội dung chất lượng hơn mất phí</span>
                    </li>
                </ul>
            </section>
        </section>
    )
}
