import "./styles.css";
import { createHome } from "./home";
import { createMenu } from "./menu";
import { createAbout } from "./about";


createHome(); //Main page
const getHome = document.getElementById("home");
getHome.addEventListener("click", ()=>{
    createHome();
});
const getMenu = document.getElementById("menu");
getMenu.addEventListener("click", ()=>{
    createMenu();
});

const getAbout = document.getElementById("about");
getAbout.addEventListener("click", ()=>{
    createAbout();
});

