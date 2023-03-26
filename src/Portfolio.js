import backapp from './img/backapp.png'
import mtbGame from './img/mtb-game.jpg'
import ntsReklam from './img/nts-reklam.png'

export default function Portfolio()
{
    return(
        <>
        <h3 className="slidein-left code">Portfolio()<br/>{"{"}</h3>

        <div className="portfolio-ctn">
            <div className="portfolio-wrapper zoomin">
                <img src={ntsReklam}/>
                <div className="portfolio-title">
                    <h3>Hemsida till NTS-Profil & Reklam</h3>
                    <a href="#popup2">Visa mer</a>
                </div>
            </div>

            <div className="popup" id="popup2">
                <a href="#" className="fa-solid fa-x"></a>
                <div className="popup-inner">
                    <div className="popup-description">
                        <h2>Hemsida till NTS-Profil & Reklam</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto exercitationem
                            dolores doloremque cum sit nihil maxime, laboriosam impedit, voluptate ullam
                            perspiciatis? Ex totam sed exercitationem, deserunt mollitia dicta cumque sit!</p>
                        <div className="popup-btn-ctn">

                        </div>
                    </div>
                    <img src={ntsReklam}/>
                </div>
            </div>



            <div className="portfolio-wrapper zoomin">
                <img src={backapp}/>
                <div className="portfolio-title">
                    <h3>Android app </h3>
                    <a href="#popup1">Visa mer</a>
                </div>
            </div>

            <div className="popup" id="popup1">
                <a href="#" className="fa-solid fa-x"></a>
                <div className="popup-inner">
                    <div className="popup-description">
                        <h3>Android app till Enduro-SM</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto exercitationem
                            dolores doloremque cum sit nihil maxime, laboriosam impedit, voluptate ullam
                            perspiciatis? Ex totam sed exercitationem, deserunt mollitia dicta cumque sit!</p>
                        <div className="popup-btn-ctn">
                        </div>
                    </div>
                    <img src={backapp}/>
                </div>
            </div>


            <div className="portfolio-wrapper zoomin">
                <img src={mtbGame}/>
                <div className="portfolio-title">
                    <h3>Multiplayer spel i Unity</h3>

                    <a href="#popup3">Visa mer</a>
                </div>
            </div>

            <div className="popup" id="popup3">
                <a href="#" className="fa-solid fa-x"></a>
                <div className="popup-inner">
                    <div className="popup-description">
                        <h3>Multiplayer spel i Unity</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto exercitationem
                            dolores doloremque cum sit nihil maxime, laboriosam impedit, voluptate ullam
                            perspiciatis? Ex totam sed exercitationem, deserunt mollitia dicta cumque sit!</p>
                        <div className="popup-btn-ctn">
                        </div>
                    </div>
                    <img src={mtbGame}/>
                </div>
            </div>
        </div>
        <h3 className="code slidein-left">{"}"}</h3>
        </>
    )

}