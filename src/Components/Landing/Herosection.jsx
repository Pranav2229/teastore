import React from 'react'
import styles from '../../assets/Styles/Herosection.module.css'
import teacup from '../../assets/Images/Landingimg.png'
export function Herosection(props) {


    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.row}>
                        {/* Left Side: Image */}
                        <div className={styles.colImage}>
                            <img src={teacup} alt="Tea Cup" />
                        </div>

                        {/* right Side: Text Content */}
                        <div className={styles.colText}>
                            <h1>Every day is unique, just like our tea</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus adipiscing odio. Neque lacus nibh eros in.
                            Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus adipiscing odio. Neque lacus nibh eros in. Enjoy premium quality tea with rich flavors from around the world.</p>
                            <a href="/shop" className="btn btn-primary">Shop Now</a>
                        </div>

                        
                    </div>
                </div>
            </section>
        </>
    )
}
