import {Link, NavLink} from "react-router-dom";

import styles from "./pages.module.css"
import logo from "../../../assets/image/logo.png";
import "./styles.css";

const Header = () => {
    const classnames = ({isActive}) => isActive ? "nav_item active" : "nav_item";
    return (
        <header className="header">

            <div className="logo_wrapper">
                <Link to="/">
                    <img src={logo} className={`${styles.logo}`} alt={logo}/>
                </Link>
            </div>
            <div className="nav">
                <ul className="nav_list">

                    <NavLink className={classnames} to="/">Home</NavLink>
                    <NavLink className={classnames} to="/about-me">About</NavLink>
                    <NavLink className={classnames} to="/project">Project</NavLink>
                    <NavLink className={classnames} to="/form">Form</NavLink>
                </ul>
            </div>
        </header>
    );
}

export default Header;