import id_img from '../img/ID Verified.png';
import cake_img from '../img/cake.png';
import CSS_img from '../img/CSS3.png';

import '../style/components/perfil.sass';

const perfil = () => {
    return (
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
    )
}

export default perfil
