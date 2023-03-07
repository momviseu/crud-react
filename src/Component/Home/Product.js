import React from 'react'
import { NavLink } from 'react-router-dom';

const Product = ({userId,url,name,age,gender,address}) => {
  return (
    <div class="col">
      <div class="p-3 border bg-light">
        <div class="card" >
            <img src={url} width="100px" height="150px" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink to={`/homecart/${userId}`}>
                  <button class="btn btn-primary">Buy Now</button>
                </NavLink>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Product;