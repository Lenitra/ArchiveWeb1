document.getElementById("news").innerHTML += n1;
document.getElementById("news").innerHTML += n2;
document.getElementById("news").innerHTML += n3;
document.getElementById("news").innerHTML += n4;
document.getElementById("news").innerHTML += n5;


document.getElementById("year").textContent = new Date().getFullYear();

let ele = [];


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
let slow = 35;
sleep(1000).then(() => {
    ele[0].style.width = "1vw";
    ele[1].style.width = "1vw";
    sleep(slow).then(() => {
        ele[0].style.width = "2vw";
        ele[1].style.width = "2vw";
        sleep(slow).then(() => {
            ele[0].style.width = "3vw";
            ele[1].style.width = "3vw";
            sleep(slow).then(() => {
                ele[0].style.width = "4vw";
                ele[1].style.width = "4vw";
                sleep(slow).then(() => {
                    ele[0].style.width = "5vw";
                    ele[1].style.width = "5vw";
                    sleep(slow).then(() => {
                        ele[0].style.width = "6vw";
                        ele[1].style.width = "6vw";
                        sleep(slow).then(() => {
                            ele[0].style.width = "7vw";
                            ele[1].style.width = "7vw";
                            sleep(slow).then(() => {
                                ele[0].style.width = "8vw";
                                ele[1].style.width = "8vw";
                                sleep(slow).then(() => {
                                    ele[0].style.width = "9vw";
                                    ele[1].style.width = "9vw";
                                    sleep(slow).then(() => {
                                        ele[0].style.width = "10vw";
                                        ele[1].style.width = "10vw";
                                        sleep(slow).then(() => {
                                            ele[0].style.width = "11vw";
                                            ele[1].style.width = "11vw";
                                            sleep(slow).then(() => {
                                                ele[0].style.width = "12vw";
                                                ele[1].style.width = "12vw";
                                                sleep(slow).then(() => {
                                                    ele[0].style.width = "13vw";
                                                    ele[1].style.width = "13vw";
                                                    sleep(slow).then(() => {
                                                        ele[0].style.width = "14vw";
                                                        ele[1].style.width = "14vw";
                                                        sleep(slow).then(() => {
                                                            ele[0].style.width = "15vw";
                                                            ele[1].style.width = "15vw";
                                                            sleep(slow).then(() => {

                                                            
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});


    let hr = document.querySelectorAll(".stats hr");
    for (let i = 0; i < hr.length; i++) {
        if (i % 2 != 0) {
            ele.push(hr[i]);
        }
    }


    for (var i = 0; i < 15; i++) {
        new Promise(resolve => setTimeout(resolve, 200));

    }


