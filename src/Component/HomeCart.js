import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

// import { getProductDetails } from "../../redux/actions/productActions";
// import {addToCart } from "../../redux/actions/cartActions";
import { addToCart } from "../redux/actions/cartActions"
import {getProductDetails } from "../redux/actions/productActions"

const HomeCart = ({match, history}) => {

    const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.getProductDetails);
  const {product, loading, error } = productDetails;

  // useEffect(() => {
  //   if(product && match.params.id !== product._id) {
  //     dispatch(getProductDetails(match.params.id))
  //   }else{
  //     console.log("Product not found");
  //   }
  // }, [dispatch, product, match]);


  return (
    <div className="container px-4">
      <div className="row gx-5">
        <div className="col">
          <div className="p-3 border bg-light">
            <img src={product.url} alt="" className="w-25 h-25" />
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-light">
            <p>{product.name}</p>
            <p>{product.gender}</p>
            <button className="btn btn-outline-success my-2">Add Cart</button>
          </div>
        </div>
      </div>
      <NavLink to="/">
        <button className="btn btn-primary my-3">Go to User</button>
      </NavLink>
    </div>
  )
}

export default HomeCart;