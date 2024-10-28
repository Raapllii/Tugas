let skorPemain1 = 0;
let skorPemain2 = 0;
let skorSementara = 0;
let giliranPemain1 = true;

const skorPemain1El = document.getElementById("score-0");
const skorPemain2El = document.getElementById("score-1");
const skorSementaraEl1 = document.getElementById("current-0");
const skorSementaraEl2 = document.getElementById("current-1");
const giliranEl = document.querySelector(".giliran-main");
const tombolPutarDadu = document.getElementById("btn-putar");
const tombolTahan = document.getElementById("btn-tahan");
const tombolGameBaru = document.getElementById("btn-baru");
const diceEl = document.querySelector(".dice");

function tampilkanSkor() {
    skorPemain1El.textContent = skorPemain1;
    skorPemain2El.textContent = skorPemain2;
    skorSementaraEl1.textContent = giliranPemain1 ? skorSementara : 0;
    skorSementaraEl2.textContent = giliranPemain1 ? 0 : skorSementara;
    giliranEl.textContent = giliranPemain1 ? "Giliran: Pemain 1" : "Giliran: Pemain 2";
}

function mulaiUlang() {
    skorPemain1 = 0;
    skorPemain2 = 0;
    skorSementara = 0;
    giliranPemain1 = true;
    tampilkanSkor();
    diceEl.classList.add("hidden");
    document.getElementById("section-0").classList.add("player-active");
    document.getElementById("section-1").classList.remove("player-active");
}

function ubahGiliran() {
    skorSementara = 0;
    giliranPemain1 = !giliranPemain1;
    tampilkanSkor();
    document.getElementById("section-0").classList.toggle("player-active", giliranPemain1);
    document.getElementById("section-1").classList.toggle("player-active", !giliranPemain1);
}

function cekSiapaMenang() {
    if (skorPemain1 >= 100) {
        alert("Pemain 1 Menang!");
        mulaiUlang();
    } else if (skorPemain2 >= 100) {
        alert("Pemain 2 Menang!");
        mulaiUlang();
    }
}

tombolPutarDadu.onclick = function () {
    let dadu = Math.floor(Math.random() * 6) + 1;
    diceEl.src = "./images/dadu-" + dadu + ".png";
    diceEl.classList.remove("hidden");

    if (dadu === 1) {
        skorSementara = 0;
        ubahGiliran();
    } else {
        skorSementara += dadu;
    }

    tampilkanSkor();
};

tombolTahan.onclick = function () {
    if (giliranPemain1) {
        skorPemain1 += skorSementara;
    } else {
        skorPemain2 += skorSementara;
    }

    cekSiapaMenang();
    ubahGiliran();
};

tombolGameBaru.onclick = mulaiUlang;

mulaiUlang();
