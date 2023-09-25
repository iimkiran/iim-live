import { memo } from "react"
import FooterComponent from "../Footer"
import HeaderComponent from "../Header"
import NavbarComponent from "../Navbar"


const HomePage = () => {
    return <>
        <NavbarComponent />
        <HeaderComponent />
        <FooterComponent />
    </>
}

export default memo(HomePage);