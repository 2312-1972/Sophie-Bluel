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
    // j'utilise l'opérateur de négation logique " ! ",
    //j'inverse donc le résultat de response.ok. me permettant
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

//  récupération du token
async function main() {
  try {
    const email = "sophie.bluel@test.tld";
    const password = "S0phie";
    const token = await getLoginToken(email, password);
    console.log("Token récupéré:", token);
  } catch (error) {
    console.error("Erreur lors de la récupération du token:", error.message);
  }
  // Fonction pour effectuer la connexion et rediriger vers la page1.html
  async function connectAndRedirect() {
    try {
      const email = "sophie.bluel@test.tld";
      const password = "S0phie";
      const token = await getLoginToken(email, password);
      console.log("Token récupéré:", token);

      // Redirige vers la page1.html après la connexion réussie
      window.location.href = "page1.html";
    } catch (error) {
      console.error("Erreur lors de la connexion:", error.message);
    }
  }

  // Ajoutez un événement de clic au bouton "Se connecter"
  seConnecter.addEventListener("click", connectAndRedirect);
}
main();
