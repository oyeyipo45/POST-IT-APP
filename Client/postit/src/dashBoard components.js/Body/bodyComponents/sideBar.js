import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Sidebar({ groups }) {
  return (
    <div className="chat-sidebar">
      <h4 className="mb-4">
        <i className="fas fa-user"></i> Logged in as{" "}
        <strong>Pureheart20</strong>
      </h4>
      <h5 className="button">My Groups </h5>
      {groups.map((group) => (
        <Link key={group.id} to={`/group/${group.id}`}>
          <h6 id="room-name">{group.name}</h6>
        </Link>
      ))}
    </div>
  );
}

const mapStateToProp = (state) => {
  return {
    groups: state.groups,
  };
};

export default connect(mapStateToProp)(Sidebar);
