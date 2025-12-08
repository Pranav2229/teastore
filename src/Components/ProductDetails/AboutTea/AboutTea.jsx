import React from 'react'
import abountteacss from '../../../assets/Styles/Abouttea.module.css'
import cupkettle from '../../../assets/Images/icons/kettle.png'
import water_voc from '../../../assets/Images/icons/water_voc.png'
import alarm from '../../../assets/Images/icons/alarm.png'
import Ellipse from '../../../assets/Images/icons/Ellipse 2.png'

export function AboutTea(props) {


    return (
        <>
            <section className={abountteacss.aboutteamain}>
                <div className={abountteacss.alignitem}>
                    <h2>
                        Steeping instructions
                    </h2>
                    <div className={abountteacss.manageborder}>
                        <div><img src={cupkettle} alt='kettle' loading='lazy' />SERVING SIZE: <a>2 tsp per cup, 6 tsp per pot</a></div>
                    </div>
                    <div className={abountteacss.manageborder}>
                        <div><img src={water_voc} alt='kettle' loading='lazy' />WATER TEMPERATURE: <a>100°C</a> </div>
                    </div>
                    <div className={abountteacss.manageborder}>
                        <div><img src={alarm} alt='kettle' loading='lazy' />STEEPING TIME: <a>3 - 5 minutes</a></div>
                    </div>
                    <div className={abountteacss.manageborder}>
                        <div><img src={Ellipse} alt='kettle' loading='lazy' />COLOR AFTER 3 MINUTES</div>
                    </div>
                </div>
                <div className={abountteacss.alignitem}>
                    <h2>
                        About this tea
                    </h2>
                    <div className={abountteacss.displayflx}>
                        <div className={abountteacss.beforetas}>
                            <span>FLAVOR</span>
                            <p>Spicy</p>
                        </div>
                        <div className={abountteacss.beforetas}>
                            <span>QUALITIES</span>
                            <p>Smoothing</p>
                        </div>
                        <div className={abountteacss.beforetas}>
                            <span>CAFFEINE</span>
                            <p>Medium</p>
                        </div>
                        <div className={abountteacss.beforetas}>
                            <span>ALLERGENS</span>
                            <p>Nuts-free</p>
                        </div>
                    </div>
                    <h2 className={abountteacss.Ingredient}>Ingredient</h2>
                    <span>
                        Black Ceylon tea, Green tea, Ginger root, Cloves, Black pepper, Cinnamon sticks, Cardamom, Cinnamon pieces.
                    </span>
                </div>
            </section>
        </>
    )
}
