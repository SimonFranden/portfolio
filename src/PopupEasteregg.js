


export default function PopupEasteregg()
{
    let secretString = "";

    document.addEventListener("keydown", (event) => {
            secretString = secretString + event.key;
            
            if(secretString == "1337")
            {
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
            }
        }
    )

    
}