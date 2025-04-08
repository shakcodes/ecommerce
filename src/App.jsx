import { BrowserRouter as Router, Routes, Route, data } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home'
import { useState } from "react";
import Cart from './components/Cart'
import Product from "./components/Product";
import About from "./components/About";
function App() {
  const [show,setShow]=useState(true);
  const [cart,setCart]=useState([]);
  const [warning,setWarning]=useState(false)

  const handleClick=(item)=>{
    console.log(item);
    let isPresent=false;
    cart.forEach((products)=>{
      if(item.id===products.id)
        isPresent=true;
    })
    if(isPresent)
    {
      setWarning(true)
    setTimeout(()=>{
      setWarning(false);
    },2000);
      return;
    }
    setCart([...cart,item])
  }
  const handleChange=(item,d)=>{
    let ind =-1;
    cart.forEach((data, index)=>{
      if(data.id === item.id){
        ind=index;
      }
    });

    const tempArr = cart;
    tempArr[ind].amount +=d;

    if(tempArr[ind].amount === 0)
      tempArr[ind].amount = 1;
    setCart([...tempArr])
  }
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home handleClick={handleClick}/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>} />
        <Route path="/product" element={<Product handleClick={handleClick} />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
