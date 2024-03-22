import React from "react";
import discussion from "../data/discussion";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";

const DisscussionFourm = () => {
  return (
    <div className="sm:ml-10 ml-0 sm:px-8 px-0 sm:py-8 py-2">
      <h2 className="text-lg sm:text-3xl font-bold mb-4">Discussion Forum</h2>
      {discussion.map((discussion) => (
        // <Card key={discussion.id} sx={{ maxWidth: 900, marginBottom: "40px" }}>
        <Card key={discussion.id} className=" max-w-[300px] items-center sm:max-w-[900px] mb-5 sm:mb-10">

          <CardActionArea>
            <CardContent className="flex sm:py-8 py-4 pr-8">
              <img
                src={discussion.image}
                alt={discussion.title}
                className="sm:w-16 w-10 sm:h-16 h-10 rounded-full sm:mr-4 mr-1"
              />
              <div>
                {/* Title */}
                <h3 className="sm:text-lg text-md font-semibold sm:pb-2">
                  {discussion.title}
                </h3>
                {/* Content */}
                <p className="text-gray-600 sm:pb-2 sm:text-md text-sm">{discussion.content}</p>

                <div className="flex justify-between items-center">
                  <div className="flex sm:mt-4 ">
                    <p className="sm:mr-7 mr-2 ">
                      <FavoriteBorderIcon fontSize="small"/>
                      <span className="ml-1">{discussion.like}</span>
                    </p>
                    <p className="mr-7 ">
                      <VisibilityIcon  />
                      <span className="ml-1">{discussion.view}</span>
                    </p>
                    <p className="mr-7 ">
                      <ChatBubbleOutlineIcon />
                      <span className="ml-2">{discussion.comment}</span>
                    </p>
                    <p className="mr-7 ">
                      <ShareIcon /> <span className="ml-2">Share </span>
                    </p>
                  </div>
                  <div>
                    {/* Time */}
                    <p className="text-gray-400">{discussion.time}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default DisscussionFourm;
