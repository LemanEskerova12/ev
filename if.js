let ad = prompt("Adinizi qeyd edin: ");
let yas = prompt("Yasinizi qeyd edin: ");


if (yas < 6) {
    netice = 'Korpe';
} else {
    netice = 'Yeniyetme';
}

document.getElementById('genc').innerHTML = ad + ', sen ' + cavab + netice + ' sayilirsan';