import React, { useEffect, useState } from 'react'
import productcss from '../../assets/Styles/Product.module.css'
import { useLocation, useNavigate } from 'react-router-dom';
import tea3 from '../../assets/Images/tea3.png'
import langage from '../../assets/Images/icons/language.png'
import eco from '../../assets/Images/icons/eco.png'
import onekg from '../../assets/Images/1kggbag.png'
import redeem from '../../assets/Images/icons/redeem.png'

import onekgbag from '../../assets/Images/1kggbag.png'
import fiveGbag from '../../assets/Images/50gbag.png'
import hundredGbag from '../../assets/Images/100gbag.png'
import oneseventyGbag from '../../assets/Images/170gbag.png'
import twofiftyGbag from '../../assets/Images/250gbag.png'
import sampler from '../../assets/Images/sampler.png'
import { AboutTea } from './AboutTea/AboutTea';
import { Footer } from '../Footer/Footer'
import { Maylikethis } from './UMaylikeThis/Maylikethis';
import { PopupProduct } from '../PopupScreens/PopupProduct';

import { useSelectedTea } from '../../ContextAPI/TeaContext';
export function Product(props) {
    const location = useLocation()
    const { selectedTea, setaddcard, addcard } = useSelectedTea();
    const navigate = useNavigate()
    const product = selectedTea
    const [OpenPopUp, setOpenPopUp] = useState(false)
    const mapimage = '/src/assets/Images/'
    const [bagdata, setbagdata] = useState('50g bag')

    // const HandleIncrementDecrement = (check) => {
    //     if (check == 'incre') {
    //         setvalue(value + 1)
    //     } else {
    //         if (value != 1) {
    //             setvalue(value - 1)
    //         } else {
    //             return;
    //         }
    //     }

    // }

    const Handlesetdata = (selectedTea) => {
        const isAlreadyInCart = addcard.some(
            item => item.id === selectedTea.id
        );

        if (isAlreadyInCart) {
            alert('This tea allready in card list')
            return;
        }

        setaddcard(prev => [...prev, selectedTea]);
    };


    useEffect(() => {
        window.scroll(0, 0)
        if (!product) {
            navigate('/')
        }
    }, [product, navigate])

    useEffect(() => {
        if (addcard.length == 0) {
            setOpenPopUp(false)
        }
    })

    return (
        <>
            <section>
                <div className={productcss.align}>
                    <div className={productcss.navigate}>
                        HOME/COLLECTIONS/CHAI/CEYLON GINGER CINNAMON CHAI TEA
                    </div>

                    <div className={productcss.mainexpand}>
                        <div className={productcss.mainimg}>
                            {/* <img src={tea3} alt="tea-expand1" /> */}
                            <img src={`${mapimage}${product?.image}`} alt={product?.name} />

                        </div>

                        <div className={productcss.productdetails}>
                            {/* <h1 className={productcss.head}>
                                Ceylon Ginger Cinnamon
                                <br />
                                chai tea
                            </h1> */}
                            <h1 className={productcss.head}>
                                {product?.name}
                            </h1>

                            <span className={productcss.padtop}>
                                {product?.description}
                            </span>

                            <div className={`${productcss.padtop} ${productcss.spanalin}`}>
                                <span>
                                    <div><img src={langage} /></div>
                                    {/* <div>Origin: Iran</div> */}
                                    <div>Origin: {product?.origin}</div>
                                </span>
                                <span>
                                    <div><img src={redeem} /></div>
                                    {/* <div>Organic</div> */}
                                    <div>{product?.organic == true ? 'Organic' : 'Not Organic'}</div>
                                </span>
                                <span>
                                    <div><img src={eco} /></div>
                                    {/* <div>Vegan</div> */}
                                    <div>{product?.organic == true ? 'Vegan' : 'Non-Vegan'}</div>
                                </span>
                            </div>

                            {/* <h1 className={productcss.padtop}>€3.90</h1> */}
                            <h1 className={productcss.padtop}>{product?.price} Rs / {bagdata}</h1>
                            {/* <h1 className={productcss.padtop}>{product.price}</h1> */}
                            <span className={`${productcss.padtop} ${productcss.price}`}>
                                {product.price}
                            </span>



                            <div>
                                <span style={{ fontSize: '20px' }}>Variants</span>
                                <div className={productcss.bags}>
                                    <div>
                                        <div onClick={() => setbagdata('50g bag')}>
                                            <img src={fiveGbag} style={{
                                                background: bagdata === '50g bag' ? '#efefef' : '',
                                                cursor: 'pointer',
                                                borderRadius: 20
                                            }}
                                            />
                                        </div>
                                    </div>
                                    <div><div onClick={() => setbagdata('100g bag')}><img src={hundredGbag} style={{
                                        background: bagdata === '100g bag' ? '#efefef' : '',
                                        cursor: 'pointer',
                                        borderRadius: 20
                                    }} /></div></div>
                                    <div><div onClick={() => setbagdata('170g bag')}><img src={oneseventyGbag} style={{
                                        background: bagdata === '170g bag' ? '#efefef' : '',
                                        cursor: 'pointer',
                                        borderRadius: 20
                                    }} /></div></div>
                                    <div><div onClick={() => setbagdata('250g bag')}><img src={twofiftyGbag} style={{
                                        background: bagdata === '250g bag' ? '#efefef' : '',
                                        cursor: 'pointer',
                                        borderRadius: 20
                                    }} /></div></div>
                                    <div><div onClick={() => setbagdata('1kg bag')}><img src={onekgbag} style={{
                                        background: bagdata === '1kg bag' ? '#efefef' : '',
                                        cursor: 'pointer',
                                        borderRadius: 20
                                    }} /></div></div>
                                    <div><div onClick={() => setbagdata('Sampler bag')}><img src={sampler} style={{
                                        background: bagdata === 'Sampler bag' ? '#efefef' : '',
                                        cursor: 'pointer',
                                        borderRadius: 20
                                    }} /></div></div>
                                </div>
                            </div>

                            <div className={`${productcss.addbutton} ${productcss.padtop}`}>
                                {/* <div style={{ fontSize: '30px' }}>
                                    <a style={{ padding: '0px 25px', cursor: 'pointer' }} onClick={() => HandleIncrementDecrement(product, 'incre')}>-</a>
                                    {product?.quantity}
                                    <a style={{ padding: '0px 25px', cursor: 'pointer' }} onClick={() => HandleIncrementDecrement(product, 'decre')}>+</a>
                                </div> */}
                                <div className={`${productcss.addbutton} ${productcss.padtop}`}>
                                    <div className={productcss.quantity}>
                                        <a>-</a>
                                        <span>1</span>
                                        <a>+</a>
                                    </div>

                                    <div>
                                        <button onClick={() => { Handlesetdata(product); setOpenPopUp(true) }}>
                                            ADD TO BAG
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AboutTea />
            <Maylikethis />
            <Footer />

            {OpenPopUp && (
                <PopupProduct
                    setOpenPopUp={setOpenPopUp}
                    OpenPopUp={OpenPopUp}
                />
            )}
        </>
    )
}
