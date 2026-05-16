import { useState } from "react";
import { FaEye} from "react-icons/fa";
import Dislike from "./components/Dislike";
import Like from "./components/Like";
import { FaImage } from "react-icons/fa6";
import apiClient from '../../../../core/interceptor/interceptor'
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

function Card(props) {
  const [Error, setError] = useState(false);
    const id = props.id;
    const likes = props.likes;
    const currentUserIsLike = props.currentUserIsLike;
    const fetchBlogs = props.fetchBlogs;
    const likeId = props.likeId;
    const handleLikeNews = async() => {
      if(!currentUserIsLike)
        try {
          const res = await apiClient.post(`/News/NewsLike/${id}`);
          fetchBlogs();
          toast.success(res.data.message);
          console.log(res)
        } catch (error)
        {
          console.log(error)
        }
      else if(currentUserIsLike){
        try {
          const res = await apiClient.delete(`/News/DeleteLikeNews/`,{deleteEntity:{likeId}});
          fetchBlogs();
          toast.success(res.data.message);
          console.log(res)
        } catch (error)
        {
          console.log(error)
        }
      }
    }
    const Id = props.id;
    const disLikes = props.dislikes;
    const currentUserIsDisLike = props.currentUserIsDissLike;
    const handleDisLikeNews = async() => {
      try {
        const res = await apiClient.post(`/News/NewsDissLike/${Id}`);
        fetchBlogs();
        toast.success(res.data.message);
        console.log(res)
      } catch (error)
      {
        console.log(error)
      }
    }

  return (
    <div  className="dark:bg-gray-900 dark:border-gray-900 transition-[1s] hover:scale-[1.01] cursor-pointer inline-block m-[13px] w-full sm:w-[278px] md:w-[278px] min-h-[375px] bg-white rounded-xl shadow-md overflow-hidden border border-[#B5B5C380] flex-col justify-between">
      {/* تصویر */}
      <div className="w-[235.728px] h-[179.2px] mx-auto mt-3 rounded-md overflow-hidden">
        {(!Error) ? (
          <img
            src={props.currentImageAddress}
            onError={() => setError(true)}
            className="w-full h-full object-cover" />
        ) : (
          <FaImage className="mr-4 relative bottom-3" color="gray" size={200}/>
        )}
      </div>
      <div className="px-4 pt-3 flex flex-col justify-between">

      {/* محتوا */}
        {/* Title  */}
        <NavLink to={`/BlogDetail/${props.id}`} className="dark:text-gray-400 text-right text-[15px] font-bold text-gray-800 leading-snug">
          {props.title}
        </NavLink>

        {/* Date Category */}
        <div className="flex justify-between items-center text-[12px] mt-1">
          <span className="dark:bg-[rgb(65,0,236)] px-2 py-0.5 rounded-full bg-[#5751E1] font-medium text-white">
            {props.category}
          </span>
          <span className="text-gray-500">
            {new Date(props.date).toLocaleDateString("fa-IR")}
          </span>
        </div>

        {/* detail */}
        <p className="text-[13px] text-gray-600 leading-relaxed text-right mt-2">
          {props.description}
        </p>
        {/* Line */}
        <div className="border-t border-gray-200 mt-3"></div>

        {/* Icons */}
        <div className="flex justify-between items-center text-[13px] text-gray-500 mt-2 px-1">
          {/* Seen */}
          <span className="flex ite ms-center gap-1">
            <FaEye className="text-[14px]" />
            {props.views}
          </span>
          {/* Like Dislike */}
          <div className="flex items-center gap-3">
            <Dislike currentUserIsDisLike={currentUserIsDisLike} disLikes={disLikes} handleDisLikeNews={()=>handleDisLikeNews()} />
            <Like currentUserIsLike={currentUserIsLike} likes={likes} handleLikeNews={()=>handleLikeNews()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
