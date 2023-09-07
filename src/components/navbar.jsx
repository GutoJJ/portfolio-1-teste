import "../style/components/navbar.sass"
import { Fade } from "react-awesome-reveal";
import hamb from "../img/hamb.png";

let aux = 0;

function NavBarClick() {
  if (aux == 0 && window.innerWidth < 780) {
    document.querySelector('.text').style.display = "bock"
    document.querySelector('.text').style.visibility = "visible";
    document.querySelector('.text').style.animation = "fadeIn .5s ease-in-out";
    document.querySelector('nav').style.background = "#252c34"
    document.querySelector('nav').style.backdropFilter = "none";
    aux = 1;
  } else if (aux == 1 && window.innerWidth  < 780) {
    document.querySelector('.text').style.animation = "fadeOut .5s ease-in-out";
    setTimeout(() => {
      document.querySelector('nav').style = "";
      document.querySelector('.text').style = "";
    }, 490);
    
    aux = 0;
  }
}

function navbar() {
  return (
    <nav>
      <h1>JUNG</h1>
      <div className="text">

        <Fade cascade>
          <a className="btn" href="#" onClick={NavBarClick}>Sobre mim</a>
          <a className="btn"href="#titulo-linguagens" onClick={NavBarClick}>Tecnologias</a>
          <a className="btn"href="" onClick={NavBarClick}>Formação</a>
        </Fade>

      </div>
      <button onClick={NavBarClick} className='hamb'><img src={hamb} alt="" /></button>
    </nav>
  )
}

export default navbar