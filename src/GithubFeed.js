import {useState, useEffect} from 'react'

export default function GithubFeed(){
    const [githubData, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);

useEffect(() => {
    fetch("https://api.github.com/users/SimonFranden/repos")
        .then((response) => response.json())
        .then((data) => setData(data)) 
        .then(setLoaded(true))      
}, [])

if(loaded)
{
    return(
        <div className="portfolio-ctn">
            {githubData.map(item => 
            <div className="github-feed-item zoomin">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
            </div>)}
        </div>
    )
}
else return "loading...";
    
}