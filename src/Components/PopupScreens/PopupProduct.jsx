import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../assets/Styles/Popup.css'
import tea3 from '../../assets/Images/tea3.png'

// export function PopupProduct({ setOpenPopUp, OpenPopUp }) {
//     // const [isOpen, setIsopen] = useState(true);
//     const navigate = useNavigate()
//     // const ToggleSidebar = () => {
//     //     isOpen === true ? setIsopen(true) : setIsopen(false);
//     // }
//     const handleProductClick = (mybag) => {
//         navigate("/mybag", { state: { mybag } }); // Pass product data
//     };
//     return (
//         <>
//             <div className="container-fluid mt-3">
//                 <div className={`sidebar ${OpenPopUp == true ? 'active' : ''}`}>
//                     <div className="sd-header">
//                         <h4 className="mb-0">My Bag</h4>
//                         {/* <div className="btn btn-primary" ><i className="fa fa-times"></i></div> */}
//                         <div className='close' onClick={() => setOpenPopUp(false)}>X</div>
//                     </div>
//                     <div className="sd-body">
//                         <ul>
//                             <li>
//                                 {/* <div> */}
//                                 <img src={tea3} alt='bag' />
//                                 {/* </div> */}
//                                 <div className='bagdetail'>
//                                     <div><span>Ceylon Ginger Cinnamon
//                                         chai tea - 50 g</span></div>
//                                     <div className='martop'>
//                                         Remove
//                                     </div>

//                                 </div>
//                                 <div>
//                                     <div>
//                                         <a>-</a> 1 <a>+</a>
//                                     </div>
//                                     <div className='martop2'>
//                                         €3.90
//                                     </div>
//                                 </div>
//                             </li>
//                             <li>
//                                 {/* <div> */}
//                                 <img src={tea3} alt='bag' />
//                                 {/* </div> */}
//                                 <div className='bagdetail'>
//                                     <div><span>Ceylon Ginger Cinnamon
//                                         chai tea - 50 g</span></div>
//                                     <div className='martop'>
//                                         Remove
//                                     </div>

//                                 </div>
//                                 <div>
//                                     <div>
//                                         <a>-</a> 1 <a>+</a>
//                                     </div>
//                                     <div className='martop2'>
//                                         €3.90
//                                     </div>
//                                 </div>
//                             </li>
//                             <li>
//                                 {/* <div> */}
//                                 <img src={tea3} alt='bag' />
//                                 {/* </div> */}
//                                 <div className='bagdetail'>
//                                     <div><span>Ceylon Ginger Cinnamon
//                                         chai tea - 50 g</span></div>
//                                     <div className='martop'>
//                                         Remove
//                                     </div>

//                                 </div>
//                                 <div>
//                                     <div>
//                                         <a>-</a> 1 <a>+</a>
//                                     </div>
//                                     <div className='martop2'>
//                                         €3.90
//                                     </div>
//                                 </div>
//                             </li>
//                             {/* <li>
//                                 <img src={tea3} alt='bag' />
//                                 <div className='bagdetail'>
//                                     <div><span>Ceylon Ginger Cinnamon
//                                         chai tea - 50 g</span></div>
//                                     <div className='martop'>
//                                         Remove
//                                     </div>

//                                 </div>
//                                 <div>
//                                     <div>
//                                         <a>-</a> 1 <a>+</a>
//                                     </div>
//                                     <div className='martop2'>
//                                         €3.90
//                                     </div>
//                                 </div>
//                             </li>
//                             <li>
//                                 <img src={tea3} alt='bag' />
//                                 <div className='bagdetail'>
//                                     <div><span>Ceylon Ginger Cinnamon
//                                         chai tea - 50 g</span></div>
//                                     <div className='martop'>
//                                         Remove
//                                     </div>

//                                 </div>
//                                 <div>
//                                     <div>
//                                         <a>-</a> 1 <a>+</a>
//                                     </div>
//                                     <div className='martop2'>
//                                         €3.90
//                                     </div>
//                                 </div>
//                             </li>
//                             <li>
//                                 <img src={tea3} alt='bag' />
//                                 <div className='bagdetail'>
//                                     <div><span>Ceylon Ginger Cinnamon
//                                         chai tea - 50 g</span></div>
//                                     <div className='martop'>
//                                         Remove
//                                     </div>

//                                 </div>
//                                 <div>
//                                     <div>
//                                         <a>-</a> 1 <a>+</a>
//                                     </div>
//                                     <div className='martop2'>
//                                         €3.90
//                                     </div>
//                                 </div>
//                             </li> */}
//                         </ul>
//                     </div>
//                     <div className='totalcountmain'>
//                         <div className='totalcount'>
//                             <a>Subtotal</a>
//                             <a>€3.90</a>
//                         </div>
//                         <div className='totalcount'>
//                             <a>Delivery</a>
//                             <a>€3.95</a>
//                         </div>
//                         <div className='totalcountfinal'>
//                             <a>Total</a>
//                             <a>€3.95</a>
//                         </div>
//                         <div className='purchasbtn'>
//                             <button onClick={() => handleProductClick({ id: 1 })}>
//                                 purchases
//                             </button>
//                         </div>
//                     </div>

//                 </div>
//                 <div className={`sidebar-overlay ${OpenPopUp == true ? 'active' : ''}`} onClick={() => setOpenPopUp(false)}></div>
//             </div>
//         </>
//     )
// }




























// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import '../../assets/Styles/Popup.css'
// import tea3 from '../../assets/Images/tea3.png'

// export function PopupProduct({ setOpenPopUp, OpenPopUp }) {
//     const navigate = useNavigate()

//     const handleProductClick = (mybag) => {
//         navigate("/mybag", { state: { mybag } })
//     }

//     return (
//         <>
//             <div className={`sidebar ${OpenPopUp === true ? 'active' : ''}`}>
//                 <div className="sd-header">
//                     <h4>My Bag</h4>
//                     <div className="close" onClick={() => setOpenPopUp(false)}>✕</div>
//                 </div>

//                 <div className="sd-body">
//                     <ul className="cart-list">

//                         {[1, 2, 3].map((item, index) => (
//                             <li className="cart-item" key={index}>
//                                 <img src={tea3} alt="product" />

//                                 <div className="bagdetail">
//                                     <p className="title">
//                                         Ceylon Ginger Cinnamon<br />chai tea - 50 g
//                                     </p>
//                                     <span className="remove">REMOVE</span>
//                                 </div>

//                                 <div className="qty-price">
//                                     <div className="qty">
//                                         <span>-</span>
//                                         <span>1</span>
//                                         <span>+</span>
//                                     </div>
//                                     <div className="price">€3.90</div>
//                                 </div>
//                             </li>
//                         ))}

//                     </ul>
//                 </div>

//                 <div className="totalcountmain">
//                     <div className="totalcount">
//                         <span>Subtotal</span>
//                         <span>€3.90</span>
//                     </div>

//                     <div className="totalcount">
//                         <span>Delivery</span>
//                         <span>€3.95</span>
//                     </div>

//                     <div className="totalcountfinal">
//                         <strong>Total</strong>
//                         <strong>€7.85</strong>
//                     </div>

//                     <div className="purchasbtn">
//                         <button onClick={() => handleProductClick({ id: 1 })}>
//                             Purchase
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <div
//                 className={`sidebar-overlay ${OpenPopUp === true ? 'active' : ''}`}
//                 onClick={() => setOpenPopUp(false)}
//             />
//         </>
//     )
// }















// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../../assets/Styles/Popup.css';
// import tea3 from '../../assets/Images/tea3.png';

export function PopupProduct({ setOpenPopUp, OpenPopUp }) {
    const navigate = useNavigate();

    // Define actual cart items here
    const cartItems = [
        { id: 1, name: "Ceylon Ginger Cinnamon chai tea - 50 g", qty: 1, price: 3.9 },
        { id: 2, name: "Ceylon Ginger Lemon chai tea - 50 g", qty: 2, price: 4.5 },
        { id: 3, name: "Ceylon Green Tea - 50 g", qty: 1, price: 3.0 },
    ];

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
                        {cartItems.map((item, index) => (
                            <li className="cart-item" key={index}>
                                <img src={tea3} alt="product" />

                                <div className="bagdetail">
                                    <p className="title">{item.name}</p>
                                    <span className="remove">REMOVE</span>
                                </div>

                                <div className="qty-price">
                                    <div className="qty">
                                        <span>-</span>
                                        <span>{item.qty}</span>
                                        <span>+</span>
                                    </div>
                                    <div className="price">€{item.price}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="totalcountmain">
                    <div className="totalcount">
                        <span>Subtotal</span>
                        <span>€{cartItems.reduce((sum, i) => sum + i.price * i.qty, 0).toFixed(2)}</span>
                    </div>

                    <div className="totalcount">
                        <span>Delivery</span>
                        <span>€3.95</span>
                    </div>

                    <div className="totalcountfinal">
                        <strong>Total</strong>
                        <strong>€{(cartItems.reduce((sum, i) => sum + i.price * i.qty, 0) + 3.95).toFixed(2)}</strong>
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

