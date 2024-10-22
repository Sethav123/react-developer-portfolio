import Project from '../components/Project';
import headsUpImage from '../assets/headsup.png'; 
import tripPlannerImage from '../assets/trip-planner.png'; 
import pwaTextEditorImage from '../assets/texteditor.png'; 
import socialNetworkApiImage from '../assets/socialnetwork.png'; 
import readmeGeneratorImage from '../assets/readme.png'; 

function Portfolio() {
    const projects = [
      { title: 'Heads Up', imageUrl: headsUpImage, liveLink: 'https://jmrobertson89.github.io/Heads-Up/', githubLink: 'https://github.com/JMRobertson89/Heads-Up' },
      { title: 'Trip Planner', imageUrl: tripPlannerImage, liveLink: 'https://trip-planner-b5zi.onrender.com/', githubLink: 'https://github.com/natale565/Trip-Planner' },
      { title: 'PWA Text Editor', imageUrl: pwaTextEditorImage, liveLink: 'https://pwa-text-editor-2-h3ky.onrender.com/Links', githubLink: 'https://github.com/Sethav123/pwa-text-editorLinks' },
      { title: 'Social Network API', imageUrl: socialNetworkApiImage, liveLink: '', githubLink: 'https://github.com/Sethav123/social-network-api' },
      { title: 'Readme Generator', imageUrl: readmeGeneratorImage, liveLink: '', githubLink: 'https://github.com/Sethav123/readme-generator/tree/main' },
    ];
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;