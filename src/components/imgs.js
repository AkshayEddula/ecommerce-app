
import bigimg from '../images/image-product-1.jpg';
import thumb1 from '../images/image-product-1-thumbnail.jpg';
import thumb2 from '../images/image-product-2-thumbnail.jpg';
import thumb3 from '../images/image-product-3-thumbnail.jpg';
import thumb4 from '../images/image-product-4-thumbnail.jpg';
import '../css/imgs.css'

function Imgs({showBig}) {


  return (
      <div className='bg-con'>
          <div className="bg-sm-con">
              <img src={bigimg} alt="product-main" />
          </div>
          <div className="thumbnails">
              <img onClick={showBig}  className='thub1' src={thumb1} alt="product-thubnail-1" />
              <img onClick={showBig}  src={thumb2} alt="product-thubnail-2" />
              <img onClick={showBig}  src={thumb3} alt="product-thubnail-3" />
              <img onClick={showBig}  src={thumb4} alt="product-thubnail-4" />
          </div>
    </div>
  )
}

export default Imgs;