"use client"
import { faBookBookmark, faBookmark, faL } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'

export default function ExerciseIntro() {
    const [save, setSave] = useState(false)

    return (
        //nếu loading là true thì cho hiện component lading
        <div style={{ margin: '.5rem 0', transition: 'all .2s ease-in-out', border: '1px solid #1f202a', borderRadius: '1rem', backgroundColor: '#111827', boxShadow: 'none', minWidth: 'auto', boxSizing: 'border-box', padding: '10px' }} className='bg-[#1f202a] cursor-pointer transition-all hover:bg-white hover:-translate-y-1.5 hover:shadow-lg'>
            <div>
                <article style={{
                    display: 'grid',
                    padding: '10px 20px',
                    gridTemplateColumns: '1fr 75px auto 175px',
                    gridTemplateRows: 'auto',
                    gridTemplateAreas: `
    "title . bookmark cta"
    "stat . bookmark cta"
  `,
                    columnGap: '10px',
                }}>
                    <h2 style={{
                        gridArea: 'title',
                        position: 'relative',
                        fontSize: '21px',
                        lineHeight: '1.4',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }} className='text-[#d6d7e4]'>Plus Minus</h2>
                    <div style={{ gridArea: 'bookmark', alignSelf: 'center' }}>
                        <button onClick={() => setSave(!save)} className={save == false ? 'hover:text-yellow-500 text-white' : 'hover:text-white text-yellow-500'} style={{
                            display: 'inline-flex',
                            boxSizing: 'border-box',
                            padding: '.5rem .75rem',
                            height: '2.25rem',
                            outline: 'none',
                            border: 'none',
                            borderRadius: '0.5rem',
                            boxShadow: 'none',
                            textDecoration: 'none',
                            fontWeight: 700,
                            fontSize: '.875rem',
                            lineHeight: '1.25rem',
                            cursor: 'pointer',
                            transition: 'all .2s ease-in-out 0s',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div className='flex items-center justify-center'>
                                <span style={{ order: 1 }} aria-hidden={false}>
                                    <FontAwesomeIcon icon={faBookmark} />
                                </span>
                            </div>
                        </button>
                    </div>
                    <div style={{
                        gridArea: 'stat',
                        alignSelf: 'end',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        fontSize: '14px',
                    }}>
                        <span style={{ paddingTop: '10px', paddingRight: '30px' }}>
                            <span className='text-[#c1c2d6]'>Attempt : <span className='text-white'>33990</span> </span>
                        </span>
                        <span style={{ paddingTop: '10px', paddingRight: '30px' }}>
                            <span className='text-[#c1c2d6]'>Success Rate:  <span className='text-white'>92.60%</span> </span>
                        </span>
                        <span className='flex items-center' style={{ paddingTop: '10px' }}>
                            <span className='text-[#c1c2d6]'>Rate : </span>
                            <div>
                                <Link href='#' style={{
                                    display: 'inline-flex',
                                    boxSizing: 'border-box',
                                    padding: '.5rem .75rem',
                                    height: '2.25rem',
                                    outline: 'none',
                                    border: 'none',
                                    borderRadius: '0.5rem',
                                    boxShadow: 'none',
                                    textDecoration: 'none',
                                    fontWeight: 700,
                                    fontSize: '.875rem',
                                    lineHeight: '1.25rem',
                                    cursor: 'pointer',
                                    transition: 'all .2s ease-in-out 0s',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#111827',
                                    color: '',
                                    wordSpacing: 'normal'
                                }}>
                                    <div className='flex items-center justify-center' style={{ lineHeight: 1.5, height: '100%' }}>
                                        <span className='text-[#7bc043]' style={{ order: 1 }}>Easy</span>
                                    </div>
                                </Link>
                            </div>
                        </span>
                    </div>
                    <Link
                        href="/exercises/1"
                        className="hover:bg-[#7bc043] bg-transparent"
                        style={{
                            gridArea: 'cta',
                            alignSelf: 'center',
                            border: '1px solid #63646f',
                            borderRadius: '0.5rem',
                            color: '#fff',
                            display: 'inline-flex',
                            boxSizing: 'border-box',
                            padding: '.5rem .75rem',
                            height: '2.25rem',
                            outline: 'none',
                            boxShadow: 'none',
                            textDecoration: 'none',
                            fontWeight: 700,
                            fontSize: '.875rem',
                            lineHeight: '1.25rem',
                            cursor: 'pointer',
                            transition: 'all .2s ease-in-out 0s',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <div className="flex items-center justify-center h-full">
                            <span style={{ order: 1 }}>Solve Challenge</span>
                        </div>
                    </Link>
                </article>
            </div>
        </div>
    )
}
