import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../assets/Styles/Mybagitem.module.css";
import tea3 from "../../assets/Images/tea3.png";
import { Maylikethis } from "../ProductDetails/UMaylikeThis/Maylikethis";
import { Footer } from "../Footer/Footer";
import { useSelectedTea } from '../../ContextAPI/TeaContext';

export function MybagItem() {
  const navigate = useNavigate();
  const { addcard, HandleIncrementDecrement, setaddcard } = useSelectedTea()
  const mapimage = '/src/assets/Images/'

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
              <img src={`${mapimage}${item.image}`} alt={item.name} className={styles.productImg} />

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
