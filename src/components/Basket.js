import React from "react";


export default function Basket(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const totalPrice = itemsPrice;

    return (
        <div className="pop-up">
            <div className="modal">
                <h2>Cart Items</h2>
                <div>
                    {cartItems.length === 0 && <div>Cart Is Empty!</div>}
                </div>
                {cartItems.map((item) => (
                    <div key={item.id} className="row-2">
                        <div className="col-2">{item.name}</div>
                        <div className="col-2">
                            <button onClick={() => onAdd(item)} className="add">
                                +
                            </button>
                            <button onClick={() => onRemove(item)} className="remove">
                                -
                            </button>
                        </div>

                        <div className="col-2 move-text-right">
                            {item.qty} x ${item.price.toFixed(2)}
                        </div>
                    </div>
                ))}

                {cartItems.length !== 0 && (
                    <div className="total-price">
                        <div>Total Price:</div>
                        <div>€ {itemsPrice.toFixed(2)}</div>
                    </div>
                )}

            </div>
        </div>
    );
}
