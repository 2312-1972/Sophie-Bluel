//export {callApi};

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
};


//navHeader();

//création de la fonction asynchrone récupérant la promesse couplé a await
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
