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
import Contest from '../../_components/Contest'
export default function ContestParticipate() {
    return (
        <div >
            <Carousel style={{ border: '1px solid #3a3a40', borderRadius: '1rem', background: '#121418', padding: '1.5rem', minWidth: 'auto', maxWidth: '790px', width: '100%', margin: '0px', boxSizing: 'border-box', marginBottom: '30px' }} className="w-full max-w-sm">
                <div className='flex items-center justify-between mb-2'>
                    <h3 className='my-0' style={{ fontSize: '18px', lineHeight: 1.4, fontWeight: 700 }}>Các cuộc thi tham gia </h3>
                </div>
                <CarouselContent className="-ml-1 mt-4">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/2 ml-4">
                            <Contest/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='ml-8' />
                <CarouselNext className='mr-8' />
            </Carousel>
        </div>
    )
}
