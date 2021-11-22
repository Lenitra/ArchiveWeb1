// AU CHARGEMENT DE LA PAGE
hidevaiss()


// GESTION DES BOUTONS 

function checkbtns() {
    checkatta();
    checkesp();
    updatestatsflotteselect();
}


function updatestatsflotteselect() {
    let btn = document.querySelector("#Attaquer");
    let Scroiseur = parseInt(btn[2].value);
    let Snanosonde = parseInt(btn[3].value);
    let Scargo = parseInt(btn[4].value);
    let Svictoire = parseInt(btn[5].value);
    let Scolonisateur = parseInt(btn[6].value);

    let nbvaiss = Scroiseur + Snanosonde + Scargo + Svictoire + Scolonisateur;

    let Spower = (Scroiseur) * (Croiseur4) + (Scargo) * (Cargo4) + (Svictoire) * (Victoire4);

    let Sstock = (Scroiseur) * (Croiseur5) + (Scargo) * (Cargo5) + (Svictoire) * (Victoire5) + (Snanosonde) * (Nanosonde5) + (Scolonisateur) * (Colonisateur5);

    document.querySelector("#nbvaiss").textContent = "Vaissaux : " + nbvaiss;
    document.querySelector("#pow").textContent = "Puissance :" + Spower;
    document.querySelector("#stock").textContent = "Stockage : " + Sstock;
}


function checkatta() {
    let btn = document.querySelector("#Attaquer");
    if (btn[2].value == 0 && btn[3].value == 0 && btn[4].value == 0 && btn[5].value == 0 && btn[6].value == 0) {
        btn[11].classList.remove("kave-btn");
        btn[11].classList.add("kave-btnd");
        btn[11].setAttribute("disabled", "true");
        return 0;
    }
    if (btn[7].value != 0 || btn[9].value != 0 || btn[8].value != 0) {
        btn[11].classList.remove("kave-btn");
        btn[11].classList.add("kave-btnd");
        btn[11].setAttribute("disabled", "true");
        return 0;
    }
    // Quand l'attaque est dispo 
    else {
        btn[11].classList.remove("kave-btnd");
        btn[11].classList.add("kave-btn");
        btn[11].removeAttribute("disabled");
    }
}


function checkesp() {
    let btn = document.querySelector("#Espionner");
    // if (btn[2].value == 0 && btn[3].value == 0 && btn[4].value == 0 && btn[5].value == 0 && btn[6].value == 0) {
    //     btn[11].classList.remove("kave-btn");
    //     btn[11].classList.add("kave-btnd");
    //     btn[11].setAttribute("disabled", "true");
    //     return 0;
    // }
    if (btn[3].value == 0 || btn[9].value != 0 || btn[8].value != 0 || btn[7].value != 0 || btn[2].value != 0 || btn[4].value != 0 || btn[5].value != 0 || btn[6].value != 0) {
        btn[11].classList.remove("kave-btn");
        btn[11].classList.add("kave-btnd");
        btn[11].setAttribute("disabled", "true");
        return 0;
    }
    // Quand l'attaque est dispo 
    else {
        btn[11].classList.remove("kave-btnd");
        btn[11].classList.add("kave-btn");
        btn[11].removeAttribute("disabled");
    }
}





// // Clear les imputs des vaisseaux lors d'un changement de planète de départ
function val0() {
    let tores = [];
    for (let index = 0; index < document.querySelectorAll('#Croiseur').length; index++) {
        tores.push(document.querySelectorAll('#Croiseur')[index]);
    }
    for (let index = 0; index < document.querySelectorAll('#Cargo').length; index++) {
        tores.push(document.querySelectorAll('#Cargo')[index]);
    }
    for (let index = 0; index < document.querySelectorAll('#Colonisateur').length; index++) {
        tores.push(document.querySelectorAll('#Colonisateur')[index]);
    }
    for (let index = 0; index < document.querySelectorAll('#Nanosonde').length; index++) {
        tores.push(document.querySelectorAll('#Nanosonde')[index]);
    }
    for (let index = 0; index < document.querySelectorAll('#Victoire').length; index++) {
        tores.push(document.querySelectorAll('#Victoire')[index]);
    }   
    for (let index = 0; index < tores.length; index++) {
        tores[index].value = 0;
    }
    checkbtns()
}

// Cacher les vaisseaux des planètes non selectionnées
function hidevaiss(){
    let plavais = document.querySelectorAll("#vaisseaux");
    console.log(plavais);
    for (let index = 0; index < plavais.length; index++) {
        const e = plavais[index];
        e.classList.add("hide");
    }
}

// Gestion de l'affichage des vaisseaux et des ressources de la planète séléctionné (genre c'est le main)
function selectpla(element) {
    hidevaiss()
    val0()
    checkbtns()
    let val = element.options[element.options.selectedIndex].value;
    let vaisseaux = document.querySelectorAll("#vaisseaux");
    for (let index = 0; index < vaisseaux.length; index++) {
        if (vaisseaux[index].attributes["plaid"].value == val) {
            vaisseaux[index].classList.remove("hide");
            let plaa = document.querySelectorAll("#platta");
            for (let j = 0; j < plaa.length; j++) {
                plaa[j].value = val;   
            }
        } 
    }
}





let tmp = document.querySelectorAll("#platarg")
for (let index = 0; index < tmp.length; index++) {
    tmp[index].value = document.querySelector("h2").textContent.split("#")[1].split(" ")[0];

}

        // // Récupérer le nombre de CROISEURS
        let inputcrois = [];
        let crois = document.querySelectorAll('#Croiseur');
        for (let index = 0; index < crois.length; index++) {
            if (crois[index].classList.contains("hide")) {
            }
            else {
                inputcrois.push(crois[index])
            }
        }
        // // Update les inputs pour les forms finals
        for (let i = 0; i < inputcrois.length; i++) {
            inputcrois[i].addEventListener('change', (event) => {
                let a = document.querySelectorAll('#Croiseur');
                console.log(event.path[2].attributes["plaid"].value);
                for (let index = 0; index < a.length; index++) {
                    a[index].value = event.target.value;
                    checkbtns()
                }
            })
        };


        // // Récupérer le nombre de CARGO
        inputcrois = [];
        crois = document.querySelectorAll('#Cargo');
        for (let index = 0; index < crois.length; index++) {
            if (crois[index].classList.contains("hide")) {
            }
            else {
                inputcrois.push(crois[index])
            }
        }
        for (let i = 0; i < inputcrois.length; i++) {
            inputcrois[i].addEventListener('change', (event) => {
                let a = document.querySelectorAll('#Cargo');
                console.log(event.path[2].attributes["plaid"].value);
                for (let index = 0; index < a.length; index++) {
                    a[index].value = event.target.value;
                    checkbtns()
                }
            })
        };



        // // Récupérer le nombre de NANO-SONDES
        inputcrois = [];
        crois = document.querySelectorAll('#Nanosonde');
        for (let index = 0; index < crois.length; index++) {
            if (crois[index].classList.contains("hide")) {
            }
            else {
                inputcrois.push(crois[index])
            }
        }
        // // Update les inputs pour les forms finals
        for (let i = 0; i < inputcrois.length; i++) {
            inputcrois[i].addEventListener('change', (event) => {
                let a = document.querySelectorAll('#Nanosonde');
                console.log(event.path[2].attributes["plaid"].value);
                for (let index = 0; index < a.length; index++) {
                    a[index].value = event.target.value;
                    checkbtns()
                }
            })
        };



        // // Récupérer le nombre de VICTOIRES
        inputcrois = [];
        crois = document.querySelectorAll('#Victoire');
        for (let index = 0; index < crois.length; index++) {
            if (crois[index].classList.contains("hide")) {
            }
            else {
                inputcrois.push(crois[index])
            }
        }
        // // Update les inputs pour les forms finals
        for (let i = 0; i < inputcrois.length; i++) {
            inputcrois[i].addEventListener('change', (event) => {
                let a = document.querySelectorAll('#Victoire');
                console.log(event.path[2].attributes["plaid"].value);
                for (let index = 0; index < a.length; index++) {
                    a[index].value = event.target.value;
                    checkbtns()
                }
            })
        };



        inputcrois = [];
        crois = document.querySelectorAll('#Colonisateur');
        for (let index = 0; index < crois.length; index++) {
            if (crois[index].classList.contains("hide")) {
            }
            else {
                inputcrois.push(crois[index])
            }
        }
        // // Update les inputs pour les forms finals
        for (let i = 0; i < inputcrois.length; i++) {
            inputcrois[i].addEventListener('change', (event) => {
                let a = document.querySelectorAll('#Colonisateur');
                console.log(event.path[2].attributes["plaid"].value);
                for (let index = 0; index < a.length; index++) {
                    a[index].value = event.target.value;
                    checkbtns()

                }
            })
        };

hidevaiss()
let element = document.querySelector("div.select select")
let val = element.options[element.options.selectedIndex].value;
let vaisseaux = document.querySelectorAll("#vaisseaux");
for (let index = 0; index < vaisseaux.length; index++) {
    if (vaisseaux[index].attributes["plaid"].value == val) {
        vaisseaux[index].classList.remove("hide");
        let plaa = document.querySelectorAll("#platta");
        for (let j = 0; j < plaa.length; j++) {
            plaa[j].value = val;
        }
    }
}

