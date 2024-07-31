/* -----
En groupe de 2 ( mixe en terme de niveau )

Tic Tac Toe

Faire un morpion. 
L'utilisateur peut placer une croix dans la matrice ( en choisissant sur l'axe XY)
Si l'emplacement n'est pas libre, afficher un message d'erreur
Sinon, ajouter la croix, et donner son tour à l'ordinateur.
L'ordinateur "choisi" de manière random une position libre

Si trois formes identiques se suivent, le jeu est terminé. 

*/

let joueur = 1; // 1 pour joueur 1, 2 pour ordinateur
let lignes;
let colonnes;
let joueur1Mark;
let ordinateurMark;

let morpion = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

const afficherMorpion = () => {
    console.clear(); // Nettoie la console à chaque affichage pour une meilleure visibilité
    for (let i = 0; i < 3; i++) {
        console.log(morpion[i].join(' | '));
        if (i < 2) console.log('---------');
    }
};

const choisirSymbole = () => {
    joueur1Mark = prompt('Joueur 1, choisissez votre symbole ("X" ou "O")').toUpperCase();
    while (joueur1Mark !== "X" && joueur1Mark !== "O") {
        joueur1Mark = prompt('Symbole invalide. Joueur 1, choisissez "X" ou "O"').toUpperCase();
    }
    ordinateurMark = joueur1Mark === "X" ? "O" : "X";
};

const tourJoueur = () => {
    alert(`C'est le tour du joueur 1`);
    lignes = prompt('choisir la ligne 1, 2 ou 3') - 1;
    colonnes = prompt('choisir la colonne 1, 2 ou 3') - 1;

    if (morpion[lignes][colonnes] === "") {
        morpion[lignes][colonnes] = joueur1Mark;
        joueur = 2; // Passe au tour de l'ordinateur
    } else {
        alert('Case déjà prise, choisissez une autre case.');
        tourJoueur(); // Relance le tour du joueur
    }
};

const tourOrdinateur = () => {
    alert("C'est le tour de l'ordinateur");
    let choixFait = false;
    while (!choixFait) {
        lignes = Math.floor(Math.random() * 3);
        colonnes = Math.floor(Math.random() * 3);
        if (morpion[lignes][colonnes] === "") {
            morpion[lignes][colonnes] = ordinateurMark;
            choixFait = true;
            joueur = 1; // Passe au tour du joueur
        }
    }
};

const verifierVictoire = (mark) => {
    // Vérifie les lignes, colonnes et diagonales
    for (let i = 0; i < 3; i++) {
        if (morpion[i][0] === mark && morpion[i][1] === mark && morpion[i][2] === mark) return true;
        if (morpion[0][i] === mark && morpion[1][i] === mark && morpion[2][i] === mark) return true;
    }
    if (morpion[0][0] === mark && morpion[1][1] === mark && morpion[2][2] === mark) return true;
    if (morpion[0][2] === mark && morpion[1][1] === mark && morpion[2][0] === mark) return true;
    return false;
};

const matchNul = () => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (morpion[i][j] === "") return false;
        }
    }
    return true;
};


const lancer = () => {
    if (!joueur1Mark) choisirSymbole();

    if (joueur === 1) {
        tourJoueur();
        if (verifierVictoire(joueur1Mark)) {
            afficherMorpion();
            alert("Joueur 1 a gagné !");
            return;
        }
    } else if (joueur === 2) {
        tourOrdinateur();
        if (verifierVictoire(ordinateurMark)) {
            afficherMorpion();
            alert("L'ordinateur a gagné !");
            return;
        }
    }

    afficherMorpion();

    if (matchNul()) {
        alert("Match nul !");

        return;
    }
};


// const verif = () => {
//     if(morpion[lignes][colonnes] === 1){
//         alert('La case est deja prise')
//     }
// }


// const lancer = () => {
//         if (!joueur1Mark) choisirSymbole();
    
//         if (joueur === 1) {
//             tourJoueur();
//         } else if (joueur === 2) {
//             tourOrdinateur();
//         }
    
//         afficherMorpion();
//     };


// const lancer = () => {

//     if (joueur === 1 && !joueur1Mark) choisirSymbole();

//     alert(`C'est le tour du joueur ${joueur}`);

//     lignes = prompt('choisir la ligne 1, 2 ou 3')-1;
//     colonnes = prompt('choisir la colonnes 1, 2 ou 3')-1;

//     let mark = joueur === 1 ? joueur1Mark : ordinateurMark;
    
//     if(morpion[lignes][colonnes] === ""){
//         morpion[lignes].splice(colonnes,1,mark);
//         joueur = joueur === 1 ? 2 : 1; // Change de joueur
//     }else{
//         alert('Case déjà prise, choisissez une autre case.')
//     }
//     afficherMorpion();
// }

// morpion[0].splice(0,1,'O');
// morpion[1].splice(0,1,'O');
// morpion[2].splice(0,1,'O');

// morpion[0].splice(1,1,'X');
// morpion[1].splice(1,1,'X');
// morpion[2].splice(1,1,'X');

// morpion[0].splice(2,1,'C');
// morpion[1].splice(2,1,'C');
// morpion[2].splice(2,1,'C');