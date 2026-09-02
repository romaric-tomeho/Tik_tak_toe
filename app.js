function joueur(etat, pion, tab, btns) {

    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            if (btn.textContent == "" && etat.partieTerminée == false) {
                btn.textContent = pion.textContent;
                tab[Number(btn.dataset.ligne)][Number(btn.dataset.colonne)] = pion.textContent;
                if (verif(tab) != 0) {
                    pion.textContent = "Le gagnant est : "+verif(tab);
                    etat.partieTerminée = true;
                }
                else{
                    controPion(pion);
                    estComplet(tab, pion);

                }
            }
        });
    });
}


function rejouer(tab, btns, pion) {
    btns.forEach(btn=>{
        btn.textContent = "";
    });
    tab.forEach(ligne=>ligne.fill(""));
    pion.textContent = "x";

}

function estComplet(tab, pion) {
    if (!tab[0].includes("") && !tab[1].includes("") && !tab[2].includes("")) {
        pion.textContent = 'Match Null';
    }
}

function controPion(pion) {
    if (pion.textContent == "x") {
        pion.textContent = "o";
    }
    else {
        pion.textContent = "x"
    }
}

function verif(tab) {
    const parcour = [[0, -1], [0, 1], [-1, 0], [1, 0], [1, 1], [1, -1]];
    for (let index = 0; index < 3; index++) {
        for (let indey = 0; indey < 3; indey++) {
            for (let x = 0; x < 6; x++) {
                let ligne1 = index + parcour[x][0];
                let colonne1 = indey + parcour[x][1];
                let ligne2 = index + parcour[x][0] * 2;
                let colonne2 = indey + parcour[x][1] * 2;
                if (tab[index][indey] !="" && ligne1 >= 0 && colonne1 >= 0 && ligne1 < 3 && colonne1 < 3 && ligne2 >= 0 && colonne2 >= 0 && ligne2 < 3 && colonne2 < 3 && tab[ligne1][colonne1] == tab[index][indey] && tab[ligne2][colonne2] == tab[index][indey]) {
                    return tab[index][indey];
                }
            }
        }
    }
    return 0;
}

const btns = document.querySelectorAll("section button");
let tab = [["", "", ""],
["", "", ""],
["", "", ""]];
const pion = document.querySelector("p");
const rejoue = document.querySelector('.reset');
let etat =  {partieTerminée  : false};

joueur(etat, pion, tab, btns);
rejoue.addEventListener("click", () => {
    rejouer(tab, btns, pion);
    etat.partieTerminée = false;
    btns.forEach(btn=>{
        console.log(btn.textContent);
    });
    console.log(tab);
    console.log(partieTerminée);
});









