import React from 'react'
import Image from 'next/image'

const DoctorList = () => {
    const doctorList=[
        {id:'1',img:'/',cat:'doctor',name:'test',year_of_experience:'15',address:'HomeTown'},
        {id:'1',img:'/',cat:'surgeon',name:'test',year_of_experience:'15',address:'HomeTown'},
        {id:'1',img:'/',cat:'dentist',name:'test',year_of_experience:'15',address:'HomeTown'},
        {id:'1',img:'/',cat:'ENT',name:'test',year_of_experience:'15',address:'HomeTown'},
        {id:'1',img:'/',cat:'general',name:'test',year_of_experience:'15',address:'HomeTown'},
    ]
  return (
    <div className="px-8 mb-10">
        <h2 className="text-xl font-bold">DoctorList</h2>
        <div className='grid mt-4 grid-cols-2sm:grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-4'>
            {doctorList&&doctorList.map((doctor,index)=>(
            <div className='border-[1px] rounded-lg p-4  cursor-pointer hover:border-primary '>

                <Image src={doctor.img} alt='doctor' key={index} width={200} height={20}
                className='h-[200px] ww-full object-cover rounded-lg'
                />
                <div className='flex flex-col items-baseline gap-1 mt-3'>
                    <h2 className='text-[12px] font-semibold bg-blue-100 p-1 rounded-full px-2 text-primary'>{doctor?.cat}</h2>
                    <h2 className='font-bold'>{doctor.name}</h2>
                    <h2 className='text-sm text-primary'>{doctor.year_of_experience} Years</h2>
                    <h2 className='text-sm text-gray-500'>{doctor.address}</h2>
                    <h2 className='p-2 px-3 border-[1px] border-primary rounded-full w-full text-center text-[11px] mt-2 cursor-pointer hover:bg-primary hover:text-white'>Book Now</h2>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default DoctorList