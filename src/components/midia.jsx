import instagram from '../img/insta.png';
import discord from '../img/discord.png';
import github from '../img/GitHub.png';

import '../style/components/midia.sass'

function midia() {
    return (
        <div className="row" id="midia">

            < a href="https://www.instagram.com/guto.jung/" className="card-midia" id="insta">
                <img src={instagram} alt="" />
                <h2 >@guto.jung</h2>
            </a>
            <a href='/' className="card-midia" id='discord'>
                <img src={discord} alt="" />
                <h2>.naydrus</h2>
            </a>
            <a href='https://github.com/GutoJJ' className="card-midia" id='github'>
                <img src={github} alt="" />
                <h2 >GutoJJ</h2>
            </a>

        </div>
    )
}

export default midia