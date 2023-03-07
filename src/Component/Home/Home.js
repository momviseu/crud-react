import React from 'react'
import Product from './Product';
import {useState, useEffect} from "react"


import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/productActions";

const Home = () => {

    // const dispatch = useSelector();
    const dispatch = useDispatch()
    const getProducts = useSelector(state => state.getProducts);
    const {products, loading, error} = getProducts; 

    useEffect(() =>{
        dispatch(listProducts())
    }, [dispatch])

  return (
    <div class="container mt-5">
  <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
    {
        loading ? 
            <h1>Loading...</h1>
        : error ? 
            <h1>{error}</h1>
        : 
            products.map(user => 
            <Product userId={user._id} 
            name={user.name}
            gender={user.gender}
            url={user.url}
            address={user.address}
            age={user.age}
             />)
    }
    
    
    
  </div>
</div>
  )
}

export default Home;