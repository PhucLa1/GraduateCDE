import React from 'react'
import { Input } from "@/components/ui/input"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGit, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faBarcode } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
export default function page() {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className='rounded-lg border bg-card text-card-foreground shadow-sm'>
                <div className='flex flex-col p-6 space-y-1'>
                    <h3 className='font-semibold tracking-tight text-2xl'>Đăng nhập tài khoản</h3>
                    <p className='text-sm text-muted-foreground'>Nhập tài khoản để vào trang chủ</p>
                </div>
                <div className='p-6 pt-0 grid gap-4'>
                    <div className='grid grid-cols-2 gap-6'>
                        <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2'>
                            <FontAwesomeIcon className='mr-2 h-4 w-4' icon={faGoogle} />
                            <span>Google</span>
                        </button>
                        <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2'>
                            <FontAwesomeIcon className='mr-2 h-4 w-4' icon={faGithub} />
                            <span>Github</span>
                        </button>
                        <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2'>
                            <FontAwesomeIcon className='mr-2 h-4 w-4' icon={faFacebook} />
                            <span>Facebook</span>
                        </button>
                        <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2'>
                            <FontAwesomeIcon className='mr-2 h-4 w-4' icon={faBarcode} />
                            <span>Barcode</span>
                        </button>
                    </div>
                    <div className='relative'>
                        <div className='absolute inset-0 flex items-center'>
                            <span className='w-full border-t'></span>
                        </div>
                        <div className='relative flex justify-center text-xs uppercase'>
                            <span className='bg-background px-2 text-muted-foreground'>Hoặc tiếp tục với</span>
                        </div>
                    </div>
                    <div className='grid gap-2'>
                        <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' htmlFor="">Mã sinh viên </label>
                        <Input placeholder='212641182' />
                    </div>
                    <div className='grid gap-2'>
                        <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' htmlFor="">Mật khẩu  </label>
                        <Input type='password' placeholder='*******' />
                    </div>
                </div>
                <div className='flex items-center p-6 pt-0 justify-between'>
                <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2'><Link href='/forgot-pass'>Quên mật khẩu</Link></button>
                    <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2'>Đăng nhập</button>
                </div>
                <div className='p-6 pt-0 grid gap-4'>
                    <div className='relative'>
                        <div className='absolute inset-0 flex items-center'>
                            <span className='w-full border-t'></span>
                        </div>
                        <div className='relative flex justify-center text-xs uppercase'>
                            <span className='bg-background px-2 text-muted-foreground'>Chưa có tài khoản</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
