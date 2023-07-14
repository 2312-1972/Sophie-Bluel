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

//effacement de la zone introduction et portfolio
document.querySelector("#introduction").remove();
document.querySelector("#portfolio").remove();

//vérification si j'interviens bien sur le DOM
//document.write("ca marche");

// Projets.onclick =()=>{
//     return confirm ("retour vers mes projets")
// };
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





