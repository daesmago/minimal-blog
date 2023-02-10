import {Link, useNavigate} from "react-router-dom";
import useUser from "./hooks/useUser";
import {useRef} from "react";
import {getAuth, signOut} from "firebase/auth";

const NavBar = () => {
    const {user} = useUser();
    const navigate = useNavigate();

    return (<nav>
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/about">Acerca de</Link>
            </li>
            <li>
                <Link to="/articles">Articulos</Link>
            </li>
        </ul>
        <div className="nav-right">
            {user
                ? <button onClick={() => {
                signOut(getAuth());}}>Salir</button>
                : <button onClick={() => {
                navigate('/login');}}>Ingresar</button>
            }
        </div>
    </nav>)
}

export default NavBar;