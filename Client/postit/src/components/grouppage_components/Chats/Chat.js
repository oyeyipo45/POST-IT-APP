import React from 'react'
import { useDispatch } from "react-redux";
import Sidebar from './Sidebar'
import Message from './Message'
import SEND_MESSAGE from '../../../js/constants/action-types';

const today = new Date();
const time = `${today.getHours()} ${today.getMinutes()}`;

export default function Chat() {
  const dispatch = useDispatch();
  return (
    <>
      <main className="chat-main">
        <Sidebar />
        <Message />
      </main>
      <div className="chat-form-container">
        <form id="chat-form" onSubmit={(event) => {
          event.preventDefault();
          const msg_body = event.target.msg_text.value;
          dispatch({
            type: SEND_MESSAGE,
            payload: {
              sender: 'John Doe',
              sent_at: time,
              group: 'Ruby',
              text: msg_body
            }
          })
        }}>
          <input id="text" type="text" name="msg_text" placeholder="Enter Message" required />
          <button className="button"><i className="fas fa-paper-plane"></i> Send</button>
        </form>
      </div>
      <div className="chat-form-container mt-2">
        <p id="copyright">copy rights 2020</p>
      </div>
    </>
  )
}
