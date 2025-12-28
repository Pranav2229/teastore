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

