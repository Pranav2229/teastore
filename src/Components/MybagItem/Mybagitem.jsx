
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../assets/Styles/Mybagitem.module.css";
import tea3 from "../../assets/Images/tea3.png";
import { Maylikethis } from "../ProductDetails/UMaylikeThis/Maylikethis";
import { Footer } from "../Footer/Footer";

export function MybagItem() {
  const navigate = useNavigate();

  const cartItems = [
    { id: 1, name: "Ceylon Ginger Cinnamon chai tea - 50 g", qty: 1, price: 3.9 },
    { id: 2, name: "Ceylon Ginger Lemon chai tea - 50 g", qty: 2, price: 4.5 },
    { id: 3, name: "Ceylon Green Tea - 50 g", qty: 1, price: 3.0 },
  ];

  const delivery = 3.95;
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);
  const total = (parseFloat(subtotal) + delivery).toFixed(2);

  return (
    <>
      <div className={styles.mybagPage}>
        {/* PAGE HEADER */}
        <div className={styles.header}>
          <h2>My Bag</h2>
        </div>

        {/* CART ITEMS */}
        <ul className={styles.cartList}>
          {cartItems.map((item) => (
            <li className={styles.cartItem} key={item.id}>
              <img src={tea3} alt={item.name} className={styles.productImg} />

              <div className={styles.bagDetail}>
                <p className={styles.title}>{item.name}</p>
                <span className={styles.remove}>REMOVE</span>
              </div>

              <div className={styles.qtyPrice}>
                <div className={styles.qty}>
                  <span>-</span>
                  <span>{item.qty}</span>
                  <span>+</span>
                </div>
                <div className={styles.price}>€{item.price}</div>
              </div>
            </li>
          ))}
        </ul>

        {/* TOTAL SECTION */}
        <div className={styles.totalSection}>
          <div className={styles.totalRow}>
            <span>Subtotal</span>
            <span>€{subtotal}</span>
          </div>

          <div className={styles.totalRow}>
            <span>Delivery</span>
            <span>€{delivery}</span>
          </div>

          <div className={styles.totalFinal}>
            <strong>Total</strong>
            <strong>€{total}</strong>
          </div>

          {/* BUTTONS HORIZONTAL */}
          <div className={styles.buttonWrapper}>
            <button
              className={styles.purchaseBtn}
              onClick={() => navigate("/mybag", { state: { mybag: cartItems } })}
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
