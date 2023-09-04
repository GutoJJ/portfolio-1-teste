import instagram from '../img/insta.png';
import discord from '../img/discord.png';
import github from '../img/GitHub.png';

import '../style/components/midia.sass'

function midia() {
    return (
        <div className="row" id="midia">

            < a href="https://www.instagram.com/guto.jung/" className="card-midia" id="insta">
                <img src={instagram} alt="" />
                <a href="https://www.instagram.com/guto.jung/">@guto.jung</a>
            </a>
            <a href='/' className="card-midia" id='discord'>
                <img src={discord} alt="" />
                <a href="">.naydrus</a>
            </a>
            <a href='https://github.com/GutoJJ' className="card-midia" id='github'>
                <img src={github} alt="" />
                <a href="https://github.com/GutoJJ">GutoJJ</a>
            </a>

        </div>
    )
}

export default midia