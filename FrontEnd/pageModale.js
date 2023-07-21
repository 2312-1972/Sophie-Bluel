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
//     création de la galerie modal
////////////////////////////////////////////
// Fonction pour afficher la galerie modale
const gallerieModale = async () => {
  const ficheGalerie = await callApi();
  const galleryModale = document.querySelector("#modaleGalerie");

  // Création des éléments pour chaque projet dans la galerie modale
  ficheGalerie.map((imageData) => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = imageData.imageUrl;
    img.alt = "#";
    img.style.width = "77px";
    img.style.height = "102px";
    // Ajout de l'attribut data-category-id
    img.dataset.categoryId = imageData.categoryId;

    const divArrows = document.createElement("div");
    divArrows.style.width = "15px";
    divArrows.style.height = "15px";
    divArrows.style.top = "10px";
    divArrows.style.right = "26px";
    divArrows.style.backgroundColor = "black";
    divArrows.style.position = "absolute";

    // Création de l'icône "fa-arrows-up-down-left-right arrows-icon"
    const arrowsIcon = document.createElement("i");
    arrowsIcon.classList.add(
      "fa-solid",
      "fa-arrows-up-down-left-right",
      "fa-xs",
      "arrows-icon"
    );
    arrowsIcon.style.position = "absolute";
    arrowsIcon.style.top = "8px";
    arrowsIcon.style.left = "2px";
    arrowsIcon.style.color = "white";
    arrowsIcon.style.pointerEvents = "none"; // Empêcher l'icône d'être cliquable
    // Création de l'icône "fa-trash-can" pour la suppression
    const divTrash = document.createElement("div");
    divTrash.style.width = "15px";
    divTrash.style.height = "15px";
    divTrash.style.top = "10px";
    divTrash.style.right = "8px";
    divTrash.style.backgroundColor = "black";
    divTrash.style.position = "absolute";

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash-can", "fa-xs", "trash-icon");
    deleteIcon.style.position = "absolute";
    deleteIcon.style.top = "8px";
    deleteIcon.style.right = "3px";
    deleteIcon.style.color = "white";
    deleteIcon.style.cursor = "pointer";
    // Ajout de l'événement de clic pour la suppression du projet
    deleteIcon.addEventListener("click", () => {
      // Appeler la fonction pour supprimer le projet avec l'ID spécifié
      deleteProject(imageData.id);
    });

    // Affiliation des éléments créés sur le DOM
    figure.appendChild(img);
    figure.appendChild(divTrash);
    figure.appendChild(divArrows);

    divTrash.appendChild(deleteIcon);
    divArrows.appendChild(arrowsIcon);
    galleryModale.appendChild(figure);
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
// Fonction pour supprimer un projet
async function deleteProject(projectId) {
  const apiUrl = `http://localhost:5678/api/works/1`;

  try {
    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      // Attendre que la suppression soit terminée
      await response.json();

      // Recharger la galerie modale mise à jour
      const galleryModale = document.querySelector("#modaleGalerie");
      galleryModale.innerHTML = ""; // Effacer le contenu actuel de la galerie modale
      gallerieModale(); // Recharger la galerie modale mise à jour
    } else {
      // Gérer les erreurs en cas d'échec de la suppression
      console.error("Erreur lors de la suppression du projet.");
    }
  } catch (error) {
    console.error("Erreur lors de la suppression du projet:", error);
  }
}

deleteProject();
