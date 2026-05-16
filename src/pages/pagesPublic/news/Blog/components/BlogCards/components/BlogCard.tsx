import React from 'react'
import blogImg from '../../../../images/blogImg.jpg'
import BlogCardInfo from './BlogCardInfo'

const BlogCard = () => {
    return (
        <div className='transition-[1s] p-4 cursor-default inline-block ml-75 mb-5 w-[70%] md:mr-70 sm:ml-75 sm:w-[245px] md:w-[278px] min-h-[375px] bg-linear-to-l from-[#00093d] to-[#0b1444] rounded-2xl'>
            <img src={blogImg} className='w-full max-h-[200px] h-auto rounded-xl'/>
            <BlogCardInfo/>
        </div>
    )
}

export default BlogCard