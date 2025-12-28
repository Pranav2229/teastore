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
// export function Product(props) {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const product = location.state?.product; // Get product data
//     const [OpenPopUp, setOpenPopUp] = useState(false)
    
//     // Redirect if no product data
//     useEffect(() => {
//         if (!product) {
//             navigate("/"); // Redirect to homepage

//         }
//     }, [product, navigate]);

   
//     // if (!product) return null; // Prevent rendering
//     return (
//         <>
//             <section>
//                 <div className={productcss.align}>
//                     <div className={productcss.navigate}>
//                         HOME/COLLECTIONS/CHAI
//                     </div>
//                     <div className={productcss.mainexpand}>
//                         <div className={productcss.mainimg}>
//                             <img src={tea3} alt='tea-expand1' />
//                         </div>
//                         <div className={productcss.productdetails}>
//                             <h1 className={productcss.head}>
//                                 Ceylon Ginger Cinnamon
//                                 chai tea
//                             </h1>
//                             <span className={productcss.padtop}>A lovely warming Chai tea with ginger cinnamon flavours.
//                             </span>
//                             <div className={`${productcss.padtop} ${productcss.spanalin}`}>
//                                 <span>
//                                     <div> <img src={langage} /></div>
//                                     <div> organic:iron</div>
//                                 </span>
//                                 <span>
//                                     <div> <img src={redeem} /></div>
//                                     <div> organic</div>

//                                 </span>
//                                 <span>
//                                     <div> <img src={eco} /></div>
//                                     <div> vegan</div>

//                                 </span>
//                             </div>
//                             <h1 className={productcss.padtop}>Rs. 3.90</h1>
//                             <div>
//                                 <span style={{ fontSize: '20px' }}>Variet</span>
//                                 <div className={productcss.bags}>

//                                     <div>
//                                         <div><img src={fiveGbag} alt='onekg' /></div>
//                                     </div>
//                                     <div>
//                                         <div><img src={hundredGbag} alt='onekg' /></div>
//                                     </div>
//                                     <div>
//                                         <div><img src={oneseventyGbag} alt='onekg' /></div>
//                                     </div>
//                                     <div>
//                                         <div><img src={twofiftyGbag} alt='onekg' /></div>
//                                     </div>
//                                     <div>
//                                         <div><img src={onekgbag} alt='onekg' /></div>
//                                     </div>
//                                     <div>
//                                         <div><img src={sampler} alt='onekg' /></div>
//                                     </div>

//                                 </div>
//                             </div>
//                             <div className={`${productcss.addbutton} ${productcss.padtop}`}>
//                                 <div style={{ fontSize: '30px' }}><a style={{ padding: '0px 25px' }} >-</a>1<a style={{ padding: '0px 25px' }}>+</a></div>
//                                 <div>
//                                     <button onClick={() => setOpenPopUp(true)} >ADD TO BAG</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <AboutTea />
//             <Maylikethis />
//             <Footer />
//             {OpenPopUp && (<PopupProduct setOpenPopUp={setOpenPopUp} OpenPopUp={OpenPopUp}/>)}
//         </>
//     )
// }



















export function Product(props) {
    const location = useLocation()
    const navigate = useNavigate()
    const product = location.state?.product
    const [OpenPopUp, setOpenPopUp] = useState(false)

    useEffect(() => {
        if (!product) {
            navigate('/')
        }
    }, [product, navigate])

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
                            <img src={product.image} alt={product.title} />

                        </div>

                        <div className={productcss.productdetails}>
                            {/* <h1 className={productcss.head}>
                                Ceylon Ginger Cinnamon
                                <br />
                                chai tea
                            </h1> */}
                            <h1 className={productcss.head}>
                                {product.title}
                            </h1>

                            <span className={productcss.padtop}>
                                {product.subtitle}
                            </span>


                            {/* <span className={productcss.padtop}>
                                A lovely warming Chai tea with ginger cinnamon flavours.
                            </span> */}
                            <span className={productcss.padtop}>
                                {product.description}
                            </span>


                            <div className={`${productcss.padtop} ${productcss.spanalin}`}>
                                <span>
                                    <div><img src={langage} /></div>
                                    {/* <div>Origin: Iran</div> */}
                                    <div>Origin: {product.origin}</div>
                                </span>
                                <span>
                                    <div><img src={redeem} /></div>
                                    {/* <div>Organic</div> */}
                                    <div>{product.organic ? 'Organic' : 'Not Organic'}</div>
                                </span>
                                <span>
                                    <div><img src={eco} /></div>
                                    {/* <div>Vegan</div> */}
                                    <div>{product.vegan ? 'Vegan' : 'Non-Vegan'}</div>
                                </span>
                            </div>

                            {/* <h1 className={productcss.padtop}>€3.90</h1> */}
                            {/* <h1 className={productcss.padtop}>{product.price}</h1> */}
                            <span className={`${productcss.padtop} ${productcss.price}`}>
                                {product.price}
                            </span>



                            <div>
                                <span style={{ fontSize: '20px' }}>Variants</span>
                                <div className={productcss.bags}>
                                    <div><div><img src={fiveGbag} /></div></div>
                                    <div><div><img src={hundredGbag} /></div></div>
                                    <div><div><img src={oneseventyGbag} /></div></div>
                                    <div><div><img src={twofiftyGbag} /></div></div>
                                    <div><div><img src={onekgbag} /></div></div>
                                    <div><div><img src={sampler} /></div></div>
                                </div>
                            </div>

                            <div className={`${productcss.addbutton} ${productcss.padtop}`}>                             
                                <div className={productcss.quantity}>
                                    <a>-</a>
                                    <span>1</span>
                                    <a>+</a>
                                </div>

                                <div>
                                    <button onClick={() => setOpenPopUp(true)}>
                                        ADD TO BAG
                                    </button>
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
