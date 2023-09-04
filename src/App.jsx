import Perfil from './components/perfil.jsx'
import Media from './components/midia.jsx'
import Bio from './components/bio.jsx'

function App() {

  return (
    <>
      <div className="app">


        <div className="container" id='wrapper'>
          <Perfil />
          <Bio />
          <Media />
          <div id='titulo-linguagens'>
              <h1>- Linguagens -</h1>
          </div>

          <div id='grid-container'>
            <div className="grid">
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
            
            
          </div>

        </div>

      </div>
    </>
  )
}

export default App
