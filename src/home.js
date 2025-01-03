
import mainWebsiteImage from "./images/snack.webp";

export function createHome(){

    const content = document.getElementById("content");
    content.innerHTML=""; //Remove all items from content

    const topMessage = document.createElement("div");
    topMessage.setAttribute("class", "topMessage");
 
    const headline = document.createElement("div");
     headline.setAttribute("class", "headline");
     headline.textContent = "Welcome to SnackCity";
     const headlineMessage = document.createElement("p");
     headlineMessage.setAttribute("class","message");
     headlineMessage.textContent = "Where snacks meet elegenace";
     topMessage.appendChild(headline);
     topMessage.appendChild(headlineMessage);
    
    content.appendChild(topMessage); //Top Part added first
    const image = document.createElement("img");
    image.setAttribute("class", "frontPageImage");
    image.src=mainWebsiteImage;
    content.appendChild(image);

    const landingMsg = document.createElement("div");
    landingMsg.setAttribute("class", "message-2");
    landingMsg.textContent = "Your one-stop destination for all things delicious! Whether you're craving something salty, sweet, or savory, we've got the perfect snack to satisfy your taste buds. Dive into our collection of mouthwatering treats and discover why we’re the ultimate haven for snack lovers everywhere. Let the snacking begin!";
    content.appendChild(landingMsg);

    const hoursMSG = document.createElement("p");
    hoursMSG.setAttribute("class","hoursMSG");
    hoursMSG.textContent = "Hours Of Operation";
    content.appendChild(hoursMSG);

    const hours = document.createElement("div");
    hours.setAttribute("class", "hours");

    const hoursTBL  = document.createElement("table");
    hoursTBL.setAttribute("class", "hrsTable");
    const tr1  = document.createElement("tr");
    const th1  = document.createElement("th");
    th1.textContent = "Day";
    const th2  = document.createElement("th");
    th2.textContent = "Hours";
    tr1.appendChild(th1);
    tr1.appendChild(th2);

    const tr2  = document.createElement("tr");
    const td1  = document.createElement("td");
    td1.textContent = "Monday";
    const td2  = document.createElement("td");
    td2.textContent = "6AM-6PM";
    tr2.appendChild(td1);
    tr2.appendChild(td2);

    const tr3  = document.createElement("tr");
    const td3  = document.createElement("td");
    td3.textContent = "Tuesday";
    const td4  = document.createElement("td");
    td4.textContent = "6AM-6PM";
    tr3.appendChild(td3);
    tr3.appendChild(td4);

    
    const tr4  = document.createElement("tr");
    const td5  = document.createElement("td");
    td5.textContent = "Wednesday";
    const td6  = document.createElement("td");
    td6.textContent = "6AM-6PM";
    tr4.appendChild(td5);
    tr4.appendChild(td6);

    hoursTBL.appendChild(tr1);
    hoursTBL.appendChild(tr2);
    hoursTBL.appendChild(tr3);
    hoursTBL.appendChild(tr4);

    hours.appendChild(hoursTBL);
    content.appendChild(hours);




}
