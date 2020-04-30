import React from 'react'

export default function Modal() {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Group Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="group-name"
                  placeholder="Enter group name..."
                />
              </div>
              <div className="form-inputs">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" id="description" rows="3" defaultValue='
                  Enter short group description.'></textarea
                >
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="button" id="create-group">Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}
