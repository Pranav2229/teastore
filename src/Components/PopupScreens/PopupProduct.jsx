import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../assets/Styles/Popup.css'
import tea3 from '../../assets/Images/tea3.png'
import { useSelectedTea } from '../../ContextAPI/TeaContext';
export function PopupProduct({ setOpenPopUp, OpenPopUp }) {
    const { addcard, HandleIncrementDecrement, setaddcard } = useSelectedTea()
    const navigate = useNavigate();
    const mapimage = '/src/assets/Images/'
    // Define actual cart items here
    console.log("addcard", addcard);

    const cartItems = [
        { id: 1, name: "Ceylon Ginger Cinnamon chai tea - 50 g", qty: 1, price: 3.9 },
        { id: 2, name: "Ceylon Ginger Lemon chai tea - 50 g", qty: 2, price: 4.5 },
        { id: 3, name: "Ceylon Green Tea - 50 g", qty: 1, price: 3.0 },
    ];

    const AdditionPrice = () => {
        return addcard
            .reduce((total, item) => total + item.price * item.quantity, 0)
        // .toFixed(2);
    };

    const RemoveCardDetail = (id) => {
        setaddcard(addcard.filter(item => item.id !== id))
    }

    // Handle PURCHASE button click
    const handleProductClick = () => {
        // Optional: store in localStorage as fallback
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        navigate("/mybag", { state: { mybag: cartItems } });
        setOpenPopUp(false); // Close popup after navigation
    };

    return (
        <>
            <div className={`sidebar ${OpenPopUp === true ? 'active' : ''}`}>
                <div className="sd-header">
                    <h4>My Bag</h4>
                    <div className="close" onClick={() => setOpenPopUp(false)}>✕</div>
                </div>

                <div className="sd-body">
                    <ul className="cart-list">
                        {addcard.map((item, index) => (
                            <li className="cart-item" key={index}>
                                <img src={`${mapimage}${item.image}`} alt="product" />

                                <div className="bagdetail">
                                    <p className="title">{item.name}</p>
                                    <span className="remove" onClick={() => RemoveCardDetail(item.id)}>REMOVE</span>
                                </div>

                                <div className="qty-price">
                                    <div className="qty">
                                        <span onClick={() => HandleIncrementDecrement(item.id, 'decrement')}>-</span>
                                        <span>{item.quantity}</span>
                                        <span onClick={() => HandleIncrementDecrement(item.id, 'increment')}>+</span>
                                    </div>
                                    <div className="price">{item.price} Rs</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="totalcountmain">
                    <div className="totalcount">
                        <span>Subtotal</span>
                        <span>{AdditionPrice().toFixed(2)} Rs</span>
                    </div>

                    <div className="totalcount">
                        <span>Delivery Charge</span>
                        <span>10 Rs</span>
                    </div>

                    <div className="totalcountfinal">
                        <strong>Total</strong>
                        <strong>{(AdditionPrice() + 10).toFixed(2)} Rs</strong>
                    </div>

                    <div className="purchasbtn">
                        <button onClick={handleProductClick}>
                            Purchase
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`sidebar-overlay ${OpenPopUp === true ? 'active' : ''}`}
                onClick={() => setOpenPopUp(false)}
            />
        </>
    );
}

