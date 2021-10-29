import React from 'react';
import ChatDetail from './components/ChatDetail';
import ContactList from './components/ContactList';

import './App.css';
export default function App(){
  return(
   <div className="chatBox">
     <ContactList />
     <ChatDetail />
   </div>
  )
}