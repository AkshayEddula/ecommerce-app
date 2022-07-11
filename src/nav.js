import { Link } from "react-router-dom";
import './css/nav.css';
import cart from "./images/icon-cart.svg";
import avatar from "./images/image-avatar.png"
import logo from "./images/logo.svg";
import { useState } from "react";
import { OffCart } from "./components/offcart";

export const Nav = ({addCart,initial,list}) => {
    const [ishover, setHover] = useState(false);
    const [isopen, setOpen] = useState(false);

    const showPop = () => (
        setHover(true)
    )

    const removePop = () => (
        setHover(false)
    )
    
    return (
        <nav>
            <div className="nav-links">
                <img src={logo} alt="logo" />
                <ul>
                    <Link className="aft" to="/">Collections </Link>
                    <Link to="/men">Men </Link>
                    <Link to="/women">Women</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </ul>
            </div>
            <div className="profile">
                <img onClick={() => setOpen(!isopen)} onMouseOver={showPop} onMouseOut={removePop} src={cart} alt="cart-icon" />
                <img className="avatar" src={avatar} alt="profile" />
            </div>
            {ishover && <Popup list={list}   addCart={addCart} />}
            {isopen && <Popup  list={list} addCart={addCart}/>}
        </nav>
    )
}


const Popup = ({addCart,list}) => {
    return (
        <div className="pop-cart">
            {addCart ? list.map((listitem) => listitem.item) : <OffCart list={list} />}
        </div>
    )
}

