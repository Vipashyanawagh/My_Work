import React from 'react'
import Home from "./component/Home";
import Header from "./component/Header";
import Cart from "./component/Cart";
import { Route, Routes ,NavLink} from "react-router-dom";

function App() {
  return (
    <> 
     <Header/>
    
     <Routes>
      <Route path="/" element={ <Home/>}> </Route>
      <Route path="/Cart" element={<Cart/>}> </Route>
     </Routes>
     
     
    </>
  
  )
}

export default App