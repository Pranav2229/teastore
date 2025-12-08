import React from 'react'
import styles from '../../assets/Styles/Wholeseller.module.css'

import whyus from '../../assets/Images/wholeseller.png'
export function Wholeseller(props) {
    

    return (
        <>
             <section className={styles.about}>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <h2>FOR WHOLESALERS</h2>
                        <p>
                        We offer loose tea leaves of the best quality for your business. With a choice of more than 450 different kinds of loose tea, we can make a sophisticated selection that fits exactly in your kind of establishment. 
                        </p>
                    </div>
                    <div className={styles.image}>
                        <img src={whyus} alt="About Our Tea" />
                    </div>
                </div>
            </section>
        </>
    )
}
