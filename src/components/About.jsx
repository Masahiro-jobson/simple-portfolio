
function About(){
    const name = "Masahiro Togasaki";
    const profession = "Bachelor of IT student";
    return(
        <section id = 'about' className = 'about-section'>
        <h2>About Me</h2>
        <p>Hello ! I am {name}, a passionate {profession}.
          I am currently studying Java at KOI.<br/>
          I am eager to learn new knowledges (e.g React) by myself.<br/>
          I love building web application that solves real world user problems.
        </p>
      </section>
    );
}

export default About;