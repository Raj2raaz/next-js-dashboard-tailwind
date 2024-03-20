import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const SideNavbar = () => {
  return (
    // <div className='flex-none w-200 bg-gray-50 h-screen text-black'>
    <div className='flex-none bg-gray-50 h-screen text-black' style={{ width: '220px' }}>
      <div className='flex justify-between'>
        <div><PersonIcon/><span className='pl-3'>Hello User</span></div>
        <div><NotificationsIcon/></div>
      </div>
      
      <ul>
        <li className='flex'> <ChatIcon/> <p className='pl-3'>Disscussion Fourm</p></li>
        <li className='flex'> <LocalGroceryStoreIcon/> <p className='pl-3'>Market Stories</p></li>
        <li className='pl-10'>Sentiment</li>
        <li className='pl-10'>Market</li>
        <li className='pl-10'>Sector</li>
        <li className='pl-10'>Watchlist</li>
        <li className='pl-10'>Events</li>
        <li className='pl-10'>News/Interview</li>
      </ul>
    </div>
  )
}

export default SideNavbar
