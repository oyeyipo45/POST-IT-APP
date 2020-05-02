import React from "react"
import Header from "./Header/header"
import Body from "./Body/body"
import Footer from "./Body/bodyComponents/footer"
import Modal from '../grouppage components/Modal'


export default function Main() {
    return (
        <div className="chat-container">
            <Header />
            <Body />
            <Modal />
            <Footer />
        </div>
    )
}