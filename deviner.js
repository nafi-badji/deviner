// boucle for

/* for (let i = 1; i < 10; i++) {
     console.log("bonjour");
 };

// // while

 let i = 1;
 while (i <  10) {
   console.log(i);
   i++;
 };

// // do...while

 let fruit = ["banane", "pomme", "orange", "mangue", "ananas"];
 do {
   console.log(fruit.length);
   i++;
 } while (i < 10);






// var texte = "j'apprends le JAVASCRIPT";

// var texteMin = texte.toLowerCase(); 
// var texteMaj = texte.toUpperCase();

// alert(
//   "Texte de base : " +
//     texte +
//     "\nTexte en miniscules : " +
//     texteMin +
//     "\nTexte en majuscules : " +
//     texteMaj
// );



// var min = Number.MIN_VALUE;
// var max = Number.MAX_VALUE;
// var infneg = Number.NEGATIVE_INFINITY;
// var infpos = Number.NEGATIVE_INFINITY;
// var notnumber = Number.NaN;


// alert('Min : ' + min +
//     '\nMax : ' + max +
//     '\nInfini négatif : ' + infneg +
//     '\nInfini positif : ' + infpos + 
//     '\nPas un nombre : ' + notnumber
// );



var t = true;
var f = false;
var d = new Date();

alert('True : ' + Number(t) +
       '\False : ' + Number(f) +
       '\nDate : ' + Number(d)
);*/


// objet

/*let personne = {

    prenom : "Nafissatou",
    nom : "Badji",
    age : 23,
    profession : "Développeuse web",
};
console.log(personne);

// Modifier la propriété "age"

personne.age = 25;

// Afficher l'objet modifié

console.log(personne);

// animal

let animal = {
    espèce : "Loup",
    couleur : "gris-noir",
    nombredepattes : 4,
};

console.log(animal);*/



// Générer un nombre aléatoire entre 10 et 100
let nombreSecret = Math.floor(Math.random() * 91) + 10;
let tentatives = 10;

// Fonction pour vérifier le nombre saisi par l'utilisateur
function verifierNombre() {
    // Récupérer la valeur saisie par l'utilisateur
    let guess = parseInt(document.getElementById("dev").value);
    let message = "";
    
    // Vérifier que le nombre est bien dans la plage autorisée
    if (isNaN(guess) || guess < 10 || guess > 100) {
        message = "Veuillez entrer un nombre valide entre 10 et 100.";
    } else {
        tentatives--; // Réduire le nombre d'essais restants

        // Comparer le nombre saisi au nombre secret
        if (guess === nombreSecret) {
            message = "Félicitations ! Vous avez trouvé le nombre secret en " + (10 - tentatives) + " coups.";
            document.getElementById("resultatFinal").innerHTML = message;
            document.getElementById("tentativesRestantes").innerHTML = "";
            return; // Fin du jeu, pas besoin de continuer
        } else if (guess > nombreSecret) {
            message = "Le nombre secret est plus petit.";
        } else {
            message = "Le nombre secret est plus grand.";
        }

        // Indiquer les tentatives restantes
        if (tentatives > 0) {
            message += " Il vous reste " + tentatives + " essais.";
        } else {
            message = "Désolé, vous avez utilisé tous vos essais. Le nombre secret était " + nombreSecret + ".";
            document.getElementById("tentativesRestantes").innerHTML = "";
            return; // Fin du jeu
        }
    }

    // Mettre à jour le message dans la page HTML
    document.getElementById("message").innerHTML = message;
    document.getElementById("tentativesRestantes").innerHTML = "Tentatives restantes : " + tentatives;
}