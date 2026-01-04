import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../assets/Styles/Mybagitem.module.css";
import { Maylikethis } from "../ProductDetails/UMaylikeThis/Maylikethis";
import { Footer } from "../Footer/Footer";
import { useSelectedTea } from '../../ContextAPI/TeaContext';
import tea1 from '../../assets/Images/tea1.png'
import tea2 from '../../assets/Images/tea2.png'
import tea3 from '../../assets/Images/tea3.png'
import tea4 from '../../assets/Images/tea4.png'
import tea5 from '../../assets/Images/tea5.png'
import tea6 from '../../assets/Images/tea6.png'
import tea7 from '../../assets/Images/tea7.png'
import tea8 from '../../assets/Images/tea8.png'

export function MybagItem() {
  const navigate = useNavigate();
  const { addcard, HandleIncrementDecrement, setaddcard } = useSelectedTea()
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
  const AdditionPrice = () => {
    return addcard
      .reduce((total, item) => total + item.price * item.quantity, 0)
    // .toFixed(2);
  };

  const RemoveCardDetail = (id) => {
    setaddcard(addcard.filter(item => item.id !== id))
  }

  useEffect(() => {
    if (addcard.length == 0) {
      navigate('/teacollection')
    }
  })

  return (
    <>
      <div className={styles.mybagPage}>
        {/* PAGE HEADER */}
        <div className={styles.header}>
          <h2>My Bag</h2>
        </div>

        {/* CART ITEMS */}
        <ul className={styles.cartList}>
          {addcard.map((item) => (
            <li className={styles.cartItem} key={item.id}>
              <img src={imageMap[item.image]} alt={item.name} className={styles.productImg} />

              <div className={styles.bagDetail}>
                <p className={styles.title}>{item.name}</p>
                <span className={styles.remove} onClick={() => RemoveCardDetail(item.id)}>REMOVE</span>
              </div>

              <div className={styles.qtyPrice}>
                <div className={styles.qty}>
                  <span onClick={() => HandleIncrementDecrement(item.id, 'decrement')}>-</span>
                  <span>{item.quantity}</span>
                  <span onClick={() => HandleIncrementDecrement(item.id, 'increment')}>+</span>
                </div>
                <div className={styles.price}>{item.price} Rs</div>
              </div>
            </li>
          ))}
        </ul>

        {/* TOTAL SECTION */}
        <div className={styles.totalSection}>
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
            <button
              className={styles.purchaseBtn}
              onClick={() => navigate("/mybag", { state: 'mybag' })}
            >
              PURCHASE
            </button>

            <button
              className={styles.backToShoppingBtn}
              onClick={() => navigate("/teacollection")}
            >
              BACK TO SHOPPING
            </button>
          </div>
        </div>
      </div>

      {/* YOU MAY ALSO LIKE SECTION */}
      <Maylikethis />
      <Footer />
    </>
  );
}
