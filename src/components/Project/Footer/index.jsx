import {Link, NavLink} from "react-router-dom";

// import styles from "./pages.module.css"
// import logo from "../../../assets/image/logo.png";
// import "./styles.css";

const Footer = () => {
    const classnames = ({isActive}) => isActive ? "nav_item active" : "nav_item";

    return (
        <header className="header">

            <div className="logo_wrapper">
                <Link to="/">
                    {/*<img src={logo} className={`${styles.logo}`} alt={logo}/>*/}
                    {/*<img src={log} className={`${styles.logo}`} alt={logo}/>*/}
                </Link>
            </div>
            <div className="nav">
                <ul className="nav_list">
                    <NavLink className={classnames} to="/">Home</NavLink>
                </ul>
            </div>
        </header>
    );
}

export default Footer;