

import "./About.css"
import theme_pattern from "../../assets/icon/theme_pattern.svg"
import ProfilePortail from "../../assets/ProfilePortail.jpg"

const About = () => {
  return (
    <div className="about" id="about">
        {/* About me Title Start Here */}
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        {/*  About me Title End Here */}
        {/* About Session Start Here */}
        <div className="about-sessions">
            {/* About Left Start Here with My Picture */}
            <div className="about-left">
                <img src={ProfilePortail} alt="" />
            </div>
            {/* About Left End Here with My Picture */}
            {/* About Right Start Here with the About me Content */}
            <div className="about-right">
                {/* About Me Paragraph Start Here */}
                <div className="about-para">
                    <p>He is an experienced frontend developer with over 17 months of professional expertised in the field. throughout his learning career, he had the privilege and opportunities in collaborating with prestigious orangisation like <span>SAIL TECH</span> where he learned different tools in building web application and mobile application, he also contribute to their success and growth of the orangisation.</p>
                    <p>His passion for frontend development is not only to develop mobile or web application, but also in the enthusiam and dedication he bring to each projects.</p>
                </div>
                {/* About Me Paragraph End Here  */}
                {/* About Me with Skill that i have Start Here */}
                <div className="about-skills">
                    <div className="aboutSkill">
                        <p>HTML and CSS</p><hr style={{width: "95%"}}/>
                    </div>
                    <div className="aboutSkill">
                        <p>Javascript</p><hr style={{width: "45%"}}/>
                    </div>
                    <div className="aboutSkill">
                        <p>React JS</p><hr style={{width: "60%"}}/>
                    </div>
                    <div className="aboutSkill">
                        <p>Node JS</p><hr style={{width: "20%"}}/>
                    </div>
                </div>
                {/* About Me with Skill that i have End Here */}
               
            </div>
            {/* About Right End Here with the About me Content */}
        </div>
        {/* About Session End Here  */}
        {/* About my Achievement Start Here */}
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1.6 <sup>+</sup></h1>
                <p>YEARS OF EXPRIENCES</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>6<sup>+</sup></h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>2<sup>+</sup></h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
        {/* About my Achievement End Here */}
    </div>
  )
}

export default About
