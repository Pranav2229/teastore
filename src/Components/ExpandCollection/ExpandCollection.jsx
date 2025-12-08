import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import expandcollection from '../../assets/Images/expandcollection.png'
import { Footer } from '../Footer/Footer'
import expandcss from '../../assets/Styles/Expandcollection.module.css'
import expand1 from '../../assets/Images/expand1.png'
import tea1 from '../../assets/Images/tea1.png'
import tea2 from '../../assets/Images/tea2.png'
import tea3 from '../../assets/Images/tea3.png'
import tea4 from '../../assets/Images/tea4.png'
import tea5 from '../../assets/Images/tea5.png'
import tea6 from '../../assets/Images/tea6.png'
import tea7 from '../../assets/Images/tea7.png'
import tea8 from '../../assets/Images/tea8.png'
// import tea9 from '../../assets/Images/tea9.png'

export function ExpandCollection(props) {
    const navigate = useNavigate();
    const [tab, settab] = useState(false)
    console.log("tab", tab);

    const handleProductClick = (product) => {
        navigate("/product", { state: { product } }); // Pass product data
    };
    return (
        <>
            <section>
                <div>
                    <img className={expandcss.img} src={expandcollection} alt='tea-view' />
                </div>
                <div className={expandcss.align}>
                    <div className={expandcss.navigate}>
                        HOME/COLLECTIONS/CHAI
                    </div>
                    <div className={expandcss.mainexpand}>
                        <div>
                            <ul>
                                <li onClick={() => settab(!tab)}>
                                    <a>
                                        COLLECTIONA
                                    </a>
                                    {!tab && (
                                        <a>
                                            +
                                        </a>
                                    )}
                                      {tab && (
                                        <a>
                                            -
                                        </a>
                                    )}
                                </li>
                                {tab && (
                                    <>
                                        <div>
                                            <input type="checkbox" style={{ marginRight: '10px' }} />
                                            <a>Black teas</a>
                                        </div>
                                        <div>
                                            <input type="checkbox" style={{ marginRight: '10px' }} />
                                            <a>Black teas</a>
                                        </div>
                                        <div>
                                            <input type="checkbox" style={{ marginRight: '10px' }} />
                                            <a>Black teas</a>
                                        </div>
                                    </>
                                )}
                                <li>
                                    <a>
                                        ORIGIN
                                    </a>
                                    <a>
                                        +
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        FLAVOUR
                                    </a>
                                    <a>
                                        +
                                    </a>
                                </li> <li>
                                    <a>
                                        QUALITIES
                                    </a>
                                    <a>
                                        +
                                    </a>
                                </li><li>
                                    <a>
                                        CAFEINE
                                    </a>
                                    <a>
                                        +
                                    </a>
                                </li><li>
                                    <a>
                                        ALLERGENS
                                    </a>
                                    <a>
                                        +
                                    </a>
                                </li><li>
                                    <a>
                                        ORGANIC
                                    </a>
                                    <a>
                                        +
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={expandcss.teacollection}>
                            <div className={expandcss.sortby}>
                                <select>
                                    <option>
                                        SORT BY
                                    </option>
                                    <option>
                                        asda
                                    </option>
                                </select>
                            </div>
                            <div className={expandcss.pos}>
                                <div className={expandcss.itemalign} onClick={() => handleProductClick({ id: 1 })}>
                                    <div>
                                        <img src={expand1} alt='tea-expand1' />
                                    </div>
                                    <div className={expandcss.pricedetail}>
                                        <div>Ceylon Ginger</div>
                                        <a>Ceylon Ginger Cinnamon chai tea</a>
                                        <div>€4.85 / 50 g</div>
                                    </div>
                                </div>
                                <div className={expandcss.itemalign}>
                                    <div>
                                        <img src={tea1} alt='tea-expand1' />
                                    </div>
                                    <div className={expandcss.pricedetail}>
                                        <div>Ceylon Ginger</div>
                                        <a>Ceylon Ginger Cinnamon chai tea</a>
                                        <div>€4.85 / 50 g</div>
                                    </div>
                                </div><div className={expandcss.itemalign}>
                                    <div>
                                        <img src={tea2} alt='tea-expand1' />
                                    </div>
                                    <div className={expandcss.pricedetail}>
                                        <div>Ceylon Ginger</div>
                                        <a>Ceylon Ginger Cinnamon chai tea</a>
                                        <div>€4.85 / 50 g</div>
                                    </div>
                                </div><div className={expandcss.itemalign}>
                                    <div>
                                        <img src={tea3} alt='tea-expand1' />
                                    </div>
                                    <div className={expandcss.pricedetail}>
                                        <div>Ceylon Ginger</div>
                                        <a>Ceylon Ginger Cinnamon chai tea</a>
                                        <div>€4.85 / 50 g</div>
                                    </div>
                                </div><div className={expandcss.itemalign}>
                                    <div>
                                        <img src={tea4} alt='tea-expand1' />
                                    </div>
                                    <div className={expandcss.pricedetail}>
                                        <div>Ceylon Ginger</div>
                                        <a>Ceylon Ginger Cinnamon chai tea</a>
                                        <div>€4.85 / 50 g</div>
                                    </div>
                                </div>
                                <div className={expandcss.itemalign}>
                                    <div>
                                        <img src={tea5} alt='tea-expand1' />
                                    </div>
                                    <div className={expandcss.pricedetail}>
                                        <div>Ceylon Ginger</div>
                                        <a>Ceylon Ginger Cinnamon chai tea</a>
                                        <div>€4.85 / 50 g</div>
                                    </div>
                                </div>
                                <div className={expandcss.itemalign}>
                                    <div>
                                        <img src={tea6} alt='tea-expand1' />
                                    </div>
                                    <div className={expandcss.pricedetail}>
                                        <div>Ceylon Ginger</div>
                                        <a>Ceylon Ginger Cinnamon chai tea</a>
                                        <div>€4.85 / 50 g</div>
                                    </div>
                                </div>
                                <div className={expandcss.itemalign}>
                                    <div>
                                        <img src={tea7} alt='tea-expand1' />
                                    </div>
                                    <div className={expandcss.pricedetail}>
                                        <div>Ceylon Ginger</div>
                                        <a>Ceylon Ginger Cinnamon chai tea</a>
                                        <div>€4.85 / 50 g</div>
                                    </div>
                                </div>
                                <div className={expandcss.itemalign}>
                                    <div>
                                        <img src={tea8} alt='tea-expand1' />
                                    </div>
                                    <div className={expandcss.pricedetail}>
                                        <div>Ceylon Ginger</div>
                                        <a>Ceylon Ginger Cinnamon chai tea</a>
                                        <div>€4.85 / 50 g</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}
