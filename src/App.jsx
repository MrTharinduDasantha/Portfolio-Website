import "./App.css"
import Contact from "./sections/Contact/Contact"
import Footer from "./sections/Footer/Footer"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects"
import Skills from "./sections/Skills/Skills"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <ToastContainer />
      <div className="container">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App