import React from 'react'
import Home from "./component/Home";
import Header from "./component/Header";
import Cart from "./component/Cart";
import {BrowserRouter , Route, Routes} from "react-router-dom";

function App() {
  return (
    <> 
     <Header/>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={ <Home/>}> </Route>
      <Route path="/Cart" element={<Cart/>}> </Route>
     </Routes>
     </BrowserRouter>
     
    </>
  
  )
}

export default App