import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './Components/Header/Header';
import { Landing } from './Components/Landing/Landing';
import { ExpandCollection } from './Components/ExpandCollection/ExpandCollection';
import { Product } from './Components/ProductDetails/Product';
import { Mybag } from './Components/Mybag/Mybag';
import { MybagItem } from "./Components/MybagItem/Mybagitem";
import DeliviryDeatil from './Components/DeliveryDetail/DeliviryDeatil';
import ReviewandPayment from './Components/ReviewAndPayment/ReviewandPayment';
import PaymentSuccesful from './Components/PaymentSuccesful/PaymentSuccesful';
import { PopupProduct } from './Components/PopupScreens/PopupProduct';

import { getAuth } from 'firebase/auth';
import app from './FireBaseConnection/FireBase';
function App() {
  const [openPopUp, setOpenPopUp] = useState(false)
  const auth = getAuth(app)
  console.log("auth",auth);
  
  return (
    <Router>
      <Header setOpenPopUp={setOpenPopUp} />

      {/* ✅ GLOBAL POPUP */}
      {openPopUp && (
        <PopupProduct
          OpenPopUp={openPopUp}
          setOpenPopUp={setOpenPopUp}
        />
      )}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/teacollection" element={<ExpandCollection />} />
        <Route
          path="/product"
          element={<Product setOpenPopUp={setOpenPopUp} />}
        />
        <Route path="/mybag" element={<Mybag />} />
        <Route path="/mybag-items" element={<MybagItem />} />
        <Route path="/deliverydetail" element={<DeliviryDeatil />} />
        <Route path="/review_payment" element={<ReviewandPayment />} />
        <Route path="/payment_succesful" element={<PaymentSuccesful />} />
      </Routes>
    </Router>
  )
}

export default App
