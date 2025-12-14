import { useState } from 'react'
// import BlogItems from './BlogItems'
import { useEffect } from 'react'
import apiClient from '../../../../core/interceptor/interceptor'
import Card from './Card'

const Cards = () => {
    const [blogs, setBlogs] =useState([]);
    const fetchBlogs = async()=>{
        const response = await apiClient.get('/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC');
        setBlogs(response.data?.news);
    }  

    useEffect(() => {
        fetchBlogs();
    }, [])

    return (
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-items-center'>
            {blogs.map((blog) => {
                return(
                    <Card
                        id={blog.id}
                        title={blog.title}
                        description={blog.miniDescribe}
                        keyword={blog.keyword}
                        shortLink={blog.shortLink}
                        currentImageAddress={blog.currentImageAddress}
                        date={blog.insertDate}
                        isSlider={blog.isSlider}
                        newsCatregoryId={blog.newsCatregoryId}
                        addUserFullName={blog.addUserFullName}
                        dislikes={blog.currentDissLikeCount}
                        likes={blog.currentLikeCount}
                        category={blog.newsCatregoryName}
                        views={blog.currentView}
                        currentUserIsLike={blog.currentUserIsLike}
                        fetchBlogs={()=>fetchBlogs()}
                        likeId={blog.likeId}
                    />
                )    
            })}
        </div>
    )
}

export default Cards