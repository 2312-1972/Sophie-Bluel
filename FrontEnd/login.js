const urlLogin = "http://localhost:5678/api/users/login";

// Fonction pour effectuer la requête POST et récupérer le token
async function getLoginToken(email, password) {
  const body = JSON.stringify({ email, password });

  try {
    const response = await fetch(urlLogin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: body,
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message);
    }

    const data = await response.json();
    return data.token;
  } catch (error) {
    throw new Error("Impossible de contacter le serveur");
  }
}

// Fonction pour effectuer la connexion et rediriger vers la page1.html
// Fonction pour effectuer la connexion et rediriger vers la page1.html
async function connectAndRedirect() {
  try {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const email = emailInput.value;
    const password = passwordInput.value;

    // Récupérer le token en utilisant les identifiants entrés par l'utilisateur
    const token = await getLoginToken(email, password);

    // Vérifier si le token a été récupéré avec succès
    if (token) {
      // Stocker le token dans le localStorage
      localStorage.setItem("accessToken", token);

      console.log("Connexion réussie !");
      window.location.href = "page1.html"; // Redirige vers la page1.html après la connexion réussie
    } else {
      console.error("Identifiants incorrects");
    }
  } catch (error) {
    console.error("Erreur lors de la connexion:", error.message);
  }
}
connectAndRedirect()
// Fonction pour ajouter la barre de navigation
function navHeader() {
  // Création dynamique de la nav header + liens actifs
  // Lien projet
  const liProjets = document.querySelector("#projets");
  const lienProjets = document.createElement("a");
  lienProjets.href = "./index.html";
  lienProjets.innerText = "projets";
  lienProjets.className = "liheader";
  liProjets.appendChild(lienProjets);

  // Lien contact
  const liContact = document.querySelector("#contacter");
  const lienContact = document.createElement("a");
  lienContact.href = "#";
  lienContact.innerText = "contact";
  lienContact.className = "liheader";
  liContact.appendChild(lienContact);

  // Lien Login
  const liLogin = document.querySelector("#login");
  const lienLogin = document.createElement("a");
  lienLogin.href = "#";
  lienLogin.innerText = "login";
  lienLogin.className = "liheader";
  liLogin.appendChild(lienLogin);
}

// Appel à la fonction navHeader() pour ajouter la barre de navigation
navHeader();

// J'efface de façon dynamique la zone introduction et portfolio
document.querySelector("#introduction").remove();
document.querySelector("#portfolio").remove();

// Création du bouton "Se connecter"
const buttons = document.createElement("div");
buttons.classList.add("buttons");
buttons.style.paddingTop = "30px";
const seConnecterButton = document.createElement("button");
seConnecterButton.textContent = "Se connecter";
seConnecterButton.id = "seConnecter";
buttons.appendChild(seConnecterButton);
document.querySelector("#contact").append(buttons);

// Ajout du lien "Mot de passe oublié"
const lostMdpBlock = document.createElement("div");
const lostMdp = document.createElement("a");
lostMdp.href = "./index.html";
lostMdp.textContent = "Mot de passe oublié";
lostMdp.style.paddingLeft = "20px";
lostMdp.id = "lost";
contact.appendChild(lostMdpBlock);
lostMdpBlock.appendChild(lostMdp);

// Ajout de la navigation dans le footer
const footer = document.querySelector("footer");
const navFooter = document.createElement("nav");
navFooter.id = "navFooter";
const ulFooter = document.createElement("ul");
ulFooter.id = "ulFooter";
const liFooter = document.createElement("li");
const lienLiFooter = document.createElement("a");
lienLiFooter.textContent = "Mentions légales";
lienLiFooter.style.paddingTop = "100px";
lienLiFooter.id = "LiFooter";
lienLiFooter.href = "#";
liFooter.appendChild(lienLiFooter);
footer.appendChild(navFooter);
navFooter.appendChild(ulFooter);
ulFooter.appendChild(liFooter);

// Gestion de l'événement "Mot de passe oublié"
let a = document.querySelector("#lost");
a.onclick = () => {
  return confirm("Mot de passe Oublié");
};

// Ajoutez un événement de clic au bouton "Se connecter"
const seConnecter = document.getElementById("seConnecter");
seConnecter.addEventListener("click", connectAndRedirect);

// Appel à la fonction main() pour récupérer le token lors du chargement de la page
async function main() {
  try {
    const email = "sophie.bluel@test.tld";
    const password = "S0phie";
    const token = await getLoginToken(email, password);
    console.log("Token récupéré:", token);
  } catch (error) {
    console.error("Erreur lors de la récupération du token:", error.message);
  }
}

main();
