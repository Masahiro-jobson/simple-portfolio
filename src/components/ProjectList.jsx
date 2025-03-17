
function ProjectList(){

  //Set array variable for storing projects.
  const projects = [
  
    { 
      title: "Project 1",
      description: "AI-Email-Writer with Gemini API",
      link: "https://github.com/Masahiro-jobson/AI-email-writer-frontend/tree/main"
    },
    { 
      title: "Project 2",
      description: "Dog Management System with Java SpringBoot, React, MySql, and POSTMAN",
      link: "https://github.com/Masahiro-jobson/DogSystemApplicationFullStack.git"
    },
    {
      title: "Project 3",
      description: "To do list (Trello-Clone) with React",
      link: "https://github.com/Masahiro-jobson/Trello-clone-To-do-list-.git"
    },
    {
      title: "Project 4",
      description: "To Do List with Java Swing",
      link: "https://github.com/Masahiro-jobson/ToDoList.git"
    },
    {
      title: "Project 5",
      description: "TakeAwayMenu with Java",
      link: "https://github.com/Masahiro-jobson/TakeAwayMenu.git"
    },
    {
      title: "Project 6",
      description: "HowToUseRestAPI with JAVA SpringBoot",
      link: "https://github.com/Masahiro-jobson/HowToDoRestAPI.git"
    }
]
    return(
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
    );
}

export default ProjectList;