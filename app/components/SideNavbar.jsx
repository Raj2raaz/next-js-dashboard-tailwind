import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const SideNavbar = () => {
  return (
    // <div className='flex-none w-200 bg-gray-50 h-screen text-black'>
    <div className='flex-none w-200 bg-gray-50 h-screen text-black'>
      <div className='flex justify-between'>
        <div><PersonIcon/> Hello User</div>
        <div><NotificationsIcon/></div>
      </div>
      
      <ul>
        <li> <ChatIcon/> Disscussion Fourm</li>
        <li> <LocalGroceryStoreIcon/> Market Stories</li>
        <li className='pl-7'>Sentiment</li>
        <li className='pl-7'>Market</li>
        <li className='pl-7'>Sector</li>
        <li className='pl-7'>Watchlist</li>
        <li className='pl-7'>Events</li>
        <li className='pl-7'>News/Interview</li>
      </ul>
    </div>
  )
}

export default SideNavbar
