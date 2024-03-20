import React from "react";
import discussion from "../data/discussion";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';

const DisscussionFourm = () => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Discussion Forum</h2>
      {discussion.map((discussion) => (
        <div key={discussion.id} className="flex items-center border-b py-4">
          {/* Image */}
          <img
            src={discussion.image}
            alt={discussion.title}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            {/* Title */}
            <h3 className="text-lg font-semibold">{discussion.title}</h3>
            {/* Content */}
            <p className="text-gray-600">{discussion.content}</p>
              <div className="flex mt-4">
                
                <p className="mr-5 "><FavoriteBorderIcon/> {discussion.like}</p>
                <p className="mr-5 "><VisibilityIcon/> {discussion.view}</p>
                <p className="mr-5 "><ChatBubbleOutlineIcon/>{discussion.comment}</p>
                <p className="mr-5 "><ShareIcon/> Share</p>

              </div>
            
          </div>
          <div>
            {/* Time */}
            <p className="text-gray-400">{discussion.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisscussionFourm;
