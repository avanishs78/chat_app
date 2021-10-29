import React from 'react';
import Avatar from '@mui/material/Avatar';
import '../components/contact.css';

export default function Contact (props){
  const {name,message,time} = props;
  return(
    <div className="contact">
     <Avatar src="/broken-image.jpg" />
      <div>
       <h4 style={{margin:'0'}}>{name}</h4>
       <p style={{margin:'0'}}>{message}</p>
       <p style={{margin:'0'}}>{time}</p>
      </div>
    </div>
  )
}