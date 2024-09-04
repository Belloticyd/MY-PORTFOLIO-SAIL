

import "./Mywork.css"
import theme_pattern from "../../assets/icon/theme_pattern.svg"
import mywork_data from "../../assets/data/mywork_data.js"
import arrow_icon from "../../assets/icon/arrow_icon.svg"
// import project_11 from "../../assets/project_11.jpg"



const Mywork = () => {
  return (
    // Below code is used to create the mywork div element
    <div className="mywork" id="mywork">
      {/* Below code is used to create the Portiflio title div element */}
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      {/* Above code is used to End the Portiflio title div element */}

      {/* Start Here Below code is used to create a service-container div */}
      <div className="mywork-container">
        <div><a href="https://belloticyd.github.io/PhummitteStore/"><img src="/img/project_11.JPG" alt="" /></a></div>
        <div><a href="https://belloticyd.github.io/HeroPage/"><img src="/img/HeroPage.JPG" alt="" /></a></div>
        <div><a href="https://belloticyd.github.io/Social-Link/"><img src="/img/SocialLink.JPG" alt="" /></a></div>
        {/* Below code is used to import the mywork data to display using map method */}
        {mywork_data.map((work, index) =>{
          return <img key={index} src={work.w_img} alt="" />
        })}
        {/* Above code is used to import the mywork data to display using map method */}
      </div>
      {/* End Here Below code is used to create a service-container div */}
      <div className="showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
    // Above code is used to End the Mywork div element
  )
}

export default Mywork
