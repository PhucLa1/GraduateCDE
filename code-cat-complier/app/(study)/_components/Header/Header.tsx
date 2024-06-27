"use client"
import React, { useState } from 'react'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faEnvelope, faBell, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'

const titleDes = [
  {
    title: "Khóa học",
    description: 'Lấy chứng chỉ'
  },
  {
    title: "Lập trình",
    description: 'Học lập trình'
  },
  {
    title: "Thị trường",
    description: 'Kiến thức thị trường'
  },
  {
    title: "Công nghệ",
    description: 'Cập nhật công nghệ mới'
  }
];

export default function Header() {
  const [open, setOpen] = useState(0)
  const [titleIndex, setTitleIndex] = useState(-1)
  console.log(open)
  return (
    <div>
      <div className='relative'>
        <nav className='h-[60px]' style={{ backgroundColor: '#0e141e' }}>
          <div className='flex items-center justify-between' style={{ padding: '0 48px' }}>
            <div>
              <ul className='flex items-center'>
                <li onClick={() => setTitleIndex(-1)} className='ml-0 mr-0 cursor-pointer list-none'>
                  <Link href="/" className='m-0 gap-5 flex items-center'>
                    <img className='mb-0 w-[34px] align-middle' src="/logo/utc.png" alt="" />
                  </Link>
                </li>
                <div style={{ margin: '0 20px', color: '#576871' }}>|</div>
                <li onClick={() => setTitleIndex(0)} className='cursor-pointer list-none'>
                  <Link href='/course' className={`text-sm ${titleIndex==0?'active':''} nav-link`}>Học tập</Link>
                </li>
                <li onClick={() => setTitleIndex(1)} className='cursor-pointer list-none'>
                  <Link href='/exercises' className={`text-sm ${titleIndex==1?'active':''} nav-link`}>Luyện tập</Link>
                </li>
                <li onClick={() => setTitleIndex(2)} className='cursor-pointer list-none'>
                  <span className={`text-sm ${titleIndex==2?'active':''} nav-link`}>Blog</span>
                </li>
                <li onClick={() => setTitleIndex(3)} className='cursor-pointer list-none'>
                  <span className={`text-sm ${titleIndex==3?'active':''} nav-link`}>Chứng chỉ</span>
                </li>
              </ul>
            </div>
            <div className='flex items-center float-right'>
              <ul className='float-none pr-10'>
                <li className='list-none relative'>
                  <div className='relative w-[240px]' style={{ transition: 'all .3s ease' }}>
                    <div>
                      <div className='relative'>
                        <div className='relative w-full rounded' style={{ background: '#39424e' }}>
                          <input placeholder='Tìm kiếm' autoComplete='off' type="text" className='ac-input' name="" id="" />
                        </div>
                      </div>
                      <FontAwesomeIcon className='text-xs absolute top-1/2 left-[5px] z-[1] p-0 w-[20px] h-[20px] transform -translate-y-1/2' icon={faSearch} />
                    </div>
                  </div>
                </li>
              </ul>
              <ul className='float-none flex mt-0 items-center gap-10 ml-5'>
                <li className='list-none '>
                  <button className='relative flex h-[20px] items-center active:'>
                    <FontAwesomeIcon onClick={() => setOpen(open == 1 ? 0 : 1)} className='w-[20px] text-slate-200' icon={faEnvelope} />
                  </button>
                  <div style={{ right: '13%' }} id='message' role='menu' tabIndex={-1} className={`${open == 1 ? '' : 'hidden'} dropdown-menu overflow-auto max-h-[500px]`}>
                    <header className='text-center pb-4 pt-4 bg-gray-800' style={{ color: '#fff' }}>
                      <strong className='text-sm text-slate-100'>Tin nhắn</strong>
                    </header>
                    <div id='notify_messages'>
                      <div className='overflow-auto max-h-[70vh]'>
                        <div className='empty-msg text-center text-gray-800'>Bạn không có tin nhắn chưa đọc</div>
                      </div>
                    </div>
                    <footer className='show-all'>
                      <a href='' className="block b-0 py-4 bg-none text-sm hover:underline" style={{ color: '#576871' }}>Hiện tất cả tin nhắn</a>
                    </footer>
                  </div>
                </li>
                <li className='list-none '>
                  <button className='relative flex h-[20px] items-center'>
                    <FontAwesomeIcon onClick={() => setOpen(open == 2 ? 0 : 2)} className='w-[20px] text-slate-200' icon={faBell} />
                  </button>
                  <div style={{ right: '10%' }} id='notification' role='menu' tabIndex={-1} className={`${open == 2 ? '' : 'hidden'} dropdown-menu overflow-auto max-h-[500px]`}>
                    <header className='text-center pb-4 pt-4 bg-gray-800' style={{ color: '#fff' }}>
                      <strong className='text-sm text-slate-100'>Thông báo</strong>
                    </header>
                    <div id='notify_notification'>
                      <div className='overflow-auto max-h-[70vh]'>
                        <div className='empty-msg text-center text-gray-800'>Bạn không có thông báo chưa đọc</div>
                      </div>
                    </div>
                    <footer className='show-all'>
                      <a href='' className="block b-0 py-4 bg-none text-sm hover:underline" style={{ color: '#576871' }}>Hiện tất cả thông báo</a>
                    </footer>
                  </div>
                </li>
                <li style={{ margin: '0 5px', color: '#b7c9cc' }} className='list-none '>|</li>
                <li style={{ margin: '0 5px', color: '#b7c9cc' }} className='list-none '>
                  <DropdownMenu>
                    <DropdownMenuTrigger onClick={() => setOpen(open == 3 ? 0 : 3)} className='hover:cursor-pointer' asChild>
                      <div className='flex items-center justify-start'>
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <FontAwesomeIcon className='pl-2' icon={faAngleDown} />
                      </div>
                    </DropdownMenuTrigger>
                    {open == 3 && <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <User className="mr-2 h-4 w-4" />
                          <Link href='/profile'>Profile</Link>
                          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <CreditCard className="mr-2 h-4 w-4" />
                          <span>Billing</span>
                          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Settings className="mr-2 h-4 w-4" />
                          <span>Settings</span>
                          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Keyboard className="mr-2 h-4 w-4" />
                          <span>Keyboard shortcuts</span>
                          <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <Users className="mr-2 h-4 w-4" />
                          <span>Team</span>
                        </DropdownMenuItem>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger>
                            <UserPlus className="mr-2 h-4 w-4" />
                            <span>Invite users</span>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                              <DropdownMenuItem>
                                <Mail className="mr-2 h-4 w-4" />
                                <span>Email</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <MessageSquare className="mr-2 h-4 w-4" />
                                <span>Message</span>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <PlusCircle className="mr-2 h-4 w-4" />
                                <span>More...</span>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                        <DropdownMenuItem>
                          <Plus className="mr-2 h-4 w-4" />
                          <span>New Team</span>
                          <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Github className="mr-2 h-4 w-4" />
                        <span>GitHub</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <LifeBuoy className="mr-2 h-4 w-4" />
                        <span>Support</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem disabled>
                        <Cloud className="mr-2 h-4 w-4" />
                        <span>API</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuContent>}
                  </DropdownMenu>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {titleIndex != -1 &&<header style={{ borderBottom: '1px solid #1f202a', backgroundColor: '#1f202a', display: 'block' }}>
        <div className='box-border mx-auto px-5 max-w-[1240px]'>
          <div className='flex items-center justify-between min-h-[60px]'>
            <div style={{ flex: '0 1 75%', padding: '20px 0', minWidth: 0 }}>
              <ol style={{ color: 'var(--c1c2d6, #738f93)', letterSpacing: '0', fontSize: '13px', lineHeight: '1.5', fontWeight: 400 }}>
                <li style={{ opacity: 0.6 }}>
                  <span style={{ fontSize: '13px' }} className=' text-gray-500 align-middle'>{titleDes[titleIndex].title}</span>
                  <meta itemProp="position" content="1"></meta>
                </li>
              </ol>
              <div style={{ fontSize: '40px', fontWeight: 400, letterSpacing: '-2px' }}>
                <h1 style={{ fontWeight: 500, margin: 0, letterSpacing: 0, fontSize: '26px', lineHeight: 1.4, fontFamily: 'Satoshi sans-serif' }} className=''>{titleDes[titleIndex].description}</h1>
              </div>
            </div>
            <div style={{ flex: '0 0 auto', paddingLeft: '10px' }}>
              <div className='h-[100px] flex items-end'>
                <a className='pb-4 cursor-pointer text-sm font-normal ' href="" style={{ color:'#6687ff' }}>Bookmarked Challenges</a>
              </div>
            </div>
          </div>
        </div>
      </header>}
    </div>

  )
}
