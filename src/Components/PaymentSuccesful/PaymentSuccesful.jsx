import React from 'react'
import { Maylikethis } from '../ProductDetails/UMaylikeThis/Maylikethis'
import { Footer } from '../Footer/Footer'
import backimg from '../../assets/Images/123.jpg'
function PaymentSuccesful(props) {
    return (
        <>
            <div style={{
                textAlign: 'left',
                backgroundImage: `url(${backimg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeapxt: 'no-repeat',
                padding: '50px ',
                color: 'white'
            }}>
                <div>
                    <h1 style={{ color: '#ff0202' }}>THANK YOU!</h1>
                    <p style={{ color: 'white' }}>We received your order and will start preparing your package right away.</p>
                    <p style={{ color: 'white' }}> You will receive a confirmation email in a moment.</p>
                    <h4>Order details - 8972491047359</h4>
                </div>
                <div>
                    <div style={{ marginTop: 50 }}>
                        <div>
                            <h3 style={{ color: '#ff0202' }}>Delivery Details</h3>
                            <h5>Shipping Address</h5>
                            <div>
                                3 Falahi St , Falahi Ave, Pasdaran Blvd, Fars Province , Shiraz
                                71856-95159
                                Iran

                            </div>
                        </div>
                        <div>
                            <h5>Billing Address</h5>
                            <div>
                                Same as shipping address
                            </div>
                        </div>
                        <div>
                            <h5>Contact Information</h5>
                            <div>
                                contact@name.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Maylikethis />
            <Footer />
        </>
    )
}

export default PaymentSuccesful