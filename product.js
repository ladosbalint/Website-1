for (let i = 1; i <= 28; i++) {
    let command = `let element${i};`;
    eval(command);
}

let item3 = `<div class="grid-item">
    <div class="main-category">Drótfonat</div>
    <div class="sub-category">Horganyzott</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item4 = `<div class="grid-item">
    <div class="main-category">Drótfonat</div>
    <div class="sub-category">Műanyaggal bevont</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item6 = `<div class="grid-item">
    <div class="main-category">Csirkeháló</div>
    <div class="sub-category">Horganyzott huzalból</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item7 = `<div class="grid-item">
    <div class="main-category">Csirkeháló</div>
    <div class="sub-category">Fekete huzalból</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item8 = `<div class="grid-item">
    <div class="main-category">Csirkeháló</div>
    <div class="sub-category">Műanyaggal bevont huzalból</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item10 = `<div class="grid-item">
    <div class="main-category">Szeg</div>
    <div class="sub-category">Huzalszeg</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item11 = `<div class="grid-item">
    <div class="main-category">Szeg</div>
    <div class="sub-category">Csavartszeg</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item12 = `<div class="grid-item">
    <div class="main-category">Szeg</div>
    <div class="sub-category">U-szeg</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item14 = `<div class="grid-item">
    <div class="main-category">Huzal</div>
    <div class="sub-category">Horganyzott lágyhuzal</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item15 = `<div class="grid-item">
    <div class="main-category">Huzal</div>
    <div class="sub-category">Horganyzott félkemény huzal</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item16 = `<div class="grid-item">
    <div class="main-category">Huzal</div>
    <div class="sub-category">Fekete lágyhuzal</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item17 = `<div class="grid-item">
    <div class="main-category">Huzal</div>
    <div class="sub-category">Bevonatlan keményhuzal</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item18 = `<div class="grid-item">
    <div class="main-category">Huzal</div>
    <div class="sub-category">Műanyaggal bevont huzal</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item19 = `<div class="grid-item">
    <div class="main-category">Ponthegesztett kerítés</div>
    <div class="sub-category">-</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item20 = `<div class="grid-item">
    <div class="main-category">Ponthegesztett háló</div>
    <div class="sub-category">-</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item21 = `<div class="grid-item">
    <div class="main-category">Huzalfeszítő</div>
    <div class="sub-category">-</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item22 = `<div class="grid-item">
    <div class="main-category">Szögesdrót</div>
    <div class="sub-category">-</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item23 = `<div class="grid-item">
    <div class="main-category">Ipari kerítés</div>
    <div class="sub-category">-</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item24 = `<div class="grid-item">
    <div class="main-category">Táblás kerítés</div>
    <div class="sub-category">-</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item25 = `<div class="grid-item">
    <div class="main-category">Oszlop</div>
    <div class="sub-category">-</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item27 = `<div class="grid-item">
    <div class="main-category">Rögzítő</div>
    <div class="sub-category">PVC rögzítő</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item28 = `<div class="grid-item">
    <div class="main-category">Rögzítő</div>
    <div class="sub-category">Fém rögzítő</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;

let parent;

function clearAll() {

    for (let i = 1; i <= 28; i++) {
        let command = `element${i}.classList.remove("focus-category");`;
        eval(command);
    }
}

function closeAll() {

    element3.classList.add("invisibility");
    element4.classList.add("invisibility");
    element6.classList.add("invisibility");
    element7.classList.add("invisibility");
    element8.classList.add("invisibility");
    element10.classList.add("invisibility");
    element11.classList.add("invisibility");
    element12.classList.add("invisibility");
    element14.classList.add("invisibility");
    element15.classList.add("invisibility");
    element16.classList.add("invisibility");
    element17.classList.add("invisibility");
    element18.classList.add("invisibility");
    element27.classList.add("invisibility");
    element28.classList.add("invisibility");

}

window.onload = () => {

    parent = document.getElementById("grid-parent");

    for (let i = 1; i <= 28; i++) {
        let command = `element${i} = document.getElementById("${i}");`;
        eval(command);

        if (i !== 1 && i !== 2 && i !== 5 && i !== 9 && i !== 13 && i !== 26) {
            command = `
                element${i}.addEventListener("click", () => {
                    clearAll();
                    element${i}.classList.add("focus-category");
                    parent.innerHTML = "";
                    parent.innerHTML += item${i};
                });`;
        } else {
            command = `
                element${i}.addEventListener("click", () => {
                    clearAll();
                    element${i}.classList.add("focus-category");
                });`;
        }

        eval(command);
    }

    element1.addEventListener("click", () => {
        closeAll();
        parent.innerHTML = "";
        parent.innerHTML += item3;
        parent.innerHTML += item4;
        parent.innerHTML += item6;
        parent.innerHTML += item7;
        parent.innerHTML += item8;
        parent.innerHTML += item10;
        parent.innerHTML += item11;
        parent.innerHTML += item12;
        parent.innerHTML += item14;
        parent.innerHTML += item15;
        parent.innerHTML += item16;
        parent.innerHTML += item17;
        parent.innerHTML += item18;
        parent.innerHTML += item19;
        parent.innerHTML += item20;
        parent.innerHTML += item21;
        parent.innerHTML += item22;
        parent.innerHTML += item23;
        parent.innerHTML += item24;
        parent.innerHTML += item25;
        parent.innerHTML += item27;
        parent.innerHTML += item28;
    });

    element2.addEventListener("click", () => {
        closeAll();
        element3.classList.remove("invisibility");
        element4.classList.remove("invisibility");

        parent.innerHTML = "";
        parent.innerHTML += item3;
        parent.innerHTML += item4;
    });

    element5.addEventListener("click", () => {
        closeAll();
        element6.classList.remove("invisibility");
        element7.classList.remove("invisibility");
        element8.classList.remove("invisibility");

        parent.innerHTML = "";
        parent.innerHTML += item6;
        parent.innerHTML += item7;
        parent.innerHTML += item8;
    });

    element9.addEventListener("click", () => {
        closeAll();
        element10.classList.remove("invisibility");
        element11.classList.remove("invisibility");
        element12.classList.remove("invisibility");

        parent.innerHTML = "";
        parent.innerHTML += item10;
        parent.innerHTML += item11;
        parent.innerHTML += item12;
    });

    element13.addEventListener("click", () => {
        closeAll();
        element14.classList.remove("invisibility");
        element15.classList.remove("invisibility");
        element16.classList.remove("invisibility");
        element17.classList.remove("invisibility");
        element18.classList.remove("invisibility");

        parent.innerHTML = "";
        parent.innerHTML += item14;
        parent.innerHTML += item15;
        parent.innerHTML += item16;
        parent.innerHTML += item17;
        parent.innerHTML += item18;
    });

    element26.addEventListener("click", () => {
        closeAll();
        element27.classList.remove("invisibility");
        element28.classList.remove("invisibility");

        parent.innerHTML = "";
        parent.innerHTML += item27;
        parent.innerHTML += item28;
    });
};
