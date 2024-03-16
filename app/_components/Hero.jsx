import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <Image  width={800}  height={800}
                alt="doctor"
                src="/doctors.jpg"
                class="absolute inset-0 h-full w-full object-cover rounded-3xl"
                />
            </div>

            <div class="lg:py-24">
                <h2 class="text-3xl font-bold sm:text-4xl">Find and book <span className='text-primary'>Appointment</span> with your Fev <span className='text-primary'>Doctors</span></h2>

                <p class="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                quidem quam repellat.
                </p>
                <Button className='mt-10'>
                    Explore Now
                </Button>
                 
            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero