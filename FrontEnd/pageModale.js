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
  //lien Login
  const logOut = document.querySelector("#logout");
  //création du lien vers la page contact
  const lienLogin = document.createElement("a");
  lienLogin.href = "./index.html";
  lienLogin.innerText = "logout";
  document.querySelector("lienLogin");
  lienLogin.className = "liheader";
  logOut.appendChild(lienLogin);
}
navHeader();

// button accès à la  modale

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
    const figcaption = document.createElement("figcaption");
    figcaption.textContent = "éditer";
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
    arrowsIcon.style.pointerEvents = "none"; // Empêche l'icône d'être cliquable
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
      // Appele la fonction pour supprimer le projet avec l'ID spécifié
      deleteProject(imageData.id);
    });

    // Affiliation des éléments créés sur le DOM
    figure.appendChild(img);
    figure.appendChild(divTrash);
    figure.appendChild(divArrows);
    figure.appendChild(figcaption);
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

//création supp de la galerie non actif !!
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
// Fonction pour supprimer un projet avec confirmation avant delete complet!!
async function deleteProject(projectId) {
  const apiUrl = `http://localhost:5678/api/works/${projectId}`;

  try {
    const token = localStorage.getItem("accessToken"); // Récupération du token depuis le localStorage

    if (!token) {
      console.error("Token d'accès introuvable.");
      return;
    }

    // Affiche une boîte de dialogue de confirmation de delete
    const confirmation = window.confirm(
      "Êtes-vous sûr de vouloir supprimer ce projet ?"
    );

    if (confirmation) {
      // Si l'utilisateur clique sur "OK" dans la boîte de dialogue de confirmation = suppression effectuer
      const response = await fetch(apiUrl, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`, // Ajoute le token d'accès dans l'en-tête de la requête
        },
      });

      if (response.ok) {
        //Attend que la suppression soit terminée
        await response.json();

        //Recharge la galerie modale "mise à jour"
        const galleryModale = document.querySelector("#modaleGalerie");
        galleryModale.innerHTML = ""; //Effacer le contenu actuel de la galerie modale
        gallerieModale(); //Recharger la galerie modale mise à jour
      } else {
        //Gére les erreurs en cas d'échec de la suppression
        console.error("Erreur lors de la suppression du projet.");
      }
    } else {
      // Si l'utilisateur clique sur "Annuler" dans la boîte de dialogue de confirmation, annuler la suppression
      console.log("Suppression annulée.");
    }
  } catch (error) {
    console.error("Erreur lors de la suppression du projet:", error);
  }
}
// Sélection du bouton "ajouter une photo" par son sélecteur dans l'élément ayant l'ID "modale-wrapper"
const boutonAjouterPhoto = document.querySelector("#modale-wrapper button");

// Fonction qui s'exécute lorsque le bouton est cliqué
function onClickAjouterPhoto() {
  const modal = document.getElementById("modale");
  const modalPush = document.getElementById("modale-push");

  if (modal && modalPush) {
    modal.style.display = "none"; // Cache la modal "modale"
    modalPush.style.display = "block"; // Affiche la modal "modale-push"
  } else {
    console.error("Les modals n'ont pas été trouvées.");
  }
}

// Ajoute un eventlistener pour écouter le clic sur le bouton "ajouter une photo"
boutonAjouterPhoto.addEventListener("click", onClickAjouterPhoto);

// création modal ajout photo
const modalePush = document.querySelector("#modale-ajout");
//bouton escape
const escapeModale2 = document.querySelector("#escapeModale2");
escapeModale2.href = "./page1.html";
//design div ajout photo
const ajoutPhoto = document.querySelector("#ajout-photo");
//création du bouton ajout photo +design
const buttonAjoutPhoto = document.createElement("button");
ajoutPhoto.appendChild(buttonAjoutPhoto);
buttonAjoutPhoto.textContent = "+ Ajouter photo";
buttonAjoutPhoto.classList.add("buttonAjouter");
// Ajoute un event listener au bouton "Ajouter photo" pour écouter le clic
buttonAjoutPhoto.addEventListener("click", () => {
  // Clique sur l'élément input de type file
  champImage.click();
});

//ajout de l'icone country
const faMountain = document.querySelector("#faMountain");
faMountain.classList.add("faMountain");
//ajout texte info chargement photo
const infosPhoto = document.createElement("p");
infosPhoto.textContent = "jpg, png : 4mo max";
infosPhoto.classList.add("infosPhoto");
ajoutPhoto.appendChild(infosPhoto);
//ajout du border
const borderAjoutPhoto = document.createElement("p");
borderAjoutPhoto.classList.add("borderModale");
borderAjoutPhoto.style.marginTop = "250px";
ajoutPhoto.appendChild(borderAjoutPhoto);
// ajout du bouton Valider
const buttonValider = document.createElement("button");
buttonValider.classList.add("buttonValider");
buttonValider.style.marginTop = "20px";
buttonValider.textContent = "Valider";
ajoutPhoto.appendChild(buttonValider);

// Création de la div qui contiendra l'image sélectionnée
const imageContainer = document.createElement("div");
imageContainer.classList.add("image-container");
ajoutPhoto.appendChild(imageContainer);

// Création d'un élément img pour afficher l'image sélectionnée
const imageSelectionnee = document.getElementById("imageSelectionnee");
imageSelectionnee.style.display = "none"; // Masquer l'élément par défaut
imageContainer.appendChild(imageSelectionnee);

// Ajout d'un event listener sur l'élément input de type file pour écouter les changements
champImage.addEventListener("change", handleImageSelection);

// Fonction appelée lorsque l'utilisateur sélectionne une image
function handleImageSelection() {
  const file = champImage.files[0]; // Récupére le fichier sélectionné

  // Vérifie si un fichier a été sélectionné
  if (file) {
    // Création d'un objet URL pour afficher l'image sélectionnée
    const imageURL = URL.createObjectURL(file);

    // Affichage de l'image dans l'élément img
    imageSelectionnee.src = imageURL;
    imageSelectionnee.style.display = "block"; // Affiche l'élément img
    imageSelectionnee.style.width = "129px";
    imageSelectionnee.style.height = "169px";
    imageSelectionnee.style.margin = "auto";
    buttonAjoutPhoto.style.display = "none"; // Masque le bouton "Ajouter photo"
    faMountain.style.display = "none"; // Masque l'icône "faMountain"
    infosPhoto.style.display = "none"; // Masque les informations de chargement
  } else {
    // Si aucun fichier n'a été sélectionné, masquer l'élément img et afficher le bouton, l'icône et les informations de chargement
    imageSelectionnee.style.display = "none";
    buttonAjoutPhoto.style.display = "block";
    faMountain.style.display = "block";
    infosPhoto.style.display = "block";
  }
}

// Ajout de la fonction pour récupérer les catégories de l'API
async function ficheCategories() {
  const urlCategories = "http://localhost:5678/api/categories";
  try {
    const response = await fetch(urlCategories, init);
    if (response.ok) {
      const categories = await response.json();
      const selectCategory = document.getElementById("category");
      // Parcourir les catégories et créer les options pour le sélecteur
      categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category.id;
        option.textContent = category.name;
        selectCategory.appendChild(option);
      });
    } else {
      console.error("Erreur lors de la récupération des catégories.");
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories:", error);
  }
}

ficheCategories();

async function envoyerNouvelleRessource() {
  // Récupére les valeurs des champs du formulaire
  const titre = document.querySelector("#title").value;
  const categorieId = document.querySelector("#category").value;

  // Vérifie si une image a été sélectionnée
  if (!champImage.files[0]) {
    alert("Veuillez sélectionner une image.");
    return;
  }

  // Crée un objet FormData pour envoyer les données via une requête POST avec multipart/form-data
  const formData = new FormData();
  formData.append("image", champImage.files[0]);
  formData.append("title", titre);
  formData.append("category", categorieId);

  // Récupére le token d'accès depuis le localStorage (assurez-vous que le token est correctement stocké lors de l'authentification)
  const token = localStorage.getItem("accessToken");
  if (!token) {
    console.error("Token d'accès introuvable.");
    return;
  }

  // Effectue la requête POST à l'API avec le token d'accès dans l'en-tête
  const url = "http://localhost:5678/api/works";
  const init = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  };

  try {
    const response = await fetch(url, init);

    if (response.ok) {
      // Si la création de la ressource est réussie, recharge la galerie modale pour afficher la nouvelle ressource
      const galleryModale = document.querySelector("#modaleGalerie");
      galleryModale.innerHTML = ""; // Efface le contenu actuel de la galerie modale
      gallerieModale(); // Recharge la galerie modale mise à jour
      alert("Nouvelle ressource créée avec succès !");
    } else {
      alert("Erreur lors de la création de la ressource.");
    }
  } catch (error) {
    alert("Erreur lors de la création de la ressource:", error);
  }
}

buttonValider.addEventListener("click", envoyerNouvelleRessource);
