import organicPotatoes from "./images/organicPotatoes.jpg"
export function createAbout(){
    const content = document.getElementById("content");
    content.innerHTML=""; //Remove all items from content
    
    const about = document.createElement("div");
    about.setAttribute("class", "about");

    
    const leftSide = document.createElement("div");
    leftSide.setAttribute("class", "leftSide");

    const img = document.createElement("img");
    img.setAttribute("src",organicPotatoes);
    leftSide.appendChild(img);

    const rightSide = document.createElement("div");
    rightSide.setAttribute("class", "rightSide");

    const p = document.createElement("p");
    p.setAttribute("class","mission");
    p.textContent = "At Snack Haven, we believe snacking should be both delicious and guilt-free. That’s why all of our snacks are crafted with 100% organic ingredients, sourced sustainably from trusted farms and suppliers. From crunchy chips to sweet treats, every bite is free from artificial flavors, preservatives, and chemicals. We’re committed to bringing you the best nature has to offer, so you can enjoy your favorite snacks while staying true to a healthier, more conscious lifestyle. Because at Snack Haven, it’s not just about snacking—it’s about snacking better! 🌍✨";

    rightSide.appendChild(p);
    
    about.appendChild(leftSide);
    about.appendChild(rightSide);
    
    content.append(about);


}