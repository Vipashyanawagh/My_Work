import React from 'react'
import Home from "./component/Home";
import Header from "./component/Header";
import Cart from "./component/Cart";
import { Route, Routes ,NavLink} from "react-router-dom";
import { useState ,useEffect} from "react";
import productList from "./component/data";

function App() {

  const [productId , setProductId] = useState(" ");
  const [cartAllProduct , setCartAllProduct] = useState([]);


  useEffect(() =>{
    const filteredObject = productList?.filter(
    (product) => product.id == productId
  );
  setCartAllProduct([...cartAllProduct, ...filteredObject]);
 
  } , [productId]);
  
  return (
    <> 
     <Header/>
    
     <Routes>
      <Route path="/" element={ <Home   setProductId={ setProductId }/>}> </Route>
      <Route path="/Cart" element={<Cart filteredObject={cartAllProduct}/>}> </Route>
     </Routes>
     
     
    </>
  
  )
}

export default App