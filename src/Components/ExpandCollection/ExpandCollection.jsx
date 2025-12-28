import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import expandcollection from '../../assets/Images/expandcollection.png'
import { Footer } from '../Footer/Footer'
import expandcss from '../../assets/Styles/Expandcollection.module.css'
import products from '../../data/products'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../FireBaseConnection/FireBase'

// context api 

import { useSelectedTea } from '../../ContextAPI/TeaContext'

export function ExpandCollection() {
  const navigate = useNavigate()
  const { setSelectedTea } = useSelectedTea();
  const mapimage = '/src/assets/Images/'
  const [sortValue, setSortValue] = useState('default')
  const [filters, setFilters] = useState({ organicOnly: false })
  const [expandedFilters, setExpandedFilters] = useState({}) // For accordion
  const [teadata, setteadata] = useState([])
  const [selectedFilters, setSelectedFilters] = useState({
    collections: [],
    origin: [],
    flavour: [],
    qualities: [],
    caffeine: [],
    allergens: [],
    organicOnly: false
  });

  const handleProductClick = (product) => {
    // setSelectedTea(product)
    setSelectedTea({
      ...product,
      quantity: 1
    });
    navigate('/product', { state: { product } })
  }
  const handleKeyOnCard = (e, product) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleProductClick(product)
    }
  }
  const toggleFilter = (filterName) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }))
  }
  const fetchTeaCollection = async () => {
    const sanpshot = await getDocs(collection(db, "teas"));
    const data = sanpshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setteadata(data)
  }
  const handleFilterChange = (key, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };
  const handleCheckboxChange = (category, value) => {
    setSelectedFilters(prev => {
      const isSelected = prev[category]?.includes(value);

      return {
        ...prev,
        [category]: isSelected
          ? prev[category].filter(item => item !== value) // remove
          : [...prev[category], value] // add
      };
    });
  };
  const filteredTeaData = teadata.filter(tea => {
    // COLLECTIONS
    if (
      selectedFilters.collections.length &&
      !selectedFilters.collections.includes(tea.collection)
    ) {
      return false;
    }

    // ORIGIN
    if (
      selectedFilters.origin.length &&
      !selectedFilters.origin.includes(tea.origin)
    ) {
      return false;
    }

    // FLAVOUR (array inside tea)
    if (
      selectedFilters.flavour.length &&
      !selectedFilters.flavour.some(f => tea.flavour.includes(f))
    ) {
      return false;
    }

    // QUALITIES
    if (
      selectedFilters.qualities.length &&
      !selectedFilters.qualities.some(q => tea.qualities.includes(q))
    ) {
      return false;
    }

    // CAFFEINE
    if (
      selectedFilters.caffeine.length &&
      !selectedFilters.caffeine.includes(tea.caffeine)
    ) {
      return false;
    }

    // ALLERGENS
    if (
      selectedFilters.allergens.length &&
      !selectedFilters.allergens.every(a => tea.allergens.includes(a))
    ) {
      return false;
    }

    // ORGANIC
    if (selectedFilters.organicOnly && tea.organic !== true) {
      return false;
    }

    return true;
  });
  const sortedTeaData = [...filteredTeaData].sort((a, b) => {
    if (sortValue === "price-asc") {
      return Number(a.price) - Number(b.price);
    }

    if (sortValue === "price-desc") {
      return Number(b.price) - Number(a.price);
    }

    return 0; // default
  });

  useEffect(() => {
    fetchTeaCollection()
  }, [])
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
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("collections", "Black teas")} /> Black teas</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("collections", "Green teas")} /> Green teas</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("collections", "White teas")} /> White teas</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("collections", "Chai")} /> Chai</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("collections", "Matcha")} /> Matcha</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("collections", "Herbal teas")} /> Herbal teas</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("collections", "Oolong")} /> Oolong</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("collections", "Rooibos")} /> Rooibos</label>
                    {/* <label><input type="checkbox" onChange={() => handleCheckboxChange("collections", "Teaware")} /> Teaware</label> */}
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
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("origin", "India")} /> India</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("origin", "Japan")} /> Japan</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("origin", "Iran")} /> Iran</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("origin", "South Africa")} /> South Africa</label>
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
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("flavour", "Spicy")} /> Spicy</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("flavour", "Sweet")} /> Sweet</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("flavour", "Citrus")} /> Citrus</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("flavour", "Smooth")} /> Smooth</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("flavour", "Fruity")} /> Fruity</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("flavour", "Floral")} /> Floral</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("flavour", "Grassy")} /> Grassy</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("flavour", "Minty")} /> Minty</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("flavour", "Bitter")} /> Bitter</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("flavour", "Creamy")} /> Creamy</label>
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
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("qualities", "Detox")} /> Detox</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("qualities", "Energy")} /> Energy</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("qualities", "Relax")} /> Relax</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("qualities", "Digestion")} /> Digestion</label>
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
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("caffeine", "No Caffeine")} /> No Caffeine</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("caffeine", "Low Caffeine")} /> Low Caffeine</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("caffeine", "Medium Caffeine")} /> Medium Caffeine</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("caffeine", "High Caffeine")} /> High Caffeine</label>
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
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("allergens", "Lactose-free")} /> Lactose-free</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("allergens", "Gluten-free")} /> Gluten-free</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("allergens", "Nuts-free")} /> Nuts-free</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange("allergens", "Soy-free")} /> Soy-free</label>
                  </div>
                )}
              </li>

              {/* ORGANIC */}
              <li className={expandcss.filterItem}>
                <div className={expandcss.organicBlock}>
                  <span className={expandcss.filterText}>{`${selectedFilters.organicOnly == false ? 'NOT ORGANIC' : 'ORGANIC'}`}</span>
                  <label className={expandcss.switch}>
                    <input
                      type="checkbox"
                      checked={selectedFilters.organicOnly}
                      onChange={(e) => handleFilterChange("organicOnly", e.target.checked)}
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

            {/* <div className={expandcss.pos}>
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
                    <img src={product.image} alt={product.title} className={expandcss.productImg} />

                  </div>
                  <div className={expandcss.pricedetail}>
                    <div className={expandcss.title}>{product.title}</div>
                    <div className={expandcss.subtitle}>{product.subtitle}</div>
                    <div className={expandcss.price}>{product.price}</div>
                  </div>
                </div>
              ))}
            </div> */}


            {sortedTeaData.length != 0 ?
              <>
                <div className={expandcss.pos}>
                  {sortedTeaData?.map((product) => (
                    <div
                      key={product.id}
                      className={expandcss.itemalign}
                      role="button"
                      tabIndex={0}
                      onClick={() => handleProductClick(product)}
                      onKeyDown={(e) => handleKeyOnCard(e, product)}
                      aria-label={`${product.name} - ${product.description}`}
                    >
                      <div className={expandcss.imgWrap}>
                        {/* <img src={product.img} alt={product.title} className={expandcss.productImg} /> */}
                        <img src={`${mapimage}${product.image}`} alt={product.name} className={expandcss.productImg} />
                      </div>
                      <div className={expandcss.pricedetail}>
                        <div className={expandcss.title}>{product.name}</div>
                        <div className={expandcss.subtitle}>{product.description}</div>
                        <div className={expandcss.price}>{product.price} Rs  ({product.collection})</div>
                      </div>
                    </div>
                  ))}
                </div>
              </> :
              <>
                <h5 style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>Data Not Available</h5>
              </>
            }

          </div>
        </div>
      </div >

      <Footer />
    </section >
  )
}

