"use strict";

// Global
    // Menu
    function Menu() {
        document.write(`

        <ul class="princi">

            <li>
                <form action="/jeu" method="POST" name="osef">
                    <button type="submit">Colonie</button>
                </form>
            </li>

            <li>
                <form action="/map" method="POST" name="osef">
                    <button type="submit">Map</button>
                </form>
            </li>

            <li>
                <form action="/messages" method="POST" name="osef">
                    <button type="submit" id="btnmsg">Messages</button>
                </form>
            </li>
            
            <li>
                <form action="/options" method="POST" name="osef">
                    <button type="submit">Options</button>
                </form>
            
            </li>

        </ul >
        
        `);
    }




function notifmsg() {
    let tmphide = document.getElementById("hasmsg");
    if (tmphide.textContent == "1") {
        let btn = document.getElementById("btnmsg");
        console.log(btn);
        btn.style.backgroundColor = "#01568b";
    }
}