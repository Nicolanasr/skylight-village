import Accomodation from '@/components/sections/Accomodation'
import Banner from '@/components/sections/Banner'
import React from 'react'

const page = () => {
    return (
        <>
            <Banner title='Reservations' image='/images/accomodation-bg.jpg' className='lg:h-96!' parallaxSpeed={0} />
            <div className='h-8'></div>
            <Accomodation />
        </>
    )
}

export default page
