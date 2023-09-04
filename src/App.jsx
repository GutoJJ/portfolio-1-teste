import id_img from './img/ID Verified.png';
import cake_img from './img/cake.png';
import CSS_img from './img/CSS3.png';
import instagram from './img/insta.png';
import discord from './img/discord.png';
import github from './img/GitHub.png';

function App() {

  return (
    <>
      <div className="app">


        <div className="container" id='wrapper'>

          <div className="row" id="profile">
            <div className="card" id="pfp"></div>

            <div className="card-laranja" id="name-container">
              <div className="row" id="borda-baixo">
                <img src={id_img} alt="" />
                <h1>AUGUSTO JUNG</h1>
              </div>
              <div className="row">
                <img src={cake_img} alt="" />
                <h2>18 y.o</h2>
              </div>
              <div className="row">
                <img src={CSS_img} alt="" />
                <h2>Front-End Developer</h2>
              </div>
            </div>

          </div>

          <div className="row" id="midia">
            
            < a href="https://www.instagram.com/guto.jung/" className="card-midia" id="insta">
              <img src={instagram} alt="" />
              <a href="https://www.instagram.com/guto.jung/">@guto.jung</a>
            </a>
            <a href = '/'className="card-midia" id='discord'>
              <img src={discord} alt="" />
              <a href="">.naydrus</a>
            </a>
            <a href='https://github.com/GutoJJ' className="card-midia" id='github'>
              <img src={github} alt="" />
              <a href="https://github.com/GutoJJ">GutoJJ</a>
            </a>

          </div>

          <div className="container" id="bio">
              <h2>Olá, eu sou o augusto 👋 </h2>
              <p>Descobri minha paixão em design e programação web ainda novo. Posso não ser o melhor no que faço, mas me orgulho dos meus designs e sites, foco sempre em fazê-los com meu maior carinho!</p>
          </div>

          <div id='titulo-linguagens'>
              <h1>- Linguagens -</h1>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
