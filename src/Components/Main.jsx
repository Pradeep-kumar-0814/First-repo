import React from 'react'
import "./Main.css"
import Navigation from './Navigation'
import Product from './Product'
// import Cart from './Cart'


function Main({setCartItems}) {
  const Product1 = {name:"Hoodie", source:"https://www.legendarywhitetails.com/on/demandware.static/-/Sites-master-us/default/dw002fb02b/images/6281_TRMC_MAIN_FRONT.jpg"}
  const Product2 = {name:"Shirt", source:"https://www.repertoirefashion.co.uk/images/eton-shirts-mens-dark-green-slim-fit-corduroy-shirt-p42178-251243_medium.jpg"}
  const Product3 = {name:"Pant", source:"https://5.imimg.com/data5/WD/MA/MY-5511146/men-s-cotton-pant-500x500.jpg"}
  const Product4 = {name:"Shoe", source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtpyd_4r9G_Uzg-JSmtQnFn20Bc7e1z_HzsQ&s"}
  const Product5 = {name:"Watch", source:"data:image/jpeg;base64,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"}
  const addToCart = (value) => {
    setCartItems((prevItems) => [...prevItems, value]);
  };
  
    
  return (
    <div>
      <div id='Main_Container'>
         <div id='products'>
          
          <Navigation/>
          <Product props={Product1} changeFunction={addToCart}/>
          <br/>
          <Product props={Product2} changeFunction={addToCart}/>
          <br/>
          <Product props={Product3} changeFunction={addToCart}/>
          <br/>
          <Product props={Product4} changeFunction={addToCart}/>
          <br/>
          <Product props={Product5} changeFunction={addToCart}/>
          <br/>
          <Product props={Product1} changeFunction={addToCart}/>
          <br/>
          <Product props={Product2} changeFunction={addToCart}/>
          <br/>
          <Product props={Product3} changeFunction={addToCart}/>
          <br/>
          <Product props={Product4} changeFunction={addToCart}/>
          <br/>
          <Product props={Product5} changeFunction={addToCart}/>
          <br/>
          <Product props={Product1} changeFunction={addToCart}/>
          <br/>
          <Product props={Product2} changeFunction={addToCart}/>
          <br/>
          <Product props={Product3} changeFunction={addToCart}/>
          <br/>
          <Product props={Product4} changeFunction={addToCart}/>
          <br/>
          <Product props={Product5} changeFunction={addToCart}/>
          
         </div>
              <div id='main_image'>
                  <img src='https://wallpaperaccess.com/full/2044593.jpg' alt=''/>
              </div>
      </div>
    </div>
  )
}

export default Main

