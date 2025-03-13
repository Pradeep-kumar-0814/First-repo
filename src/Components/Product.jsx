import React from 'react'
import './Product.css'
import {Button} from '@mui/material'
function Product({props, changeFunction}) {
  return (
    <div>
         <div id='Products_Main'>
             <div id='Product_Des'>
                <h1>{props.name}</h1>
             </div>
             <div id='Product_Image'>
                <img src={props.source} alt=''/>
             </div>
             <div id='Product_Select'> 
             {/* <button onClick={()=>changeFunction(props)}> Add To Cart</button> */}
             <Button variant='contained' onClick={()=>changeFunction(props)} > Add To Cart </Button>
             </div>

         </div>
    </div>
  )
}

export default Product
