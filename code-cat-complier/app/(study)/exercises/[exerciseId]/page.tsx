"use client"
import React, { useEffect, useRef, useState } from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import Editor from '@monaco-editor/react';
import { useTheme } from 'next-themes'
import { Loader, Mail, Play, TriangleAlert } from 'lucide-react'
import { codeSnippets, languageOptions } from '@/config/config'
import { selectedLanguageOptionProps } from '@/model/selectedLanguageOptionProps'
import { compileCode } from '@/actions/complie'
import toast from 'react-hot-toast'
import { TestCaseData } from '@/config/testcasedata'
import { log } from 'console'
import { testCase } from '@/model/testCase'
import { products } from '@/config/productdata'
import { ModeToggleBtn } from '@/components/mode-toggle-btn';
import SelectLanguages from './_components/SelectLanguages';
import MenuBar from './_components/MenuBar';
import Topic from '@/components/Topic';
import TextEditor from './_components/Comment';
import { ListSubmission } from './_components/ListSubmission';
import { Button } from '@/components/ui/button';


export default function page() {
    const { theme } = useTheme()
    const [sourceCode, setSourceCode] = useState(codeSnippets["javascript"])
    const editorRef = useRef(null);
    const [languageOption, setLanguageOption] = useState(languageOptions[0])
    //const language = languageOption.language
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [output, setOutput] = useState<String[] | any>(null)
    const [testCase, setTestCase] = useState<testCase>(TestCaseData[0])
    const [contentIndex, setContentIndex] = useState(1)




    function handleEditorDidMount(editor: any) {
        editorRef.current = editor;
        editor.focus()
    }
    function handleOnChange(value: string | undefined) {
        if (value) {
            setSourceCode(value)
        }
    }
    function onSelect(value: selectedLanguageOptionProps) {
        setLanguageOption(value)
        setSourceCode(codeSnippets[value.language])
    }
    function handleChangeContent(index: number) {
        if (!TestCaseData[index].isLock) {
            setTestCase(TestCaseData[index])
        }
    }
    const handleSelectContent = (content: number) => {
        setContentIndex(content);
    };





    async function executeCode() {
        setLoading(true)
        const requestData = {
            "language": languageOption.language,
            "version": languageOption.version,
            "files": [
                {
                    "content": sourceCode
                }
            ],
        }
        try {
            const result = await compileCode(requestData)

            setOutput(result.run.output)
            console.log(result.run)
            console.log(testCase.expectOutput.split("\n"))
            setLoading(false)
            setError(false)
            toast.success('Complie successfully!')
        } catch (error) {
            setError(true)
            console.log(error)
            toast.error('Failed to compile!')
            setLoading(false)
        }
    }

    const getSize = (event: any) => {
        console.log('event', event.target)
        const output = document.getElementById('output');
        console.log('output', output)

    }
    return (
        <div className='min-h-screen dark:bg-slate-900 rounded-2xl shadow-2xl py-6 px-8'>
            <div className="flex items-center justify-between pb-3">
                <h2 className='scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0'>UTC - SFIT</h2>
                <div className="flex items-center space-x-2">
                    <ModeToggleBtn />
                    <div className='w-[230px]'>
                        <SelectLanguages onSelect={onSelect} selectedLanguageOption={languageOption} />
                    </div>
                </div>
            </div>
            <div className=" bg-slate-400 dark:bg-slate-950 p-3 rounded-2xl">
                <ResizablePanelGroup
                    direction="horizontal"
                    className="w-full rounded-lg border dark:bg-slate-900"
                >
                    <ResizablePanel className='' defaultSize={40} minSize={35}>
                        <MenuBar onSelectContent={handleSelectContent} />
                        {contentIndex == 1 && <Topic />}
                        {contentIndex == 2 && <TextEditor />}
                        {contentIndex == 3 && <ListSubmission />}
                        {contentIndex == 4 && 4}
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={60} minSize={35}>
                        <ResizablePanelGroup direction="vertical">
                            <ResizablePanel defaultSize={65} minSize={40}>
                                <Editor
                                    theme={theme == 'dark' ? 'vs-dark' : 'vs-light'}
                                    height="100vh"
                                    defaultLanguage={languageOption.language}
                                    defaultValue={sourceCode}
                                    onMount={handleEditorDidMount}
                                    value={sourceCode}
                                    onChange={handleOnChange}
                                    language={languageOption.language}
                                />
                            </ResizablePanel>
                            <ResizableHandle withHandle />
                            <ResizablePanel id='output' className='flex flex-col max-h-[310px]' defaultSize={35} minSize={10} onResize={(e) => { getSize(e) }}>
                                <div className="flex items-center justify-between bg-slate-400 dark:bg-slate-950 px-6 py-2">
                                    <h2>Output</h2>
                                    <div className="flex items-center justify-center ">
                                        {loading ? (<Button disabled size={"sm"} className='dark:bg-purple-600 dark:hover:bg-purple-700 text-slate-100 bg-slate-800 hover:bg-slate-900'>
                                            <Loader className='w-4 h-4 mr-2 animate-spin'></Loader>
                                            <span>Running please wait ...</span>
                                        </Button>) : (<Button onClick={executeCode} size={"sm"} className='dark:bg-purple-600 dark:hover:bg-purple-700 text-slate-100 bg-slate-800 hover:bg-slate-900'>
                                            <Play className='w-4 h-4 mr-2'></Play>
                                            <span>Run</span>
                                        </Button>)}
                                        <Button size={"sm"} className='dark:bg-green-600 dark:hover:bg-green-700 text-slate-100 bg-slate-800 hover:bg-slate-900 ml-1'>
                                            <Play className='w-4 h-4 mr-2'></Play>
                                            <span>Submit Code</span>
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col">
                                    <div className='border-b border-gray-300 rounded-md p-1 w-full'>
                                        <span>KIỂM THỬ</span>
                                    </div>
                                    <span className='text-sm'>Vui lòng chạy thử code của bạn trước</span>
                                    <div className="flex-1 flex items-center justify-center h-full">
                                        <ul className='w-1/5 overflow-y-auto  h-[90%] overflow-x-hidden'>
                                            {TestCaseData.map((item, index) => {
                                                return (
                                                    <li key={item.id} onClick={() => handleChangeContent(index)} className='mx-2 my-1 w-full text-sm text-clip'>
                                                        <Button variant="outline">
                                                            <img src={item.isLock ? '/logo/lock.png' : '/logo/unlock.png'} className="mr-2 h-4 w-4" />
                                                            Kiểm thử {index + 1}
                                                            {output != null && <img src={output == testCase.expectOutput ? 'logo/correct.png' : 'logo/cross.png'} className="ml-2 h-4 w-4" />}
                                                        </Button>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                        <div className='border-b border-gray-300 rounded-md px-6 space-y-2 divide-y-2 w-4/5 h-[85%] mr-4 overflow-y-auto'>
                                            {/* {error ? (
                                                <div className='flex items-center space-x-2 text-red-500 border border-red-600 px-6 py-6'>
                                                    <TriangleAlert className='w-5 h-5 mr-2 flex-shrink-0' />
                                                    <p className='text-xs'>Failed to compile code</p>
                                                </div>
                                            ) : (output.map((item) => {
                                                return (
                                                    <p className='text-sm' key={item}>{item}</p>
                                                )
                                            }))} */}
                                            <p className='text-sm text-center pt-1'>Đầu vào : {testCase?.input}</p>
                                            <p className='text-sm text-center pt-1'>Đẩu ra mong muốn : {testCase?.expectOutput}</p>
                                            <p className='text-sm text-center pt-1'>Đẩu ra thực tế : {!error ? output?.split("\n").join(" ") : 'Lỗi'}</p>
                                            <p className='text-sm text-center pt-1'>Thời gian chạy : </p>
                                        </div>
                                    </div>

                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                        <div className="space-y-3 bg-slate-300 dark:bg-slate-900 min-h-screen"></div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    )
}

