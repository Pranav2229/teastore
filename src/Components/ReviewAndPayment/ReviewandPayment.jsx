// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { Footer } from '../Footer/Footer';
// import mybag from '../../assets/Styles/Mybag.module.css'
// import visa from '../../assets/Images/Visa.png'
// import Path from '../../assets/Images/Path.png'
// import Group30 from '../../assets/Images/Group 30.png'
// function ReviewandPayment(props) {
//     const navigate = useNavigate()
//     const handlepayment = () => {
//         navigate('/payment_succesful')
//     }
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
//                     <div className={mybag.mybagbody} style={{ flex: 0.5 }}>
//                         <div className={mybag.inputfeilddata}>
//                             <div>
//                                 <div>
//                                     <h3>Delivery Details</h3>
//                                     <h4>Shipping Address</h4>
//                                     <div>
//                                         3 Falahi St , Falahi Ave, Pasdaran Blvd, Fars Province , Shiraz
//                                         71856-95159
//                                         Iran

//                                     </div>
//                                 </div>
//                                 <div>
//                                     <h4>Billing Address</h4>
//                                     <div>
//                                         Same as shipping address
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <h4>Contact Information</h4>
//                                     <div>
//                                         contact@name.com
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div style={{ flex: 0.3 }}>
//                         <div>
//                             <p>Payment Type</p>
//                             <div style={{ border: '1px solid #dddddd', padding: 15, textAlign: 'center' }}>
//                                 <img src={visa} />
//                             </div>
//                             <div style={{ border: '1px solid #dddddd', padding: 15, marginTop: 10 }}>
//                                 <div style={{
//                                     display: 'flex',
//                                     justifyContent: 'center',
//                                     alignItems: 'center'
//                                 }}>
//                                     <span>Credit or Debit Card</span>
//                                     <img style={{ width: '30px', marginLeft: 20 }} src={visa} />
//                                     <img style={{ width: '15px', marginLeft: 20 }} src={Path} />
//                                     <img style={{ width: '25px', marginLeft: 20 }} src={Group30} />

//                                 </div>
//                                 <div style={{ marginTop: 25 }}>
//                                     <a style={{ fontSize: 12 }}>Card Number</a>
//                                     <input
//                                         type="text"
//                                         id="cardNumber"
//                                         maxlength="19"
//                                         placeholder="XXXX XXXX XXXX XXXX"
//                                     />

//                                 </div>
//                                 <div style={{ display: 'flex', marginTop: 20 }}>
//                                     <div>
//                                         <a style={{ fontSize: 12 }}>Card Number</a>
//                                         <input
//                                             type="text"
//                                             id="cardNumber"
//                                             maxlength="19"
//                                             placeholder="XXXX XXXX"
//                                         />
//                                     </div>
//                                     <div>
//                                         <a style={{ fontSize: 12 }}>CVC</a>
//                                         <input
//                                             style={{ marginLeft: 5 }}
//                                             type="text"
//                                             id="cardNumber"
//                                             maxlength="19"
//                                             placeholder=""
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div style={{ flex: 0.3 }}>
//                         <div style={{
//                             marginLeft: '20px',
//                             backgroundColor: '#F4F4F4',
//                             padding: '33px'
//                         }}>
//                             <p style={{ display: 'flex', justifyContent: 'center', justifyContent: 'space-around' }}>Order Summery</p>
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
//                                     PAY
//                                 </button>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//                 {/* <Maylikethis /> */}
//                 <Footer />
//             </section >
//         </>
//     )
// }

// export default ReviewandPayment


































import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/Styles/ReviewAndPayment.module.css';

import visa from '../../assets/Images/Visa.png';
import Path from '../../assets/Images/Path.png';
import Group30 from '../../assets/Images/Group 30.png';
import { Footer } from '../Footer/Footer';

function ReviewAndPayment() {
  const navigate = useNavigate();

  return (
    <>
      <section className={styles.container}>

        {/* ================= STEPS ================= */}
        <div className={styles.steps}>
          <span>1. MY BAG</span>

          {/* Normal line */}
          <span className={styles.line}></span>

          <span>2. DELIVERY</span>

          {/* Active (current phase) line */}
          <span className={`${styles.line} ${styles.lineActive}`}></span>

          <span className={styles.active}>3. REVIEW & PAYMENT</span>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className={styles.grid}>

          {/* ================= LEFT COLUMN ================= */}
          <div className={styles.left}>
            <h3>Delivery Details</h3>

            <div className={styles.block}>
              <h4>Shipping address</h4>
              <p>
                3 Falahi St, Falahi Ave,<br />
                Pasdaran Blvd, Fars Province,<br />
                Shiraz 71856-95159<br />
                Iran
              </p>
            </div>

            <div className={styles.block}>
              <h4>Billing address</h4>
              <p>Same as shipping address</p>
            </div>

            <div className={styles.block}>
              <h4>Contact information</h4>
              <p>amoopur@gmail.com</p>
            </div>

            <button className={styles.editBtn}>EDIT DETAILS</button>
          </div>

          {/* ================= MIDDLE COLUMN ================= */}
          <div className={styles.middle}>
            <h3>Payment type</h3>

            {/* VISA */}
            <div className={styles.visaBox}>
              <img src={visa} alt="Visa" />
            </div>

            {/* CREDIT / DEBIT */}
            <div className={styles.cardBox}>
              <div className={styles.cardHeader}>
                <span>Credit or Debit card</span>
                <img src={visa} alt="" />
                <img src={Path} alt="" />
                <img src={Group30} alt="" />
              </div>

              <div className={styles.inputGroup}>
                <label>Card Number</label>
                <input type="text" placeholder="XXXX XXXX XXXX XXXX" />
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Expired date</label>
                  <input type="text" placeholder="XX/XX" />
                </div>

                <div className={styles.inputGroup}>
                  <label>CVC</label>
                  <input type="text" placeholder="XXX" />
                </div>
              </div>
            </div>

            {/* ADVANCED PAYMENT */}
            <div className={styles.advancedPayment}>
              ADVANCED PAYMENT
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div>
            {/* Order Summary Box */}
            <div className={styles.right}>
              <h3>Order summary</h3>

              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>€3.90</span>
              </div>

              <div className={styles.summaryRow}>
                <span>Delivery</span>
                <span>€3.95</span>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.totalRow}>
                <span>Total</span>
                <span>€7.85</span>
              </div>

              <p className={styles.shipping}>
                Estimated shipping time: 2 days
              </p>
            </div>

            {/* PAY BUTTON (OUTSIDE Order Summary box) */}
            <button
              className={styles.payBtn}
              onClick={() => navigate('/payment_succesful')}
            >
              PAY
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default ReviewAndPayment;

