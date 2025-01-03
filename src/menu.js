import doritos1 from "./images/doritos.jpg";
import doritosbbq from "./images/doritosbbq.jpg";
import doritosJalapeno from "./images/doritosJalapeno.jpeg";
import doritosnacho from "./images/doritosnacho.jpeg";
import doritosNacho2 from "./images/doritosNacho2.png";
import doritosspicy from "./images/doritosspicy.png";
import doritosSweetChilly from "./images/doritosSweetChilly.jpeg";
import doritoszesty from "./images/doritosSweetChilly.jpeg";




export function createMenu(){
    const content = document.getElementById("content");
    content.innerHTML=""; //Remove all items from content

    const imgBoardDiv = document.createElement("div"); 
    imgBoardDiv.setAttribute("class","imageBoard");

    const img1 = createImage(doritos1, "Doritos Original", "999 Calories", "Consume me");
    imgBoardDiv.appendChild(img1);

    const img2 = createImage(doritosbbq, "Doritos BBQ", "999 Calories", "Consume me");
    imgBoardDiv.appendChild(img2);

    const img3 = createImage(doritosJalapeno, "Doritos Spicy", "999 Calories", "Consume me");
    imgBoardDiv.appendChild(img3);

    const img4 = createImage(doritosnacho, "Doritos Chilly", "999 Calories", "Consume me");
    imgBoardDiv.appendChild(img4);

    const img5 = createImage(doritosNacho2, "Doritos Value", "999 Calories", "Consume me");
    imgBoardDiv.appendChild(img5);

    const img6 = createImage(doritosspicy, "Doritos Spicy Garlic", "999 Calories", "Consume me");
    imgBoardDiv.appendChild(img6);

    const img7 = createImage(doritosSweetChilly, "Doritos Sweet Chilly", "999 Calories", "Consume me");
    imgBoardDiv.appendChild(img7);

    const img8 = createImage(doritoszesty, "Doritos Chilly Hot", "999 Calories", "Consume me");
    imgBoardDiv.appendChild(img8);

    content.appendChild(imgBoardDiv);


}

function createImage(link, title, text1, text2){

    const imgDiv = document.createElement("div"); 
    imgDiv.setAttribute("class","img");

    const img = document.createElement("img");
    img.setAttribute("class","menuImg");
    img.setAttribute("src",link);

    const p1 = document.createElement("p");
    p1.setAttribute("class","imgTitle");
    p1.textContent = title;

    const p2 = document.createElement("p");
    p2.setAttribute("class","imgText");
    p2.textContent = text1;

    const p3 = document.createElement("p");
    p3.setAttribute("class","imgText");
    p3.textContent = text2;

    const button = document.createElement("button");
    button.setAttribute("class", "order");
    button.textContent = "Add to order";

    imgDiv.appendChild(img);
    imgDiv.appendChild(p1);
    imgDiv.appendChild(p2);
    imgDiv.appendChild(p3);
    imgDiv.appendChild(button);

    return imgDiv;
}