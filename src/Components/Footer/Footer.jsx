// import React from 'react'
// import styles from '../../assets/Styles/Footer.module.css'
// import frame from '../../assets/Images/frame.png'
// import mail from '../../assets/Images/icons/mail.png'
// import location_on from '../../assets/Images/icons/location_on.png'
// import call from '../../assets/Images/icons/call.png'
// import { useNavigate } from 'react-router-dom'

// export function Footer(props) {
//     const navigate = useNavigate()

//     return (
//         <>
//             <footer className={styles.footer}>
//                 <div className={styles.container}>
//                     {/* Logo & Description */}
//                     <div className={styles.brand}>
//                         <img src={frame} alt="Tea Store Logo" />
//                         <p>Premium quality tea sourced from the finest plantations.</p>
//                     </div>

//                     {/* Quick Links */}
//                     <div className={styles.links}>
//                         <h3>Quick Links</h3>
//                         <ul>
//                             <li><a onClick={() => navigate("/")}>Home</a></li>
//                             <li><a onClick={() => navigate("/about")}>About Us</a></li>
//                             <li><a onClick={() => navigate("/shop")}>Shop</a></li>
//                             <li><a onClick={() => navigate("/contact")}>Contact</a></li>
//                         </ul>
//                     </div>

//                     {/* Contact Info */}
//                     <div className={styles.contact}>
//                         <h3>Contact Us</h3>
//                         <p><img src={location_on} /> 3 Falahi, Falahi St, Pasdaran Ave, Shiraz, Fars Provieence
//                             Iran</p>
//                         <p><img src={mail} /> Email: support@teastore.com</p>
//                         <p><img src={call} /> Phone: +91 98765 43210</p>
//                     </div>

//                     {/* Social Media Links */}
//                     <div className={styles.links}>
//                         <h3>Collections</h3>
//                         <ul>
//                             <li><a>Black teas</a></li>
//                             <li><a >Green teas</a></li>
//                             <li><a >White teas</a></li>
//                             <li><a >Herbal teas</a></li>
//                             <li><a>& many more</a></li>
//                         </ul>
//                     </div>
//                 </div>

//                 {/* Copyright */}
//                 <div className={styles.copyright}>
//                     <p>© 2025 Tea Store. All rights reserved.</p>
//                 </div>
//             </footer>
//         </>
//     )
// }














import React from "react";
import styles from "../../assets/Styles/Footer.module.css";
import location_on from "../../assets/Images/icons/location_on.png";
import mail from "../../assets/Images/icons/mail.png";
import call from "../../assets/Images/icons/call.png";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Collections */}
        <div className={styles.column}>
          <h4 className={styles.heading}>COLLECTIONS</h4>
          <ul>
            <li>Black teas</li>
            <li>Green teas</li>
            <li>White teas</li>
            <li>Herbal teas</li>
            <li>Matcha</li>
            <li>Chai</li>
            <li>Oolong</li>
            <li>Rooibos</li>
            <li>Teaware</li>
          </ul>
        </div>

        {/* Learn */}
        <div className={styles.column}>
          <h4 className={styles.heading}>LEARN</h4>
          <ul>
            <li>About us</li>
            <li>About our teas</li>
            <li>Tea academy</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className={styles.column}>
          <h4 className={styles.heading}>CUSTOMER SERVICE</h4>
          <ul>
            <li>Ordering and payment</li>
            <li>Delivery</li>
            <li>Privacy and policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.column}>
          <h4 className={styles.heading}>CONTACT US</h4>

          <div className={styles.contactItem}>
            <img src={location_on} alt="" />
            <span>
              3 Falahi, Falahi St, Pasdaran Ave,<br />
              Shiraz, Fars Provience<br />
              Iran
            </span>
          </div>

          <div className={styles.contactItem}>
            <img src={mail} alt="" />
            <span>Email: amoopur@gmail.com</span>
          </div>

          <div className={styles.contactItem}>
            <img src={call} alt="" />
            <span>Tel: +98 9173038406</span>
          </div>
        </div>

      </div>
    </footer>
  );
}



