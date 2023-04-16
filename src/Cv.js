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
                    <p>C#, .NET, SQL, Javascript, GIT, HTML/CSS</p>
                    <br/>
                    <h3>Språk</h3>
                    <p>Svenska, Engelska</p>
                    <br/>
                    <h3>Körkort</h3>
                    <p>B-körkort</p>
                    <br/>
                </div>
                
                <div className="cv-main-ctn">                   
                                       
                    <h2>Profil</h2>
                    <p>
                        Efter att ha haft programmering som hobby i 7 år tar jag nu steget till professionell Systemutvecklare genom en  två årig Yrkeshögskoleutbildning.
                        Min önskan är att hamna på en arbetsplats där jag med min kreativitet kan vara med och lösa morgondagens problem med hjälp av kod.
                    </p>
                    <br/>
                    <h2>Utbildning</h2>
                    <br/>
                    <p>                                      
                        <b>Yrkeshögskola</b><br/>                
                        <b>Systemutvecklare .NET Med AI-Kompetens, 405 Yh-poäng, Sundsvall, Edugrade</b><br/>
                        <small><i>Sep 2022 - Pågående</i></small><br/>
                        </p>
                        <br/>
                        <b>Gymnasie</b><br/>                
                        <b>El- och Energiprogrammet med inriktning Webbutveckling och Programmering, Sundsvall, NTI-Gymnasiet</b><br/>                   
                        <small><i>Aug 2014 - Jun 2017</i></small><br/>
                        <br/>
                        <h2>Arbetslivserfarenhet</h2>
                        <br/>
                    <p>                        
                        <b>Butiksbiträde på ICA Kvantum</b><br/>
                        <small><i>Okt 2018 - Aug 2022</i></small><br/>
                        <br/>
                        På ICA jobba jag på online avdelningen i ett sammansvetsat team. Huvuduppgifterna var att plocka och leverera mat men det tillkom även en hel del kundsupport och problemlösning.
                        I den här rollen fick jag mycket erfarenhet av kundkontakt och att jobba i ett team.
                    </p>
                    <br/>
                </div>
            </div>           
        </div>
        <br/>
        <h3 className="slidein-left code">{"}"}</h3>
        </>
    )
}