import React, { useEffect, useRef } from 'react'
import { useSelector } from "react-redux";


const Message = () => {
  const messagesEndRef = useRef(null);
  const messages = useSelector(state => state.messages);
  // auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  if (messages.length === 0) {
    return (
      <div className="chat-messages">
        <h5><strong> There are currently no messages in this group. Please check again later. </strong></h5>
      </div>
    )
  } else {
    return (
      <div className="chat-messages">
        {messages.map(msgs => (
          <div className="message">
            <p key={msgs.sender} className="meta">
              {msgs.sender}
              <span>{msgs.sent_at} am | <a href="#0"><i>{msgs.group}</i></a></span>
            </p>
            <p className="text">
              {msgs.text}
            </p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    )
  }
}

export default Message;