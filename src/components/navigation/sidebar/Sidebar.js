import { NavLink } from "react-router-dom";
import './Sidebar.css';

const Sidebar = () => {

    const getClassName = (state) => {
        return state.isActive ? 'active' : undefined
    }

    return (
        <div id='sidebar'>
            <NavLink to='dashboard' className={getClassName}>
                <span className="material-icons">dashboard</span>
                <span>Dashboard</span>
            </NavLink>

            <NavLink to='categories' className={getClassName}>
                <span className="material-icons">category</span>
                <span>Categories</span>
            </NavLink>

            <NavLink to='products' className={getClassName}>
                <span className="material-icons">inventory_2</span>
                <span>Products</span>
            </NavLink>
        </div>

    )
}

export default Sidebar;