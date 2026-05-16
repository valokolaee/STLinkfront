import React from 'react'
import Cards from './components/Cards'
// bg-[#0f1235], from-[#140783], to-[#262e99], bg-linear-to-t from-[#0f1235] to-[#1b205f]
const WhyUs = () => {
    return (
        <div className='w-full z-20 min-h-50 mt-10 bg-linear-to-t from-[#0f1235] to-[#1b205f] relative'>
            <h2 className='text-[#0f1235] cursor-default text-4xl mr-148 bg-linear-to-t from-[#131d8f] to-[#2e3cd1] rounded-full absolute top-8 w-65 pr-6 p-3'>
                Why STLink?
            </h2>
            <Cards />
        </div>
    )
}

export default WhyUs