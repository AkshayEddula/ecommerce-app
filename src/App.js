import { Nav } from "./nav";
import { Collections } from "./pages/collections";
import { Women } from "./pages/women";
import { Men } from "./pages/men";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Main from "./components/main";
import { useState } from "react";
import { OnCart } from "./components/Oncart";
import { Modal } from "./components/Modal";


export const App = () => {
    const [addCart, setAddCart] = useState(false);

    const addToCartHandler = () => {
            if (initial > 0) {
                setAddCart(true);
                setList([...list,{item:<OnCart delHandler={delHandler} key={id} initial={initial} />}])
                setinitial(0);
            }
            else {
                setAddCart(false)
            }
    }

    

    const [initial, setinitial] = useState(0);

    const decreaseHandler = () => {
        if (initial <= 0) {
            setinitial(0)
        }
        else {
            setinitial(initial-1)
        }
    }

    const increaseHandler = () => {
        setinitial(initial+1)
    }

    
    const id = Math.floor(Math.random() * 10000) + 1;

    const [list, setList] = useState([])

    const delHandler = () => {
        setList([...list,list.filter((listitem) => {
            return listitem.id !== id
        })])
    }

    const [show, setShow] = useState(false);

    const showBig = () => {
        setShow(true)
    }
    const showSmall = () => {
        setShow(false)
    }

    return (
        <Router>
            <Nav list={list} initial={initial} addCart={addCart}></Nav>
            <Main showBig={showBig} initial={initial} increaseHandler={increaseHandler} decreaseHandler={decreaseHandler} onCartHandler={addToCartHandler} />
            {show && <Modal showSmall={showSmall} />}
            <Routes >
                <Route path="/collections" element={<Collections />} />
                <Route path="/women" element={<Women />} />
                <Route path="/men" element={<Men />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    )
}

