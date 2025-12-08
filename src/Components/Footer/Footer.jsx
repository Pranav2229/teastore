import React from 'react'
import styles from '../../assets/Styles/Footer.module.css'
import frame from '../../assets/Images/frame.png'
import mail from '../../assets/Images/icons/mail.png'
import location_on from '../../assets/Images/icons/location_on.png'
import call from '../../assets/Images/icons/call.png'
import { useNavigate } from 'react-router-dom'

export function Footer(props) {
    const navigate = useNavigate()

    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    {/* Logo & Description */}
                    <div className={styles.brand}>
                        <img src={frame} alt="Tea Store Logo" />
                        <p>Premium quality tea sourced from the finest plantations.</p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.links}>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a onClick={() => navigate("/")}>Home</a></li>
                            <li><a onClick={() => navigate("/about")}>About Us</a></li>
                            <li><a onClick={() => navigate("/shop")}>Shop</a></li>
                            <li><a onClick={() => navigate("/contact")}>Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.contact}>
                        <h3>Contact Us</h3>
                        <p><img src={location_on} /> 3 Falahi, Falahi St, Pasdaran Ave, Shiraz, Fars Provieence
                            Iran</p>
                        <p><img src={mail} /> Email: support@teastore.com</p>
                        <p><img src={call} /> Phone: +91 98765 43210</p>
                    </div>

                    {/* Social Media Links */}
                    <div className={styles.links}>
                        <h3>Collections</h3>
                        <ul>
                            <li><a>Black teas</a></li>
                            <li><a >Green teas</a></li>
                            <li><a >White teas</a></li>
                            <li><a >Herbal teas</a></li>
                            <li><a>& many more</a></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className={styles.copyright}>
                    <p>© 2025 Tea Store. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}
