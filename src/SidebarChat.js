import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import db from './firebase'
import {addDoc, collection,onSnapshot} from 'firebase/firestore'
function SidebarChat({id,name,addNewChat}) {
    const [seed, setSeed] = useState("")
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])
    const createChat = () => {
        const roomName = prompt("please enter name for chat")
        if(roomName){
            // do something
            const create = async ()=>{
                const docRef = await  addDoc(collection(db,'rooms'),{
                    Name: roomName,
                })
                console.log("document created",docRef.name)
            }
            
            create()
        }
    }
    if (!addNewChat) {
        return (
            <div className='sidebarchat'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className='sidebarChat-info'>
                    <h2>{name}</h2>
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