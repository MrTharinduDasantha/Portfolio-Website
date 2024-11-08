import styles from "./HeroStyles.module.css"
import heroImg from "../../assets/profile.png"
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import linkedinLight from "../../assets/linkedin-light.svg"
import linkedinDark from "../../assets/linkedin-dark.svg"
import githubLight from "../../assets/github-light.svg"
import githubDark from "../../assets/github-dark.svg"
import twitterLight from "../../assets/twitter-light.svg"
import twitterDark from "../../assets/twitter-dark.svg"
import CV from "../../assets/cv.pdf"
import { useTheme } from "../../common/ThemeContext"

const Hero = () => {
    const { theme, toggleTheme } = useTheme()

    const themeIcon = theme === "light" ? sun : moon
    const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark
    const githubIcon = theme === "light" ? githubLight : githubDark
    const twitterIcon = theme === "light" ? twitterLight : twitterDark
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img src={heroImg} className={styles.hero} alt="Profile Photo" />
            <img src={themeIcon} onClick={toggleTheme} className={styles.colorMode} alt="Color Mode Icon" />
        </div>
        <div className={styles.info}>
            <h1>Tharindu Dasantha</h1>
            <h2>Undergraduate</h2>
            <span>
                <a href="https://www.linkedin.com/in/tharindu-dasantha-33b7b5314" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin Icon" />
                </a>
                <a href="https://www.github.com/MrTharinduDasantha" target="_blank">
                    <img src={githubIcon} alt="Github Icon" />
                </a>
                <a href="https://www.twitter.com/Mr__T_D" target="_blank">
                    <img src={twitterIcon} alt="Twitter Icon" />
                </a>
            </span>
            <p className={styles.description}>I am an undergraduate seeking an internship to gain experience in the field of IT.  I have created some projects using mainly Mern stack. I am currently learning various tools and technologies to enhance my skills.</p>
            <a href={CV} download>
                <button className="hover">Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero