import React, { useEffect } from 'react';
import styles from '../../assets/Styles/PaymentSuccesful.module.css';
import { useSelectedTea } from '../../ContextAPI/TeaContext';
import { useNavigate } from "react-router-dom";
import { Maylikethis } from "../ProductDetails/UMaylikeThis/Maylikethis";
import { Footer } from "../Footer/Footer";
import backimg from '../../assets/Images/123.jpg';

function PaymentSuccesful() {
  const navigate = useNavigate();
  const { addcard, HandleIncrementDecrement } = useSelectedTea()
  const mapimage = '/src/assets/Images/'
  const AdditionPrice = () => {
    return addcard
      .reduce((total, item) => total + item.price * item.quantity, 0)
    // .toFixed(2);
  };

  useEffect(() => {
    window.scroll(0, 0)
  })
  return (
    <>
      {/* HERO */}
      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${backimg})` }}
      >
        <div className={styles.heroOverlay}>
          <div className={styles.header}>
            <h1>THANK YOU!</h1>
            <p>We received your order and will start preparing your package right away.</p>
            <p>You will receive a confirmation email in a moment.</p>
            <h4>ORDER DETAILS - 8972491047359</h4>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>
        <div className={styles.grid}>

          {/* LEFT */}

          <div className={styles.leftColumn}>
            <h3 style={{ fontSize: 30, marginBottom: 10 }}>Order List</h3>
            <div className={styles.productsWrapper}>
              <div className={styles.products}>
                {addcard.map((item, index) => (
                  <div key={index} className={styles.productItem}>
                    <img src={`${mapimage}${item.image}`} alt="product" />
                    <div className={styles.productInfo}>
                      <span>{item.name}</span>
                      <span>Quantity  -{item.quantity}</span>
                    </div>
                    <div className={styles.price}>{item.price} Rs</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.summary}>
              <div>
                <span>Subtotal</span>
                <span>{AdditionPrice().toFixed(2)} Rs</span>
              </div>
              <div>
                <span>Delivery</span>
                <span>10 Rs</span>
              </div>
              <div className={styles.total}>
                <span>Total</span>
                <span>{(AdditionPrice() + 10).toFixed(2)} Rs</span>
              </div>
            </div>
          </div>

          {/* MIDDLE */}
          <div className={styles.delivery}>
            <h3>Delivery Details</h3>
            <h5>Shipping address</h5>
            <p>
              3 Falahi St, Falahi Ave,<br />
              Pasdaran Blvd, Fars Province,<br />
              Shiraz 71856-95159<br />
              Iran
            </p>

            <h5>Billing address</h5>
            <p>Same as shipping address</p>

            <h5>Contact information</h5>
            <p>amoopur@gmail.com</p>
          </div>

          {/* RIGHT */}
          <div className={styles.payment}>
            <h3>Payment method</h3>
            <p>Master Card</p>
            <p>XXXX XXXX XXXX 5425</p>

            <h3 className={styles.mt}>Estimated shipping</h3>
            <p>16 June 2024</p>

            {/* ✅ ACTION BUTTONS */}
            <div className={styles.rightButtons}>
              <button className={styles.primary} onClick={() => navigate('/teacollection')}>KEEP SHOPPING</button>
              <button className={styles.outline}>PRINT RECEIPT</button>
            </div>
          </div>

        </div>
      </section>

      <Maylikethis />
      <Footer />
    </>
  );
}

export default PaymentSuccesful;
