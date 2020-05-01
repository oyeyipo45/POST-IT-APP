import React from "react";

export default function Header() {
  return (
    <>
      <header className="chat-header">
        <h1>
          <i className="fas fa-smile"></i> POST-IT
        </h1>
        
        <button
          type="button"
          className="button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Create Broadcast Group
        </button>
      </header>
    </>
  );
}
