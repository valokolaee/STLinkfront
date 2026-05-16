import React from 'react'
import { FaThumbsUp } from 'react-icons/fa6'

const Like = ({handleLikeNews, likes, currentUserIsLike}) => {
    return (
        <button onClick={()=>handleLikeNews()}>
            <span className="flex items-center gap-1">
                <FaThumbsUp className={currentUserIsLike == true ? "text-[14px] text-green-600" : "text-[14px]"} />
                {likes}
            </span>
        </button>
    )
}


export default Like