import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
function SidebarChat({addNewChat}) {
    const [seed, setSeed] = useState("")
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])
    const createChat = () => {
        const roomName = prompt("please enter name for chat")
        if(roomName){
            // do something
        }
    }
    if (!addNewChat) {
        return (
            <div className='sidebarchat'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className='sidebarChat-info'>
                    <h2>Room Name</h2>
                    <p>Last message ...</p>
                </div>
            </div>
        )
    }
    else return (
        <div onClick={createChat}>
            <div className='sidebarchat'>
                <h2>Add New Chat</h2>
                {/* {console.log(addNewChat)} */}
            </div>
        </div>
    )

}

export default SidebarChat