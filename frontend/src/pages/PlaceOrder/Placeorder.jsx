import React, { useContext } from 'react'
import './Order.css'
import { StoreContext } from '../../context/StoreContext'

export const Placeorder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)
  return (
    <form className='placeorder'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='first name' />
          <input type="text" placeholder='last name' />
        </div>

        <input type="text" placeholder='Email' />
        <div className="multi-fields">

          <input type="text" placeholder='phone no.' />
          <input type="text" placeholder='City' />

        </div>

        <input type="text" placeholder='Street' />


        <div className="multi-fields">
          <input type="text" placeholder='State' />
          <input type="text" placeholder='zip-code' />
        </div>

      </div>


      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>₹ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>₹ {getTotalCartAmount() > 0 ? "2" : "0"}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹ {getTotalCartAmount() > 0 ? getTotalCartAmount() + 2 : 0}</b>
            </div>
          </div>
          <button >Payment</button>

        </div>
      </div>
    </form>
  )
}
