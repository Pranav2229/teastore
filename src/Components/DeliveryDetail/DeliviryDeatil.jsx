// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { Footer } from '../Footer/Footer';
// import mybag from '../../assets/Styles/Mybag.module.css'
// import teaimage from '../../assets/Images/teaimage.jpg'
// import backgrd from '../../assets/Images/backgrd.jpg'
// function DeliviryDeatil(props) {
//     const navigate = useNavigate()
//     const product1 = location.state?.deliverydetail; // Get product data
//     console.log("product1", product1);

//     const handlepayment = (reviewdeatil) => {
//         navigate("/review_payment", { state: { reviewdeatil } }); // Pass product data
//     }
//     // useEffect(() => {
//     //     if (!product1) {
//     //         navigate("/"); // Redirect to homepage
//     //     }
//     // }, [product1, navigate]);
//     return (
//         <>
//             <section className={mybag.detaildiliviry}>
//                 <div className={mybag.gerny}>
//                     <span>1. My Bag</span>
//                     <a>_________________________________________________</a>
//                     <span>2. Delivery</span>
//                     <a>__________________________________________________</a>
//                     <span>2. Review & Payment</span>
//                 </div>
//                 <div className='flex'>
//                     <div className={mybag.mybagbody} style={{
//                         // textAlign: 'left',
//                         // backgroundImage: `url(${backgrd})`,
//                         // width: '70%',
//                         // // backgroundPosition: 'center',
//                         // backgroundRepeapxt: 'no-repeat',
//                         // // padding: '50px ',
//                         // // color: 'white'
//                     }}>
//                         <div className={mybag.inputfeilddata}>
//                             <div>
//                                 <p style={{color:'white'}}>Shipping Address</p>
//                             </div>
//                             <div>
//                                 <input placeholder='first name' />
//                             </div>
//                             <div>
//                                 <input placeholder='last name' />
//                             </div>
//                             <div>
//                                 <input placeholder='address' />
//                             </div>
//                             <div>
//                                 <input placeholder='Email Address' />
//                             </div>
//                             <div>
//                                 <input placeholder='PostCode' />
//                                 <input style={{ marginTop: 15 }} placeholder='City' />
//                             </div>
//                             <div>
//                                 <select>
//                                     <option value="">Country</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                     {/* <div>
//                         <img style={{ width: '65%' }} src={teaimage} />
//                     </div> */}
//                     <div>
//                         <div style={{
//                             // margin: '140px',
//                             backgroundColor: '#F4F4F4',
//                             padding: '96px'
//                         }}>
//                             <p style={{ display: 'flex', justifyContent: 'center' }}>Order Summery</p>
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
//                                 <button onClick={() => handlepayment({ reviewdeatil: '1' })}>
//                                     GO TO PAYMENT
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* <Maylikethis /> */}
//                 <Footer />
//             </section>
//         </>
//     )
// }

// export default DeliviryDeatil






















































































































// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Footer } from '../Footer/Footer';
// import mybag from '../../assets/Styles/Mybag.module.css';

// function DeliviryDeatil() {
//     const navigate = useNavigate();
//     const location = useLocation();

//     const product1 = location.state?.deliverydetail;
//     console.log('product1', product1);

//     const handlepayment = (reviewdeatil) => {
//         navigate('/review_payment', { state: { reviewdeatil } });
//     };

//     return (
//         <section className={mybag.detaildiliviry}>
//             {/* STEPS */}
//             <div className={mybag.gerny}>
//                 <span>1. My Bag</span>
//                 <div className={mybag.line}></div>
//                 <span>2. Delivery</span>
//                 <div className={mybag.line}></div>
//                 <span>3. Review & Payment</span>
//             </div>

//             {/* MAIN LAYOUT */}
//             <div className={mybag.layoutThreeCol}>
//                 {/* LEFT – SHIPPING */}
//                 <div className={mybag.mybagbody}>
//                     <div className={mybag.inputfeilddata}>
//                         <p className={mybag.sectionTitle}>Shipping Address</p>

//                         <input placeholder="First Name" />
//                         <input placeholder="Last Name" />
//                         <input placeholder="Street and" />

//                         <div className={mybag.row}>
//                             <input placeholder="PostCode" />
//                             <input placeholder="City" />
//                         </div>

//                         <select>
//                             <option>Country</option>
//                         </select>
//                     </div>
//                 </div>

//                 {/* MIDDLE – BILLING + CONTACT */}
//                 <div className={mybag.middleBox}>
//                     <p className={mybag.sectionTitle}>
//                         Billing Address
//                         <span>(Same as shipping address)</span>
//                     </p>

//                     <label className={mybag.checkbox}>
//                         <input type="checkbox" />
//                         Bill to different address
//                     </label>

//                     <p className={mybag.sectionTitle}>Contact information</p>
//                     <input placeholder="Email Address" />
//                 </div>

//                 {/* RIGHT – SUMMARY */}
//                 <div className={mybag.summaryWrapper}>
//                     <div className={mybag.summaryBox}>
//                         <p className={mybag.summaryTitle}>Order Summary</p>

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

//                         <p className={mybag.estimate}>
//                             Estimated shipping time: 2 days
//                         </p>

//                         <button
//                             className={mybag.payBtn}
//                             onClick={() => handlepayment({ reviewdeatil: '1' })}
//                         >
//                             GO TO PAYMENT
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <Footer />
//         </section>
//     );
// }

// export default DeliviryDeatil;





























// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Footer } from '../Footer/Footer';
// import mybag from '../../assets/Styles/Mybag.module.css';

// function DeliviryDeatil() {
//     const navigate = useNavigate();
//     const location = useLocation();

//     const product1 = location.state?.deliverydetail;
//     console.log('product1', product1);

//     const handlepayment = (reviewdeatil) => {
//         navigate('/review_payment', { state: { reviewdeatil } });
//     };

//     return (
//         <section className={mybag.detaildiliviry}>
//             {/* STEPS */}
//             <div className={mybag.gerny}>
//                 <span>1. My Bag</span>
//                 <div className={mybag.line}></div>
//                 <span>2. Delivery</span>
//                 <div className={mybag.line}></div>
//                 <span>3. Review & Payment</span>
//             </div>

//             {/* MAIN LAYOUT */}
//             <div className={mybag.layoutThreeCol}>
//                 {/* LEFT – SHIPPING */}
//                 <div className={mybag.mybagbody}>
//                     <div className={mybag.inputfeilddata}>
//                         <p className={mybag.sectionTitle}>Shipping Address</p>

//                         <input placeholder="First Name" />
//                         <input placeholder="Last Name" />
//                         <input placeholder="Street and" />

//                         <div className={mybag.row}>
//                             <input placeholder="PostCode" />
//                             <input placeholder="City" />
//                         </div>

//                         <select>
//                             <option>Country</option>
//                         </select>
//                     </div>
//                 </div>

//                 {/* MIDDLE – BILLING + CONTACT */}
//                 <div className={mybag.middleBox}>
//                     <p className={mybag.sectionTitle}>
//                         Billing Address
//                         <span>(Same as shipping address)</span>
//                     </p>

//                     {/* Checkbox aligned with top of Billing Address */}
//                     <div className={mybag.checkboxContainer}>
//                         <input type="checkbox" id="billDiff" />
//                         <label htmlFor="billDiff">Bill to different address</label>
//                     </div>

//                     <p className={mybag.sectionTitle}>Contact information</p>
//                     <input placeholder="Email Address" />
//                 </div>

//                 {/* RIGHT – SUMMARY */}
//                 <div className={mybag.summaryWrapper}>
//                     <div className={mybag.summaryBox}>
//                         <p className={mybag.summaryTitle}>Order Summary</p>

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

//                         <p className={mybag.estimate}>
//                             Estimated shipping time: 2 days
//                         </p>

//                         <button
//                             className={mybag.payBtn}
//                             onClick={() => handlepayment({ reviewdeatil: '1' })}
//                         >
//                             GO TO PAYMENT
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <Footer />
//         </section>
//     );
// }

// export default DeliviryDeatil;

















import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import mybag from '../../assets/Styles/Mybag.module.css';

function DeliviryDeatil() {
    const navigate = useNavigate();
    const location = useLocation();

    const product1 = location.state?.deliverydetail;
    console.log('product1', product1);

    const handlePayment = (reviewDetail) => {
        navigate('/review_payment', { state: { reviewDetail } });
    };

    return (
        <section className={`${mybag.detaildiliviry} deliveryPage`}>
            {/* STEPS */}
            <div className={mybag.gerny}>
                <span>1. My Bag</span>
                <div className={mybag.line}></div>
                <span>2. Delivery</span>
                <div className={mybag.line}></div>
                <span>3. Review & Payment</span>
            </div>

            {/* MAIN LAYOUT */}
            <div className={mybag.layoutThreeCol}>
                {/* LEFT – SHIPPING */}
                <div className={mybag.mybagbody}>
                    <div className={mybag.inputfeilddata}>
                        <p className={mybag.sectionTitle}>Shipping Address</p>
                        <input placeholder="First Name" />
                        <input placeholder="Last Name" />
                        <input placeholder="Street and" />
                        <div className={mybag.row}>
                            <input placeholder="PostCode" />
                            <input placeholder="City" />
                        </div>
                        <select>
                            <option>Country</option>
                        </select>
                    </div>
                </div>

                {/* MIDDLE – BILLING + CONTACT */}
                <div className={mybag.middleBox}>
                    <p className={mybag.sectionTitle}>
                        Billing Address
                        <span>(Same as shipping address)</span>
                    </p>

                    {/* Checkbox for different billing address */}
                    <div className={mybag.checkboxContainer}>
                        <input type="checkbox" id="billDiff" />
                        <label htmlFor="billDiff">Bill to different address</label>
                    </div>

                    <p className={mybag.sectionTitle}>Contact Information</p>
                    <input placeholder="Email Address" />
                </div>

                {/* RIGHT – ORDER SUMMARY */}
                <div className={mybag.summaryWrapper}>
                    <div className={mybag.summaryBox}>
                        <p className={mybag.summaryTitle}>Order Summary</p>

                        <div className={mybag.summaryRow}>
                            <span>Subtotal</span>
                            <span>€3.90</span>
                        </div>

                        <div className={mybag.summaryRow}>
                            <span>Delivery</span>
                            <span>€3.95</span>
                        </div>

                        <div className={mybag.summaryTotal}>
                            <span>Total</span>
                            <span>€7.85</span>
                        </div>

                        <p className={mybag.estimate}>
                            Estimated shipping time: 2 days
                        </p>

                        <button
                            className={mybag.payBtn}
                            onClick={() => handlePayment({ reviewDetail: '1' })}
                        >
                            GO TO PAYMENT
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    );
}

export default DeliviryDeatil;
