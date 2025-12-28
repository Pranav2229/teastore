import React, { useEffect, useState } from 'react';
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















import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import styles from '../../assets/Styles/DeliveryDetail.module.css';
import { useSelectedTea } from '../../ContextAPI/TeaContext';

function DeliveryDetail() {
  const navigate = useNavigate();
  const { addcard, HandleIncrementDecrement } = useSelectedTea()

  // Step state: 1 = MY BAG, 2 = DELIVERY, 3 = REVIEW & PAYMENT
  const [currentStep, setCurrentStep] = useState(2); // Delivery step is active
  const AdditionPrice = () => {
    return addcard
      .reduce((total, item) => total + item.price * item.quantity, 0)
    // .toFixed(2);
  };
  const steps = [
    { id: 1, label: 'MY BAG' },
    { id: 2, label: 'DELIVERY' },
    { id: 3, label: 'REVIEW & PAYMENT' },
  ];
  useEffect(() => {
    window.scroll(0, 0)
  })
  return (
    <section className={styles.page}>

      {/* STEP INDICATOR */}
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <span className={currentStep === step.id ? '' : styles.disactive} onClick={() => step.label == 'MY BAG' ? navigate('/mybag') : ''}>
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

      {/* MAIN CONTENT GRID */}
      <div className={styles.layout}>

        {/* SHIPPING ADDRESS */}
        <div className={styles.column}>
          <h2 className={styles.heading}>Shipping Address</h2>
          <input className={`${styles.input} ${styles.inputLarge}`} placeholder="First Name" />
          <input className={`${styles.input} ${styles.inputLarge}`} placeholder="Last Name" />
          <input className={`${styles.input} ${styles.inputLarge}`} placeholder="Street and" />

          <div className={styles.row}>
            <input className={`${styles.input} ${styles.inputSmall}`} placeholder="PostCode" />
            <input className={`${styles.input} ${styles.inputMedium}`} placeholder="City" />
          </div>

          <select className={`${styles.input} ${styles.inputLarge}`}>
            <option>Country</option>
          </select>
        </div>

        {/* BILLING ADDRESS */}
        <div className={styles.column}>
          <h2 className={styles.heading}>Billing Address</h2>
          <p className={styles.muted}>(Same as shipping address)</p>

          <label className={styles.checkbox}>
            <input type="checkbox" />
            <span>Bill to different address</span>
          </label>

          <h2 className={styles.heading}>Contact Information</h2>
          <input className={`${styles.input} ${styles.inputLarge}`} placeholder="Email Address" />
        </div>

        {/* ORDER SUMMARY */}
        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>Order Summary</h2>

          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>{AdditionPrice().toFixed(2)} Rs</span>
          </div>

          <div className={styles.summaryRow}>
            <span>Delivery Charges</span>
            <span>10 Rs</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.summaryRowTotal}>
            <span>Total</span>
            <span>{(AdditionPrice() + 10).toFixed(2)} Rs</span>
          </div>

          <p className={styles.muted}>Estimated shipping time: 2 days</p>

          <button className={styles.payBtn} onClick={() => navigate('/review_payment')}>
            GO TO PAYMENT
          </button>
        </div>

      </div>

      <Footer />
    </section>
  );
}

export default DeliveryDetail;

