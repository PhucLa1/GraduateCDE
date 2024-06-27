import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Filter() {
    return (
        <div className="flex items-center justify-start">
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Chọn bài viết" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Chọn bài viết</SelectLabel>
                        <SelectItem value="apple">Đã lưu</SelectItem>
                        <SelectItem value="banana">Đã tym</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Dialog>
                <DialogTrigger className="ml-2" asChild>
                    <Button variant="outline">Chọn bài viết theo thẻ được gắn lên</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle className="hover:text-yellow-50">Chọn các bài viết có tag </DialogTitle>
                        <DialogDescription className="mt-2">
                            Hãy chọn các tag sẽ được gán lên bài viết của bạn sẽ đọc .
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-1">
                        <Input placeholder="Hãy nhập thẻ bạn muốn tìm kiếm vào đây" />
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            height: '150px',
                            overflow: 'auto',
                            gap: '8px', // Equivalent to gap-2 in Tailwind
                            fontSize: '0.75rem', // Equivalent to text-xs in Tailwind
                            color: '#333',
                            marginBottom: '16px', // Equivalent to mb-4 in Tailwind
                            cursor: 'pointer',
                            scrollbarWidth: 'none', // For Firefox
                            msOverflowStyle: 'none'
                        }} className="pt-2 pb-2">
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Toán</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Đệ quy</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Hay quá</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Toán</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Đệ quy</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Hay quá</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Toán</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Đệ quy</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Hay quá</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Toán</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Đệ quy</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Hay quá</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Toán</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Đệ quy</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Hay quá</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Toán</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Đệ quy</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Hay quá</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Toán</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Đệ quy</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Hay quá</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Toán</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Đệ quy</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Hay quá</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Toán</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Đệ quy</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Hay quá</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Toán</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Đệ quy</div>
                            <div className='bg-[#747475] px-[5px] h-[25px] flex items-center rounded-md hover:bg-[#F5F6F7]'>Hay quá</div>
                        </div>
                    </div>
                    <DialogFooter className="flex items-center justify-end">
                        <Button className="rounded-md" type="reset">Làm mới</Button>
                        <Button className="rounded-md" type="submit">Lưu lại</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog >
        </div>

    )
}