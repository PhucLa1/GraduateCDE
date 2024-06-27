import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import CoursePrepare from '../../_components/CoursePrepare'
export default function CourseProgress() {
    return (
        <div >
            <Carousel style={{ border: '1px solid #3a3a40', borderRadius: '1rem', background: '#121418', padding: '1.5rem', minWidth: 'auto', maxWidth: '790px', width: '100%', margin: '0px', boxSizing: 'border-box', marginBottom: '30px' }} className="w-full max-w-sm">
                <div className='flex items-center justify-between mb-2'>
                    <h3 className='my-0' style={{ fontSize: '18px', lineHeight: 1.4, fontWeight: 700 }}>Các khóa học </h3>
                    <div>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Chọn khóa học" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Chọn theo khóa</SelectLabel>
                                    <SelectItem value="apple">Đã đăng kí</SelectItem>
                                    <SelectItem value="banana">Đã hoàn thành</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <CarouselContent className="-ml-1 mt-4">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/1 lg:basis-1/2 ml-4">
                            <CoursePrepare id={0} teacher={'Cao Thị Luyên'} name={'Sử dụng AI'} complete={60} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='ml-8' />
                <CarouselNext className='mr-8' />
            </Carousel>
        </div>
    )
}
