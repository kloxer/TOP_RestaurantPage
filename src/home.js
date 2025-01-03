
export function createHome(){
    const content = document.getElementById("content");
    const topMessage = document.createElement("div");
    topMessage.setAttribute("class", "topMessage");
 
    const headline = document.createElement("div");
     headline.setAttribute("class", "headline");
     headline.textContent = "Welcome to SnackCity";
     const headlineMessage = document.createElement("p");
     headlineMessage.setAttribute("class","message")
     headlineMessage.textContent = "Where snacks meet elegenace";

     topMessage.appendChild(headline)
     topMessage.appendChild(headlineMessage)
    
    content.appendChild(topMessage);
}
