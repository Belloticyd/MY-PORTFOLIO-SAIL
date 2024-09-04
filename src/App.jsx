import Navbar from "./component/navbar/Navbar"
import Hero from "./component/Hero/Hero"
import About from "./component/About/About"
import Service from "./component/Services/Service"
import Mywork from "./component/Mywork/Mywork"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer/Footer"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
