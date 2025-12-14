import React from 'react'
import expandcss from '../../../assets/Styles/Expandcollection.module.css'
import expand1 from '../../../assets/Images/expand1.png'
// export function Maylikethis(props) {


//     return (
//         <>
//             <section className={expandcss.mainexpand} style={{padding:'20px 20px'}}>
//                 <div className={expandcss.teacollection}>
//                     <h2 style={{textAlign: 'center', color: 'black' ,fontFamily :'cursive'}}>You may also like</h2>
//                     <div className={expandcss.pos}>
//                         <div className={expandcss.itemalign}>
//                             <div>
//                                 <img src={expand1} alt='tea-expand1' />
//                             </div>
//                             <div className={expandcss.pricedetail}>
//                                 <div>Ceylon Ginger</div>
//                                 <a>Ceylon Ginger Cinnamon chai tea</a>
//                                 <div>€4.85 / 50 g</div>
//                             </div>
//                         </div>
//                         <div className={expandcss.itemalign}>
//                             <div>
//                                 <img src={expand1} alt='tea-expand1' />
//                             </div>
//                             <div className={expandcss.pricedetail}>
//                                 <div>Ceylon Ginger</div>
//                                 <a>Ceylon Ginger Cinnamon chai tea</a>
//                                 <div>€4.85 / 50 g</div>
//                             </div>
//                         </div><div className={expandcss.itemalign}>
//                             <div>
//                                 <img src={expand1} alt='tea-expand1' />
//                             </div>
//                             <div className={expandcss.pricedetail}>
//                                 <div>Ceylon Ginger</div>
//                                 <a>Ceylon Ginger Cinnamon chai tea</a>
//                                 <div>€4.85 / 50 g</div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }










// import React from 'react'
// import expandcss from '../../../assets/Styles/Expandcollection.module.css'
// import expand1 from '../../../assets/Images/expand1.png'

export function Maylikethis() {
  return (
    <section
      className={expandcss.mainexpand}
      style={{ padding: '20px 20px' }}
    >
      <div className={expandcss.teacollection}>
        <h2
          style={{
            textAlign: 'center',
            color: 'black',
            fontFamily: 'cursive',
            marginBottom: '40px',
          }}
        >
          You may also like
        </h2>

        <div className={expandcss.pos}>
          {/* Product 1 */}
          <div className={expandcss.itemalign}>
            <div className={expandcss.imgWrap}>
              <img
                src={expand1}
                alt="Ceylon Ginger Tea"
                className={expandcss.productImg}
              />
            </div>

            <div className={expandcss.pricedetail}>
              <div className={expandcss.title}>Ceylon Ginger</div>
              <a className={expandcss.subtitle}>
                Ceylon Ginger Cinnamon chai tea
              </a>
              <div className={expandcss.price}>€4.85 / 50 g</div>
            </div>
          </div>

          {/* Product 2 */}
          <div className={expandcss.itemalign}>
            <div className={expandcss.imgWrap}>
              <img
                src={expand1}
                alt="Ceylon Ginger Tea"
                className={expandcss.productImg}
              />
            </div>

            <div className={expandcss.pricedetail}>
              <div className={expandcss.title}>Ceylon Ginger</div>
              <a className={expandcss.subtitle}>
                Ceylon Ginger Cinnamon chai tea
              </a>
              <div className={expandcss.price}>€4.85 / 50 g</div>
            </div>
          </div>

          {/* Product 3 */}
          <div className={expandcss.itemalign}>
            <div className={expandcss.imgWrap}>
              <img
                src={expand1}
                alt="Ceylon Ginger Tea"
                className={expandcss.productImg}
              />
            </div>

            <div className={expandcss.pricedetail}>
              <div className={expandcss.title}>Ceylon Ginger</div>
              <a className={expandcss.subtitle}>
                Ceylon Ginger Cinnamon chai tea
              </a>
              <div className={expandcss.price}>€4.85 / 50 g</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}













