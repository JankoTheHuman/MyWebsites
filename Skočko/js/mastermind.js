let trenutniRed = 0;
let trenutnaKolona = 0;
let znakovi = ["poo", "heart", "leaf", "diamond", "star", "clover"]
let trazenaKombinacija = [];


(function () {
    for (let i = 0; i < 4; i++) {
        let randomIndex = Math.floor(Math.random() * znakovi.length);
        trazenaKombinacija.push(znakovi[randomIndex]);
    }
})();

console.log(trazenaKombinacija)

function ubaciZnak(znakStr) {

    let blok = document.getElementById("pogadjanje").children[trenutniRed].children[trenutnaKolona]


    ispisiIkone(znakStr, blok);


    trenutnaKolona++;
    if (trenutnaKolona == 4) {
        trenutnaKolona = 0;
        proveriPogodjenost();
        trenutniRed++;

    }




    if (trenutniRed == 6) {

        kraj();


    }

}



function prikaziResenje() {

    let i = 0;
    let resenjeRed = document.getElementById("resenje").firstElementChild.children
    resenjeRed = Array.from(resenjeRed)

    resenjeRed.forEach(function (element) {
        ispisiIkone(trazenaKombinacija[i], element)
        i++;
    });
}


function ispisiIkone(znak, blok) {

    switch (znak) {
        case "poo":
            blok.innerHTML = '<i name="poo" class="fa-solid fa-poo"></i>'
            break;

        case "heart":
            blok.innerHTML = '<i name="heart" class="fa-solid fa-heart"></i>'
            break;

        case "clover":
            blok.innerHTML = '<i name="clover" class="fa-solid fa-clover"></i>'
            break;

        case "diamond":
            blok.innerHTML = '<i name="diamond" class="fa-solid fa-diamond"></i>'
            break;

        case "leaf":
            blok.innerHTML = '<i name="leaf" class="fa-solid fa-leaf"></i>'
            break;

        case "star":
            blok.innerHTML = '<i name="star" class="fa-solid fa-star"></i>'
            break;

        default:
            console.log("switch nije dobar");

    }
}


function obrisiPoslednjiUnos() {
    if (!(trenutnaKolona == 0)) {

        let blok = document.getElementById("pogadjanje").children[trenutniRed].children[trenutnaKolona - 1].innerHTML = ""
        trenutnaKolona--;
    }
}


function osveziStranu() {
    location.reload();
}



function proveriPogodjenost() {
    let decaReda = document.getElementById("pogadjanje").children[trenutniRed].children;
    let pokusaniZnakovi = [];
    let i = 0;
    let tacnoPogodjeno = 0;
    let postoji = 0;
    let j = 0;
    let trazenaKombinacijaKopija = [...trazenaKombinacija]

    for (i = 0; i < 4; i++) {
        pokusaniZnakovi[i] = decaReda[i].firstElementChild.getAttribute("name");
    }

    let pokusaniZnakoviOstatak = [];

    for (i = 0; i < 4; i++) {
        if (pokusaniZnakovi[i] == trazenaKombinacijaKopija[i]) {
            tacnoPogodjeno++;
            trazenaKombinacijaKopija[i] = "1";
        } else {
            pokusaniZnakoviOstatak.push(pokusaniZnakovi[i]);
        }
    }

    for (i = 0; i < pokusaniZnakoviOstatak.length; i++) {
        for (j = 0; j < trazenaKombinacijaKopija.length; j++) {
            if (pokusaniZnakoviOstatak[i] == trazenaKombinacijaKopija[j]) {
                postoji++;
                trazenaKombinacijaKopija[j] = "1";
                pokusaniZnakoviOstatak[i] = "0";
            }
        }
    }

    console.log("Tacno pogodjenih: " + tacnoPogodjeno)
    console.log("Postoje: " + postoji)


    let redBojenjaPogodjenih = document.getElementById("pogodjeno").children[trenutniRed].children;

    if (tacnoPogodjeno == 4) {
        kraj();
    }

    for (i = 0; i < 4; i++) {
        if (tacnoPogodjeno > 0) {
            redBojenjaPogodjenih[i].style.backgroundColor = "red";
            tacnoPogodjeno--;
        } else if (postoji > 0) {
            redBojenjaPogodjenih[i].style.backgroundColor = "yellow";
            postoji--;
        } else {
            redBojenjaPogodjenih[i].style.backgroundColor = "white";
        }
    }

    

}



function kraj() {
    prikaziResenje();
    let ikone = document.getElementById("znakovi").firstElementChild.children
    ikone = Array.from(ikone)

    ikone.forEach(function (element) {
        element.removeAttribute('onclick');
    });
}