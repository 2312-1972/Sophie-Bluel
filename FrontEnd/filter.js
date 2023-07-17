let newset = [];

const categoryDisplay = async () => {
  const categoryId = await callApi();
  const portfolio = document.querySelector("#portfolio");

  //bouton Tous
  const allButton = document.createElement("button");
  allButton.textContent = "Tous";
  allButton.dataset.categoryId = "all";
  allButton.addEventListener("click", () => {
    const allFiltre = categoryId.filter((All) => {
      return "all";
      
    });
    document.querySelector(".gallery").innerHTML = allFiltre;
    console.table(allFiltre);
  });

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
    
    const objetsFiltre = categoryId.filter((categoryId) => {
      return categoryId.category.id === 1;
    });
    // objetsFiltre.src = imageData.imageUrl;
    // objetsFiltre.dataset.categoryId = imageData.categoryId;
    // objetsFiltre.textContent = imageData.title;
    document.querySelector(".gallery").innerHTML = objetsFiltre;
    console.table(objetsFiltre);
    //genererFilter();

  });

  //ajout du bouton Appartements
  const appartementsButton = document.createElement("button");
  appartementsButton.textContent = "Appartements";
  appartementsButton.dataset.categoryId = 2;
  appartementsButton.addEventListener("click", () => {
    const appartementsFiltre = categoryId.filter((categoryId) => {
      return categoryId.category.id === 2;
    });
    document.querySelector(".gallery").innerHTML = appartementsFiltre;
    console.table(appartementsFiltre);
  });
  //ajout du bouton Hotels & restaurants
  const hotelsRestaurantsButton = document.createElement("button");
  hotelsRestaurantsButton.textContent = "Hotels & restaurants";
  hotelsRestaurantsButton.dataset.categoryId = 3;
  hotelsRestaurantsButton.addEventListener("click", () => {
    const hotelsrestaurantsFiltre = categoryId.filter((categoryId) => {
      return categoryId.category.id === 3;
    });
    document.querySelector(".gallery").innerHTML = hotelsrestaurantsFiltre;
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
