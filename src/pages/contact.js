import { useNavigate } from "react-router-dom";

export const Contact = () => {
    let navigate = useNavigate();
    return (
        <div>
            <h1>Contact</h1>
            <button onClick={() => navigate("/about")}>Change to about</button>
        </div>
    )
}