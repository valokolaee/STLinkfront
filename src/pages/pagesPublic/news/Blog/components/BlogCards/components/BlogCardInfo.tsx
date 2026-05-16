import { Button, FloatButton } from 'antd'
import { Link } from 'react-router-dom'

const BlogCardInfo = () => {
    return (
        <div className='w-full h-fit mt-4'>
            <h3 className='text-[28px] text-[#d6d6d6] text-left'> News Title </h3>
            <p className='text-[20px] text-[#afafaf]'> example news example news example news example news...  </p>
            {/* read more button should be linked to blog's detail page */}
            <Link to={'/'} className='w-[200px] h-10 rounded-full text-[#cad8ff] cursor-pointer hover:text-[#000000] ml-6 mt-4 transition-[0.5s] hover:from-[#002c5e] hover:to-[#004492] bg-linear-to-bl from-[#001935] to-[#002c5e]'> Read more </Link>
        </div>
    )
}

export default BlogCardInfo