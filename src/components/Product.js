import React from "react";

export default function Product(props) {

    const {product} = props;
    return (
        <div className="item">
            <img className="small-img" src={product.image} alt="product.name"></img> 
            <h2>{product.name}</h2>
            <div className="prices">
                <h3>€ {product.price}</h3>
                <button>
                    AddToCart
                    <img className="add-shop-cart-img" src={`${process.env.PUBLIC_URL}/assets/images/add-to-cart-black.png`} alt="add-to-cart"/>
                </button>
            </div>
        </div>
    );
}