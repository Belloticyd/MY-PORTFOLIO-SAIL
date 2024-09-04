
import { useState  } from "react"
import "./Contact.css"
import theme_pattern from "../../assets/icon/theme_pattern.svg"
import mail_icon from "../../assets/icon/mail_icon.svg"
import location_icon from "../../assets/icon/location_icon.svg"
import call_icon from "../../assets/icon/call_icon.svg"

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d101f612-aedd-4ceb-a5ce-4d99ec66832b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    // Below code is used to create the contact div element
    <div className="contact" id="contact">
       {/* Below code is used to create the Contact title div element */}
       <div className="contact-title">
        <h1>Get in Touch WIth Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      {/* Above code is used to End the Contact  title div element */}

      {/* Below code is used to create a contact section */}
      <div className="contact-section">
        <div className="left-section">
          <h1>Let`s Talk</h1>
          <p>I`m currently valiable to take a new project, so feel free to send me a message about anything that you want me to work on for you, You can contact me anytime and anyday</p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon}alt="" />
              <p>belloticyd@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+23480-2094-3874</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Lagos State, Nigeria</p>
            </div>
          </div>
        </div>
        <div className="right-section">
          <form onSubmit={onSubmit} className="contact-form">
            <label htmlFor=""className="message" value={result} onChange={(e)=>setResult(e.target.value)}>{result}</label>
            <label htmlFor="">Your Names</label>
            <input type="text" name="name" id="" placeholder="Please Enter Your Names" required />
            <label htmlFor="">Your Email Address</label>
            <input type="email" name="email" id="" placeholder="Please Enter Your Emaill Address" required />
            <label htmlFor="">Write your message Here</label>
            <textarea name="message" rows={10} placeholder="Please Enter Your Message" required></textarea>
            <button type="submit" className="contact-submit">Submit Now</button>
          </form>
        </div>
      </div>
      {/* Above code is used to create a contact section */}


    </div>
    // Above code is used to End the contact div element
  )
}

export default Contact
