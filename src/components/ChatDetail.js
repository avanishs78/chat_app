import React,{useState} from 'react';
import '../components/chatDetail.css';

export default function ChatDetail (){
  const [msg,setMsg] = useState('');
  const data = [
      {
        "chatTypeId": 1,
        "message": "I have a question",
        "userType": "user",
        "createdAt": "2020-11-12T06:28:05.397151+00:00",
        "conversationId": 58
      },
      {
        "chatTypeId": 1,
        "message": "Oh yes, please tell me",
        "userType": "admin",
        "createdAt": "2020-11-12T06:28:44.633933+00:00",
        "conversationId": 58
      },
      {
        "chatTypeId": 1,
        "message": "Help me",
        "userType": "user",
        "createdAt": "2020-11-12T06:30:16.446574+00:00",
        "conversationId": 60
      },
      {
        "chatTypeId": 1,
        "message": "How but, I don't know?",
        "userType": "admin",
        "createdAt": "2020-11-12T06:30:42.539175+00:00",
        "conversationId": 60
      },
      {
        "chatTypeId": 1,
        "message": "Hello",
        "userType": "user",
        "createdAt": "2020-11-12T06:31:54.8459+00:00",
        "conversationId": 61
      },
      {
        "chatTypeId": 1,
        "message": "I'll explain",
        "userType": "user",
        "createdAt": "2020-11-12T06:32:27.783936+00:00",
        "conversationId": 60
      }
    ]
    const [chats,setChats] = useState(data);
    function recordMsg(e){
      setMsg(e.target.value);
    }
    function sendMsg(){
      const t = new Date().toString();
        setChats([...chats,{
          "chatTypeId":1,
          "message":msg,
          "userType":"user",
          "createdAt":t,
          "conversationId":60
        }])
      }

  return(
    <div className="chatDetail">
     {chats.map((chat)=>{ 
      return <div key={chat.message} className={chat.userType==='user'?'user':'admin'}>
               <p>{chat.message}</p>
               <p>{chat.createdAt.slice(0,10)+' '+chat.createdAt.slice(11,16)}</p>
            </div>
     })}
     <div className="message">
       <input className="input" 
       type='text' placeholder="Enter message here"
         onChange={recordMsg}
       />
       <button className="send" onClick={sendMsg}>Send</button>
     </div>
    </div>
  )
}
