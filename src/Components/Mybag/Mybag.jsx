import React, { useEffect, useState } from 'react'
import mybag from '../../assets/Styles/Mybag.module.css'
import { useNavigate, useLocation } from 'react-router-dom';
import { Header } from '../Header/Header'
import tea3 from '../../assets/Images/tea2.png'
import { Maylikethis } from '../ProductDetails/UMaylikeThis/Maylikethis';
import { Footer } from '../Footer/Footer'
import backgrd2 from '../../assets/Images/backgrd2.jpg'
import styles from '../../assets/Styles/DeliveryDetail.module.css';

import { useSelectedTea } from '../../ContextAPI/TeaContext';
//     const handleProductClick = (mybag) => {
//         navigate("/product", { state: { mybag } }); // Pass product data
//     };
//     const handlecheckout = (deliverydetail) => {
//         navigate("/deliverydetail", { state: { deliverydetail } }); // Pass product data
//     }

//     useEffect(() => {
//         if (!product) {
//             navigate("/"); // Redirect to homepage
//         }
//     }, [product, navigate]);


//     return (
//         <>
//             <section>
//                 <div className={mybag.gerny}>
//                     <span>1. My Bag</span>
//                     <a>_________________________________________________</a>
//                     <span>2. Delivery</span>
//                     <a>__________________________________________________</a>
//                     <span>2. Review & Payment</span>
//                 </div>
//                 <div className='flex'>
//                     <div className={mybag.mybagbody}>
//                         <ul>
//                             <li>
//                                 <div>
//                                     <img src={tea3} alt='bag' />
//                                 </div>
//                                 <div className={mybag.bagdetail}>
//                                     <div><span>Ceylon Ginger Cinnamon
//                                         chai tea - 50 g</span></div>
//                                     <div className={mybag.martop}>
//                                         Remove
//                                     </div>

//                                 </div>
//                                 <div>
//                                     <div>
//                                         <a>-</a> 1 <a>+</a>
//                                     </div>
//                                     <div className={mybag.martop2}>
//                                         €3.90
//                                     </div>
//                                 </div>
//                             </li>
//                             <li>
//                                 <div>
//                                     <img src={tea3} alt='bag' />
//                                 </div>
//                                 <div className={mybag.bagdetail}>
//                                     <div><span>Ceylon Ginger Cinnamon
//                                         chai tea - 50 g</span></div>
//                                     <div className={mybag.martop}>
//                                         Remove
//                                     </div>

//                                 </div>
//                                 <div>
//                                     <div>
//                                         <a>-</a> 1 <a>+</a>
//                                     </div>
//                                     <div className={mybag.martop2}>
//                                         €3.90
//                                     </div>
//                                 </div>
//                             </li>
//                             <li>
//                                 <div>
//                                     <img src={tea3} alt='bag' />
//                                 </div>
//                                 <div className={mybag.bagdetail}>
//                                     <div><span>Ceylon Ginger Cinnamon
//                                         chai tea - 50 g</span></div>
//                                     <div className={mybag.martop}>
//                                         Remove
//                                     </div>

//                                 </div>
//                                 <div>
//                                     <div>
//                                         <a>-</a> 1 <a>+</a>
//                                     </div>
//                                     <div className={mybag.martop2}>
//                                         €3.90
//                                     </div>
//                                 </div>
//                             </li>
//                             <li>
//                                 <div>
//                                     <img src={tea3} alt='bag' />
//                                 </div>
//                                 <div className={mybag.bagdetail}>
//                                     <div><span>Ceylon Ginger Cinnamon
//                                         chai tea - 50 g</span></div>
//                                     <div className={mybag.martop}>
//                                         Remove
//                                     </div>

//                                 </div>
//                                 <div>
//                                     <div>
//                                         <a>-</a> 1 <a>+</a>
//                                     </div>
//                                     <div className={mybag.martop2}>
//                                         €3.90
//                                     </div>
//                                 </div>
//                             </li>
//                         </ul>
//                         <div>
//                             <div className='totalcountfinal' style={{ justifyContent: 'end', borderTop: 0 }}>
//                                 <div style={{ borderTop: '1px solid grey' }}>
//                                     <a>Sub Total</a>
//                                     <a style={{ marginLeft: '54px' }}>Rs 3.95</a>
//                                 </div>
//                             </div>
//                             <div className='purchasbtn' style={{ textAlign: 'end' }}>
//                                 <button onClick={() => handleProductClick({ id: 1 })}>
//                                     Back To Shopping
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                     <div style={{ flex: 0.8 }}>
//                         {/* style={{

//                         }} */}
//                         <div style={{
//                             margin: '100px',
//                             // backgroundColor: '#F4F4F4',
//                             padding: '20px',
//                              textAlign: 'left',
//                             backgroundImage: `url(${backgrd2})`,
//                             width: '100%',
//                             // backgroundPosition: 'center',
//                             backgroundRepeapxt: 'no-repeat',
//                             // padding: '50px ',
//                             color: 'white'
//                         }}>
//                             <p style={{ display: 'flex', justifyContent: 'center' , color: 'white' }}>Order Summery</p>
//                             <div className='totalcount'>
//                                 <a>Subtotal</a>
//                                 <a>Rs 3.90</a>
//                             </div>
//                             <div className='totalcount'>
//                                 <a>Delivery</a>
//                                 <a>Rs 3.95</a>
//                             </div>
//                             <div className='totalcountfinal'>
//                                 <a>Total</a>
//                                 <a>Rs 3.95</a>
//                             </div>
//                             <div className='purchasbtn'>
//                                 <button onClick={() => handlecheckout({ id: 1 })}>
//                                     Check Out
//                                 </button>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//                 <Maylikethis />
//                 <Footer />
//             </section>
//         </>
//     )
// }





// export function Mybag() {
//     const location = useLocation();
//     const navigate = useNavigate();
//     // const product = location.state?.mybag;
//     const cartItems = location.state?.mybag || [];


//     const handleProductClick = (mybag) => {
//         navigate("/product", { state: { mybag } });
//     };

//     const handlecheckout = (deliverydetail) => {
//         navigate("/deliverydetail", { state: { deliverydetail } });
//     };

//     useEffect(() => {
//         if (!product) navigate("/");
//     }, [product, navigate]);

//     return (
//         <section className={mybag.page}>
//             {/* STEP INDICATOR */}
//             <div className={mybag.gerny}>
//                 <span>1. MY BAG</span>
//                 <span className={mybag.line}></span>
//                 <span>2. DELIVERY</span>
//                 <span className={mybag.line}></span>
//                 <span>3. REVIEW & PAYMENT</span>
//             </div>

//             {/* MAIN CONTENT */}
//             <div className={mybag.layout}>
//                 {/* LEFT – BAG ITEMS */}
//                 <div className={mybag.mybagbody}>
//                     <ul>
//                         {[1, 2, 3].map((item) => (
//                             <li key={item} className={mybag.bagItem}>
//                                 <img src={tea3} alt="tea" />
//                                 <div className={mybag.bagdetail}>
//                                     <p>Ceylon Ginger Cinnamon<br />chai tea - 50 g</p>
//                                     <button className={mybag.remove}>REMOVE</button>
//                                 </div>
//                                 <div className={mybag.qtyPrice}>
//                                     <div className={mybag.qty}>
//                                         <button>-</button>
//                                         <span>1</span>
//                                         <button>+</button>
//                                     </div>
//                                     <span className={mybag.price}>€3.90</span>
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>

//                     <div className={mybag.subtotalRow}>
//                         <span>Subtotal</span>
//                         <span>€3.90</span>
//                     </div>

//                     <div className={mybag.backBtn}>
//                         <button onClick={() => handleProductClick({ id: 1 })}>
//                             BACK TO SHOPPING
//                         </button>
//                     </div>
//                 </div>

//                 {/* RIGHT – ORDER SUMMARY */}
//                 <div className={mybag.summaryWrapper}>
//                     <div
//                         className={mybag.summary}
//                         style={{ backgroundImage: `url(${backgrd2})` }}
//                     >
//                         <h3>Order Summary</h3>
//                         <div className={mybag.summaryRow}>
//                             <span>Subtotal</span>
//                             <span>€3.90</span>
//                         </div>
//                         <div className={mybag.summaryRow}>
//                             <span>Delivery</span>
//                             <span>€3.95</span>
//                         </div>
//                         <div className={mybag.summaryTotal}>
//                             <span>Total</span>
//                             <span>€7.85</span>
//                         </div>
//                         <button
//                             className={mybag.checkoutBtn}
//                             onClick={() => handlecheckout({ id: 1 })}
//                         >
//                             CHECK OUT
//                         </button>
//                     </div>

//                     {/* BELOW ORDER SUMMARY – PAYMENT & DELIVERY/RETOUR */}
//                     <div className={mybag.paymentOptions}>
//                         <div>
//                             <label>Payment Type:</label>
//                             <select>
//                                 <option>Credit/Debit Card</option>
//                                 <option>PayPal</option>
//                                 <option>Cash on Delivery</option>
//                             </select>
//                         </div>
//                         <div>
//                             <label>Delivery & Retour:</label>
//                             <select>
//                                 <option>Standard Delivery & 14-day Return</option>
//                                 <option>Express Delivery & 30-day Return</option>
//                             </select>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <Maylikethis />
//             <Footer />
//         </section>
//     );
// }













// import React, { useEffect } from 'react';
// import mybag from '../../assets/Styles/Mybag.module.css';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Header } from '../Header/Header';
// import tea3 from '../../assets/Images/tea2.png';
// import { Maylikethis } from '../ProductDetails/UMaylikeThis/Maylikethis';
// import { Footer } from '../Footer/Footer';
// import backgrd2 from '../../assets/Images/backgrd2.jpg';

export function Mybag() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1); // Delivery step is active
    const { addcard, HandleIncrementDecrement, setaddcard } = useSelectedTea()
    const mapimage = '/src/assets/Images/'


    const AdditionPrice = () => {
        return addcard
            .reduce((total, item) => total + item.price * item.quantity, 0)
        // .toFixed(2);
    };

    // useEffect(() => {
    //     if (!cartItems.length) navigate("/"); // redirect to home if no items
    // }, [cartItems, navigate]);


    const handleCheckout = () => {
        navigate("/deliverydetail", { state: 'detail' }); // pass cartItems to delivery page
    };

    const RemoveCardDetail = (id) => {
        setaddcard(addcard.filter(item => item.id !== id))
    }

    const steps = [
        { id: 1, label: 'MY BAG' },
        { id: 2, label: 'DELIVERY' },
        { id: 3, label: 'REVIEW & PAYMENT' },
    ];

    useEffect(() => {
        window.scroll(0, 0)
        if (addcard.length == 0) {
            navigate('/teacollection')
        }
    })

    return (
        <section className={mybag.page}>
            {/* STEP INDICATOR */}
            <div className={styles.steps}>
                {steps.map((step, index) => (
                    <React.Fragment key={step.id}>
                        <span className={currentStep === step.id ? styles.active : styles.disactive}>
                            {step.id}. {step.label}
                        </span>
                        {index < steps.length - 1 && (
                            <div
                                className={`${styles.stepLine} ${currentStep > step.id ? styles.activeLine : ''
                                    }`}
                            >

                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* MAIN CONTENT */}
            <div className={mybag.layout}>
                {/* LEFT – BAG ITEMS */}
                <div className={mybag.mybagbody}>
                    <ul>
                        {addcard.map((item) => (
                            <li key={item.id} className={mybag.bagItem}>
                                <img src={`${mapimage}${item.image}`} alt={item.name} />
                                <div className={mybag.bagdetail}>
                                    <p>{item.name}</p>
                                    <button className={mybag.remove} onClick={() => RemoveCardDetail(item.id)}>REMOVE</button>
                                </div>
                                <div className={mybag.qtyPrice}>
                                    <div className={mybag.qty}>
                                        <button onClick={() => HandleIncrementDecrement(item.id, 'decrement')}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => HandleIncrementDecrement(item.id, 'increment')}>+</button>
                                    </div>
                                    <span className={mybag.price}>{item.price} Rs</span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.totalRow}>
                        <span>Subtotal</span>
                        <span>{AdditionPrice().toFixed(2)} Rs</span>
                    </div>

                    <div className={styles.totalRow}>
                        <span>Delivery Charge</span>
                        <span>10 Rs</span>
                    </div>

                    <div className={styles.totalFinal}>
                        <strong>Total</strong>
                        <strong>{(AdditionPrice() + 10).toFixed(2)} Rs</strong>
                    </div>

                    {/* BUTTONS HORIZONTAL */}
                    <div className={styles.buttonWrapper}>
                        <div className={mybag.backBtn}>
                            <button onClick={() => navigate("/teacollection")}>BACK TO SHOPPING</button>
                        </div>
                    </div>
                </div>

                {/* RIGHT – ORDER SUMMARY */}
                <div className={mybag.summaryWrapper}>
                    <div
                        className={mybag.summary}
                        style={{ backgroundImage: `url(${backgrd2})` }}
                    >
                        <h3>Order Summary</h3>
                        <div className={mybag.summaryRow}>
                            <span>Subtotal</span>
                            <span>{AdditionPrice().toFixed(2)} Rs</span>
                        </div>
                        <div className={mybag.summaryRow}>
                            <span>Delivery Charges</span>
                            <span>10 Rs</span>
                        </div>
                        <div className={mybag.summaryTotal}>
                            <span>Total</span>
                            <span>{(AdditionPrice() + 10).toFixed(2)} Rs</span>
                        </div>
                        <button
                            className={mybag.checkoutBtn}
                            onClick={handleCheckout}
                        >
                            CHECK OUT
                        </button>
                    </div>

                    {/* BELOW ORDER SUMMARY – PAYMENT & DELIVERY/RETOUR */}
                    <div className={mybag.paymentOptions}>
                        <div>
                            <label>Payment Type:</label>
                            <select>
                                <option>Credit/Debit Card</option>
                                <option>PayPal</option>
                                <option>Cash on Delivery</option>
                            </select>
                        </div>
                        <div>
                            <label>Delivery & Retour:</label>
                            <select>
                                <option>Standard Delivery & 14-day Return</option>
                                <option>Express Delivery & 30-day Return</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <Maylikethis />
            <Footer />
        </section>
    );
}

