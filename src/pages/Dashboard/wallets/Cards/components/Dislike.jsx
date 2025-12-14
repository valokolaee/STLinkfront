import React from 'react'
import { FaThumbsDown } from 'react-icons/fa6'

const Dislike = ({handleDisLikeNews, disLikes, currentUserIsDisLike})  => {
  return (
    <button onClick={()=>handleDisLikeNews()}>
      <span className="flex items-center gap-1">
        <FaThumbsDown className={currentUserIsDisLike == true ? "text-[14px] text-red-600" : "text-[14px]"} />
        {disLikes}
      </span>
    </button>
  )
}

export default Dislike