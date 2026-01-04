import React, { useEffect, useState } from 'react';
import styles from '../../assets/Styles/PaymentSuccesful.module.css';
import { useSelectedTea } from '../../ContextAPI/TeaContext';
import { useNavigate } from "react-router-dom";
import { Maylikethis } from "../ProductDetails/UMaylikeThis/Maylikethis";
import { Footer } from "../Footer/Footer";
import backimg from '../../assets/Images/123.jpg';
import { useUserDetail } from '../../ContextAPI/UserContext';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../FireBaseConnection/FireBase';
import tea1 from '../../assets/Images/tea1.png'
import tea2 from '../../assets/Images/tea2.png'
import tea3 from '../../assets/Images/tea3.png'
import tea4 from '../../assets/Images/tea4.png'
import tea5 from '../../assets/Images/tea5.png'
import tea6 from '../../assets/Images/tea6.png'
import tea7 from '../../assets/Images/tea7.png'
import tea8 from '../../assets/Images/tea8.png'
import jsPDF from "jspdf";

function PaymentSuccesful() {
  const navigate = useNavigate();
  const { addcard } = useSelectedTea()
  const { OrderID } = useUserDetail()
  const [Fetchdata, setFetchdata] = useState('')
console.log("Fetchdata",Fetchdata);

  const imageMap = {
    "tea1.png": tea1,
    "tea2.png": tea2,
    "tea3.png": tea3,
    "tea4.png": tea4,
    "tea5.png": tea5,
    "tea6.png": tea6,
    "tea7.png": tea7,
    "tea8.png": tea8,
  };
  // const AdditionPrice = () => {
  //   return addcard
  //     .reduce((total, item) => total + item.price * item.quantity, 0)
  //   // .toFixed(2);
  // };

  const generateReceipt = (order) => {    
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Tea Store - Payment Receipt", 20, 20);

    doc.setFontSize(12);
    doc.text(`Order ID: ${OrderID}`, 20, 40);
    doc.text(`Payment ID: ${order.paymentId}`, 20, 50);
    doc.text(`Amount Paid: ₹${order.amount}`, 20, 60);
    doc.text(`Status: ${order.status}`, 20, 70);

    doc.text("Customer Details:", 20, 90);
    doc.text(`Name: ${order.UserDetail.firstName} ${order.UserDetail.lastName}`, 20, 100);
    doc.text(`Email: ${order.UserDetail.email}`, 20, 110);

    doc.text("Items:", 20, 130);
    let y = 140;

    order.addcard.forEach((item, index) => {
      doc.text(
        `${index + 1}. ${item.name} - ₹${item.price}`,
        20,
        y
      );
      y += 10;
    });

    doc.text("Thank you for shopping with us!", 20, y + 20);

    doc.save(`TeaStore_Receipt_${OrderID}.pdf`);
  };



  useEffect(() => {
    window.scroll(0, 0);

    const fetchOrder = async () => {
      if (!OrderID) return;

      try {
        const snap = await getDoc(doc(db, "orders", OrderID));
        if (snap.exists()) {
          setFetchdata(snap.data());
        } else {
          console.log("❌ Document not found");
        }
      } catch (error) {
        console.error("❌ Error fetching order:", error);
      }
    };

    fetchOrder();
  }, [OrderID]);

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
            <h4>ORDER ID - {OrderID}</h4>
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
                {Fetchdata?.addcard?.map((item, index) => (
                  <div key={index} className={styles.productItem}>
                    <img src={imageMap[item.image]} alt="product" />
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
                <span>Include Delivery Charge</span>
                <span>10 Rs</span>
              </div>
              <div className={styles.total}>
                <span>Total</span>
                <span>{(Fetchdata?.amount)?.toFixed(2)} Rs</span>
              </div>
            </div>
          </div>

          {/* MIDDLE */}
          <div className={styles.delivery}>
            <h3>Delivery Details</h3>
            <h5>Shipping address</h5>
            <p>
              {Fetchdata?.UserDetail?.street}<br />
              {Fetchdata?.UserDetail?.postcode}<br />
              {Fetchdata?.UserDetail?.city}, {Fetchdata?.UserDetail?.country}<br />

            </p>

            <h5>Billing address</h5>
            <p>{Fetchdata?.UserDetail?.billingStreet == "" ? 'Same as shipping address' : Fetchdata?.UserDetail?.billingStreet}</p>

            <h5>Contact information</h5>
            <p>{Fetchdata?.UserDetail?.email}</p>
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
              <button className={styles.outline} onClick={() => generateReceipt(Fetchdata)}>PRINT RECEIPT</button>
            </div>
          </div>

        </div>
      </section>

      {/* <Maylikethis /> */}
      <Footer />
    </>
  );
}

export default PaymentSuccesful;
