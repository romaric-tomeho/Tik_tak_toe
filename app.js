//Mode multijoueur
const entete = document.querySelector("p");
const btns = [...document.querySelectorAll("section button")];
const reset = document.querySelector('p button');
let partieTerminée = false;
let tab = [["", "", ""],
["", "", ""],
["", "", ""]];
let coln = 0;
let lin = 0;
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (partieTerminée == false) {

            if (btn.textContent == "") {
                lin = Number(btn.dataset.ligne);
                coln = Number(btn.dataset.colonne);
                tab[lin][coln] = entete.textContent;
                btn.textContent = entete.textContent;
                if (verif(tab) != 0) {
                    entete.textContent = "Le gagnant est : " + verif(tab);
                    partieTerminée = true;

                }
                else if (!tab[0].includes("") && !tab[1].includes("") && !tab[2].includes("")) {
                    entete.textContent = "Match nul !";
                }
                else {
                    if (entete.textContent == 'x') {
                        entete.textContent = 'o';
                    }
                    else {
                        entete.textContent = 'x';
                    }
                }

            }
        }
    });
});
reset.addEventListener("click", () => {
    reinitialise(btns);
    tab = [["", "", ""],
    ["", "", ""],
    ["", "", ""]];
    console.log(tab);
    entete.textContent = 'x';
    partieTerminée = false;
});


function reinitialise(btns) {
    btns.forEach(btn => {
        btn.textContent = "";
    });
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
                if (ligne1 >= 0 && colonne1 >= 0 && ligne1 < 3 && colonne1 < 3 && ligne2 >= 0 && colonne2 >= 0 && ligne2 < 3 && colonne2 < 3 && tab[ligne1][colonne1] == tab[index][indey] && tab[ligne2][colonne2] == tab[index][indey]) {
                    return tab[index][indey];
                }
            }
        }
    }
    return 0;
}
