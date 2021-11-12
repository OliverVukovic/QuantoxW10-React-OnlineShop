import React from "react";
import Product from "./Product";


export default function Section(props) {
    const { products, onAdd } = props;
    return (
        <section>
            <h2>Choose our Products</h2>
            <div className="row">
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}>
                    </Product>
                ))} 
            </div>
        </section>
    );
}
