"use client"
import React, { useState } from 'react'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Input } from "@/components/ui/input"

export default function page() {
    const [otp, setOtp] = useState(false)
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className='rounded-lg border bg-card text-card-foreground shadow-sm'>
                <div className='flex flex-col p-6 space-y-1'>
                    <h3 className='font-semibold tracking-tight text-2xl'>Quên mật khẩu</h3>
                    <p className='text-sm text-muted-foreground'>Nhập email để chúng tôi có thể gửi OTP cho bạn</p>
                </div>
                <div className='p-6 pt-0 grid gap-4'>
                    <div className='grid gap-2'>
                        <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' htmlFor="">Email </label>
                        <Input placeholder='212641182' />
                    </div>
                    {otp && <div className='grid gap-2'>
                        <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' htmlFor="">Nhập mã OTP vừa được gửi </label>
                        <InputOTP maxLength={6}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>}
                </div>
                <div className='p-6 pt-0 grid gap-4'>
                    <div className='relative'>
                        <div className='absolute inset-0 flex items-center'>
                            <span className='w-full border-t'></span>
                        </div>
                        <div className='relative flex justify-center text-xs uppercase'>
                            <span className='bg-background px-2 text-muted-foreground'>Chưa nhận được OTP <span className='text-slate-50 cursor-pointer'>Nhấn để gửi lại</span></span>
                        </div>
                    </div>
                </div>
                <div className='flex items-center p-6 pt-0 justify-center'>
                    <button onClick={() => setOtp(true)} className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2'>{otp ? 'Tìm lại mật khẩu' :'Gửi OTP đến email'}</button>
                </div>
            </div>
        </div>
    )
}
