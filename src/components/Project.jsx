function Project({ title, imageUrl, liveLink, githubLink }) {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      {liveLink && (  // Check if liveLink exists
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          Live App
        </a>
      )}
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        GitHub Repo
      </a>
    </div>
  );
}

export default Project;