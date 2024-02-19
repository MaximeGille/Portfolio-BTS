function affecran(x){
   var un;
   var deux;
   var trois;
   var quatre;
   if(x == 'projet'){
      un = "images/priorite.png";
      untxt = "Gestion des prioritées";
      deux = "images/politicien.png";
      deuxtxt = "Speech";
      trois = "images/la-communication.png";
      troistxt = "Communication";
      quatre = "images/gestion-de-projet.png";
      quatretxt = "Gestion de projet";
      titre = "Compétences Acquise 2021-2023";
   } else{
      un = "images/raiki_small.png";
      untxt = "Agrandir Structure";
      deux = "images/up-arrow.png";
      deuxtxt = "Améliorer mon Anglais";
      trois = "images/happy.png";
      troistxt = "Être Heureux";
      quatre = "images/controller.png";
      quatretxt = "Jouer au jeux Vidéo";
      titre = "Projets Futurs";
   }
   document.getElementById("emplacement-ecran").innerHTML =
   `
   <div id="main-ecran">
   <div id="ecran">
   <h1>${titre}</h1>
      <div id="inte-ecran">
         <div id="quitter" onclick="quitter()"><img src="images/croix.png"></div>
         <div>
         <div class='ecran-icon'>
            <img src="${un}">
            <h3>${untxt}</h3>
         </div>
         <div class='ecran-icon'>
            <img src="${deux}">
            <h3>${deuxtxt}</h3>
         </div>
         </div>
         <div>
         <div class='ecran-icon'>
            <img src="${trois}">
            <h3>${troistxt}</h3>
         </div>
         <div class='ecran-icon'>
            <img src="${quatre}">
            <h3>${quatretxt}</h3>
         </div>
         <div>
      </div>
   </div>
</div>`
}

function quitter(){
   document.getElementById("emplacement-ecran").innerHTML = "";
}