import '../style/components/navbar.sass'
import { Fade } from "react-awesome-reveal";

function navbar() {
  return (
    <nav>
        <h1>JUNG</h1>
        <div className="text">
            <Fade cascade>
                <a href="#">Sobre mim</a>
                <a href="#titulo-linguagens">Tecnologias</a>
                <a href="">Formação</a>
            </Fade>
            
        </div>
    </nav>
  )
}

export default navbar