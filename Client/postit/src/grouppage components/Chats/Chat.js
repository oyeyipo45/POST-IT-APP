import React from 'react'
import Sidebar from './Sidebar'
import Message from './Message'

export default function Chat() {
  return (
    <>
      <main className="chat-main">
        <Sidebar />
        <Message />
      </main>
      <div className="chat-form-container">
        <form id="chat-form">
          <input id="msg" type="text" placeholder="Enter Message" required/>
          <button className="button"><i className="fas fa-paper-plane"></i> Send</button>
        </form>
      </div>
      <div className="chat-form-container mt-2">
        <p id="copyright">copy rights 2020</p>
      </div>
    </>
  )
}
