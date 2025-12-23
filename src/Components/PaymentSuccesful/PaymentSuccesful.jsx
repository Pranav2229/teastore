// import React from 'react'
// import { Maylikethis } from '../ProductDetails/UMaylikeThis/Maylikethis'
// import { Footer } from '../Footer/Footer'
// import backimg from '../../assets/Images/123.jpg'
// function PaymentSuccesful(props) {
//     return (
//         <>
//             <div style={{
//                 textAlign: 'left',
//                 backgroundImage: `url(${backimg})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeapxt: 'no-repeat',
//                 padding: '50px ',
//                 color: 'white'
//             }}>
//                 <div>
//                     <h1 style={{ color: '#ff0202' }}>THANK YOU!</h1>
//                     <p style={{ color: 'white' }}>We received your order and will start preparing your package right away.</p>
//                     <p style={{ color: 'white' }}> You will receive a confirmation email in a moment.</p>
//                     <h4>Order details - 8972491047359</h4>
//                 </div>
//                 <div>
//                     <div style={{ marginTop: 50 }}>
//                         <div>
//                             <h3 style={{ color: '#ff0202' }}>Delivery Details</h3>
//                             <h5>Shipping Address</h5>
//                             <div>
//                                 3 Falahi St , Falahi Ave, Pasdaran Blvd, Fars Province , Shiraz
//                                 71856-95159
//                                 Iran

//                             </div>
//                         </div>
//                         <div>
//                             <h5>Billing Address</h5>
//                             <div>
//                                 Same as shipping address
//                             </div>
//                         </div>
//                         <div>
//                             <h5>Contact Information</h5>
//                             <div>
//                                 contact@name.com
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Maylikethis />
//             <Footer />
//         </>
//     )
// }

// export default PaymentSuccesful





















// import React from 'react';
// import styles from '../../assets/Styles/PaymentSuccesful.module.css';
// import { Maylikethis } from '../ProductDetails/UMaylikeThis/Maylikethis';
// import { Footer } from '../Footer/Footer';
// import backimg from '../../assets/Images/123.jpg';

// function PaymentSuccesful() {
//   return (
//     <>
//       <div
//         className={styles.paymentSuccessful}
//         style={{ backgroundImage: `url(${backimg})` }}
//       >
//         {/* THANK YOU SECTION */}
//         <div className={styles.thankYouSection}>
//           <h1 className={styles.title}>THANK YOU!</h1>
//           <p>We received your order and will start preparing your package right away.</p>
//           <p>You will receive a confirmation email in a moment.</p>
//           <h4 className={styles.orderId}>ORDER DETAILS - 8972491047359</h4>
//         </div>

//         {/* MAIN CONTENT */}
//         <div className={styles.orderDetails}>
//           {/* LEFT COLUMN */}
//           <div className={styles.deliveryDetails}>
//             <h3>Delivery Details</h3>

//             <div className={styles.detailBlock}>
//               <h5>Shipping Address</h5>
//               <p>
//                 3 Falahi St, Falahi Ave,<br />
//                 Pasdaran Blvd, Fars Province,<br />
//                 Shiraz 71856-95159<br />
//                 Iran
//               </p>
//             </div>

//             <div className={styles.detailBlock}>
//               <h5>Billing Address</h5>
//               <p>Same as shipping address</p>
//             </div>

//             <div className={styles.detailBlock}>
//               <h5>Contact Information</h5>
//               <p>amoopur@gmail.com</p>
//             </div>
//           </div>

//           {/* RIGHT COLUMN */}
//           <div className={styles.paymentSummary}>
//             <div className={styles.summaryBlock}>
//               <h5>Payment Method</h5>
//               <p>Master card XXXX XXXX XXXX 5425</p>
//             </div>

//             <div className={styles.summaryBlock}>
//               <h5>Estimated shipping</h5>
//               <p>16 June 2024</p>
//             </div>

//             <div className={styles.priceBlock}>
//               <div>
//                 <span>Subtotal</span>
//                 <span>€3.90</span>
//               </div>
//               <div>
//                 <span>Delivery</span>
//                 <span>€3.95</span>
//               </div>
//               <div className={styles.total}>
//                 <span>Total</span>
//                 <span>€7.85</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Maylikethis />
//       <Footer />
//     </>
//   );
// }

// export default PaymentSuccesful;


// import React from 'react';
// import styles from '../../assets/Styles/PaymentSuccesful.module.css';
// import { Maylikethis } from '../ProductDetails/UMaylikeThis/Maylikethis';
// import { Footer } from '../Footer/Footer';
// import backimg from '../../assets/Images/123.jpg';




// import React from 'react';
// import styles from '../../assets/Styles/PaymentSuccesful.module.css';
// import { Footer } from '../Footer/Footer';
// import { Maylikethis } from '../ProductDetails/UMaylikeThis/Maylikethis';
// import backimg from '../../assets/Images/123.jpg';
// import tea1 from '../../assets/Images/tea1.png'
// import tea2 from '../../assets/Images/tea2.png'
// import tea3 from '../../assets/Images/tea3.png'
// import tea4 from '../../assets/Images/tea4.png'
// import tea5 from '../../assets/Images/tea5.png'
// import tea6 from '../../assets/Images/tea6.png'
// import tea7 from '../../assets/Images/tea7.png'
// import tea8 from '../../assets/Images/tea8.png'


// function PaymentSuccesful() {

// const Listoforder = [{
//   "ordername" : "Ceylon Ginger Cinnamon",
//   "Varity" : "chai tea- 50 g",
//   "price" : "€4.85",
//   "Image" : tea1
// },
// {
//   "ordername" : "Ceylon Ginger Cinnamon",
//   "Varity" : "chai tea- 50 g",
//   "price" : "€4.85",
//   "Image" : tea2
// },
// {
//   "ordername" : "Ceylon Ginger Cinnamon",
//   "Varity" : "chai tea- 50 g",
//   "price" : "€4.85",
//   "Image" : tea3
// },
// {
//   "ordername" : "Ceylon Ginger Cinnamon",
//   "Varity" : "chai tea- 50 g",
//   "price" : "€4.85",
//   "Image" : tea4
// },
// {
//   "ordername" : "Ceylon Ginger Cinnamon",
//   "Varity" : "chai tea- 50 g",
//   "price" : "€4.85",
//   "Image" : tea5
// },
// {
//   "ordername" : "Ceylon Ginger Cinnamon",
//   "Varity" : "chai tea- 50 g",
//   "price" : "€4.85",
//   "Image" : tea6
// },
// {
//   "ordername" : "Ceylon Ginger Cinnamon",
//   "Varity" : "chai tea- 50 g",
//   "price" : "€4.85",
//   "Image" : tea7
// },
// {
//   "ordername" : "Ceylon Ginger Cinnamon",
//   "Varity" : "chai tea- 50 g",
//   "price" : "€4.85",
//   "Image" : tea8
// },
// ]

//   return (
//     <>
//       {/* THANK YOU PAGE */}
//       <div
//         className={styles.container}
//         style={{ backgroundImage: `url(${backimg})` }}
//       >

//         {/* HEADER */}
//         <div className={styles.header}>
//           <h1>THANK YOU!</h1>
//           <p>We received your order and will start preparing your package right away.</p>
//           <p>You will receive a confirmation email in a moment.</p>
//           <h4>ORDER DETAILS - 8972491047359</h4>
//         </div>

//         {/* MAIN GRID */}
//         <div className={styles.grid}>

//           {/* LEFT – PRODUCTS */}
//           <div className={styles.products}>
//             {Listoforder.map((item, index) => (
//               <div key={item} className={styles.productItem}>
//                 <img src={item.Image} alt="tea" />
//                 <div className={styles.productInfo}>
//                   <span>{item.ordername}</span>
//                   <span>{item.Varity}</span>
//                 </div>
//                 <div className={styles.price}>{item.price}</div>
//               </div>
//             ))}
//           </div>

//           {/* MIDDLE – DELIVERY */}
//           <div className={styles.delivery}>
//             <h3>Delivery Details</h3>

//             <h5>Shipping address</h5>
//             <p>
//               3 Falahi St, Falahi Ave,<br />
//               Pasdaran Blvd, Fars Province,<br />
//               Shiraz 71856-95159<br />
//               Iran
//             </p>

//             <h5>Billing address</h5>
//             <p>Same as shipping address</p>

//             <h5>Contact information</h5>
//             <p>amoopur@gmail.com</p>
//           </div>

//           {/* RIGHT – PAYMENT */}
//           <div className={styles.payment}>
//             <h3>Payment method</h3>
//             <p>Master card</p>
//             <p>XXXX XXXX XXXX 5425</p>

//             <h3 className={styles.mt}>Estimated shipping</h3>
//             <p>16 June 2024</p>
//           </div>
//         </div>

//         {/* SUMMARY */}
//         <div className={styles.summary}>
//           <div>
//             <span>Subtotal</span>
//             <span>€3.90</span>
//           </div>
//           <div>
//             <span>Delivery</span>
//             <span>€3.95</span>
//           </div>
//           <div className={styles.total}>
//             <span>Total</span>
//             <span>€7.85</span>
//           </div>
//         </div>

//         {/* BUTTONS */}
//         <div className={styles.buttons}>
//           <button className={styles.primary}>KEEP SHOPPING</button>
//           <button className={styles.outline}>PRINT RECEIPT</button>
//         </div>
//       </div>

//       {/* YOU MAY ALSO LIKE */}
//       <Maylikethis />

//       <Footer />
//     </>
//   );
// }

// export default PaymentSuccesful;






// import React from 'react';
// import styles from '../../assets/Styles/PaymentSuccesful.module.css';
// import { Footer } from '../Footer/Footer';
// import { Maylikethis } from '../ProductDetails/UMaylikeThis/Maylikethis';
// import backimg from '../../assets/Images/123.jpg';

// import tea1 from '../../assets/Images/tea1.png';
// import tea2 from '../../assets/Images/tea2.png';
// import tea3 from '../../assets/Images/tea3.png';
// import tea4 from '../../assets/Images/tea4.png';
// import tea5 from '../../assets/Images/tea5.png';
// import tea6 from '../../assets/Images/tea6.png';
// import tea7 from '../../assets/Images/tea7.png';
// import tea8 from '../../assets/Images/tea8.png';

// function PaymentSuccesful() {
//   const Listoforder = [
//     { ordername: 'Ceylon Ginger Cinnamon', Varity: 'chai tea - 50 g', price: '€4.85', Image: tea1 },
//     { ordername: 'Ceylon Ginger Cinnamon', Varity: 'chai tea - 50 g', price: '€4.85', Image: tea2 },
//     { ordername: 'Ceylon Ginger Cinnamon', Varity: 'chai tea - 50 g', price: '€4.85', Image: tea3 },
//     { ordername: 'Ceylon Ginger Cinnamon', Varity: 'chai tea - 50 g', price: '€4.85', Image: tea4 },
//     { ordername: 'Ceylon Ginger Cinnamon', Varity: 'chai tea - 50 g', price: '€4.85', Image: tea5 },
//     { ordername: 'Ceylon Ginger Cinnamon', Varity: 'chai tea - 50 g', price: '€4.85', Image: tea6 },
//     { ordername: 'Ceylon Ginger Cinnamon', Varity: 'chai tea - 50 g', price: '€4.85', Image: tea7 },
//     { ordername: 'Ceylon Ginger Cinnamon', Varity: 'chai tea - 50 g', price: '€4.85', Image: tea8 },
//   ];

//   return (
//     <>
//       {/* HERO SECTION */}
//       <div
//         className={styles.heroSection}
//         style={{ backgroundImage: `url(${backimg})` }}
//       >
//         <div className={styles.header}>
//           <h1>THANK YOU!</h1>
//           <p>We received your order and will start preparing your package right away.</p>
//           <p>You will receive a confirmation email in a moment.</p>
//           <h4>ORDER DETAILS - 8972491047359</h4>
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className={styles.container}>
//         <div className={styles.grid}>
//           {/* LEFT – PRODUCTS */}
//           <div className={styles.products}>
//             {Listoforder.map((item, index) => (
//               <div key={index} className={styles.productItem}>
//                 <img src={item.Image} alt="tea" />
//                 <div className={styles.productInfo}>
//                   <span>{item.ordername}</span>
//                   <span>{item.Varity}</span>
//                 </div>
//                 <div className={styles.price}>{item.price}</div>
//               </div>
//             ))}
//           </div>

//           {/* MIDDLE – DELIVERY */}
//           <div className={styles.delivery}>
//             <h3>Delivery Details</h3>

//             <h5>Shipping address</h5>
//             <p>
//               3 Falahi St, Falahi Ave,<br />
//               Pasdaran Blvd, Fars Province,<br />
//               Shiraz 71856-95159<br />
//               Iran
//             </p>

//             <h5>Billing address</h5>
//             <p>Same as shipping address</p>

//             <h5>Contact information</h5>
//             <p>amoopur@gmail.com</p>
//           </div>

//           {/* RIGHT – PAYMENT */}
//           <div className={styles.payment}>
//             <h3>Payment method</h3>
//             <p>Master Card</p>
//             <p>XXXX XXXX XXXX 5425</p>

//             <h3 className={styles.mt}>Estimated shipping</h3>
//             <p>16 June 2024</p>
//           </div>
//         </div>

//         {/* SUMMARY */}
//         <div className={styles.summary}>
//           <div>
//             <span>Subtotal</span>
//             <span>€3.90</span>
//           </div>
//           <div>
//             <span>Delivery</span>
//             <span>€3.95</span>
//           </div>
//           <div className={styles.total}>
//             <span>Total</span>
//             <span>€7.85</span>
//           </div>
//         </div>

//         {/* BUTTONS */}
//         <div className={styles.buttons}>
//           <button className={styles.primary}>KEEP SHOPPING</button>
//           <button className={styles.outline}>PRINT RECEIPT</button>
//         </div>
//       </div>

//       <Maylikethis />
//       <Footer />
//     </>
//   );
// }

// export default PaymentSuccesful;

// import React from 'react';
// import styles from '../../assets/Styles/PaymentSuccesful.module.css';
// import { Footer } from '../Footer/Footer';
// import { Maylikethis } from '../ProductDetails/UMaylikeThis/Maylikethis';
// import backimg from '../../assets/Images/123.jpg';

// import tea1 from '../../assets/Images/tea1.png';
// import tea2 from '../../assets/Images/tea2.png';
// import tea3 from '../../assets/Images/tea3.png';
// import tea4 from '../../assets/Images/tea4.png';

// function PaymentSuccesful() {

//   const Listoforder = [
//     { ordername: 'Ceylon Ginger Cinnamon', Varity: 'chai tea - 50 g', price: '€4.85', Image: tea1 },
//     { ordername: 'Ceylon Ginger Cinnamon', Varity: 'chai tea - 50 g', price: '€4.85', Image: tea2 },
//     { ordername: 'Ceylon Ginger Cinnamon', Varity: 'chai tea - 50 g', price: '€4.85', Image: tea3 },
//     { ordername: 'Ceylon Ginger Cinnamon', Varity: 'chai tea - 50 g', price: '€4.85', Image: tea4 },
//   ];

//   return (
//     <>
//       {/* ===== HERO / ORDER DETAIL SECTION (BACKGROUND ONLY HERE) ===== */}
//       <section
//         className={styles.hero}
//         style={{ backgroundImage: `url(${backimg})` }}
//       >
//         <div className={styles.heroOverlay}>
//           <div className={styles.header}>
//             <h1>THANK YOU!</h1>
//             <p>We received your order and will start preparing your package right away.</p>
//             <p>You will receive a confirmation email in a moment.</p>
//             <h4>ORDER DETAILS - 8972491047359</h4>
//           </div>
//         </div>
//       </section>

//       {/* ===== CONTENT SECTION (NO BACKGROUND) ===== */}
//       <section className={styles.content}>
//         <div className={styles.grid}>
//           {/* LEFT */}
//           <div className={styles.leftColumn}>
//             <div className={styles.products}>
//               {Listoforder.map((item, index) => (
//                 <div key={index} className={styles.productItem}>
//                   <img src={item.Image} alt="product" />
//                   <div className={styles.productInfo}>
//                     <span>{item.ordername}</span>
//                     <span>{item.Varity}</span>
//                   </div>
//                   <div className={styles.price}>{item.price}</div>
//                 </div>
//               ))}
//             </div>

//             <div className={styles.summary}>
//               <div>
//                 <span>Subtotal</span>
//                 <span>€19.40</span>
//               </div>
//               <div>
//                 <span>Delivery</span>
//                 <span>€3.95</span>
//               </div>
//               <div className={styles.total}>
//                 <span>Total</span>
//                 <span>€23.35</span>
//               </div>
//             </div>
//           </div>

//           {/* MIDDLE */}
//           <div className={styles.delivery}>
//             <h3>Delivery Details</h3>
//             <h5>Shipping address</h5>
//             <p>
//               3 Falahi St, Falahi Ave,<br />
//               Pasdaran Blvd, Fars Province,<br />
//               Shiraz 71856-95159<br />
//               Iran
//             </p>

//             <h5>Billing address</h5>
//             <p>Same as shipping address</p>

//             <h5>Contact information</h5>
//             <p>amoopur@gmail.com</p>
//           </div>

//           {/* RIGHT */}
//           <div className={styles.payment}>
//             <h3>Payment method</h3>
//             <p>Master Card</p>
//             <p>XXXX XXXX XXXX 5425</p>

//             <h3 className={styles.mt}>Estimated shipping</h3>
//             <p>16 June 2024</p>
//           </div>
//         </div>
//       </section>

//       {/* BUTTONS */}
//       <div className={styles.buttons}>
//         <button className={styles.primary}>KEEP SHOPPING</button>
//         <button className={styles.outline}>PRINT RECEIPT</button>
//       </div>

//       <Maylikethis />
//       <Footer />
//     </>
//   );
// }

// export default PaymentSuccesful;





import React from 'react';
import styles from '../../assets/Styles/PaymentSuccesful.module.css';
import { Footer } from '../Footer/Footer';
import { Maylikethis } from '../ProductDetails/UMaylikeThis/Maylikethis';
import backimg from '../../assets/Images/123.jpg';

import tea1 from '../../assets/Images/tea1.png';
import tea2 from '../../assets/Images/tea2.png';
import tea3 from '../../assets/Images/tea3.png';
import tea4 from '../../assets/Images/tea4.png';
import tea5 from '../../assets/Images/tea5.png';
import tea6 from '../../assets/Images/tea6.png';
import tea7 from '../../assets/Images/tea7.png';
import tea8 from '../../assets/Images/tea8.png';

function PaymentSuccesful() {
  const Listoforder = [
    { ordername: 'Ceylon Ginger Cinnamon', Varity: 'chai tea - 50 g', price: '€4.85', Image: tea1 },
    { ordername: 'Ceylon Ginger Cinnamon', Varity: 'chai tea - 50 g', price: '€4.85', Image: tea2 },
    { ordername: 'Ceylon Ginger Cinnamon', Varity: 'chai tea - 50 g', price: '€4.85', Image: tea3 },
    { ordername: 'Ceylon Ginger Cinnamon', Varity: 'chai tea - 50 g', price: '€4.85', Image: tea4 },
    { ordername: 'Ceylon Ginger Cinnamon', Varity: 'chai tea - 50 g', price: '€4.85', Image: tea5 },
    { ordername: 'Ceylon Ginger Cinnamon', Varity: 'chai tea - 50 g', price: '€4.85', Image: tea6 },
    { ordername: 'Ceylon Ginger Cinnamon', Varity: 'chai tea - 50 g', price: '€4.85', Image: tea7 },
    { ordername: 'Ceylon Ginger Cinnamon', Varity: 'chai tea - 50 g', price: '€4.85', Image: tea8 },
  ];

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
            {/* Scrollable product list */}
            <div className={styles.productsWrapper}>
              <div className={styles.products}>
                {Listoforder.map((item, index) => (
                  <div key={index} className={styles.productItem}>
                    <img src={item.Image} alt="product" />
                    <div className={styles.productInfo}>
                      <span>{item.ordername}</span>
                      <span>{item.Varity}</span>
                    </div>
                    <div className={styles.price}>{item.price}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.summary}>
              <div>
                <span>Subtotal</span>
                <span>€14.55</span>
              </div>
              <div>
                <span>Delivery</span>
                <span>€3.95</span>
              </div>
              <div className={styles.total}>
                <span>Total</span>
                <span>€18.50</span>
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
              <button className={styles.primary}>KEEP SHOPPING</button>
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
