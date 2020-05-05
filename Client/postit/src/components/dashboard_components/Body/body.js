import React from "react"
import Sidebar from "./bodyComponents/sideBar"
import Groupmessages from "./bodyComponents/Groupmessages"



export default function Body(){
    return (
        <main className="chat-main">
            <Sidebar />
            <Groupmessages />
            
            
        </main>
    )
}