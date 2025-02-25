import profilePic from "/src/assets/profilePic.jpg";


function Header(){
    // Header Section
  const name = "Masahiro Togasaki";
  const profession = "Bachelor of IT student";
    return(
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
    );
}

export default Header;