import React from 'react';
import './Cart.css';

function Cart({myCart}) {
  return (
    <div id='cart1'>
      <div id='cart2'>
        <h1> This Is My Cart </h1>
      </div>

      <div id='cart3'>
        {myCart.length === 0 ? (   <div> Your Cart Is Empty Now </div> ) :
          ( <div> {myCart.map((items, index) => (
                <div key={index}>  
                <h2> Product: {items.name} </h2>
                <img src={items.source} alt={''} id='cart_img' />
                </div>
            ))}
          </div>
        )}
        <div id='cart4'>
          <img src='data:image/png;base64,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' alt=''/>
        </div>
      </div>
    </div>
  );
}

export default Cart;

