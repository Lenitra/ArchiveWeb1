"use strict";
console.log();

let c_lvl = document.getElementById("infcarbon").textContent.split(" ")[0] + ",";
let c_c = document.getElementById("infcarbon").textContent.split(" ")[1]+",";
let c_p = document.getElementById("infcarbon").textContent.split(" ")[2]+",";
let c_h = document.getElementById("infcarbon").textContent.split(" ")[3]+",";

document.getElementById("carbone").addEventListener('click', (evt) => createbuildinfos(`carbone,Mine Lunaire,../static/imgs/mining.png,La mine lunaire permet de récolter du carbone,` + c_lvl + c_c + c_p + c_h));

let p_lvl = document.getElementById("infpuces").textContent.split(" ")[0] + ",";
let p_c = document.getElementById("infpuces").textContent.split(" ")[1]+",";
let p_p = document.getElementById("infpuces").textContent.split(" ")[2]+",";
let p_h = document.getElementById("infpuces").textContent.split(" ")[3]+",";

document.getElementById("puces").addEventListener('click', (evt) => createbuildinfos(`puces,Raffinerie de puces,../static/imgs/factory.png,La raffinerie permet de confectionner des puces,` + p_lvl + p_c + p_p + p_h));


let h_lvl = document.getElementById("infhydro").textContent.split(" ")[0] + ",";
let h_c = document.getElementById("infhydro").textContent.split(" ")[1]+",";
let h_p = document.getElementById("infhydro").textContent.split(" ")[2]+",";
let h_h = document.getElementById("infhydro").textContent.split(" ")[3]+",";

document.getElementById("hydro").addEventListener('click', (evt) => createbuildinfos(`hydro,Centrale d'hydrogène,../static/imgs/powerplant.png,La centrale permet de produire de l'hydrogène,` + h_lvl + h_c + h_p + h_h));


let r_lvl = document.getElementById("infrad").textContent.split(" ")[0] + ",";
let r_c = document.getElementById("infrad").textContent.split(" ")[1]+",";
let r_p = document.getElementById("infrad").textContent.split(" ")[2]+",";
let r_h = document.getElementById("infrad").textContent.split(" ")[3]+",";

document.getElementById("rad").addEventListener('click', (evt) => createbuildinfos(`rad,Radar,../static/imgs/satellite.png,Le radar permet de se protéger de l'espionage,` + r_lvl + r_c + r_p + r_h));

let s_lvl = document.getElementById("infsp").textContent.split(" ")[0] + ",";
let s_c = document.getElementById("infsp").textContent.split(" ")[1]+",";
let s_p = document.getElementById("infsp").textContent.split(" ")[2]+",";
let s_h = document.getElementById("infsp").textContent.split(" ")[3]+",";

document.getElementById("sp").addEventListener('click', (evt) => createbuildinfos(`sp,Spatioport,../static/imgs/control-tower.png,Le spatioport permet de débloquer des vaisseaux et de les améliorer,` + s_lvl + s_c + s_p + s_h));


document.getElementById("Croiseur").addEventListener('click', (evt) => createvaissinfos(document.querySelector("#Croiseur>inf").textContent));
document.getElementById("Nanosonde").addEventListener('click', (evt) => createvaissinfos(document.querySelector("#Nanosonde>inf").textContent));
document.getElementById("Cargo").addEventListener('click', (evt) => createvaissinfos(document.querySelector("#Cargo>inf").textContent));
document.getElementById("Victoire").addEventListener('click', (evt) => createvaissinfos(document.querySelector("#Victoire>inf").textContent));
document.getElementById("Colonisateur").addEventListener('click', (evt) => createvaissinfos(document.querySelector("#Colonisateur>inf").textContent));




function clearpopupe(e){
    let elpop = document.getElementById("popup").childNodes;

    for (let index = 0; index < document.getElementById("popup").childNodes.length; index++) {
        document.getElementById("popup").removeChild(document.getElementById("popup").childNodes[0]);
    }

    document.getElementById("popup").classList.add("hide");
}


function clearpopup(){
    let elpop = document.getElementById("popup").childNodes;

    for (let index = 0; index < document.getElementById("popup").childNodes.length; index++) {
        document.getElementById("popup").removeChild(document.getElementById("popup").childNodes[0]);
    }

    document.getElementById("popup").classList.add("hide");

}


function createvaissinfos(bat) {

        clearpopup()
        console.log(bat);

// 0 Name
// 1 Nb possédés
// 2*3*4 prix
// 5 Lvl de sp pour unlock
// 6 power
// 7 Stockage

        let namevaiss = bat.split(";")[0];
        let nb = bat.split(";")[1];
        let price_c = bat.split(";")[2];
        let price_p = bat.split(";")[3];
        let price_h = bat.split(";")[4];
        let pow = bat.split(";")[6];
        let cargo = bat.split(";")[7];

        document.getElementById("popup").classList.remove("hide");
        document.getElementById("popup").innerHTML+=(`

        <div class="buildinfos">
            <header>
                <img id="cancel" src="../static/imgs/cancel.png">
                <h3>`+ namevaiss + `</h3>
                <p>Possédés : `+ nb + `</p>
                
            </header>

            
            <main>
                <img src="../static/imgs/`+ namevaiss +`.png"">

                <p>Puissance : `+ pow +`</p>
                <p>Stockage : `+ cargo +`</p>
                <ul>
                    <li>Fabrication : </li>

                    <li><img src="../static/imgs/carbon.png" alt="Carbone :">`+ price_c + `</li>
                    <li><img src="../static/imgs/cpu.png" alt="Puces :">`+ price_p + `</li>
                    <li><img src="../static/imgs/atome.png" alt="Hydrogène :">`+ price_h + `</li>


                </ul>
                <form action="/upship" method="POST" name="upship">
                    <input type="number" name="nb" min="0" value="1" required placeholder="Nombre de vaisseaux à créer">
                    <input class="hide" type="text" name="vinf" value="` + namevaiss + `">
                    <button type="submit" class="kave-btn" id="phang"><span class="kave-line"></span>Créer</button>
                </form>

            </main>

        </div>

    `);

    document.querySelector("#cancel").addEventListener('click', clearpopupe)
}


function createbuildinfos(bat) {

        clearpopup()


        let request = bat.split(",")[0];
        let namebat = bat.split(",")[1];
        let img = bat.split(",")[2];
        let desc = bat.split(",")[3];
        let lvl = bat.split(",")[4];
        let price_c = bat.split(",")[5];
        let price_p = bat.split(",")[6];
        let price_h = bat.split(",")[7];
        // document.write(`

        document.getElementById("popup").classList.remove("hide");
        document.getElementById("popup").innerHTML+=(`

        <div class="buildinfos">
            <header>
                <img id="cancel" src="../static/imgs/cancel.png">
                <h3>`+ namebat + `</h3>
                <p>Niv. `+ lvl + `</p>
                
            </header>

            
            <main>
                <img src="`+ img + `">
                <p>`+ desc + `</p>

                <ul>
                    <li>Amélioration : </li>

                    <li><img src="../static/imgs/carbon.png" alt="Carbone :">`+ price_c + `</li>
                    <li><img src="../static/imgs/cpu.png" alt="Puces :">`+ price_p + `</li>
                    <li><img src="../static/imgs/atome.png" alt="Hydrogène :">`+ price_h + `</li>


                </ul>

                <form action="/upbuild" method="POST" name="`+ request + `">
                    <input class="hide" type="text" name="bat" value="` + request + `">
                    <button type="submit" class="kave-btn" id="phang"><span class="kave-line"></span>Améliorer</button>
                </form>

            </main>

        </div>

    `);

    document.querySelector("#cancel").addEventListener('click', clearpopupe)
}
