import id_img from './img/ID Verified.png';
import cake_img from './img/cake.png';
import CSS_img from './img/CSS3.png';
import instagram from './img/insta.png';

function App() {

  return (
    <>
      <div className="app">


        <div className="container">

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
            <div className="card-midia"></div>
            <div className="card-midia"></div>

          </div>

          <div className="row" id="bio">

          </div>

        </div>

      </div>
    </>
  )
}

export default App
