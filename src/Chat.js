import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic';
import React ,{useState, useEffect}from 'react'
import './Chat.css'
function Chat() {

    const [seed,setSeed] = useState("");
    const [input,setInput] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])
    const sendMessage = (e)=>{
        e.preventDefault();
        console.log("you typed ",input)
        setInput("")
    }
  return (
    <div className='chat'>
        <div className='chat-header'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className='chat-header-info'>
                <h3>Room Name</h3>
                <p>Last Seen at ...</p>
            </div>
            <div className='chat-header-right'>
                <IconButton>
                    <SearchOutlined></SearchOutlined>
                </IconButton>
                <IconButton>
                    <AttachFile></AttachFile>
                </IconButton>
                <IconButton>
                    <MoreVert></MoreVert>
                </IconButton>
            </div>
        </div>
        <div className='chat-body'>
            <p className={`chat-message ${true && 'chat-reciever'}`}>
                <span className='chat-name'>{}Saurabh</span>
                Hey guys
                <span className='chat-timestamp'>
                    3:53pm
                </span>
            </p>
         
        </div>
        <div className='chat-footer'>
            <InsertEmoticon />
                <form>
                    <input value={input} onChange={e=>setInput(e.target.value)} type='text' placeholder='Type a message'></input>
                    <button type='submit' onClick={sendMessage}>Send a messaage</button>
                </form>
                <MicIcon />
        </div>
    </div>
  )
}

export default Chat