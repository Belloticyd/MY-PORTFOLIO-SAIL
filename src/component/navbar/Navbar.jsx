import AnchorLink from "react-anchor-link-smooth-scroll"
import { useRef, useState } from "react"
import "./Navbar.css"
// import "../../assets/icon/appLogo1.png"
import nav_underline from "../../assets/icon/nav_underline.svg"
import menu_open from "../../assets/icon/menu_open.svg"
import menu_close from "../../assets/icon/menu_close.svg"

const Navbar = () => {
    // Below code is the useState
    const [menu, setMenu] = useState("home")
    // Below code is the useRef
    const menuRef = useRef();

    // Below code is used to Open Mobile Menu
    const openMobileMenu = () => {
        menuRef.current.style.right = "0";
    }

    // Below code is used to Close Mobile Menu
    const closeMobileMenu = () => {
        menuRef.current.style.right = "-350px";
    }
    console.log(closeMobileMenu)

  return (
    <div className="navbar">
        {/* Below code is my logo */}
        <img src="{appLogo1} "alt="" />
        {/* Below code is the open nav menu sideBar */}
        <img src={menu_open} onClick={openMobileMenu}   alt="" className="navMenuOpen" />
        {/* Below code is used to create a ul element nav-menu */}
        <ul ref={menuRef}  className="nav-menu">
            {/* Below code is the open nav menu sideBar */}
            <img  src={menu_close} onClick={closeMobileMenu}  alt="" className="navMenuClose" />
            {/* Below code is used to create a li element nav-list */}
            <li className="nav-list"><AnchorLink className="anchor-link" href="#home">
                <p href="" className="nav-link" onClick={()=>setMenu("home")}>Home</p>{menu==="home"? <img src={nav_underline} alt=""/> :<></>}</AnchorLink>
            </li>
            {/* End of li element nav-list */}

            {/* Below code is used to create a li element nav-list */}
            <li className="nav-list"><AnchorLink className="anchor-link" offset={50} href="#about">
                <p href="" className="nav-link" onClick={()=>setMenu("about")}>About Me</p>{menu==="about"? <img src={nav_underline} alt=""/> :<></>}</AnchorLink>
            </li>
            {/* End of li element nav-list */}

            {/* Below code is used to create a li element nav-list */}
            <li className="nav-list"><AnchorLink className="anchor-link" offset={50} href="#service">
                <p href="" className="nav-link" onClick={()=>setMenu("service")}>Services</p>{menu==="service"? <img src={nav_underline} alt=""/> :<></>}</AnchorLink>
            </li>
            {/* End of li element nav-list */}
            
            {/* Below code is used to create a li element nav-list */}
            <li className="nav-list"><AnchorLink className="anchor-link" offset={50} href="#mywork">
                <p href="" className="nav-link" onClick={()=>setMenu("portfolio")}>Portfolio</p>{menu==="portfolio"? <img src={nav_underline} alt=""/> :<></>}</AnchorLink>
            </li>
            {/* End of li element nav-list */}

            {/* Below code is used to create a li element nav-list */}
            <li className="nav-list"><AnchorLink className="anchor-link" offset={50} href="#contact">
                <p href="" className="nav-link" onClick={()=>setMenu("contact")}>Contact</p>{menu==="contact"? <img src={nav_underline} alt=""/> :<></>}</AnchorLink>
            </li>
            {/* End of li element nav-list */}
        </ul>
        {/* Above code is the end of ul elemet nav-menu */}
        {/* Below code is the connectwith me div */}
        <div className="connectMe"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
