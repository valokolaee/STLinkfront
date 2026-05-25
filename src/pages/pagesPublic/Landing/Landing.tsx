import React from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import WhyUs from './components/WhyUs/WhyUs'
import Report from './components/Report'
import CommonQuestions from './components/CommonQuestions/CommonQuestions'

const Landing = () => {
    return (
        <div
            className='overflow-y-scroll h-full  relative flex flex-col'
        >
            <HeroSection/>
            {/* 
            <WhyUs/>
            <CommonQuestions/> 
            <Report/>
            */}
        </div>
    )
}

export default Landing