// import React from "react";
// import styles from "../../assets/Styles/Mybagitem.module.css";
// import tea3 from "../../assets/Images/tea3.png";

// export function MybagItem() {
//   return (
//     <div className={styles.mybagPage}>
//       {/* PAGE HEADER */}
//       <div className={styles.header}>
//         <h2>My Bag</h2>
//       </div>

//       {/* CART ITEMS */}
//       <ul className={styles.cartList}>
//         {[1, 2, 3].map((item, index) => (
//           <li className={styles.cartItem} key={index}>
//             {/* PRODUCT IMAGE */}
//             <img src={tea3} alt="product" className={styles.productImg} />

//             {/* PRODUCT DETAILS */}
//             <div className={styles.bagDetail}>
//               <p className={styles.title}>
//                 Ceylon Ginger Cinnamon <br />
//                 chai tea - 50 g
//               </p>
//               <span className={styles.remove}>REMOVE</span>
//             </div>

//             {/* QUANTITY & PRICE */}
//             <div className={styles.qtyPrice}>
//               <div className={styles.qty}>
//                 <span>-</span>
//                 <span>1</span>
//                 <span>+</span>
//               </div>
//               <div className={styles.price}>€3.90</div>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* TOTAL SECTION */}
//       <div className={styles.totalSection}>
//         <div className={styles.totalRow}>
//           <span>Subtotal</span>
//           <span>€3.90</span>
//         </div>

//         <div className={styles.totalRow}>
//           <span>Delivery</span>
//           <span>€3.95</span>
//         </div>

//         <div className={styles.totalFinal}>
//           <strong>Total</strong>
//           <strong>€7.85</strong>
//         </div>

//         <div className={styles.purchaseBtn}>
//           {/* <button>Proceed to Checkout</button> */}
//           <button onClick={() => navigate("/mybag")}>
//             PURCHASE
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// }




















// import React from "react";
// import { useNavigate } from "react-router-dom";   // ✅ 1. IMPORT THIS
// import styles from "../../assets/Styles/Mybagitem.module.css";
// import tea3 from "../../assets/Images/tea3.png";

// export function MybagItem() {
//   const navigate = useNavigate();                // ✅ 2. DEFINE navigate

//   return (
//     <div className={styles.mybagPage}>
//       {/* PAGE HEADER */}
//       <div className={styles.header}>
//         <h2>My Bag</h2>
//       </div>

//       {/* CART ITEMS */}
//       <ul className={styles.cartList}>
//         {[1, 2, 3].map((item, index) => (
//           <li className={styles.cartItem} key={index}>
//             {/* PRODUCT IMAGE */}
//             <img src={tea3} alt="product" className={styles.productImg} />

//             {/* PRODUCT DETAILS */}
//             <div className={styles.bagDetail}>
//               <p className={styles.title}>
//                 Ceylon Ginger Cinnamon <br />
//                 chai tea - 50 g
//               </p>
//               <span className={styles.remove}>REMOVE</span>
//             </div>

//             {/* QUANTITY & PRICE */}
//             <div className={styles.qtyPrice}>
//               <div className={styles.qty}>
//                 <span>-</span>
//                 <span>1</span>
//                 <span>+</span>
//               </div>
//               <div className={styles.price}>€3.90</div>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* TOTAL SECTION */}
//       <div className={styles.totalSection}>
//         <div className={styles.totalRow}>
//           <span>Subtotal</span>
//           <span>€3.90</span>
//         </div>

//         <div className={styles.totalRow}>
//           <span>Delivery</span>
//           <span>€3.95</span>
//         </div>

//         <div className={styles.totalFinal}>
//           <strong>Total</strong>
//           <strong>€7.85</strong>
//         </div>

//         <div className={styles.purchaseBtn}>
//           <button
//             type="button"
//             onClick={() =>
//               navigate("/mybag", { state: { mybag: { id: 1, name: "Ceylon Ginger Cinnamon chai tea - 50 g", qty: 1, price: 3.9 } } })
//             }
//           >
//             PURCHASE
//           </button>


//         </div>
//       </div>
//     </div>
//   );
// }






// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "../../assets/Styles/Mybagitem.module.css";
// import tea3 from "../../assets/Images/tea3.png";

// export function MybagItem() {
//   const navigate = useNavigate();

//   // Example cart items
//   const cartItems = [
//     { id: 1, name: "Ceylon Ginger Cinnamon chai tea - 50 g", qty: 1, price: 3.9 },
//     { id: 2, name: "Ceylon Ginger Lemon chai tea - 50 g", qty: 2, price: 4.5 },
//     { id: 3, name: "Ceylon Green Tea - 50 g", qty: 1, price: 3.0 },
//   ];

//   return (
//     <div className={styles.mybagPage}>
//       <div className={styles.header}>
//         <h2>My Bag</h2>
//       </div>

//       <ul className={styles.cartList}>
//         {cartItems.map((item) => (
//           <li className={styles.cartItem} key={item.id}>
//             <img src={tea3} alt={item.name} className={styles.productImg} />

//             <div className={styles.bagDetail}>
//               <p className={styles.title}>{item.name}</p>
//               <span className={styles.remove}>REMOVE</span>
//             </div>

//             <div className={styles.qtyPrice}>
//               <div className={styles.qty}>
//                 <span>-</span>
//                 <span>{item.qty}</span>
//                 <span>+</span>
//               </div>
//               <div className={styles.price}>€{item.price}</div>
//             </div>
//           </li>
//         ))}
//       </ul>

//       <div className={styles.totalSection}>
//         <div className={styles.totalRow}>
//           <span>Subtotal</span>
//           <span>€{cartItems.reduce((sum, i) => sum + i.price * i.qty, 0).toFixed(2)}</span>
//         </div>

//         <div className={styles.purchaseBtn}>
//           <button
//             type="button"
//             onClick={() => navigate("/mybag", { state: { mybag: cartItems } })}
//           >
//             PURCHASE
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "../../assets/Styles/Mybagitem.module.css";
// import tea3 from "../../assets/Images/tea3.png";

// export function MybagItem() {
//   const navigate = useNavigate();

//   // Example cart items
//   const cartItems = [
//     { id: 1, name: "Ceylon Ginger Cinnamon chai tea - 50 g", qty: 1, price: 3.9 },
//     { id: 2, name: "Ceylon Ginger Lemon chai tea - 50 g", qty: 2, price: 4.5 },
//     { id: 3, name: "Ceylon Green Tea - 50 g", qty: 1, price: 3.0 },
//   ];

//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);

//   return (
//     <div className={styles.mybagPage}>
//       {/* PAGE HEADER */}
//       <div className={styles.header}>
//         <h2>My Bag</h2>
//       </div>

//       {/* CART ITEMS */}
//       <ul className={styles.cartList}>
//         {cartItems.map((item) => (
//           <li className={styles.cartItem} key={item.id}>
//             <img src={tea3} alt={item.name} className={styles.productImg} />

//             <div className={styles.bagDetail}>
//               <p className={styles.title}>{item.name}</p>
//               <span className={styles.remove}>REMOVE</span>
//             </div>

//             <div className={styles.qtyPrice}>
//               <div className={styles.qty}>
//                 <span>-</span>
//                 <span>{item.qty}</span>
//                 <span>+</span>
//               </div>
//               <div className={styles.price}>€{item.price}</div>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* TOTAL & PURCHASE */}
//       <div className={styles.totalSection}>
//         <div className={styles.totalRow}>
//           <span>Subtotal</span>
//           <span>€{subtotal}</span>
//         </div>

//         <div className={styles.purchaseBtn}>
//           <button
//             type="button"
//             onClick={() => navigate("/mybag", { state: { mybag: cartItems } })}
//           >
//             PURCHASE
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "../../assets/Styles/Mybagitem.module.css";
// import tea3 from "../../assets/Images/tea3.png";

// export function MybagItem() {
//   const navigate = useNavigate();

//   // Example cart items
//   const cartItems = [
//     { id: 1, name: "Ceylon Ginger Cinnamon chai tea - 50 g", qty: 1, price: 3.9 },
//     { id: 2, name: "Ceylon Ginger Lemon chai tea - 50 g", qty: 2, price: 4.5 },
//     { id: 3, name: "Ceylon Green Tea - 50 g", qty: 1, price: 3.0 },
//   ];

//   const delivery = 3.95;

//   const subtotal = cartItems
//     .reduce((sum, item) => sum + item.price * item.qty, 0)
//     .toFixed(2);

//   const total = (parseFloat(subtotal) + delivery).toFixed(2);

//   return (
//     <div className={styles.mybagPage}>
//       {/* PAGE HEADER */}
//       <div className={styles.header}>
//         <h2>My Bag</h2>
//       </div>

//       {/* CART ITEMS */}
//       <ul className={styles.cartList}>
//         {cartItems.map((item) => (
//           <li className={styles.cartItem} key={item.id}>
//             <img src={tea3} alt={item.name} className={styles.productImg} />

//             <div className={styles.bagDetail}>
//               <p className={styles.title}>{item.name}</p>
//               <span className={styles.remove}>REMOVE</span>
//             </div>

//             <div className={styles.qtyPrice}>
//               <div className={styles.qty}>
//                 <span>-</span>
//                 <span>{item.qty}</span>
//                 <span>+</span>
//               </div>
//               <div className={styles.price}>€{item.price}</div>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* TOTAL & PURCHASE */}
//       <div className={styles.totalSection}>
//         <div className={styles.totalRow}>
//           <span>Subtotal</span>
//           <span>€{subtotal}</span>
//         </div>

//         <div className={styles.totalRow}>
//           <span>Delivery</span>
//           <span>€{delivery}</span>
//         </div>

//         <div className={styles.totalFinal}>
//           <strong>Total</strong>
//           <strong>€{total}</strong>
//         </div>

//         <div className={styles.purchaseBtn}>
//           <button
//             type="button"
//             onClick={() => navigate("/mybag", { state: { mybag: cartItems } })}
//           >
//             PURCHASE
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }






// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "../../assets/Styles/Mybagitem.module.css";
// import tea3 from "../../assets/Images/tea3.png";
// import { Maylikethis } from "../ProductDetails/UMaylikeThis/Maylikethis";
// import { Footer } from "../Footer/Footer";


// export function MybagItem() {
//   const navigate = useNavigate();

//   const cartItems = [
//     { id: 1, name: "Ceylon Ginger Cinnamon chai tea - 50 g", qty: 1, price: 3.9 },
//     { id: 2, name: "Ceylon Ginger Lemon chai tea - 50 g", qty: 2, price: 4.5 },
//     { id: 3, name: "Ceylon Green Tea - 50 g", qty: 1, price: 3.0 },
//   ];

//   const delivery = 3.95;

//   const subtotal = cartItems
//     .reduce((sum, item) => sum + item.price * item.qty, 0)
//     .toFixed(2);

//   const total = (parseFloat(subtotal) + delivery).toFixed(2);

//   return (
//     <>
//       <div className={styles.mybagPage}>
//         {/* PAGE HEADER */}
//         <div className={styles.header}>
//           <h2>My Bag</h2>
//         </div>

//         {/* CART ITEMS */}
//         <ul className={styles.cartList}>
//           {cartItems.map((item) => (
//             <li className={styles.cartItem} key={item.id}>
//               <img src={tea3} alt={item.name} className={styles.productImg} />

//               <div className={styles.bagDetail}>
//                 <p className={styles.title}>{item.name}</p>
//                 <span className={styles.remove}>REMOVE</span>
//               </div>

//               <div className={styles.qtyPrice}>
//                 <div className={styles.qty}>
//                   <span>-</span>
//                   <span>{item.qty}</span>
//                   <span>+</span>
//                 </div>
//                 <div className={styles.price}>€{item.price}</div>
//               </div>
//             </li>
//           ))}
//         </ul>

//         {/* TOTAL SECTION */}
//         <div className={styles.totalSection}>
//           <div className={styles.totalRow}>
//             <span>Subtotal</span>
//             <span>€{subtotal}</span>
//           </div>

//           <div className={styles.totalRow}>
//             <span>Delivery</span>
//             <span>€{delivery}</span>
//           </div>

//           <div className={styles.totalFinal}>
//             <strong>Total</strong>
//             <strong>€{total}</strong>
//           </div>

//           {/* BUTTONS */}
//           <div className={styles.purchaseBtn}>
//             <button
//               type="button"
//               onClick={() => navigate("/mybag", { state: { mybag: cartItems } })}
//             >
//               PURCHASE
//             </button>
//           </div>

//           <div className={styles.purchaseBtn}>
//             <button
//               type="button"
//               onClick={() => navigate("/teacollection")}
//             >
//               BACK TO SHOPPING
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* YOU MAY ALSO LIKE SECTION */}
//       <Maylikethis />
//       <Footer />
//     </>
//   );
// }


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "../../assets/Styles/Mybagitem.module.css";
// import tea3 from "../../assets/Images/tea3.png";
// import { Maylikethis } from "../ProductDetails/UMaylikeThis/Maylikethis";
// import { Footer } from "../Footer/Footer";

// export function MybagItem() {
//   const navigate = useNavigate();

//   const cartItems = [
//     { id: 1, name: "Ceylon Ginger Cinnamon chai tea - 50 g", qty: 1, price: 3.9 },
//     { id: 2, name: "Ceylon Ginger Lemon chai tea - 50 g", qty: 2, price: 4.5 },
//     { id: 3, name: "Ceylon Green Tea - 50 g", qty: 1, price: 3.0 },
//   ];

//   const delivery = 3.95;

//   const subtotal = cartItems
//     .reduce((sum, item) => sum + item.price * item.qty, 0)
//     .toFixed(2);

//   const total = (parseFloat(subtotal) + delivery).toFixed(2);

//   return (
//     <>
//       <div className={styles.mybagPage}>
//         {/* PAGE HEADER */}
//         <div className={styles.header}>
//           <h2>My Bag</h2>

//           <button
//             type="button"
//             className={styles.backBtn}
//             onClick={() => navigate("/teacollection")}
//           >
//             ← Back to Shopping
//           </button>
//         </div>

//         {/* CART ITEMS */}
//         <ul className={styles.cartList}>
//           {cartItems.map((item) => (
//             <li className={styles.cartItem} key={item.id}>
//               <img src={tea3} alt={item.name} className={styles.productImg} />

//               <div className={styles.bagDetail}>
//                 <p className={styles.title}>{item.name}</p>
//                 <span className={styles.remove}>REMOVE</span>
//               </div>

//               <div className={styles.qtyPrice}>
//                 <div className={styles.qty}>
//                   <span>-</span>
//                   <span>{item.qty}</span>
//                   <span>+</span>
//                 </div>
//                 <div className={styles.price}>€{item.price}</div>
//               </div>
//             </li>
//           ))}
//         </ul>

//         {/* TOTAL SECTION */}
//         <div className={styles.totalSection}>
//           <div className={styles.totalRow}>
//             <span>Subtotal</span>
//             <span>€{subtotal}</span>
//           </div>

//           <div className={styles.totalRow}>
//             <span>Delivery</span>
//             <span>€{delivery}</span>
//           </div>

//           <div className={styles.totalFinal}>
//             <strong>Total</strong>
//             <strong>€{total}</strong>
//           </div>

//           <div className={styles.purchaseBtn}>
//             <button
//               type="button"
//               onClick={() => navigate("/mybag", { state: { mybag: cartItems } })}
//             >
//               PURCHASE
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* YOU MAY ALSO LIKE */}
//       <Maylikethis />
//       <Footer />
//     </>
//   );
// }


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "../../assets/Styles/Mybagitem.module.css";
// import tea3 from "../../assets/Images/tea3.png";
// import { Maylikethis } from "../ProductDetails/UMaylikeThis/Maylikethis";
// import { Footer } from "../Footer/Footer";

// export function MybagItem() {
//   const navigate = useNavigate();

//   const cartItems = [
//     { id: 1, name: "Ceylon Ginger Cinnamon chai tea - 50 g", qty: 1, price: 3.9 },
//     { id: 2, name: "Ceylon Ginger Lemon chai tea - 50 g", qty: 2, price: 4.5 },
//     { id: 3, name: "Ceylon Green Tea - 50 g", qty: 1, price: 3.0 },
//   ];

//   const delivery = 3.95;

//   const subtotal = cartItems
//     .reduce((sum, item) => sum + item.price * item.qty, 0)
//     .toFixed(2);

//   const total = (parseFloat(subtotal) + delivery).toFixed(2);

//   return (
//     <>
//       <div className={styles.mybagPage}>
//         {/* HEADER */}
//         <div className={styles.header}>
//           <h2>My Bag</h2>

//           <button
//             className={styles.backBtn}
//             onClick={() => navigate("/teacollection")}
//           >
//             ← Back to Shopping
//           </button>
//         </div>

//         {/* CART ITEMS */}
//         <ul className={styles.cartList}>
//           {cartItems.map((item) => (
//             <li className={styles.cartItem} key={item.id}>
//               <img src={tea3} alt={item.name} className={styles.productImg} />

//               <div className={styles.bagDetail}>
//                 <p className={styles.title}>{item.name}</p>
//                 <span className={styles.remove}>REMOVE</span>
//               </div>

//               <div className={styles.qtyPrice}>
//                 <div className={styles.qty}>
//                   <span>-</span>
//                   <span>{item.qty}</span>
//                   <span>+</span>
//                 </div>
//                 <div className={styles.price}>€{item.price}</div>
//               </div>
//             </li>
//           ))}
//         </ul>

//         {/* TOTALS — DIRECTLY BELOW ITEMS (LIKE POPUP) */}
//         <div className={styles.totalSection}>
//           <div className={styles.totalRow}>
//             <span>Subtotal</span>
//             <span>€{subtotal}</span>
//           </div>

//           <div className={styles.totalRow}>
//             <span>Delivery</span>
//             <span>€{delivery}</span>
//           </div>

//           <div className={styles.totalFinal}>
//             <strong>Total</strong>
//             <strong>€{total}</strong>
//           </div>

//           <div className={styles.purchaseBtn}>
//             <button onClick={() => navigate("/mybag")}>
//               PURCHASE
//             </button>
//           </div>
//         </div>
//       </div>

//       <Maylikethis />
//       <Footer />
//     </>
//   );
// }


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "../../assets/Styles/Mybagitem.module.css";
// import tea3 from "../../assets/Images/tea3.png";
// import { Maylikethis } from "../ProductDetails/UMaylikeThis/Maylikethis";
// import { Footer } from "../Footer/Footer";

// export function MybagItem() {
//   const navigate = useNavigate();

//   const cartItems = [
//     { id: 1, name: "Ceylon Ginger Cinnamon chai tea - 50 g", qty: 1, price: 3.9 },
//     { id: 2, name: "Ceylon Ginger Lemon chai tea - 50 g", qty: 2, price: 4.5 },
//     { id: 3, name: "Ceylon Green Tea - 50 g", qty: 1, price: 3.0 },
//   ];

//   const delivery = 3.95;

//   const subtotal = cartItems
//     .reduce((sum, item) => sum + item.price * item.qty, 0)
//     .toFixed(2);

//   const total = (parseFloat(subtotal) + delivery).toFixed(2);

//   return (
//     <>
//       <div className={styles.mybagPage}>
//         <div className={styles.header}>
//           <h2>My Bag</h2>
//         </div>

//         <ul className={styles.cartList}>
//           {cartItems.map((item) => (
//             <li className={styles.cartItem} key={item.id}>
//               <img src={tea3} alt={item.name} className={styles.productImg} />

//               <div className={styles.bagDetail}>
//                 <p className={styles.title}>{item.name}</p>
//                 <span className={styles.remove}>REMOVE</span>
//               </div>

//               <div className={styles.qtyPrice}>
//                 <div className={styles.qty}>
//                   <span>-</span>
//                   <span>{item.qty}</span>
//                   <span>+</span>
//                 </div>
//                 <div className={styles.price}>€{item.price}</div>
//               </div>
//             </li>
//           ))}
//         </ul>

//         {/* TOTALS */}
//         <div className={styles.totalSection}>
//           <div className={styles.totalRow}>
//             <span>Subtotal</span>
//             <span>€{subtotal}</span>
//           </div>

//           <div className={styles.totalRow}>
//             <span>Delivery</span>
//             <span>€{delivery}</span>
//           </div>

//           <div className={styles.totalFinal}>
//             <strong>Total</strong>
//             <strong>€{total}</strong>
//           </div>

//           {/* BUTTON GROUP */}
//           <div className={styles.actionButtons}>
//             <button
//               className={styles.actionBtn}
//               onClick={() => navigate("/teacollection")}
//             >
//               BACK TO SHOPPING
//             </button>

//             <button
//               className={styles.actionBtn}
//               onClick={() => navigate("/mybag")}
//             >
//               PURCHASE
//             </button>
//           </div>
//         </div>
//       </div>

//       <Maylikethis />
//       <Footer />
//     </>
//   );
// }
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "../../assets/Styles/Mybagitem.module.css";
// import tea3 from "../../assets/Images/tea3.png";
// import { Maylikethis } from "../ProductDetails/UMaylikeThis/Maylikethis";
// import { Footer } from "../Footer/Footer";

// export function MybagItem() {
//   const navigate = useNavigate();

//   const cartItems = [
//     { id: 1, name: "Ceylon Ginger Cinnamon chai tea - 50 g", qty: 1, price: 3.9 },
//     { id: 2, name: "Ceylon Ginger Lemon chai tea - 50 g", qty: 2, price: 4.5 },
//     { id: 3, name: "Ceylon Green Tea - 50 g", qty: 1, price: 3.0 },
//   ];

//   const delivery = 3.95;
//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);
//   const total = (parseFloat(subtotal) + delivery).toFixed(2);

//   return (
//     <>
//       <div className={styles.mybagPage}>
//         {/* PAGE HEADER */}
//         <div className={styles.header}>
//           <h2>My Bag</h2>
//         </div>

//         {/* CART ITEMS */}
//         <ul className={styles.cartList}>
//           {cartItems.map((item) => (
//             <li className={styles.cartItem} key={item.id}>
//               <img src={tea3} alt={item.name} className={styles.productImg} />

//               <div className={styles.bagDetail}>
//                 <p className={styles.title}>{item.name}</p>
//                 <span className={styles.remove}>REMOVE</span>
//               </div>

//               <div className={styles.qtyPrice}>
//                 <div className={styles.qty}>
//                   <span>-</span>
//                   <span>{item.qty}</span>
//                   <span>+</span>
//                 </div>
//                 <div className={styles.price}>€{item.price}</div>
//               </div>
//             </li>
//           ))}
//         </ul>

//         {/* TOTAL SECTION */}
//         <div className={styles.totalSection}>
//           <div className={styles.totalRow}>
//             <span>Subtotal</span>
//             <span>€{subtotal}</span>
//           </div>

//           <div className={styles.totalRow}>
//             <span>Delivery</span>
//             <span>€{delivery}</span>
//           </div>

//           <div className={styles.totalFinal}>
//             <strong>Total</strong>
//             <strong>€{total}</strong>
//           </div>

//           {/* BUTTONS */}
//           <div className={styles.buttonWrapper}>
//             <button
//               className={styles.purchaseBtn}
//               onClick={() => navigate("/mybag", { state: { mybag: cartItems } })}
//             >
//               PURCHASE
//             </button>

//             <button
//               className={styles.backToShoppingBtn}
//               onClick={() => navigate("/teacollection")}
//             >
//               BACK TO SHOPPING
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* YOU MAY ALSO LIKE SECTION */}
//       <Maylikethis />
//       <Footer />
//     </>
//   );
// }


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
