import React from 'react'

const H = () => {
  return (
    <div>
        {/* <!-- Modal --> */}
        <div class="modal-dialog bg-danger"  >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close"  aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form>
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="enter your name"/>
                <label className="form-label">Age</label>
                <input type="text" className="form-control" placeholder="enter age"/>
                <label className="form-label">Genger</label>
                <input type="text" className="form-control" placeholder="enter Genger"/>
                <label className="form-label">Address</label>
                <input type="text" className="form-control" placeholder="enter Address"/>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default H;