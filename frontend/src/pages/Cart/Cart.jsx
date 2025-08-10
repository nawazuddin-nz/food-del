import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext';
import {useNavigate} from 'react-router-dom'
const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cartitems">
        <div className="cartitems-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cartitems-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹ {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹ {item.price * cartItems[item._id]}</p>
                  <p className='close' onClick={()=> removeFromCart(item._id)}>X</p>
                </div>
                <hr />
              </div>

            )
          }
        })}
      </div>



      <div className="cart-bottom">
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
              <p>₹ {getTotalCartAmount()>0?"2":"0"}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹ {getTotalCartAmount()>0?getTotalCartAmount()+2:0}</b>
            </div>
          </div>
           <button onClick={()=>navigate('/Order')}>CheckOut</button>

        </div>

        <div className="cart-promo-code">
          <div>
            <p>If u have any promo code, enter:</p>
            <div className="promo-code-input">
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart