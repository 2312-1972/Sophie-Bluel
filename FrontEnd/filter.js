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
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = ""; // Efface le contenu précédent

    allFiltre.forEach((item) => {
      const element = document.createElement("div");

      // Créer l'élément <img> pour afficher l'image
      const image = document.createElement("img");
      image.src = item.imageUrl;
      element.appendChild(image);

      // Ajouter le titre de l'élément
      const title = document.createElement("h3");
      title.textContent = item.title;
      element.appendChild(title);

      gallery.appendChild(element);
    });
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
    //   document.querySelector(".gallery").innerHTML = objetsFiltre;
    //   console.table(objetsFiltre);
    //   //genererFilter();

    // });
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = ""; // Efface le contenu précédent

    objetsFiltre.forEach((item) => {
      const element = document.createElement("div");

      // Créer l'élément <img> pour afficher l'image
      const image = document.createElement("img");
      image.src = item.imageUrl;
      element.appendChild(image);

      // Ajouter le titre de l'élément
      const title = document.createElement("h3");
      title.textContent = item.title;
      element.appendChild(title);

      gallery.appendChild(element);
    });
  });

  //ajout du bouton Appartements
  const appartementsButton = document.createElement("button");
  appartementsButton.textContent = "Appartements";
  appartementsButton.dataset.categoryId = 2;
  appartementsButton.addEventListener("click", () => {
    const appartementsFiltre = categoryId.filter((categoryId) => {
      return categoryId.category.id === 2;
    });
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = ""; // Efface le contenu précédent

    appartementsFiltre.forEach((item) => {
      const element = document.createElement("div");

      // Créer l'élément <img> pour afficher l'image
      const image = document.createElement("img");
      image.src = item.imageUrl;
      element.appendChild(image);

      // Ajouter le titre de l'élément
      const title = document.createElement("h3");
      title.textContent = item.title;
      element.appendChild(title);

      gallery.appendChild(element);
    });
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
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = ""; // Efface le contenu précédent

    hotelsrestaurantsFiltre.forEach((item) => {
      const element = document.createElement("div");

      // Créer l'élément <img> pour afficher l'image
      const image = document.createElement("img");
      image.src = item.imageUrl;
      element.appendChild(image);

      // Ajouter le titre de l'élément
      const title = document.createElement("h3");
      title.textContent = item.title;
      element.appendChild(title);

      gallery.appendChild(element);
    });
    console.table(hotelsrestaurantsFiltre);
  });

  title.appendChild(buttons);
  buttons.appendChild(objectButton);
  buttons.appendChild(appartementsButton);
  buttons.appendChild(hotelsRestaurantsButton);
};

categoryDisplay();
