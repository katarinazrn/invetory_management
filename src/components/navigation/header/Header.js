import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <header>
            <Link id='logo' to='dashboard'>Inventory</Link>
            <nav>
                <ul>
                    <li>
                        <NavLink to='account'>
                            <span className="material-icons">account_circle</span>
                        </NavLink>
                    </li>
                    <li>
                        <Link to='logout'>
                            <span className="material-icons">logout</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;