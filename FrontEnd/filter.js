//console.log(callApi);
ficheTravaux();
let newset = [];

const categoryDisplay = async () => {
  const categoryId = await callApi();
  const portfolio = document.querySelector("#portfolio");

  //bouton Tous
  const allButton = document.createElement("button");
  allButton.textContent = "Tous";
  allButton.dataset.categoryId = "all";
  allButton.addEventListener("click", () => {
    const allFiltre = categoryId.filter((All) => "all");

    console.table(allFiltre);
  });

  //////////////////////////////////////////

  const title = portfolio.querySelector("h2");

  const buttons = document.createElement("div");
  // Ajout d'une classe pour le style CSS
  buttons.classList.add("buttons");
  buttons.style.marginTop = "30px";

  // Ajout du bouton "Tous" au début  des boutons
  buttons.appendChild(allButton);

  //ajout du bouton objets
  const objectButton = document.createElement("button");
  objectButton.textContent = "Objets";
  objectButton.dataset.categoryId = 1;

  objectButton.addEventListener("click", () => {
    const objetsFiltre = categoryId.filter(
      (categoryId) => categoryId.category.id === 1
    );

    console.table(objetsFiltre);
  });

  //ajout du bouton Appartements
  const appartementsButton = document.createElement("button");
  appartementsButton.textContent = "Appartements";
  appartementsButton.dataset.categoryId = 2;
  appartementsButton.addEventListener("click", () => {
    const appartementsFiltre = categoryId.filter(
      (categoryId) => categoryId.category.id === 2
    );
    console.table(appartementsFiltre);
  });
  //ajout du bouton Hotels & restaurants
  const hotelsRestaurantsButton = document.createElement("button");
  hotelsRestaurantsButton.textContent = "Hotels & restaurants";
  hotelsRestaurantsButton.dataset.categoryId = 3;
  hotelsRestaurantsButton.addEventListener("click", () => {
    const hotelsrestaurantsFiltre = categoryId.filter(
      (categoryId) => categoryId.category.id === 3
    );
    console.table(hotelsrestaurantsFiltre);
  });

  title.appendChild(buttons);
  buttons.appendChild(objectButton);
  buttons.appendChild(appartementsButton);
  buttons.appendChild(hotelsRestaurantsButton);

  // j'insère les  boutons juste avant les projets
  //document.querySelector("h2").prepend(buttons);
};

categoryDisplay();
