import { useState } from "react"

export const OffCart = ({ list }) => {
    const [listL, setListL] = useState(true);
    

    return (
        <div style={{ textalign: "center" }}>
            {listL && <h1>Your Cart is Empty</h1>}
        </div>
    )
}