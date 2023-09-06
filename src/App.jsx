import Perfil from './components/perfil.jsx'
import Media from './components/midia.jsx'
import Bio from './components/bio.jsx'
import Navbar from './components/navbar.jsx'
import Tecnologias from './components/tecnologias.jsx'

import "intersection-observer";

function App() {

  return (
    <>
      <div className="app">
      <Navbar />

        <div className="container" id='wrapper'>
          
          <Perfil />
          <Bio />
          <Media />
          
          <div id='titulo-linguagens'>
            <h1>- Tecnologias -</h1>
          </div>

          <Tecnologias />
          
        </div>

      </div>
    </>
  )
}

export default App
