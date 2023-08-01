import React from 'react'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
function TotalPrice() {
  const navigate=useNavigate();
  const {cart} = useSelector((state)=>state.cart)
  return (
    <>
    <div className='totalprice'>
      <p>TOTAL PRICE : &#8377; {cart.reduce((a,b)=>a+Number(b.price),0)}</p>
      <button onClick={()=>navigate('/confirmorder')}>Place Order</button>
    </div>
    </>
  )
}

export default TotalPrice