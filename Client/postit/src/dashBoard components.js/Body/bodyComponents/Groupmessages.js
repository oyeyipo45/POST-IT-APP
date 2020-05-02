import React from "react"


export default function Groupmessages(){
    return (
        <div className="chat-messages">
            <h5><strong> Latest messages from groups you belong </strong></h5>
            <div className="message">
                <p className="meta">Tobi <span>7:50 am | <a href="#0"><i>Football</i></a></span></p>
                <p className="text">
                    I love football alot.
                </p>
            </div>

            <div className="message">
                <p className="meta">Emmanuel <span>7:55 am | <a href="#0"><i>Video Games</i></a></span></p>
                <p className="text">
                    I love video games
                </p>
            </div>

            <div className="message">
                <p className="meta">Damilola <span>8:50 am | <a href="#0"><i>Programming</i></a></span></p>
                <p className="text">
                    I love programming.
                </p>
            </div>

            <div className="message">
                <p className="meta">Emmanuel <span>7:50 am | <a href="#0"><i>Football</i></a></span></p>
                <p className="text">
                    I'm a chelsea fan
                </p>
            </div>
        </div>
    )
}