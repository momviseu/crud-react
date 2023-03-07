import React from 'react'
import H from './H';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Update = () => {
  const {id} = useParams();

  // console.log(id);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");

  const getAllUser = async () =>{
    try{
      const res = await fetch(`http://localhost:5000/user/${id}`);
      const data = await res.json();
      setName(data.name);
      setAge(data.age);
      setAddress(data.address);
      setGender(data.gender);
    }catch(error){
      console.log(error);
    }
  }


  // @update
  const updateUser = async () =>{
    const dataupdate = {
      name: name,
      age : age,
      gender : gender,
      address : address
    };
    try {
      const res = await fetch(`http://localhost:5000/user/${id}`, 
        {
          method : "PATCH",
          body : JSON.stringify(dataupdate),
          headers : {
            "content-type": "application/json"
          }

        }
      );
      const data = await res.json();
      // console.log(data);
      setName(data.name);
      setAge(data.age);
      setAddress(data.address);
      setGender(data.gender);

    } catch (error) {
      console.log(error);
    }
  }





  useEffect(() =>{
    getAllUser();
  },[]);

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
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control" placeholder="enter your name"/>
                <label className="form-label">Age</label>
                <input type="text" onChange={(e) => setAge(e.target.value)} value={age} className="form-control" placeholder="enter age"/>
                <label className="form-label">Genger</label>
                <input type="text" onChange={(e) => setGender(e.target.value)} value={gender} className="form-control" placeholder="enter Genger"/>
                <label className="form-label">Address</label>
                <input type="text" onChange={(e) => setAddress(e.target.value)} value={address} className="form-control" placeholder="enter Address"/>
              </form>
            </div>
            <div class="modal-footer">
              {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
              <Link to="/list">
                <button type="button" onClick={updateUser} class="btn btn-primary">Save</button>
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Update;