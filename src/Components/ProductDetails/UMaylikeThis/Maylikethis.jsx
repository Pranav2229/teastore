import React from 'react'
import expandcss from '../../../assets/Styles/Expandcollection.module.css'
import expand1 from '../../../assets/Images/expand1.png'
export function Maylikethis(props) {


    return (
        <>
            <section className={expandcss.mainexpand} style={{padding:'20px 20px'}}>
                <div className={expandcss.teacollection}>
                    <h2 style={{textAlign: 'center', color: 'black' ,fontFamily :'cursive'}}>You may also like</h2>
                    <div className={expandcss.pos}>
                        <div className={expandcss.itemalign}>
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
                                <img src={expand1} alt='tea-expand1' />
                            </div>
                            <div className={expandcss.pricedetail}>
                                <div>Ceylon Ginger</div>
                                <a>Ceylon Ginger Cinnamon chai tea</a>
                                <div>€4.85 / 50 g</div>
                            </div>
                        </div><div className={expandcss.itemalign}>
                            <div>
                                <img src={expand1} alt='tea-expand1' />
                            </div>
                            <div className={expandcss.pricedetail}>
                                <div>Ceylon Ginger</div>
                                <a>Ceylon Ginger Cinnamon chai tea</a>
                                <div>€4.85 / 50 g</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
