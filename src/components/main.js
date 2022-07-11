import React from 'react'
import Imgs from './imgs';
import Summ from './summ';
import '../css/main.css'

function Main( {showBig,onCartHandler,initial,increaseHandler,decreaseHandler}) {
  
  return (
    <div className='container'>
      <Imgs showBig={showBig}/>
      <Summ  initial={initial} increaseHandler={increaseHandler} decreaseHandler={decreaseHandler} onCartHandler={onCartHandler} />
    </div>
  )
}

export default Main;