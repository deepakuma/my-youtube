import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName,randomMessage } from '../utils/helper';

const LiveChat = () => {

    const [LiveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch();

    const chatMessages = useSelector(store => store.chat.messages);
    useEffect(()=>{
        const i = setInterval(()=>{
// API polling
// console.log("API Polling");

dispatch(addMessage({
    name: generateRandomName(),
    message: randomMessage(20)
}))
        },2000);

        return () => clearInterval(i);
    },[]);
  return (
  <>
    <div className='w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
     {
      chatMessages.map((c, index)=> <ChatMessage key={index} name={c.name}  message={c.message}/>)  
     }
      
    </div>
    <form className='w-full p-2 ml-2 border border-black' onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
            name:"Deepa K",
            message: LiveMessage
        }));
        setLiveMessage("");
    }}>
        <input className='w-[320px] p-2' type='text' value={LiveMessage} onChange={(e)=>{
            setLiveMessage(e.target.value);
        }}/>
        <button className= "p-2 mx-2 bg-green-100">Send</button>
    </form>
    </>
  )
}

export default LiveChat
