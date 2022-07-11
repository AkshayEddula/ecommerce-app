import thumnMain from '../images/image-product-1-thumbnail.jpg';
import delet from "../images/icon-delete.svg"

export const OnCart = ({initial,delHandler}) => {
    return (
        <div style={{marginBottom:"20px"}}>
                <div className="pop">
                    <img src={thumnMain} alt="thumbnail" />
                    <p>Fall Limited Edition Sneakers<br></br>$125.00 <span className="x">X</span>{initial}<span className="total">${125*initial}.00</span></p>
                    <img className="del" onClick={delHandler} src={delet} alt="delete-icon" />
                </div>
                <div className="checkout">
                    <button>Checkout</button>
                </div>
        </div>
    )
}
