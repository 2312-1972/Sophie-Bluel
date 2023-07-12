// let categories = new Set();
// categories.add({ id: 0, name: "Tous" });
// let filters = document.querySelector(".filters");
// let articles = [];

const apiCategories = "http://localhost:5678/api/categories";




const Categories = async () => {
  const response = await fetch(apiCategories);
  if (response.ok === true) {
    return response.json();
  } else {
    reject(new Error("Impossible de contacter le serveur"));
  }
};

const categoryDisplay = async () => {
  const categories = await Categories();
  const portfolio = document.querySelector("#portfolio");
  //bouton Tous
  const allButton = document.createElement("button");
  allButton.textContent = "Tous";
  allButton.dataset.categoryId = "all";
  allButton.addEventListener("click", () => {
    // const tous = allButton.dataset.categoryId;
    console.log(categories.filter((All) => "all"));
  });

  //////////////////////////////////////////

  const title = portfolio.querySelector("h2");
  const buttons = document.createElement("div");
  // Ajout d'une classe pour le style CSS
  buttons.classList.add("buttons");

  // Ajout du bouton "Tous" au début  des boutons
  buttons.appendChild(allButton);

  //autre solution mais je ne trouve pas comment filter
  // ajout des boutons Objets, Appartements, Hotels & restaurants
  categories.forEach((catData) => {
    const button = document.createElement("button");
    button.textContent = catData.name;
    button.dataset.categoryId = catData.id;

    button.addEventListener("click", () => {
      //     //   const buton = button;
      //     //   .dataset.categoryId;

      console.log(categories.filter((articles) => articles.name !="Objets"));
    //   console.log(categories.filter((articles) => articles.name === "Appartements"));
    //   console.log(categories.filter((articles) => articles.name === "Hotels & restaurants"));
     });

    buttons.appendChild(button);
  });
  // j'insère les  boutons juste avant les projets
  portfolio.insertBefore(buttons, title.nextElementSibling);
};

categoryDisplay();
