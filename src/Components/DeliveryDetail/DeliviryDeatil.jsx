import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import mybag from '../../assets/Styles/Mybag.module.css'
import teaimage from '../../assets/Images/teaimage.jpg'
import backgrd from '../../assets/Images/backgrd.jpg'
function DeliviryDeatil(props) {
    const navigate = useNavigate()
    const product1 = location.state?.deliverydetail; // Get product data
    console.log("product1", product1);

    const handlepayment = (reviewdeatil) => {
        navigate("/review_payment", { state: { reviewdeatil } }); // Pass product data
    }
    // useEffect(() => {
    //     if (!product1) {
    //         navigate("/"); // Redirect to homepage
    //     }
    // }, [product1, navigate]);
    return (
        <>
            <section className={mybag.detaildiliviry}>
                <div className={mybag.gerny}>
                    <span>1. My Bag</span>
                    <a>_________________________________________________</a>
                    <span>2. Delivery</span>
                    <a>__________________________________________________</a>
                    <span>2. Review & Payment</span>
                </div>
                <div className='flex'>
                    <div className={mybag.mybagbody} style={{
                        // textAlign: 'left',
                        // backgroundImage: `url(${backgrd})`,
                        // width: '70%',
                        // // backgroundPosition: 'center',
                        // backgroundRepeapxt: 'no-repeat',
                        // // padding: '50px ',
                        // // color: 'white'
                    }}>
                        <div className={mybag.inputfeilddata}>
                            <div>
                                <p style={{color:'white'}}>Shipping Address</p>
                            </div>
                            <div>
                                <input placeholder='first name' />
                            </div>
                            <div>
                                <input placeholder='last name' />
                            </div>
                            <div>
                                <input placeholder='address' />
                            </div>
                            <div>
                                <input placeholder='Email Address' />
                            </div>
                            <div>
                                <input placeholder='PostCode' />
                                <input style={{ marginTop: 15 }} placeholder='City' />
                            </div>
                            <div>
                                <select>
                                    <option value="">Country</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        <img style={{ width: '65%' }} src={teaimage} />
                    </div> */}
                    <div>
                        <div style={{
                            // margin: '140px',
                            backgroundColor: '#F4F4F4',
                            padding: '96px'
                        }}>
                            <p style={{ display: 'flex', justifyContent: 'center' }}>Order Summery</p>
                            <div className='totalcount'>
                                <a>Subtotal</a>
                                <a>Rs 3.90</a>
                            </div>
                            <div className='totalcount'>
                                <a>Delivery</a>
                                <a>Rs 3.95</a>
                            </div>
                            <div className='totalcountfinal'>
                                <a>Total</a>
                                <a>Rs 3.95</a>
                            </div>
                            <div className='purchasbtn'>
                                <button onClick={() => handlepayment({ reviewdeatil: '1' })}>
                                    GO TO PAYMENT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Maylikethis /> */}
                <Footer />
            </section>
        </>
    )
}

export default DeliviryDeatil