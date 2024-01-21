function c(str) {
    console.log(str);
}

function t(str) {
    console.log(typeof (str));
}



function sortAsc(objekat) {

    var i = 0;
    let temp = "";

    /* Kid je broj po kojoj koloni se sortira od 0 do 5, i taj podatak iz svakog tr se izvlaci  */
    let kid = objekat.getAttribute("name")



    /*  nizRedova je niz svih tr objekata odakle se kasnije izvlaci zeljeno dete*/
    let nizRedova = document.getElementById("myTable").getElementsByTagName("tr");

    let nizDece = [];

    let n = nizRedova.length;



    /* nizDece je svaki podatak iz svakog reda, tj svi podaci jedne kolone, kid je koja je to kolona u pitanju */
    for (i = 0; i < n; i++) {
        nizDece[i] = nizRedova[i].children[kid].innerHTML;
    }

    var swapped;


    do {
        swapped = false;
        for (i = 0; i < n - 1; i++) {
            if (nizDece[i] > nizDece[i + 1]) {
                swapped = true;

                temp = nizDece[i];
                nizDece[i] = nizDece[i + 1];
                nizDece[i + 1] = temp;

                /* kada god se zameni mesto u priveremenoj memoriji za nizDece to treba da se odrazi i
                 na inner HTMLu tih istih elemenata u koloni, sto znaci da treba da se skonta koji su 
                 elementi zamenjeni u odnosu na pravu kolonu */
                for (let j = 0; j < 6; j++) {
                    let prvaZamena = document.getElementById('myTable').getElementsByTagName('tr')[i].getElementsByTagName('td')[j];
                    let drugaZamena = document.getElementById('myTable').getElementsByTagName('tr')[i + 1].getElementsByTagName('td')[j];

                    temp = prvaZamena.innerHTML;
                    prvaZamena.innerHTML = drugaZamena.innerHTML;
                    drugaZamena.innerHTML = temp;
                }
            }
        }
        n--;
    } while (swapped);
}




function sortDesc(objekat) {

    var i = 0;
    let temp = "";

    /* Kid je broj po kojoj koloni se sortira od 0 do 5, i taj podatak iz svakog tr se izvlaci  */
    let kid = objekat.getAttribute("name")



    /*  nizRedova je niz svih tr objekata odakle se kasnije izvlaci zeljeno dete*/
    let nizRedova = document.getElementById("myTable").getElementsByTagName("tr");

    let nizDece = [];

    let n = nizRedova.length;



    /* nizDece je svaki podatak iz svakog reda, tj svi podaci jedne kolone, kid je koja je to kolona u pitanju */
    for (i = 0; i < n; i++) {
        nizDece[i] = nizRedova[i].children[kid].innerHTML;
    }

    var swapped;


    do {
        swapped = false;
        for (i = 0; i < n - 1; i++) {
            if (nizDece[i] < nizDece[i + 1]) {
                swapped = true;

                temp = nizDece[i];
                nizDece[i] = nizDece[i + 1];
                nizDece[i + 1] = temp;

                /* kada god se zameni mesto u priveremenoj memoriji za nizDece to treba da se odrazi i
                 na inner HTMLu tih istih elemenata u koloni, sto znaci da treba da se skonta koji su 
                 elementi zamenjeni u odnosu na pravu kolonu */
                for (let j = 0; j < 6; j++) {
                    let prvaZamena = document.getElementById('myTable').getElementsByTagName('tr')[i].getElementsByTagName('td')[j];
                    let drugaZamena = document.getElementById('myTable').getElementsByTagName('tr')[i + 1].getElementsByTagName('td')[j];

                    temp = prvaZamena.innerHTML;
                    prvaZamena.innerHTML = drugaZamena.innerHTML;
                    drugaZamena.innerHTML = temp;
                }
            }
        }
        n--;
    } while (swapped);
}













