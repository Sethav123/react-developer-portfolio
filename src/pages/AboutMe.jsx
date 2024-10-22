import profilePhoto from '../assets/me.jpg';
function AboutMe() {
  return (
    <section className="about-me">
      <h1>About Me</h1>
      <img src={profilePhoto} alt="Seth" className="profile-photo" />
      <p>Hi, I'm Seth Valentine, a new coder eager to dive into the world of web development. 
        I have a solid foundation in HTML, JavaScript, and CSS, and I'm excited to learn and grow my skills 
        as I create dynamic and engaging web applications. I love tackling challenges and am always looking 
        for opportunities to expand my knowledge.</p>
    </section>
  );
}

export default AboutMe;