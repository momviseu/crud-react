import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const Cart = () => {
    
    const {id} = useParams();
    console.log(id);
    const [user, setUser] = useState([]);
  const getuser = async () => {
    await axios({
      url: `http://localhost:5000/user/${id}` ,
      method: "GET",
    })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getuser();
  }, []);
  return (
    <div className="container px-4">
      <div className="row gx-5">
        <div className="col">
          <div className="p-3 border bg-light">
            <img src={user.url} alt="" className="w-25 h-25" />
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-light">
            <p>{user.name}</p>
            <p>{user.gender}</p>
            <button className="btn btn-outline-success my-2">Add Cart</button>
          </div>
        </div>
      </div>
      <NavLink to="/user">
        <button className="btn btn-primary my-3">Go to User</button>
      </NavLink>
    </div>
  );
};

export default Cart;
