import { Outlet, Link } from "react-router-dom";

const Menu = () => {
    return(
        <>
        <nav>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/game">Game</Link>
            </li>
            <li>
                <Link to="/todo">Todo</Link>
            </li>
            <li>
                <Link to="/trivia">Trivia</Link>
            </li>
        </nav>

        <Outlet />
        
        </>
    )
};

export default Menu;