import { DonutLarge, MoreVert, SearchOutlined } from '@mui/icons-material'
import ChatIcon from '@mui/icons-material/Chat';
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <Avatar />
                <div className='sidebar-headerRight'>
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className='sidebar-search'>
                <div className='sidebar-searchContainer'>
                    <SearchOutlined />
                    <input placeholder="Search or start new chat " type='text' />
                </div>
            </div>
            <div className='sidebar-chats'>
                <SidebarChat addNewChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar