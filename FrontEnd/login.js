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

//effacement de la zone introduction et portfolio
document.querySelector("#introduction").remove();
document.querySelector("#portfolio").remove();

//vérification si j'interviens bien sur le DOM
//document.write("ca marche");

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
contact.appendChild(lostMdpBlock);
lostMdpBlock.appendChild(lostMdp);

let a = document.querySelector("a");
a.onclick = () => {
  return confirm("Mot de passe Oublié");
};
