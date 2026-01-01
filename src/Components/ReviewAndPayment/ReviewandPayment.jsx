

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/Styles/ReviewAndPayment.module.css';

import visa from '../../assets/Images/Visa.png';
import Path from '../../assets/Images/Path.png';
import Group30 from '../../assets/Images/Group 30.png';
import { Footer } from '../Footer/Footer';
import { useSelectedTea } from '../../ContextAPI/TeaContext';
import { useUserDetail } from '../../ContextAPI/UserContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../FireBaseConnection/FireBase';
function ReviewAndPayment() {
  const navigate = useNavigate();
  const { addcard, setaddcard, setSelectedTea } = useSelectedTea()
  const { UserDetail, setOrderID } = useUserDetail()

  const AdditionPrice = () => {
    return addcard
      .reduce((total, item) => total + item.price * item.quantity, 0)
    // .toFixed(2);
  };

  const HandlePay = async () => {
    const orderData = {
      Userdeatil: UserDetail,
      items: addcard,           // cart items
      totalAmount: AdditionPrice() + 10,
      paymentMethod: "card",
      orderStatus: "pending",
      createdAt: new Date()
    }

    const docref = await addDoc(collection(db, "orders"), orderData)
    setOrderID(docref.id)
    setaddcard([])
    setSelectedTea([])
    navigate('/payment_succesful')
  }
  useEffect(() => {
    window.scroll(0, 0)
  })
  return (
    <>
      <section className={styles.container}>

        {/* ================= STEPS ================= */}
        <div className={styles.steps}>
          <span className={styles.disactive} onClick={() => navigate('/mybag')}>1. MY BAG</span>

          {/* Normal line */}
          <span className={styles.line}></span>

          <span className={styles.disactive} onClick={() => navigate('/deliverydetail')}>2. DELIVERY</span>

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
                {UserDetail?.street}<br />
                {UserDetail?.postcode}<br />
                {UserDetail?.city}, {UserDetail?.country}<br />

              </p>
            </div>

            <div className={styles.block}>
              <h4>Billing address</h4>
              <p>{UserDetail?.billingStreet == "" ? 'Same as shipping address' : UserDetail?.billingStreet}</p>
            </div>

            <div className={styles.block}>
              <h4>Contact information</h4>
              <p>{UserDetail?.email}</p>
            </div>

            <button className={styles.editBtn} onClick={() => navigate('/deliverydetail')}>EDIT DETAILS</button>
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
                <span>{AdditionPrice().toFixed(2)} Rs</span>
              </div>

              <div className={styles.summaryRow}>
                <span>Delivery Charge</span>
                <span>10 Rs</span>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.totalRow}>
                <span>Total</span>
                <span>{(AdditionPrice() + 10).toFixed(2)} Rs</span>
              </div>

              <p className={styles.shipping}>
                Estimated shipping time: 2 days
              </p>
            </div>

            {/* PAY BUTTON (OUTSIDE Order Summary box) */}
            <button
              className={styles.payBtn}
              HandlePay
              onClick={HandlePay}
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

