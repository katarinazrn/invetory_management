import Header from "../../navigation/header/Header";
import Sidebar from "../../navigation/sidebar/Sidebar";
import './Layout.css';

const Layout = (props) => {

    return (
        <div id='layout'>
            <Header />
            <div id="container">
                <Sidebar />
                <div id="main">{props.children}</div>
            </div>
        </div>
    )
}

export default Layout;