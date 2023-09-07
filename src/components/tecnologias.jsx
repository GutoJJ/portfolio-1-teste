import '../style/components/tecnologias.sass'
import reactpng from '../img/Reactpng.png'

function tecnologias() {
    return (
        <div className="container" id="wrapperTech">
            <div className="row" id='tecnologias'>
                <div className="card">
                    <img src={reactpng} alt="" />
                </div>
                <div className="card"></div>
            </div>
        </div>
    )
}

export default tecnologias