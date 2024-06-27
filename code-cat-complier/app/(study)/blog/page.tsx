import { faHeadSideCough } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import Blog from './_components/Blog'
import Filter from './_components/Filter'

export default function page() {
    return (
        <div style={{ flexGrow: 1 }}>
            <article style={{ minWidth: 'auto', fontWeight: 400, lineHeight: '1.2em', marginTop: '2em' }}>
                <div style={{ display: 'flex', boxSizing: 'border-box', margin: '0 auto', paddingRight: '5px', paddingLeft: '5px', maxWidth: '1320px', minWidth: 'auto' }}>
                    <div className='flex w-full flex-col' style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                        <div className='relative mx-auto w-full'>
                            <span className='flex flex-1 items-center flex-row mb-8'>
                                <Filter/>
                            </span>
                            <div className='grid mt-2 gap-8 grid-cols-4 mb-8'>
                                <Blog/>
                                <Blog/>
                                <Blog/>
                                <Blog/>
                                <Blog/>
                                <Blog/>
                                <Blog/>
                                <Blog/>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
