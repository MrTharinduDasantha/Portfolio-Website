const ProjectCard = ({ src, link, projectTitle }) => {
  return (
    <a href={link}>
        <img src={src} width={340} height={150} className="hover" alt={`${projectTitle} Image`} />
        <h3>{projectTitle}</h3>
    </a>
  )
}

export default ProjectCard