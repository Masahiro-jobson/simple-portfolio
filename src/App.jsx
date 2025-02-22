import './App.css';
import profilePic from './assets/profilePic.jpg';

function App() {
  // Header Section
  const name = "Masahiro Togasaki";
  const profession = "Bachelor of IT student";
  //Set array variable for storing projects.
  const projects = [
  
    { 
      title: "Project 1",
      description: "Dog Management System with Java SpringBoot, React, MySql, and POSTMAN",
      link: "https://github.com/Masahiro-jobson/DogSystemApplicationFullStack.git"
    },
    {
      title: "Project 2",
      description: "To do list (Trello-Clone) with React",
      link: "https://github.com/Masahiro-jobson/Trello-clone-To-do-list-.git"
    },
    {
      title: "Project 3",
      description: "To Do List with Java Swing",
      link: "https://github.com/Masahiro-jobson/ToDoList.git"
    },
    {
      title: "Project 4",
      description: "TakeAwayMenu with Java",
      link: "https://github.com/Masahiro-jobson/TakeAwayMenu.git"
    },
    {
      title: "Project 5",
      description: "HowToUseRestAPI with JAVA SpringBoot",
      link: "https://github.com/Masahiro-jobson/HowToDoRestAPI.git"
    }

  ];


  return (
    <div className = "App">
      {/* Header Section */}
      <header className = "header">
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </nav>
        <div className= "image">
          <img src={profilePic} alt='Masahiro Togasaki'/>
        </div>
      </header>
      
      {/* About Section */}
      <section id = 'about' className = 'about-section'>
        <h2>About Me</h2>
        <p>Hello ! I am {name}, a passionate {profession}.
          I am currently studying Java at KOI.<br/>
          I am eager to learn new knowledges (e.g React) by myself.<br/>
          I love building web application that solves real world user problems.
        </p>
      </section>

      {/* Projects Section */}
      <section id = 'projects' className = 'projects-section'>
        <h2>Projects</h2>
        <div>
          {/* refers to projects and render every projects with map array method of JavaScript*/}
          {projects.map((project, index) => (
            // assign index to the key attribute(keys are required by react when rendering list)
            // for identifying each project (element) uniquely.
            <div key = {index} className = 'project-item'>
              <h3>{project.title}</h3>
              <h3>{project.description}</h3>
              {/* target _blank means Opens the link in a new tab or new window instead of replacing the current page.
              noopener noreferrer for preventing the new tab from accessing the window.opener object of the original page. */}
              <h3><a href = {project.link} target='_blank' rel='noopener noreferrer'>View More</a></h3>

            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id = 'contact' className = 'contact-section'>
        <h2>Contact Me</h2>
        <p>For any inquiries or collaboration opportunities, please don't hesitate to reach out to me.<br/>
          <a href = "mailto:m.togasaki1026@gmail.com">m.togasaki1026@gmail.com</a>
        </p>
      </section>

      {/* Footer Section */}
      <footer className = 'footer'>
        <p>2025. All rights reserved</p>
      </footer>


    </div>
  )
}

export default App
