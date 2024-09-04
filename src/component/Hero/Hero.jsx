
import AnchorLink from "react-anchor-link-smooth-scroll"
import "./Hero.css"
import profilePassport from "../../assets/profilePassport.jpg"

const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={profilePassport}alt="" />
      <h1><span>I`m Oluwatobi Lukman Bello,</span> frontend developer based in Lagos Nigeria.</h1>
      <p>He is a frontend developer from Lagos State, Nigeria with 1 year and six month of exprience in company like Firstide Nig. Ltd</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
        <div className="hero-resume">Download my resume</div>
      </div>
    </div>
  )
}

export default Hero
