import { Outlet, Link } from "react-router-dom";
import '../index.css'

const Menu = () => {
    return(
        <>
       
        <nav>
        <h1>Benjamin Reacts</h1>
            <li>
                <Link className="link" to="/">🏠</Link>
            </li>
            <li>
                <Link className="link" to="/qr">QR Code Generator</Link>
            </li>
            <li>
                <Link className="link" to="/game">Game</Link>
            </li>
            <li>
                <Link  className="link" to="/todo">Todo</Link>
            </li>
            <li>
                <Link className="link" to="/trivia">Trivia</Link>
            </li>
        </nav>

        <Outlet />
        
        </>
    )
};

export default Menu;