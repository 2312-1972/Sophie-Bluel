// ajout dynamique de la barre de naviguation
function navHeader() {
  // création dynamique de la nav header +liens actifs//
  //lien projet
  const liProjets = document.querySelector("#projets");
  //création du lien vers la page projets
  const lienProjets = document.createElement("a");
  lienProjets.href = "./index.html";
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
  const liLogin = document.querySelector("#login");
  //création du lien vers la page contact
  const lienLogin = document.createElement("a");
  lienLogin.href = "#";
  lienLogin.innerText = "login";
  document.querySelector("lienLogin");
  lienLogin.className = "liheader";
  liLogin.appendChild(lienLogin);
}
navHeader();

//j'efface de façon dynamique  la zone introduction et portfolio
document.querySelector("#introduction").remove();
document.querySelector("#portfolio").remove();
///////////////////////////////////////////////////
//test de vérification si j'interviens bien sur le DOM
//document.write("ca marche");
//////////////////////////////////////////////////

//création du bouton se connecter
const buttons = document.createElement("div");
// Ajout d'une classe pour le style CSS
buttons.classList.add("buttons");
buttons.style.paddingTop = "30px";
const seConnecter = document.createElement("button");
seConnecter.textContent = "Se connecter";
buttons.appendChild(seConnecter);
//position du bouton après la zone input du login
document.querySelector("#contact").append(buttons);

const lostMdpBlock = document.createElement("div");
const lostMdp = document.createElement("a");
lostMdp.href = "./index.html";
lostMdp.textContent = "Mot de passe oublié";
lostMdp.style.paddingLeft = "20px";
lostMdp.id = "lost";

contact.appendChild(lostMdpBlock);
lostMdpBlock.appendChild(lostMdp);

const footer = document.querySelector("footer");
//console.log(footer);

const navFooter = document.createElement("nav");
navFooter.id = "#navFooter";
const ulFooter = document.createElement("ul");
ulFooter.id = "#ulFooter";
const liFooter = document.createElement("li");
const lienLiFooter = document.createElement("a");
lienLiFooter.textContent = "Mentions légales";
lienLiFooter.style.paddingTop = "100px";
lienLiFooter.id = "#LiFooter";
lienLiFooter.href = "#";
document.querySelector("liFooter");
lienLiFooter.className = "navfooter";

footer.appendChild(navFooter);
navFooter.appendChild(ulFooter);
ulFooter.appendChild(liFooter);
liFooter.appendChild(lienLiFooter);

let a = document.querySelector("#lost");
a.onclick = () => {
  return confirm("Mot de passe Oublié");
};

////////////////////////////////////////////////
//             code de connection
///////////////////////////////////////////////
// Mise à jour de la fonction callLogin() pour utiliser la méthode POST
//+ corps de la requête +stockage du token
// Définition de l'URL de l'API pour la connexion
const urlLogin = "http://localhost:5678/api/users/login";

// Fonction pour effectuer la requête POST de connexion
async function callLogin(email, password) {
  try {
    const response = await fetch(urlLogin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    if (response.ok) {
      const data = await response.json();
      const token = data.token; // Récupération du token depuis les données de la réponse
      // vérif du token
      console.log(token);
    } else {
      throw new Error("Impossible de contacter le serveur");
    }
  } catch (error) {
    console.error(error);
  }
}

// Récupération des champs d'entrée d'email et de mot de passe
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Récupération du bouton "Se connecter"
const seConnecterButton = document.querySelector(".buttons button");

// Ajout d'un gestionnaire d'événement au clic sur le bouton "Se connecter"
seConnecterButton.addEventListener("click", async () => {
  try {
    const email = emailInput.value;
    const password = passwordInput.value;

    await callLogin(email, password);
  } catch (error) {
    console.error(error);
  }
});
