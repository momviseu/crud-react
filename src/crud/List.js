import React, { useEffect } from "react";
import { Link} from "react-router-dom";
import { useState } from "react";

const List = () => {
  // const [open, setOpen] = useState(false);
  // const toggle = () => {
  //   setOpen(!open);
  // };

  const [alluser, setAllUser] = useState([]);
  // const [name, setName] = useState("");
  // const [age, setAge] = useState();
  // const [gender, setGender] = useState("");
  // const [address, setAddress] = useState("");
  // const [url, setUrl] = useState("");

  const getAllUsers = async () => {
    const res = await fetch("http://localhost:5000/user");
    const data = await res.json();
    console.log(data);
    setAllUser(data);
  };

  // // @adduser
  // const addUser = async () =>{
  //   const dataupdate = {
  //     name: name,
  //     age : age,
  //     gender : gender,
  //     address : address,
  //     url : url,
  //   };
  //   try {
  //     const res = await fetch('http://localhost:5000/user', 
  //       {
  //         method : "POST",
  //         body : JSON.stringify(dataupdate),
  //         headers : {
  //           "content-type": "application/json"
  //         }

  //       }
  //     );
  //     const data = await res.json();
  //     console.log(data);
  //     setName("");
  //     setAge();
  //     setAddress("");
  //     setGender("");

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

    // @delete
  const deleteUser = async (id) =>{

    // alert(id)

      try {
        const res = await fetch(`http://localhost:5000/user/${id}`, 
          {
            method : "DELETE",
  
          }
        );
        const data = await res.json();
        console.log(data);
        if(data){
          const newUser = alluser.filter((item) => item._id !== id);
          setAllUser(newUser);
        }
      
  
      } catch (error) {
        console.log(error);
      }
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  
  return (
    <div className="container mt-4">
      {/* <!-- Button trigger modal --> */}
      <Link to="/add">
        <button
          type="button"
          // onClick={toggle} 
          class="btn btn-outline-success my-2"
        >
          AddUser
        </button>
      </Link>
      
      {/* <div>
        {open && (
          <div className="modal-dialog bg-danger position-relative">
            <div className="modal-content position-absolute">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggle}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <label className="form-label">Name</label>
                  <input
                     onChange={(e) => setName(e.target.value)} value={name} 
                    type="text"
                    className="form-control"
                    placeholder="enter your name"
                  />
                  <label className="form-label">Age</label>
                  <input
                    onChange={(e) => setAge(e.target.value)} value={age} 
                    type="text"
                    className="form-control"
                    placeholder="enter age"
                  />
                  <label className="form-label">Genger</label>
                  <input
                     onChange={(e) => setGender(e.target.value)} value={gender} 
                    type="text"
                    className="form-control"
                    placeholder="enter Genger"
                  />
                  <label className="form-label">Address</label>
                  <input
                     onChange={(e) => setAddress(e.target.value)} value={address} 
                    type="text"
                    className="form-control"
                    placeholder="enter Address"
                  />
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={toggle}
                >
                  Close
                </button>
                <button onClick={() =>{
                  addUser() 
                  toggle() }} type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div> */}

      <table className="table table-bordered">
        <thead>
          <tr>
            {/* <th>id</th> */}
            <th>Name</th>
            <th>Age</th>
            <th>Genger</th>
            <th>Address</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {alluser.length === 0 ? (
            <p>loading</p>
          ) : (
            alluser.map((item) => {
              return (
                <>
                  <tr key={item._id}>
                    {/* <td>{item._id}</td> */}
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.gender}</td>
                    <td>{item.address}</td>
                    <td>{item.created}</td>
                    <td>
                      <Link to={`/update/${item._id}`}>
                        <button className="btn btn-outline-primary m-1">
                          Update
                        </button>
                      </Link>

                      <button onClick={() => {deleteUser(item._id)}} className="btn btn-outline-danger m-1">Delete</button>
                    </td>
                  </tr>
                </>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;
