import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../assets/Styles/Header.module.css";

import frame from "../../assets/Images/frame.png";
import mall from "../../assets/Images/icons/local_mall.png";
import search from "../../assets/Images/icons/search.png";
import { useSelectedTea } from '../../ContextAPI/TeaContext';

import { uploadTeas } from "../../UploadData/Uploadfirebasedata";
export function Header() {
  const navigate = useNavigate();
  const { addcard } = useSelectedTea()
  const [menuOpen, setMenuOpen] = useState(false);

  const HandleBag = () => {
    if (addcard.length == 0) {
      alert("Please add tea to card, card is empty")
    } else {
      navigate("/mybag-items")
    }
  }

  return (
    <header className={styles.header}>
      {/* LEFT : LOGO (image already contains text) */}
      <div className={styles.logo} onClick={() => navigate("/")}>
        <img src={frame} alt="Brand Logo" />
      </div>

      {/* CENTER : NAVIGATION */}
      <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
        <a onClick={() => navigate("/teacollection")}>Tea Collections</a>
        {/* <a onClick={() => navigate("/shop")}>Accessories</a> */}
        {/* <a onClick={() => navigate("/about")}>Contact Us</a> */}
      </nav>

      {/* RIGHT : ICONS */}
      <div className={styles.icons}>
        {/* <img src={search} alt="Search" /> */}
        <img
          src={mall}
          alt="Cart"
          onClick={HandleBag}
          style={{ cursor: "pointer" }}
        />

      </div>

      {/* <div>
        <button onClick={uploadTeas}>
          Add Data
        </button>
      </div> */}



      {/* MOBILE MENU BUTTON */}
      <div
        className={styles.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
    </header>
  );
}
