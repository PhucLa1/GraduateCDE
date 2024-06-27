"use client"
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV008",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV009",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV010",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV011",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV012",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV013",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV014",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV015",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV016",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV017",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV018",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV019",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV020",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV021",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV022",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV023",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV024",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV025",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV026",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV027",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV028",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV029",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV030",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV031",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV032",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV033",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV034",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV035",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV036",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV037",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV038",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV039",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV040",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV041",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV042",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]
export default function ExerciseInfo() {
    const [currentPage, setCurrentPage] = useState(1)
    const [rows, setRows] = useState(5)
    const totalRecords = invoices.length
    let numberPages = Math.ceil(totalRecords / rows)
    console.log(totalRecords, numberPages)
    let numberPagesArray = [];

    for (let i = 0; i < numberPages; i++) {
        numberPagesArray.push(i + 1);
    }

    let firstPage = currentPage < numberPages - 3 ? currentPage - 1 : numberPages - 5
    let thirdPage = currentPage < numberPages - 3 ? currentPage + 2 : numberPages - 2
    return (
        <div style={{ border: '1px solid #3a3a40', borderRadius: '1rem', background: '#121418', padding: '1.5rem', minWidth: 'auto', maxWidth: '790px', width: '100%', margin: '0px', boxSizing: 'border-box', marginBottom: '30px' }}>
            <div className='flex items-center justify-between mb-2'>
                <h3 className='my-0' style={{ fontSize: '18px', lineHeight: 1.4, fontWeight: 700 }}>Luyện tập </h3>
                <span className='text-sm text-gray-400'>
                    Tổng điểm : <strong className='text-sm text-slate-50'>150</strong>
                </span>
            </div>
            <div className='rounded-xl grid lg:grid-cols-3 py-4'>
                <div className='flex items-center justify-center gap-3 py-4 px-2 border-r'>
                    <div className='bg-[linear-gradient(201.18deg,#ACFBB4_3.14%,#E3FBE8_54.54%)] w-[78px] flex-none h-[78px] text-[32px] flex items-center justify-center font-[900] rounded-full border' style={{ color: 'rgb(20, 151, 8)', borderColor: 'rgb(102, 210, 75)' }}>0</div>
                    <div className='flex flex-col gap-2 justify-center'>
                        <div className='font-[800]' style={{ color: 'rgb(20, 151, 8)', borderColor: 'rgb(102, 210, 75)' }}>Đơn giản</div>
                        <div className='flex items-center gap-1'>
                            <FontAwesomeIcon icon={faHeart} />
                            <div className='text-slate-50 font-[900]'>0</div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-3 py-4 px-2 border-r'>
                    <div className='bg-[linear-gradient(201.18deg,#FEC28B_3.14%,#FFFBF7_86.04%)] w-[78px] flex-none h-[78px] text-[32px] flex items-center justify-center font-[900] rounded-full border' style={{ color: 'rgb(255,122,0)', borderColor: 'rgb(250,165,118)' }}>0</div>
                    <div className='flex flex-col gap-2 justify-center'>
                        <div className='font-[800]' style={{ color: 'rgb(255,122,0)', borderColor: 'rgb(250,165,118)' }}>Trung bình</div>
                        <div className='flex items-center gap-1'>
                            <FontAwesomeIcon icon={faHeart} />
                            <div className='text-slate-50 font-[900]'>0</div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-3 py-4 px-2 border-r'>
                    <div className='bg-[linear-gradient(201.18deg,#FFBDBD_3.14%,#FFFFFF_86.04%)] w-[78px] flex-none h-[78px] text-[32px] flex items-center justify-center font-[900] rounded-full border' style={{ color: 'rgb(255,0,0)', borderColor: 'rgb(238, 125, 125)' }}>0</div>
                    <div className='flex flex-col gap-2 justify-center'>
                        <div className='font-[800]' style={{ color: 'rgb(255,0,0)', borderColor: 'rgb(238, 125, 125)' }}>Đơn giản</div>
                        <div className='flex items-center gap-1'>
                            <FontAwesomeIcon icon={faHeart} />
                            <div className='text-slate-50 font-[900]'>0</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border rounded-md shadow-md mt-5'>
                <div className='font-semibold px-5 py-4'>Đã tham gia (1)</div>
                <div className='flex flex-col border-b border-b-[#323030] mb-4'>
                    <Link href='#' className='border-t border-t-[#323030]'>
                        <div className='grid gap-4 lg:grid-cols-[auto_120px_110px_110px] items-center py-3 px-5'>
                            <div className='text-slate-50'>Bài toán cái cây</div>
                            <div className='flex lg:justify-center'>
                                <div className='text-xs h-[21px] font-semibold w-fit px-2 rounded-[11px] text-white flex items-center justify-center capitalize bg-[#faa05e]' style={{ gap: '0.0625rem', WebkitBoxAlign: 'center' }}>Trung bình</div>
                            </div>
                            <div className='lg:text-center'>12/12</div>
                            <div className='flex gap-1 items-center'>
                                <FontAwesomeIcon icon={faHeart} />
                                <div className='text-slate-50 font-[700]'>150/150</div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div>
                    <Pagination className="rounded-md w-2/3 ml-28 mt-2">
                        <PaginationContent>
                            {
                                currentPage > 1 && < PaginationItem onClick={() => setCurrentPage(currentPage - 1)}>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                            }
                            {
                                numberPagesArray.slice(firstPage, thirdPage).map((page) => {
                                    if (currentPage == page) {
                                        return <PaginationItem onClick={() => setCurrentPage(page)} key={page}>
                                            <PaginationLink isActive href="#">{page}</PaginationLink>
                                        </PaginationItem>
                                    }
                                    else {
                                        return <PaginationItem onClick={() => setCurrentPage(page)} key={page}>
                                            <PaginationLink href="#">{page}</PaginationLink>
                                        </PaginationItem>
                                    }
                                })

                            }

                            {
                                numberPages > 3 && currentPage < numberPages - 4 && <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                            }
                            {
                                numberPagesArray.slice(numberPages - 2, numberPages + 1).map((page) => {
                                    if (currentPage == page) {
                                        return <PaginationItem onClick={() => setCurrentPage(page)} key={page}>
                                            <PaginationLink isActive href="#">{page}</PaginationLink>
                                        </PaginationItem>
                                    }
                                    else {
                                        return <PaginationItem onClick={() => setCurrentPage(page)} key={page}>
                                            <PaginationLink href="#">{page}</PaginationLink>
                                        </PaginationItem>
                                    }
                                })
                            }
                            {
                                currentPage != numberPages && invoices.length != 0 && <PaginationItem onClick={() => setCurrentPage(currentPage + 1)}>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            }
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </div>
    )
}
