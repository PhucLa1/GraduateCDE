"use client"
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '../../../../../components/ui/button';
import { comment } from '@/model/comment'
import { comments } from '@/config/datacomment';

export default function TextEditor() {
    const [value, setValue] = useState('');
    const [isComment, setIsComment] = useState(false)
    const [comment, setComment] = useState<comment[]>(comments)
    const AddComment = (data: comment) => {
        setValue('')
        setComment([data, ...comment]);
        setIsComment(false)
    }
    return (
        <div className='h-full'>
            <div className='flex items-start ml-5 mt-5'>
                <Avatar className='mt-2'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {isComment ? <div className='w-full'>
                    <ReactQuill placeholder='Vui lòng nhập bình luận' theme="snow" value={value} onChange={setValue} className='h-[150px] w-full pl-3 pr-2' />
                    <div className=' w-2/5 h-[50px] rounded-md mt-12 ml-auto mr-2 flex items-end justify-between'>
                        <Button onClick={() => setIsComment(false)} className='bg-red-900 w-1/3 rounded-2xl' variant="destructive">Hủy</Button>
                        <Button onClick={() => AddComment({ name: "Phuc Hong La", avatar: "/logo/cross.png", content: value })} className='bg-green-900 w-3/4 ml-1 rounded-2xl' variant="secondary">Bình luận</Button>
                    </div>
                </div> : <div onClick={() => setIsComment(true)} className='ml-4 mt-5 border-b border-gray'>
                    <span className='text-sm text-gray-400'>Bạn có muốn bình luận gì về bài này không ?</span>
                </div>}
            </div>
            <div className='border border-gray rounded-md mt-5 h-[550px] w-full ml-2 mr-2 overflow-y-auto'>
                {comment.map((item) => {
                    return <div className='mb-2'>
                        <div className="flex items-center justify-start ml-2 my-4">
                            <Avatar className='mt-2'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span className='text-sm text-gray-400 my-2 mx-2'>{item.name}</span>
                        </div>
                        <div className='border border-gray rounded-md bg-gray-700 text-sm ml-1 mr-4 mt-2 pb-3 pl-3'>
                            <div dangerouslySetInnerHTML={{__html: item.content}} className='leading-normal mt-3'></div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
