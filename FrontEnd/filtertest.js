const apiCategories = "http://localhost:5678/api/categories";

async function callApicategorie() {
  return new Promise((resolve, reject) => {
    fetch(apiCategories, init).then((response) => {
      if (response.ok) {
        resolve(response.json());
      } else {
        reject(new Error("Impossible de contacter le serveur"));
      }
    });
  });
}

const categoryDisplay = async () => {
  const categories = await callApicategorie();
  const portfolio = document.querySelector("#portfolio");

  //bouton Tous
  const allButton = document.createElement("button");
  allButton.textContent = "Tous";
  allButton.dataset.categoryId = "all";
  allButton.addEventListener("click", () => {
    console.log(categories.filter((All) => "all"));
  });

  //////////////////////////////////////////

  const title = portfolio.querySelector("h2");
  const buttons = document.createElement("div");
  // Ajout d'une classe pour le style CSS
  buttons.classList.add("buttons");

  // Ajout du bouton "Tous" au début  des boutons
  buttons.appendChild(allButton);

  //ajout du bouton objets
  const objectButton = document.createElement("button");
  objectButton.textContent = "Objets";
  objectButton.dataset.categoryId = 1;
  objectButton.addEventListener("click", () => {
    console.log(categories.filter((articles) => articles.name === "Objets"));
  });

  //ajout du bouton Appartements
  const appartementsButton = document.createElement("button");
  appartementsButton.textContent = "Appartements";
  appartementsButton.dataset.categoryId = 2;
  appartementsButton.addEventListener("click", () => {
    console.log(
      categories.filter((articles) => articles.name === "Appartements")
    );
  });
  //ajout du bouton Hotels & restaurants
  const hotelsRestaurantsButton = document.createElement("button");
  hotelsRestaurantsButton.textContent = "Hotels & restaurants";
  hotelsRestaurantsButton.dataset.categoryId = 3;
  hotelsRestaurantsButton.addEventListener("click", () => {
    console.log(
      categories.filter((articles) => articles.name === "Hotels & restaurants")
    );
  });
  buttons.appendChild(objectButton);
  buttons.appendChild(appartementsButton);
  buttons.appendChild(hotelsRestaurantsButton);

  // j'insère les  boutons juste avant les projets
  portfolio.insertBefore(buttons, title.nextElementSibling);
};

categoryDisplay();
