import styles from "./ProjectsStyle.module.css"
import projectOneImg from "../../assets/food-ordering-website.png"
import projectTwoImg from "../../assets/e-commerce-website.png"
import projectThreeImg from "../../assets/real-time-chat-website.png"
import projectFourImg from "../../assets/blog-website.png"
import projectFiveImg from "../../assets/spotify-clone-website.png"
import projectSixImg from "../../assets/bg-removal-website.png"
import projectSevenImg from "../../assets/doctor-appointment-booking-website.png"
import ProjectCard from "../../common/ProjectCard"

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={projectOneImg} link={"https://github.com/MrTharinduDasantha/Full-Stack-Food-Ordering-Website.git"} projectTitle={"Food Ordering Website"} />
            <ProjectCard src={projectTwoImg} link={"https://github.com/MrTharinduDasantha/Full-Stack-E-Commerce-Website.git"} projectTitle={"E-Commerce Website"} />
            <ProjectCard src={projectThreeImg} link={"https://github.com/MrTharinduDasantha/Full-Stack-Real-Time-Chat-Website.git"} projectTitle={"Real-Time Chat Website"} />
            <ProjectCard src={projectFourImg} link={"https://github.com/MrTharinduDasantha/Full-Stack-Blog-Website.git"} projectTitle={"Blog Website"} />
            <ProjectCard src={projectFiveImg} link={"https://github.com/MrTharinduDasantha/Full-Stack-Spotify-Clone-Website.git"} projectTitle={"Spotify Clone Website"} />
            <ProjectCard src={projectSixImg} link={"https://github.com/MrTharinduDasantha/Full-Stack-BG-Removal-Website.git"} projectTitle={"BG Removal Website"} />
            <ProjectCard src={projectSevenImg} link={"https://github.com/MrTharinduDasantha/Doctor-Appointment-Booking-Website.git"} projectTitle={"Doctor Appointment Website"} />
        </div>
    </section>
  )
}

export default Projects