import React, { useEffect, useState } from 'react'
import mybag from '../../assets/Styles/Mybag.module.css'
import { useNavigate, useLocation } from 'react-router-dom';
import { Header } from '../Header/Header'
import tea3 from '../../assets/Images/tea2.png'
import { Maylikethis } from '../ProductDetails/UMaylikeThis/Maylikethis';
import { Footer } from '../Footer/Footer'
import backgrd2 from '../../assets/Images/backgrd2.jpg'
export function Mybag(props) {
    const location = useLocation();
    const navigate = useNavigate()
    const product = location.state?.mybag; // Get product data

    const handleProductClick = (mybag) => {
        navigate("/product", { state: { mybag } }); // Pass product data
    };
    const handlecheckout = (deliverydetail) => {
        navigate("/deliverydetail", { state: { deliverydetail } }); // Pass product data
    }

    useEffect(() => {
        if (!product) {
            navigate("/"); // Redirect to homepage
        }
    }, [product, navigate]);


    return (
        <>
            <section>
                <div className={mybag.gerny}>
                    <span>1. My Bag</span>
                    <a>_________________________________________________</a>
                    <span>2. Delivery</span>
                    <a>__________________________________________________</a>
                    <span>2. Review & Payment</span>
                </div>
                <div className='flex'>
                    <div className={mybag.mybagbody}>
                        <ul>
                            <li>
                                <div>
                                    <img src={tea3} alt='bag' />
                                </div>
                                <div className={mybag.bagdetail}>
                                    <div><span>Ceylon Ginger Cinnamon
                                        chai tea - 50 g</span></div>
                                    <div className={mybag.martop}>
                                        Remove
                                    </div>

                                </div>
                                <div>
                                    <div>
                                        <a>-</a> 1 <a>+</a>
                                    </div>
                                    <div className={mybag.martop2}>
                                        €3.90
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={tea3} alt='bag' />
                                </div>
                                <div className={mybag.bagdetail}>
                                    <div><span>Ceylon Ginger Cinnamon
                                        chai tea - 50 g</span></div>
                                    <div className={mybag.martop}>
                                        Remove
                                    </div>

                                </div>
                                <div>
                                    <div>
                                        <a>-</a> 1 <a>+</a>
                                    </div>
                                    <div className={mybag.martop2}>
                                        €3.90
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={tea3} alt='bag' />
                                </div>
                                <div className={mybag.bagdetail}>
                                    <div><span>Ceylon Ginger Cinnamon
                                        chai tea - 50 g</span></div>
                                    <div className={mybag.martop}>
                                        Remove
                                    </div>

                                </div>
                                <div>
                                    <div>
                                        <a>-</a> 1 <a>+</a>
                                    </div>
                                    <div className={mybag.martop2}>
                                        €3.90
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={tea3} alt='bag' />
                                </div>
                                <div className={mybag.bagdetail}>
                                    <div><span>Ceylon Ginger Cinnamon
                                        chai tea - 50 g</span></div>
                                    <div className={mybag.martop}>
                                        Remove
                                    </div>

                                </div>
                                <div>
                                    <div>
                                        <a>-</a> 1 <a>+</a>
                                    </div>
                                    <div className={mybag.martop2}>
                                        €3.90
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div>
                            <div className='totalcountfinal' style={{ justifyContent: 'end', borderTop: 0 }}>
                                <div style={{ borderTop: '1px solid grey' }}>
                                    <a>Sub Total</a>
                                    <a style={{ marginLeft: '54px' }}>Rs 3.95</a>
                                </div>
                            </div>
                            <div className='purchasbtn' style={{ textAlign: 'end' }}>
                                <button onClick={() => handleProductClick({ id: 1 })}>
                                    Back To Shopping
                                </button>
                            </div>
                        </div>
                    </div>
                    <div style={{ flex: 0.8 }}>
                        {/* style={{

                        }} */}
                        <div style={{
                            margin: '100px',
                            // backgroundColor: '#F4F4F4',
                            padding: '20px',
                             textAlign: 'left',
                            backgroundImage: `url(${backgrd2})`,
                            width: '100%',
                            // backgroundPosition: 'center',
                            backgroundRepeapxt: 'no-repeat',
                            // padding: '50px ',
                            color: 'white'
                        }}>
                            <p style={{ display: 'flex', justifyContent: 'center' , color: 'white' }}>Order Summery</p>
                            <div className='totalcount'>
                                <a>Subtotal</a>
                                <a>Rs 3.90</a>
                            </div>
                            <div className='totalcount'>
                                <a>Delivery</a>
                                <a>Rs 3.95</a>
                            </div>
                            <div className='totalcountfinal'>
                                <a>Total</a>
                                <a>Rs 3.95</a>
                            </div>
                            <div className='purchasbtn'>
                                <button onClick={() => handlecheckout({ id: 1 })}>
                                    Check Out
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <Maylikethis />
                <Footer />
            </section>
        </>
    )
}
