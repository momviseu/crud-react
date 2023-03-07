import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState([]);
  const getuser = async () => {
    await axios({
      url: "http://localhost:5000/user",
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
    <div className=" container d-flex w-100 h-50">
      {/* <img src="./img/f1.jpg" alt="" width="150px" height="150px"/> */}
      {user.map((item) => {
        return (
          <div key={item.id} className="w-100">
            <div className="card w-75 my-3 ">
              <img src={item.url} alt="" className="w-100" height="200px" />
              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                

                <NavLink to={`/cart/${item._id}`}>
                  <a href="#" className="btn btn-outline-success">
                    Buynow
                  </a>
                </NavLink>
              </div>
            </div>
            {/* <img src={item.url} alt="" width="150px" height="150px"/>
                        <p>{item.name}</p>
                        <p>{item._id}</p>
                        <p>{item.gender}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default User;
