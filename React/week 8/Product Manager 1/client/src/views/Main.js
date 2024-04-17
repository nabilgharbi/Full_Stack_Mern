import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';


const Main = (props) => {

    const [allProducts, setAllProducts] = useState([])

    return ( 
      <div >
        <ProductForm allProducts = { allProducts }setAllProducts = { setAllProducts }/> 
      </div>
    )
}

export default Main