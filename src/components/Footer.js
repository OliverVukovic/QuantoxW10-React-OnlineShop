import React from "react";


export default function Footer() {

    return (
        <footer>
            <div className="small-icons">
                <img className="add-shop-cart-img" src={`${process.env.PUBLIC_URL}/assets/images/facebook.png`} alt="facebook"/>
                <img className="add-shop-cart-img" src={`${process.env.PUBLIC_URL}/assets/images/instagram.png`} alt="instagram"/>
                <img className="add-shop-cart-img" src={`${process.env.PUBLIC_URL}/assets/images/twitter.png`} alt="twitter"/>
                <img className="add-shop-cart-img" src={`${process.env.PUBLIC_URL}/assets/images/linkedin.png`} alt="linkedin"/>
            </div>
            <div>
                <p>
                    © 2021 Copyright: Oliver Vukovic - Quantox Technology
                </p>
            </div>
        </footer>
    );
}