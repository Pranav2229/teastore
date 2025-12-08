import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "../../assets/Styles/Header.module.css";
import frame from '../../assets/Images/frame.png'
import mall from '../../assets/Images/icons/local_mall.png'
import search from '../../assets/Images/icons/search.png'

export function Header(props) {
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div onClick={() => navigate('/')} className={styles.logo}>
                <img src={frame} alt="frame" />
            </div>

            {/* Menu Toggle Button for Mobile */}
            <div className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
            <nav>
                <ul className={`${styles.navList} ${menuOpen ? styles.active : ""}`}>
                    <li><a onClick={() => navigate('/teacollection')}>Tea Collections</a></li>
                    <li><a href="/shop">Accessories</a></li>
                    <li><a href="/about">Contact us</a></li>
                </ul>
            </nav>
            {/* Navigation List */}
            <nav>
                <ul className={`${styles.navList} ${menuOpen ? styles.active : ""}`}>
                    <li>
                        <a><img src={search} />
                        </a>
                    </li>
                    <li>
                        <a><img src={mall} />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
