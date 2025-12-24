import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import expandcollection from '../../assets/Images/expandcollection.png'
import { Footer } from '../Footer/Footer'
import expandcss from '../../assets/Styles/Expandcollection.module.css'
import products from '../../data/products'

// import expand1 from '../../assets/Images/expand1.png'
// import tea1 from '../../assets/Images/tea1.png'
// import tea2 from '../../assets/Images/tea2.png'
// import tea3 from '../../assets/Images/tea3.png'
// import tea4 from '../../assets/Images/tea4.png'
// import tea5 from '../../assets/Images/tea5.png'
// import tea6 from '../../assets/Images/tea6.png'
// import tea7 from '../../assets/Images/tea7.png'
// import tea8 from '../../assets/Images/tea8.png'
// import tea9 from '../../assets/Images/tea9.png'

// export function ExpandCollection(props) {
//     const navigate = useNavigate();
//     const [tab, settab] = useState(false)
//     console.log("tab", tab);

//     const handleProductClick = (product) => {
//         navigate("/product", { state: { product } }); // Pass product data
//     };
//     return (
//         <>
//             <section>
//                 <div>
//                     <img className={expandcss.img} src={expandcollection} alt='tea-view' />
//                 </div>
//                 <div className={expandcss.align}>
//                     <div className={expandcss.navigate}>
//                         HOME/COLLECTIONS/CHAI
//                     </div>
//                     <div className={expandcss.mainexpand}>
//                         <div>
//                             <ul>
//                                 <li onClick={() => settab(!tab)}>
//                                     <a>
//                                         COLLECTIONA
//                                     </a>
//                                     {!tab && (
//                                         <a>
//                                             +
//                                         </a>
//                                     )}
//                                       {tab && (
//                                         <a>
//                                             -
//                                         </a>
//                                     )}
//                                 </li>
//                                 {tab && (
//                                     <>
//                                         <div>
//                                             <input type="checkbox" style={{ marginRight: '10px' }} />
//                                             <a>Black teas</a>
//                                         </div>
//                                         <div>
//                                             <input type="checkbox" style={{ marginRight: '10px' }} />
//                                             <a>Black teas</a>
//                                         </div>
//                                         <div>
//                                             <input type="checkbox" style={{ marginRight: '10px' }} />
//                                             <a>Black teas</a>
//                                         </div>
//                                     </>
//                                 )}
//                                 <li>
//                                     <a>
//                                         ORIGIN
//                                     </a>
//                                     <a>
//                                         +
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a>
//                                         FLAVOUR
//                                     </a>
//                                     <a>
//                                         +
//                                     </a>
//                                 </li> <li>
//                                     <a>
//                                         QUALITIES
//                                     </a>
//                                     <a>
//                                         +
//                                     </a>
//                                 </li><li>
//                                     <a>
//                                         CAFEINE
//                                     </a>
//                                     <a>
//                                         +
//                                     </a>
//                                 </li><li>
//                                     <a>
//                                         ALLERGENS
//                                     </a>
//                                     <a>
//                                         +
//                                     </a>
//                                 </li><li>
//                                     <a>
//                                         ORGANIC
//                                     </a>
//                                     <a>
//                                         +
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className={expandcss.teacollection}>
//                             <div className={expandcss.sortby}>
//                                 <select>
//                                     <option>
//                                         SORT BY
//                                     </option>
//                                     <option>
//                                         asda
//                                     </option>
//                                 </select>
//                             </div>
//                             <div className={expandcss.pos}>
//                                 <div className={expandcss.itemalign} onClick={() => handleProductClick({ id: 1 })}>
//                                     <div>
//                                         <img src={expand1} alt='tea-expand1' />
//                                     </div>
//                                     <div className={expandcss.pricedetail}>
//                                         <div>Ceylon Ginger</div>
//                                         <a>Ceylon Ginger Cinnamon chai tea</a>
//                                         <div>€4.85 / 50 g</div>
//                                     </div>
//                                 </div>
//                                 <div className={expandcss.itemalign}>
//                                     <div>
//                                         <img src={tea1} alt='tea-expand1' />
//                                     </div>
//                                     <div className={expandcss.pricedetail}>
//                                         <div>Ceylon Ginger</div>
//                                         <a>Ceylon Ginger Cinnamon chai tea</a>
//                                         <div>€4.85 / 50 g</div>
//                                     </div>
//                                 </div><div className={expandcss.itemalign}>
//                                     <div>
//                                         <img src={tea2} alt='tea-expand1' />
//                                     </div>
//                                     <div className={expandcss.pricedetail}>
//                                         <div>Ceylon Ginger</div>
//                                         <a>Ceylon Ginger Cinnamon chai tea</a>
//                                         <div>€4.85 / 50 g</div>
//                                     </div>
//                                 </div><div className={expandcss.itemalign}>
//                                     <div>
//                                         <img src={tea3} alt='tea-expand1' />
//                                     </div>
//                                     <div className={expandcss.pricedetail}>
//                                         <div>Ceylon Ginger</div>
//                                         <a>Ceylon Ginger Cinnamon chai tea</a>
//                                         <div>€4.85 / 50 g</div>
//                                     </div>
//                                 </div><div className={expandcss.itemalign}>
//                                     <div>
//                                         <img src={tea4} alt='tea-expand1' />
//                                     </div>
//                                     <div className={expandcss.pricedetail}>
//                                         <div>Ceylon Ginger</div>
//                                         <a>Ceylon Ginger Cinnamon chai tea</a>
//                                         <div>€4.85 / 50 g</div>
//                                     </div>
//                                 </div>
//                                 <div className={expandcss.itemalign}>
//                                     <div>
//                                         <img src={tea5} alt='tea-expand1' />
//                                     </div>
//                                     <div className={expandcss.pricedetail}>
//                                         <div>Ceylon Ginger</div>
//                                         <a>Ceylon Ginger Cinnamon chai tea</a>
//                                         <div>€4.85 / 50 g</div>
//                                     </div>
//                                 </div>
//                                 <div className={expandcss.itemalign}>
//                                     <div>
//                                         <img src={tea6} alt='tea-expand1' />
//                                     </div>
//                                     <div className={expandcss.pricedetail}>
//                                         <div>Ceylon Ginger</div>
//                                         <a>Ceylon Ginger Cinnamon chai tea</a>
//                                         <div>€4.85 / 50 g</div>
//                                     </div>
//                                 </div>
//                                 <div className={expandcss.itemalign}>
//                                     <div>
//                                         <img src={tea7} alt='tea-expand1' />
//                                     </div>
//                                     <div className={expandcss.pricedetail}>
//                                         <div>Ceylon Ginger</div>
//                                         <a>Ceylon Ginger Cinnamon chai tea</a>
//                                         <div>€4.85 / 50 g</div>
//                                     </div>
//                                 </div>
//                                 <div className={expandcss.itemalign}>
//                                     <div>
//                                         <img src={tea8} alt='tea-expand1' />
//                                     </div>
//                                     <div className={expandcss.pricedetail}>
//                                         <div>Ceylon Ginger</div>
//                                         <a>Ceylon Ginger Cinnamon chai tea</a>
//                                         <div>€4.85 / 50 g</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <Footer />
//             </section>
//         </>
//     )
// }





















































export function ExpandCollection() {
  const navigate = useNavigate()

  const [sortValue, setSortValue] = useState('default')
  const [filters, setFilters] = useState({ organicOnly: false })
  const [expandedFilters, setExpandedFilters] = useState({}) // For accordion

  // const products = [
  //   { id: 1, title: 'Ceylon Ginger', subtitle: 'Ceylon Ginger Cinnamon chai tea', price: '€4.85 / 50 g', img: expand1 },
  //   { id: 2, title: 'Ceylon Ginger', subtitle: 'Ceylon Ginger Cinnamon chai tea', price: '€4.85 / 50 g', img: tea1 },
  //   { id: 3, title: 'Ceylon Ginger', subtitle: 'Ceylon Ginger Cinnamon chai tea', price: '€4.85 / 50 g', img: tea2 },
  //   { id: 4, title: 'Ceylon Ginger', subtitle: 'Ceylon Ginger Cinnamon chai tea', price: '€4.85 / 50 g', img: tea3 },
  //   { id: 5, title: 'Ceylon Ginger', subtitle: 'Ceylon Ginger Cinnamon chai tea', price: '€4.85 / 50 g', img: tea4 },
  //   { id: 6, title: 'Ceylon Ginger', subtitle: 'Ceylon Ginger Cinnamon chai tea', price: '€4.85 / 50 g', img: tea5 },
  //   { id: 7, title: 'Ceylon Ginger', subtitle: 'Ceylon Ginger Cinnamon chai tea', price: '€4.85 / 50 g', img: tea6 },
  //   { id: 8, title: 'Ceylon Ginger', subtitle: 'Ceylon Ginger Cinnamon chai tea', price: '€4.85 / 50 g', img: tea7 },
  //   { id: 9, title: 'Ceylon Ginger', subtitle: 'Ceylon Ginger Cinnamon chai tea', price: '€4.85 / 50 g', img: tea8 },
  // ]

  const handleProductClick = (product) => {
    navigate('/product', { state: { product } })
  }

  const handleKeyOnCard = (e, product) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleProductClick(product)
    }
  }

  const handleOrganicToggle = () => {
    setFilters(prev => ({ ...prev, organicOnly: !prev.organicOnly }))
  }

  const toggleFilter = (filterName) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }))
  }

  return (
    <section className={expandcss.sectionRoot}>
      <div className={expandcss.bannerWrap}>
        <img className={expandcss.img} src={expandcollection} alt="tea-view" />
      </div>

      <div className={expandcss.align}>
        <div className={expandcss.navigate}>HOME / COLLECTIONS / CHAI</div>

        <div className={expandcss.mainexpand}>
          {/* Sidebar Filters */}
          <aside className={expandcss.sidebar}>
            <ul className={expandcss.filterList}>

              {/* COLLECTIONS */}
              <li className={expandcss.filterItem}>
                <div
                  className={expandcss.filterHeader}
                  onClick={() => toggleFilter("COLLECTIONS")}
                >
                  <span className={expandcss.filterText}>COLLECTIONS</span>
                  <span className={expandcss.toggleSymbol}>{expandedFilters["COLLECTIONS"] ? "−" : "+"}</span>
                </div>
                {expandedFilters["COLLECTIONS"] && (
                  <div className={expandcss.options}>
                    <label><input type="checkbox" /> Black teas</label>
                    <label><input type="checkbox" /> Green teas</label>
                    <label><input type="checkbox" /> White teas</label>
                    <label><input type="checkbox" /> Chai</label>
                    <label><input type="checkbox" /> Matcha</label>
                    <label><input type="checkbox" /> Herbal teas</label>
                    <label><input type="checkbox" /> Oolong</label>
                    <label><input type="checkbox" /> Rooibos</label>
                    <label><input type="checkbox" /> Teaware</label>
                  </div>
                )}
              </li>

              {/* ORIGIN */}
              <li className={expandcss.filterItem}>
                <div
                  className={expandcss.filterHeader}
                  onClick={() => toggleFilter("ORIGIN")}
                >
                  <span className={expandcss.filterText}>ORIGIN</span>
                  <span className={expandcss.toggleSymbol}>{expandedFilters["ORIGIN"] ? "−" : "+"}</span>
                </div>
                {expandedFilters["ORIGIN"] && (
                  <div className={expandcss.options}>
                    <label><input type="checkbox" /> India</label>
                    <label><input type="checkbox" /> Japan</label>
                    <label><input type="checkbox" /> Iran</label>
                    <label><input type="checkbox" /> South Africa</label>
                  </div>
                )}
              </li>

              {/* FLAVOUR */}
              <li className={expandcss.filterItem}>
                <div
                  className={expandcss.filterHeader}
                  onClick={() => toggleFilter("FLAVOUR")}
                >
                  <span className={expandcss.filterText}>FLAVOUR</span>
                  <span className={expandcss.toggleSymbol}>{expandedFilters["FLAVOUR"] ? "−" : "+"}</span>
                </div>
                {expandedFilters["FLAVOUR"] && (
                  <div className={expandcss.options}>
                    <label><input type="checkbox" /> Spicy</label>
                    <label><input type="checkbox" /> Sweet</label>
                    <label><input type="checkbox" /> Citrus</label>
                    <label><input type="checkbox" /> Smooth</label>
                    <label><input type="checkbox" /> Fruity</label>
                    <label><input type="checkbox" /> Floral</label>
                    <label><input type="checkbox" /> Grassy</label>
                    <label><input type="checkbox" /> Minty</label>
                    <label><input type="checkbox" /> Bitter</label>
                    <label><input type="checkbox" /> Creamy</label>
                  </div>
                )}
              </li>

              {/* QUALITIES */}
              <li className={expandcss.filterItem}>
                <div
                  className={expandcss.filterHeader}
                  onClick={() => toggleFilter("QUALITIES")}
                >
                  <span className={expandcss.filterText}>QUALITIES</span>
                  <span className={expandcss.toggleSymbol}>{expandedFilters["QUALITIES"] ? "−" : "+"}</span>
                </div>
                {expandedFilters["QUALITIES"] && (
                  <div className={expandcss.options}>
                    <label><input type="checkbox" /> Detox</label>
                    <label><input type="checkbox" /> Energy</label>
                    <label><input type="checkbox" /> Relax</label>
                    <label><input type="checkbox" /> Digestion</label>
                  </div>
                )}
              </li>

              {/* CAFFEINE */}
              <li className={expandcss.filterItem}>
                <div
                  className={expandcss.filterHeader}
                  onClick={() => toggleFilter("CAFFEINE")}
                >
                  <span className={expandcss.filterText}>CAFFEINE</span>
                  <span className={expandcss.toggleSymbol}>{expandedFilters["CAFFEINE"] ? "−" : "+"}</span>
                </div>
                {expandedFilters["CAFFEINE"] && (
                  <div className={expandcss.options}>
                    <label><input type="checkbox" /> No Caffeine</label>
                    <label><input type="checkbox" /> Low Caffeine</label>
                    <label><input type="checkbox" /> Medium Caffeine</label>
                    <label><input type="checkbox" /> High Caffeine</label>
                  </div>
                )}
              </li>

              {/* ALLERGENS */}
              <li className={expandcss.filterItem}>
                <div
                  className={expandcss.filterHeader}
                  onClick={() => toggleFilter("ALLERGENS")}
                >
                  <span className={expandcss.filterText}>ALLERGENS</span>
                  <span className={expandcss.toggleSymbol}>{expandedFilters["ALLERGENS"] ? "−" : "+"}</span>
                </div>
                {expandedFilters["ALLERGENS"] && (
                  <div className={expandcss.options}>
                    <label><input type="checkbox" /> Lactose-free</label>
                    <label><input type="checkbox" /> Gluten-free</label>
                    <label><input type="checkbox" /> Nuts-free</label>
                    <label><input type="checkbox" /> Soy-free</label>
                  </div>
                )}
              </li>

              {/* ORGANIC */}
              <li className={expandcss.filterItem}>
                <div className={expandcss.organicBlock}>
                  <span className={expandcss.filterText}>ORGANIC</span>
                  <label className={expandcss.switch}>
                    <input
                      type="checkbox"
                      checked={filters.organicOnly}
                      onChange={handleOrganicToggle}
                    />
                    <span className={expandcss.slider} />
                  </label>
                </div>
              </li>

            </ul>
          </aside>

          {/* Products Grid */}
          <div className={expandcss.teacollection}>
            <div className={expandcss.topBar}>
              <div className={expandcss.sortby}>
                <select value={sortValue} onChange={(e) => setSortValue(e.target.value)}>
                  <option value="default">SORT BY</option>
                  <option value="price-asc">Price: Low → High</option>
                  <option value="price-desc">Price: High → Low</option>
                </select>
              </div>
            </div>

            <div className={expandcss.pos}>
              {products.map((product) => (
                <div
                  key={product.id}
                  className={expandcss.itemalign}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleProductClick(product)}
                  onKeyDown={(e) => handleKeyOnCard(e, product)}
                  aria-label={`${product.title} - ${product.subtitle}`}
                >
                  <div className={expandcss.imgWrap}>
                    {/* <img src={product.img} alt={product.title} className={expandcss.productImg} /> */}
                    <img src={product.image} alt={product.title} className={expandcss.productImg} />

                  </div>
                  <div className={expandcss.pricedetail}>
                    <div className={expandcss.title}>{product.title}</div>
                    <div className={expandcss.subtitle}>{product.subtitle}</div>
                    <div className={expandcss.price}>{product.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  )
}

