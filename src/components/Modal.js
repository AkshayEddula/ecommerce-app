import React from 'react';
import bigimg from '../images/image-product-1.jpg';
import bigimg2 from '../images/image-product-2.jpg';
import bigimg3 from '../images/image-product-3.jpg';
import bigimg4 from '../images/image-product-4.jpg';
import closeIcon from '../images/icon-close.svg';
import next from '../images/icon-next.svg';
import thumb1 from '../images/image-product-1-thumbnail.jpg';
import thumb2 from '../images/image-product-2-thumbnail.jpg';
import thumb3 from '../images/image-product-3-thumbnail.jpg';
import thumb4 from '../images/image-product-4-thumbnail.jpg';
import '../css/modal.css'

export const Modal = ({showSmall}) => {
  return (
    <div className='main-modal'>
          <div className='Modal-con'>
              <img onClick={showSmall} className='closeIcon' src={closeIcon} alt="" />
              <div className="Modal-sm-con">
                <div className='bg'>
                    <img className='leftnext'  src={next} alt="" />
                </div>
                <div>
                    <img className='th' src={bigimg} alt="product-main" />
                </div>
                <div className='bg bg-e'>
                    <img src={next} alt="" />
                </div>
            </div>
            <div className="modal-thumbnails">
                <img className='modal-thub1' src={thumb1} alt="product-thubnail-1" />
                <img src={thumb2} alt="product-thubnail-2" />
                <img src={thumb3} alt="product-thubnail-3" />
                <img src={thumb4} alt="product-thubnail-4" />
            </div>
        </div>
    </div>
  )
}
