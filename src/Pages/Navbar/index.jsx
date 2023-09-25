import logo from "../../Assets/iim-logo-removebg-preview.png"
import { memo } from "react";
import "./style.css"
const NavbarComponent = () => {
    return <>
        <div className="nav-container">
            <div className="logo-container">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="menu-container">
            </div>
        </div>
    </>
}

export default memo(NavbarComponent);