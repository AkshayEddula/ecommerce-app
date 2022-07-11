import cart from "../images/icon-cart.svg";
import '../css/summ.css'


function Summ({onCartHandler,initial,increaseHandler,decreaseHandler}) {


  return (
      <div className='summary'>
          <div className='bg-1'>
              <h3>SNEAKER COMPANY</h3>
              <h1>Fall limited Edition<br></br> Sneakers</h1>
              <p>These low-profile sneakers are your perfect casual
                  wear companion.Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
              </p>
          </div>
          <div className="bg-2">
              <div className="bg-2-1">
                  <h1>$125.00</h1>
                  <p>50%</p>
              </div>
              <div className="bg-2-2">
                  <p>$250.00</p>
              </div>
          </div>
          <div className="bg-3">
              <div className='bg-3-1'>
                  <p className='operators' onClick={decreaseHandler}>-</p>
                  <p>{initial}</p>
                  <p onClick={increaseHandler} className='operators'>+</p>
              </div>
              <div onClick={onCartHandler} className="bg-3-2">
                  <img src={cart} alt="cart-icon" />
                  <h3>Add to Cart</h3>  
              </div>
          </div>
    </div>
  )
}

export default Summ;