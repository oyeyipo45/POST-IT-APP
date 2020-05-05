import React from "react";
import { useDispatch } from "react-redux";
import { ADD_GROUP } from "../../js/constants/action-types";

export default function Modal() {
  const dispatch = useDispatch();
  
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <form onSubmit={e => {
              e.preventDefault();
              let groupName = e.target.group_name.value;
              let groupDescription = e.target.group_desc.value;
              dispatch({
                type: ADD_GROUP,
                payload: {
                  name: groupName,
                  description: groupDescription,
                  id: Math.floor(Math.random() * 10)
                }
              })
              e.target.group_name.value = '';
              e.target.group_desc.value = '';
            }}>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Group Name</label>
                <input
                  type="text"
                  name="group_name"
                  className="form-control"
                  id="group-name"
                  placeholder="Enter group name..."
                />
              </div>
              <div className="form-inputs">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  name="group_desc"
                  
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="button" id="create-group">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
