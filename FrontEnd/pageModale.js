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
const divBlackHeader = document.createElement("div");

divBlackHeader.classList.add("blackheader");
body.appendChild(divBlackHeader);
const buttonBlackHeader = document.createElement("button");
body.appendChild(buttonBlackHeader);
buttonBlackHeader.classList.add("buttonBlackHeader");
buttonBlackHeader.textContent = "publier les changements";

const penBlackHeader = document.createElement("div");
body.appendChild(penBlackHeader);
penBlackHeader.textContent = "Mode édition";
penBlackHeader.classList.add("penBlackHeader");

const fontPenBlackHeader = document.querySelector("#fa");
fontPenBlackHeader.classList.add("faPenBlackHeader");

// création dynamique de la nav header +liens actifs//
function navHeader() {
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
  lienLogin.href = "./index.html";
  lienLogin.innerText = "logout";
  document.querySelector("lienLogin");
  lienLogin.className = "liheader";
  liLogin.appendChild(lienLogin);
}
navHeader();

// button accès à la  modale
//const divLienModale = document
const accesModale = document.createElement("a");
body.appendChild(accesModale);
accesModale.classList.add("divmodale");
accesModale.textContent = "modifier";
accesModale.href = "#modale";
const faModale = document.querySelector("#imodale");
faModale.classList.add("faModale");

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

/////////////////////////////////////////////
//     création de la galerie modale-wrapper
////////////////////////////////////////////
const gallerieModale = async () => {
  const ficheGalerie = await callApi();
  const galleryModale = document.querySelector("#modaleGalerie");
  ficheGalerie.map((imageData) => {
    const figure = document.createElement("projets");
    const img = document.createElement("img");
    img.src = imageData.imageUrl;
    img.alt = "#";
    // adaptation de la taille de l'image pour la modale
    img.style.width = "77px";
    img.style.height = "102px";
    // Ajout de l'attribut data-category-id
    img.dataset.categoryId = imageData.categoryId;
    const figcaption = document.createElement("figcaption");
    figcaption.textContent = "éditer";
    figcaption.href = "#";
    const trashIcon = document.querySelector("#trashIcon");
    trashIcon.style.className = "fa-solid fa-trash-can fa-xs";
    //trashIcon.style.classList.add("trashIcon");
    trashIcon.style.color = "black";

    //affiliation des éléments crée sur le DOM
    figure.appendChild(img);
    figure.appendChild(figcaption);
    galleryModale.appendChild(figure);
    img.appendChild(trashIcon);
  });
};
//récupéartion de modale wrapper pour affiliation
const modaleWrapper = document.querySelector("#modale-wrapper");
//création de la bordure
const borderModale = document.createElement("p");
borderModale.classList.add("borderModale");
//création du bouton
const buttonModale = document.createElement("button");
buttonModale.textContent = "Ajouter une photo";
buttonModale.classList.add("buttonModale");
//création supp de la galerie
const SuppModale = document.createElement("p");
SuppModale.textContent = "Supprimer la galerie";
SuppModale.classList.add("SuppModale");
//création escape modale
const escapeModale = document.querySelector("#escapeModale");
escapeModale.href = "./page1.html";
modaleWrapper.appendChild(borderModale);
modaleWrapper.appendChild(buttonModale);
modaleWrapper.appendChild(SuppModale);

gallerieModale();
const modal = document.querySelector("#modale");
function openModale() {
  modal.style.display = "flex";
}
function closeModale() {
  modal.style.display = "none";
}
// Écouteur d'événement pour le bouton d'ouverture
accesModale.addEventListener("click", openModale);

// Écouteur d'événement pour le bouton de fermeture
escapeModale.addEventListener("click", closeModale);

// Écouteur d'événement pour la fermeture lorsque l'utilisateur clique en dehors de la boîte modale
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModale();
  }
});
