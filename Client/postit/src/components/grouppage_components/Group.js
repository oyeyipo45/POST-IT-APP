import React from 'react'
import Header from './Header'
import Chat from './Chats/Chat'
import Modal from './Modal'

const Group = () =>(
  <div className="chat-container">
    <Header />
    <Chat />
    <Modal />
  </div>
  )

export default Group;