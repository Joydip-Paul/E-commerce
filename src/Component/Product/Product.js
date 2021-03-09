import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.products.category);
    const {name,category,img,seller,price,stock} = props.product;
    // console.log(props.product.name)
    
    return (
        <div>
            <div className="Card-container">
                <div className="single-product">
                    <div className="imgBox">
                        <img src = {img}></img>
                    </div>
                    <div className="content">
                        <p>Name: {name}</p>
                        <p>Category: {category}</p>
                        <p>Seller: {seller}</p>
                        <p>Price: {price}</p>
                        <button onClick = {()=>props.handleProduct(props.product)}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;