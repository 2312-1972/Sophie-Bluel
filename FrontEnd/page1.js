// import {  callApi, ficheTravaux } from "./script.js";
// callApi();
// ficheTravaux();
// console.log(ficheTravaux);
//création d'une variable Url=adresse API utilisé
const url = "http://localhost:5678/api/works";
//création d'une variable init
const init = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};
//fonction asynchrone formulant une requète a l' API avec fetch
// utilisation des paramètres "resolve ,reject" confirmant le bon chemin.
async function callApi() {
  return new Promise((resolve, reject) => {
    fetch(url, init).then((response) => {
      if (response.ok) {
        resolve(response.json());
      } else {
        reject(new Error("Impossible de contacter le serveur"));
      }
    });
  });
}
const body = document.querySelector("body");




const divBlackHeader = document.createElement("div")
divBlackHeader.classList.add("blackheader");
 body.appendChild(divBlackHeader);
 //divBlackHeader.appendChild(logo);
 
function navHeader() {
  // création dynamique de la nav header +liens actifs//
  //lien projet
  const liProjets = document.querySelector("#projets");
  //création du lien vers la page projets
  const lienProjets = document.createElement("a");
  lienProjets.href = "./page1.html";
  lienProjets.innerText = "projets";
  document.querySelector("lienProjets");
  lienProjets.className = "liheader";
  liProjets.appendChild(lienProjets);

  //lien contact
  const liContact = document.querySelector("#contacter");
  //création du lien vers la page contact
  const lienContact = document.createElement("a");
  lienContact.href = "#";
  lienContact.innerText = "contact";
  document.querySelector("lienContact");
  lienContact.className = "liheader";
  liContact.appendChild(lienContact);

  //lien Login
  const liLogin = document.querySelector("#logout");
  //création du lien vers la page contact
  const lienLogin = document.createElement("a");
  lienLogin.href = "./login.html";
  lienLogin.innerText = "logout";
  document.querySelector("lienLogin");
  lienLogin.className = "liheader";
  liLogin.appendChild(lienLogin);
}
navHeader();
// récupération de  la promesse couplé a await
//permettant au reste du script de continuer à s'exécuter.
const ficheTravaux = async () => {
  const travaux = await callApi();
  const gallery = document.querySelector(".gallery");

  //création des éléments d'un projet via le DOM
  travaux.map((imageData) => {
    const figure = document.createElement("projets");
    const img = document.createElement("img");
    img.src = imageData.imageUrl;
    img.alt = "#";
    // Ajout de l'attribut data-category-id
    img.dataset.categoryId = imageData.categoryId;
    const figcaption = document.createElement("figcaption");
    figcaption.textContent = imageData.title;
    //affiliation des éléments crée sur le DOM
    figure.appendChild(img);
    figure.appendChild(figcaption);
    gallery.appendChild(figure);
  });
};
//appel de la variable pour effet
ficheTravaux();
//export function ficheTravaux();