import React from 'react'
import styles from "../../assets/Styles/Teacollection.module.css";
import collection1 from '../../assets/Images/collection1.png'
import collection2 from '../../assets/Images/collection2.png'
import collection3 from '../../assets/Images/collection3.png'
import collection4 from '../../assets/Images/collection4.png'
import collection5 from '../../assets/Images/collection5.png'
import collection6 from '../../assets/Images/collection6.png'
import collection7 from '../../assets/Images/collection7.png'
import collection8 from '../../assets/Images/collection8.png'


export function TeaCollection(props) {
    const teaCollection = [
        { id: 1, name: "Green Tea", image: collection1, price: "$12.99" },
        { id: 2, name: "Black Tea", image: collection2, price: "$14.99" },
        { id: 3, name: "Herbal Tea", image: collection3, price: "$10.99" },
        { id: 4, name: "White tea", image: collection8, price: "$10.99" },
        { id: 5, name: "Matcha", image: collection5, price: "$10.99" },
        { id: 6, name: "Chai", image: collection6, price: "$10.99" },
        { id: 7, name: "Rooibos", image: collection7, price: "$10.99" },
        { id: 8, name: "Teaware", image: collection4, price: "$10.99" },

    ];

    return (
        <>
            {/* <section className={styles.collection}>
                <h2>Our Tea Collection</h2>
                <div className={styles.teaGrid}>
                    {teaCollection.map((tea) => (
                        <div key={tea.id} className={styles.teaCard}>
                            <img src={tea.image} alt={tea.name} />
                            <h3>{tea.name}</h3>
                        </div>
                    ))}
                </div>
            </section> */
            <section className={styles.collection}>
            <h2 className={styles.title}>Our Collections</h2>
            <div className={styles.teaGrid}>
                {teaCollection.map((tea) => (
                    <div key={tea.id} className={styles.teaCard}>
                    <div className={styles.imageWrapper}>
                        <img src={tea.image} alt={tea.name} />
                    </div>
                        <h3>{tea.name}</h3>
                    </div>
                ))}
            </div>
            </section>
            }
        </>
    )
}




