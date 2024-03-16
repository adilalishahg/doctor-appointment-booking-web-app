import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Image from 'next/image'
const CategorySearch = () => {
    const categoryList = [
        {id:1,src:'',name:'Dentist'},
        {id:1,src:'',name:'Cardiologist'},
        {id:1,src:'',name:'Othopedic'},
        {id:1,src:'',name:'Scientist'},
        {id:1,src:'',name:'General Doc'},
        {id:1,src:'',name:'Specialized Doc'},
    ]
  return (
    <div className='flex flex-col items-center gap-4 mb-10'>
        <h2 className='text-4xl font-bold tracking-wide'>
            Search <span className='text-primary'> Doctors</span>
        </h2>
        <h2 className='text-xl text-gray-400'>Explore the doctors for appointment</h2>
        
 
        <div className="flex items-center w-full max-w-sm mt-3 space-x-2">
            <Input type="email" placeholder="Search..." />
            <Button type="submit"><Search className='w-4 h-4 mr-2'/>Search</Button>
        </div>
        {/* Display List of Category */}
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
            {categoryList.map((item,index)=>index<6&&(
                <div key={index} className='flex flex-col items-center gap-2 p-5 px-5 m-2 text-center transition-all rounded-lg cursor-pointer hover:scale-110 bg-blue-50'>
                    <Image 
                        src = {item.src}
                        alt='icon'
                        width={40}
                        height={40}
                    />
                    <label className='text-sm text-blue-600'>{item?.name}</label>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CategorySearch