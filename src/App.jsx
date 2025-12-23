// import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { NavigationPage } from './Components/Navigation/NavigationPage';
// import { Landing } from './Components/Landing/Landing';
// import { TeaCollection } from './Components/Landing/TeaCollection';
// import { ExpandCollection } from './Components/ExpandCollection/ExpandCollection';
// import { Header } from './Components/Header/Header';
// // import { PopupProduct } from './Components/PopupScreens/PopupProduct';
// import { Product } from './Components/ProductDetails/Product';
// import { Mybag } from './Components/Mybag/Mybag';
// import DeliviryDeatil from './Components/DeliveryDetail/DeliviryDeatil';
// import ReviewandPayment from './Components/ReviewAndPayment/ReviewandPayment';
// import PaymentSuccesful from './Components/PaymentSuccesful/PaymentSuccesful';


// function App() {
//   // const [openPopUp, setOpenPopUp] = useState(false); // ✅ popup state

//   return (
//     <>
//       <Router>
//         {/* HEADER */}
//         <Header setOpenPopUp={setOpenPopUp} />

//         {/* RENDER ONLY WHEN CLICKED */}
//         {openPopUp && (
//           <PopupProduct
//             OpenPopUp={openPopUp}
//             setOpenPopUp={setOpenPopUp}
//           />
//         )}



//         {/* ROUTES */}
//         <Routes>
//           <Route path="/" element={<Landing />} />
//           <Route path="/teacollection" element={<ExpandCollection />} />
//           <Route path="/product" element={<Product />} />
//           <Route path="/mybag" element={<Mybag />} />
//           <Route path="/deliverydetail" element={<DeliviryDeatil />} />
//           <Route path="/review_payment" element={<ReviewandPayment />} />
//           <Route path="/payment_succesful" element={<PaymentSuccesful />} />
//         </Routes>
//       </Router>
//     </>
//   )
// }

// export default App






















import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NavigationPage } from './Components/Navigation/NavigationPage';
import { Landing } from './Components/Landing/Landing';
import { TeaCollection } from './Components/Landing/TeaCollection';
import { ExpandCollection } from './Components/ExpandCollection/ExpandCollection';
import { Header } from './Components/Header/Header';
import { Product } from './Components/ProductDetails/Product';
import { Mybag } from './Components/Mybag/Mybag';
import { MybagItem } from "./Components/MybagItem/Mybagitem"; 
import DeliviryDeatil from './Components/DeliveryDetail/DeliviryDeatil';
import ReviewandPayment from './Components/ReviewAndPayment/ReviewandPayment';
import PaymentSuccesful from './Components/PaymentSuccesful/PaymentSuccesful';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/teacollection" element={<ExpandCollection />} />
          <Route path="/product" element={<Product />} />     
          <Route path="/mybag" element={<Mybag />} />
          <Route path="/mybag-items" element={<MybagItem />} />
          <Route path="/deliverydetail" element={<DeliviryDeatil />} />
          <Route path="/review_payment" element={<ReviewandPayment />} />
          <Route path="/payment_succesful" element={<PaymentSuccesful />} />
        </Routes>
      </Router>
    </>
  )
}

export default App 