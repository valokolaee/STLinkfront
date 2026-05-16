import React from 'react'
import BlogCards from './components/BlogCards/BlogCards'

const Blog = () => {
    return (
        <div style={{direction:'ltr'}} className='bg-linear-to-t relative z-1000000000 from-[#00020f] from-70% to-[#131731] text-left'>
            <h1 className='w-full h-[100px] bg-[#000218c4] text-[48px] text-center pt-5 fixed text-[#fffdfd]'> Follow our news! </h1>
            <BlogCards/>
        </div>
    )
}

export default Blog