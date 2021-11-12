import React from "react";


export default function Header(props) {

    return (
        <header>
            <div>
                <a href="#/">
                    <h1>e-Commerce</h1>
                </a>
            </div>

            <div className="right-side-header">
                <a href="#/cart"><img className="add-shop-cart-img" src={`${process.env.PUBLIC_URL}/assets/images/add-to-cart-blue.png`} alt="add-to-cart-icon"/></a>
                <div className="circle"></div>
            </div>
        </header>
    );
}
