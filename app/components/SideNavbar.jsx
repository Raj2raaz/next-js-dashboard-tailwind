"use client"; 
import React, {useState} from "react";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import EventIcon from "@mui/icons-material/Event";
import NewspaperIcon from "@mui/icons-material/Newspaper";

import CompressIcon from '@mui/icons-material/Compress';

const SideNavbar = () => {

  const  [openMenu, setOpenMenu] = useState(true);

  const toggleOpenMenu = () => {
    setOpenMenu(!openMenu);
  }


  return (
    // <div className='flex-none w-200 bg-gray-50 h-screen text-black'>
    <>
      <div
        className={`flex-none ${openMenu ? "block" : "hidden"} bg-purple-800 h-screen text-white`}
        style={{ width: "250px", alignItems: "center" }}
      >
        <div className="flex justify-between px-6 py-14 items-center border-b">
          <div className="items-center">
            <PersonIcon />
            <span className="pl-3 text-xl">Hello User</span>
          </div>
          <div>
            <NotificationsIcon />
          </div>
        </div>

        <ul className="px-6 py-6 space-y-6 ">
          <li className="flex">
            {" "}
            <ChatIcon /> <p className="pl-3">Disscussion Fourm</p>
          </li>
          <li className="flex">
            {" "}
            <LocalGroceryStoreIcon /> <p className="pl-3">Market Stories</p>
          </li>
          <li className="flex">
            <SentimentSatisfiedAltIcon />
            <p className="pl-3">Sentiment</p>
          </li>
          <li className="flex">
            <StorefrontIcon />
            <p className="pl-3">Market</p>
          </li>
          <li className="flex">
            <SettingsSuggestIcon />
            <p className="pl-3">Sector</p>
          </li>
          <li className="flex">
            <ImageSearchIcon />
            <p className="pl-3">Watchlist</p>
          </li>
          <li className="flex">
            <EventIcon />
            <p className="pl-3">Events</p>
          </li>
          <li className="flex">
            <NewspaperIcon />
            <p className="pl-3">News/Interview</p>
          </li>
        </ul>
      </div>
      <div className='flex w-200 bg-gray-50 h-screen text-black items-center justify-center'>
        <div onClick={toggleOpenMenu} className="h-20 bg-purple-400 text-whitee items-center justify-center flex">
          <CompressIcon style={{ transform: 'rotate(90deg)' }} />
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
