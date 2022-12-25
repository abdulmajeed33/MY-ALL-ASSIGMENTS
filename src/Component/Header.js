import React from 'react'
import ".././css/Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material'

const Header = () => {
    return (
        <div className="header">
            <div className="header_Left">
                <div className="header_logo">
                    <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="logo" />
                </div>
                <div className="header_search">
                    <SearchIcon />
                    <input type="text" placeholder='search' />
                </div>
            </div>
            <div className="header_right">
                <HeaderOptions Icons={HomeIcon} title={'Home'} />
                <HeaderOptions Icons={PeopleAltIcon} title={'My Network'} />
                <HeaderOptions Icons={BusinessCenterIcon} title={'Job'} />
                <HeaderOptions Icons={MessageIcon} title={'Message'} />
                <HeaderOptions Icons={NotificationsIcon} title={'Notification'} />
                <HeaderOptions Icons={Avatar} title={'Abdul Majeed'} />
            </div>
        </div>
    );
}

export default Header;