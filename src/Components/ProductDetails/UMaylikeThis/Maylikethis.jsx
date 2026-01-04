import React, { useEffect, useState } from 'react'
import expandcss from '../../../assets/Styles/Expandcollection.module.css'
import expand1 from '../../../assets/Images/expand1.png'
import { useSelectedTea } from '../../../ContextAPI/TeaContext';
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../FireBaseConnection/FireBase'
import tea1 from '../../../assets/Images/tea1.png'
import tea2 from '../../../assets/Images/tea2.png'
import tea3 from '../../../assets/Images/tea3.png'
import tea4 from '../../../assets/Images/tea4.png'
import tea5 from '../../../assets/Images/tea5.png'
import tea6 from '../../../assets/Images/tea6.png'
import tea7 from '../../../assets/Images/tea7.png'
import tea8 from '../../../assets/Images/tea8.png'
export function Maylikethis() {
  const { selectedTea } = useSelectedTea();
  const [teadata, setteadata] = useState([])
  const [relatedTeas, setRelatedTeas] = useState([]);
  const imageMap = {
    "tea1.png": tea1,
    "tea2.png": tea2,
    "tea3.png": tea3,
    "tea4.png": tea4,
    "tea5.png": tea5,
    "tea6.png": tea6,
    "tea7.png": tea7,
    "tea8.png": tea8,
  };
  const fetchTeaCollection = async () => {
    const sanpshot = await getDocs(collection(db, "teas"));
    const data = sanpshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setteadata(data)
  }

  useEffect(() => {
    fetchTeaCollection()
  }, [selectedTea])

  useEffect(() => {
    if (!selectedTea || teadata.length === 0) return;

    const filtered = teadata.filter((tea) => {
      const sameOrigin = tea.origin === selectedTea.origin;

      const sameFlavour = Array.isArray(tea.flavour) &&
        tea.flavour.includes(selectedTea.flavour);

      return (
        (sameOrigin || sameFlavour)
      );
    });

    setRelatedTeas(filtered);
  }, [selectedTea, teadata]);


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
          {relatedTeas?.slice(0, 3).map((prop, index) => (
            <div className={expandcss.itemalign}>
              <div className={expandcss.imgWrap}>
                <img
                  src={imageMap[prop.image]}
                  alt="Ceylon Ginger Tea"
                  className={expandcss.productImg}
                />
              </div>

              <div className={expandcss.pricedetail}>
                <div className={expandcss.title}>{prop.name}</div>
                <a className={expandcss.subtitle}>
                  {prop.description}
                </a>
                <div className={expandcss.price}>{prop.price} Rs / 50 g</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}













