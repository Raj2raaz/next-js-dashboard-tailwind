import React from "react";
import discussion from "../data/discussion";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';

const DisscussionFourm = () => {
  return (
    <div className="px-8 py-8">
      <h2 className="text-lg font-bold mb-4">Discussion Forum</h2>
      {discussion.map((discussion) => (  
        <Card key={discussion.id} sx={{ maxWidth: 900, marginBottom: '20px' }} >
          <CardActionArea>
            <CardContent className="flex">
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
                
                <p className="mr-7 "><FavoriteBorderIcon/> <span className="ml-1">{discussion.like}</span></p>
                <p className="mr-7 "><VisibilityIcon/> <span className="ml-1">{discussion.view}</span></p>
                <p className="mr-7 "><ChatBubbleOutlineIcon/><span className="ml-2">{discussion.comment}</span></p>
                <p className="mr-7 "><ShareIcon/> <span className="ml-2">Share </span></p>

              </div>
            
          </div>
          <div>
            {/* Time */}
            <p className="text-gray-400">{discussion.time}</p>
          </div>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default DisscussionFourm;


