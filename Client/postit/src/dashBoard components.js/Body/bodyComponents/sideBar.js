import React from "react"
import { Link } from "react-router-dom";



export default function Sidebar () {
  return (
    <div className="chat-sidebar">
    <h4 className="mb-4"><i className="fas fa-user"></i> Logged in as <strong>Pureheart20</strong></h4>
    <h5 className="button">My Groups </h5>

    <Link to="/group">
        <h6 id="room-name"> Football </h6>
    </Link>
    <Link to="/group">
        <h6 id="room-name"> Video Games </h6>
    </Link>
    <Link to="/group">
        <h6 id="room-name"> Programming </h6>
    </Link>
    {/* <!-- <h3 className="mt-4"><i className="fas fa-users"></i> Users</h3>
    <ul id="users">
        <li><strong>Tobi</strong></li>
        <li><strong>Emmanuel </strong></li>
        <li><strong>Damilola </strong></li>
    </ul> --> */}
</div>
  )
}