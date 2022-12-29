import { DonutLarge, MoreVert, SearchOutlined } from '@mui/icons-material'
import ChatIcon from '@mui/icons-material/Chat';
import { Avatar, IconButton } from '@mui/material'
import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat';
import db from './firebase'
import { collection, getDocs} from 'firebase/firestore'
function Sidebar() {

    const [rooms, setRooms] = useState([])

    useEffect(() => {
        let arr=[];
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'rooms'));
            querySnapshot.forEach((doc)=>{
                arr.push({id:doc.id,Name:doc.data().Name});
            })
            setRooms(arr)
            
        }
        getUsers()
       
    }, [])

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
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.Name} ></SidebarChat>
                ))}
            </div>
        </div>
    )
}

export default Sidebar