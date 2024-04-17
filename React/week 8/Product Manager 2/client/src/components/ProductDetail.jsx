import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {

    const [product, setProduct] = useState({});
    const { id } = useParams();


    useEffect(() => {
        axios.get('http://localhost:5000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, );

    return ( 
        <div className = 'text-center mb-5' >
            <h1 > { product.title } </h1>  
            <h5 > Price: $ { product.price } </h5>
            <h5 > Description: { product.description } </h5>  
                <div>
                    <Link to = { '/' } className = "mx-2 btn border btn-primary" > Home </Link>  
                </div> 
        </div>
    )
}

export default ProductDetail;