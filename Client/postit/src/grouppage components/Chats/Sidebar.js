import React from "react";

export default function Sidebar() {
  return (
    <div className="chat-sidebar">
      <h4 className="mb-4">
        <i className="fas fa-user"></i> Logged in as <strong>Pureheart20</strong>
      </h4>
      <h5>
        <i className="fas fa-comments"></i> Group Name:
      </h5>
      <h6 id="room-name">
        <strong>Football </strong>
      </h6>
      <hr />
      <h4 className="mt-5">
        <i className="fas fa-users"></i> Members
      </h4>
      <ul id="users">
        <li>
          <strong>Tobi</strong>
        </li>
        <li>
          <strong>Emmanuel </strong>
        </li>
        <li>
          <strong>Damilola </strong>
        </li>
      </ul>
      <hr />
      <h4 className="mt-5">
        <i className="fas fa-users"></i> Other Users
      </h4>
      <ul id="users">
        <li>
          <strong>Tobi</strong>{" "}
          <span style={{float: 'right'}}>
            <i
              className="fas fa-user-plus"
              id="add-user"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Add user to group"
            ></i>
          </span>
        </li>
        <li>
          <strong>Emmanuel </strong>{" "}
          <span style={{float: 'right'}}>
            <i
              className="fas fa-user-plus"
              id="add-user"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Add user to group"
            ></i>
          </span>
        </li>
        <li>
          <strong>Damilola </strong>{" "}
          <span style={{float: 'right'}}>
            <i
              className="fas fa-user-plus"
              id="add-user"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Add user to group"
            ></i>
          </span>
        </li>
      </ul>
    </div>
  );
}
