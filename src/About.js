export default function About()
{
    function EasterEgg()
    {
        document.body.style = 'background: blue;';
    }

    return(
        <>
        <h3 className="slidein-left code">About()<br/>{"{"}</h3>
        <br/>
        <h1 className="slidein-right">Om mig</h1>
        <h2 className="zoomin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium exercitationem
            voluptatibus ratione saepe, unde ut voluptatem eum voluptates? Expedita accusamus illum necessitatibus
            molestias quidem neque perferendis qui nulla porro quibusdam!</h2>
        <br/>
        <h2 className="zoomin">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum omnis, veritatis nisi commodi
            alias minima expedita reiciendis non! Dolorem provident culpa sed perspiciatis odio fugit itaque modi
            ratione ab aliquam!</h2>
        <br/>

        <h3 className="slidein-left code" onClick={() => EasterEgg()}>{"}"}</h3>
        </>        
    )
}