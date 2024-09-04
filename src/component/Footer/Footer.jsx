
import "./Footer.css"
import user_icon from "../../assets/icon/user_icon.svg"


const Footer = () => {
  return (
    // Below code is used to create the footer div element
    <div className="footer" id="footer">
      {/* STart of Footer top */}
      <div className="footer-top">
        <div className="top-left">
          <h1>Bello Oluwatobi</h1>
          <p>Is a frontend developer from Lagos State, Nigeria with 1 year and six month of exprience in company like Firstide Nig. Ltd.</p>
        </div>
        <div className="top-right">
          <div className="footer-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <button className="subsrcibe">subscribe</button>
        </div>
      </div>
      <hr />
      {/* End of Footer top */}
      <div className="footer-bottom">
        <p className="bottom-left">&copy; 2024 Bello Oluwatobi Lukman. All right reserved</p>
        <div className="bottom-right">
          <p>Term of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
    // Above code is used to create the footer div element
  )
}

export default Footer
