import profilePic from './img/profile.png'
import cvContent from './cv-content.json'

export default function Cv()
{
    return(
        <>
            <h3 className="slidein-left code">Resume()<br/>{"{"}</h3>
        <br/>
        <div className="cv-wrapper zoomin">
            <div className="cv-top-wrapper">
                <div className="profile-pic">
                    <img src={profilePic} className="profile-pic" alt=""/>
                </div>
                <div className="cv-top-main-ctn">
                    <h1>Simon Frändén</h1>
                    <h4>Systemutvecklare</h4>
                    <br/>
                    <p><i className="fa-solid fa-envelope"></i> simon.franden@hotmail.com </p>
                    <p><i className="fa-solid fa-phone"></i>  076-819 94 30</p>
                </div>
                   
            </div>
            <div className="cv-body-wrapper">
                <div className="cv-side-ctn">
                    <h2>Färdigheter</h2>
                    <br/>
                    <h3>Programmering</h3>
                    <p>C#, .NET, SQL, Javascript</p>
                    <br/>
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <br/>
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <br/>
                </div>
                
                <div className="cv-main-ctn">                   
                                       
                    <h2>Profil</h2>
                    <p>{cvContent.profile}</p>
                    <br/>
                    <h2>Utbildning</h2>
                    <p>{cvContent.education}</p>
                    <br/>
                    <h2>Arbetslivserfarenhet</h2>
                    <p>{cvContent.workXp}</p>
                    <br/>
                </div>
            </div>           
        </div>
        <br/>
        <h3 className="slidein-left code">{"}"}</h3>
        </>
    )
}