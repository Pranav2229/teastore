import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../assets/Styles/Popup.css'
import tea3 from '../../assets/Images/tea3.png'

export function PopupProduct({ setOpenPopUp, OpenPopUp }) {
    // const [isOpen, setIsopen] = useState(true);
    const navigate = useNavigate()
    // const ToggleSidebar = () => {
    //     isOpen === true ? setIsopen(true) : setIsopen(false);
    // }
    const handleProductClick = (mybag) => {
        navigate("/mybag", { state: { mybag } }); // Pass product data
    };
    return (
        <>
            <div className="container-fluid mt-3">
                <div className={`sidebar ${OpenPopUp == true ? 'active' : ''}`}>
                    <div className="sd-header">
                        <h4 className="mb-0">My Bag</h4>
                        {/* <div className="btn btn-primary" ><i className="fa fa-times"></i></div> */}
                        <div className='close' onClick={() => setOpenPopUp(false)}>X</div>
                    </div>
                    <div className="sd-body">
                        <ul>
                            <li>
                                {/* <div> */}
                                <img src={tea3} alt='bag' />
                                {/* </div> */}
                                <div className='bagdetail'>
                                    <div><span>Ceylon Ginger Cinnamon
                                        chai tea - 50 g</span></div>
                                    <div className='martop'>
                                        Remove
                                    </div>

                                </div>
                                <div>
                                    <div>
                                        <a>-</a> 1 <a>+</a>
                                    </div>
                                    <div className='martop2'>
                                        €3.90
                                    </div>
                                </div>
                            </li>
                            <li>
                                {/* <div> */}
                                <img src={tea3} alt='bag' />
                                {/* </div> */}
                                <div className='bagdetail'>
                                    <div><span>Ceylon Ginger Cinnamon
                                        chai tea - 50 g</span></div>
                                    <div className='martop'>
                                        Remove
                                    </div>

                                </div>
                                <div>
                                    <div>
                                        <a>-</a> 1 <a>+</a>
                                    </div>
                                    <div className='martop2'>
                                        €3.90
                                    </div>
                                </div>
                            </li>
                            <li>
                                {/* <div> */}
                                <img src={tea3} alt='bag' />
                                {/* </div> */}
                                <div className='bagdetail'>
                                    <div><span>Ceylon Ginger Cinnamon
                                        chai tea - 50 g</span></div>
                                    <div className='martop'>
                                        Remove
                                    </div>

                                </div>
                                <div>
                                    <div>
                                        <a>-</a> 1 <a>+</a>
                                    </div>
                                    <div className='martop2'>
                                        €3.90
                                    </div>
                                </div>
                            </li>
                            {/* <li>
                                <img src={tea3} alt='bag' />
                                <div className='bagdetail'>
                                    <div><span>Ceylon Ginger Cinnamon
                                        chai tea - 50 g</span></div>
                                    <div className='martop'>
                                        Remove
                                    </div>

                                </div>
                                <div>
                                    <div>
                                        <a>-</a> 1 <a>+</a>
                                    </div>
                                    <div className='martop2'>
                                        €3.90
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src={tea3} alt='bag' />
                                <div className='bagdetail'>
                                    <div><span>Ceylon Ginger Cinnamon
                                        chai tea - 50 g</span></div>
                                    <div className='martop'>
                                        Remove
                                    </div>

                                </div>
                                <div>
                                    <div>
                                        <a>-</a> 1 <a>+</a>
                                    </div>
                                    <div className='martop2'>
                                        €3.90
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src={tea3} alt='bag' />
                                <div className='bagdetail'>
                                    <div><span>Ceylon Ginger Cinnamon
                                        chai tea - 50 g</span></div>
                                    <div className='martop'>
                                        Remove
                                    </div>

                                </div>
                                <div>
                                    <div>
                                        <a>-</a> 1 <a>+</a>
                                    </div>
                                    <div className='martop2'>
                                        €3.90
                                    </div>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                    <div className='totalcountmain'>
                        <div className='totalcount'>
                            <a>Subtotal</a>
                            <a>€3.90</a>
                        </div>
                        <div className='totalcount'>
                            <a>Delivery</a>
                            <a>€3.95</a>
                        </div>
                        <div className='totalcountfinal'>
                            <a>Total</a>
                            <a>€3.95</a>
                        </div>
                        <div className='purchasbtn'>
                            <button onClick={() => handleProductClick({ id: 1 })}>
                                purchases
                            </button>
                        </div>
                    </div>

                </div>
                <div className={`sidebar-overlay ${OpenPopUp == true ? 'active' : ''}`} onClick={() => setOpenPopUp(false)}></div>
            </div>
        </>
    )
}
