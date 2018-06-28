for (let i = 1; i <= 28; i++) {
    let command = `let element${i};`;
    eval(command);
}

let item1 = `<div class="grid-item" id="001">
    <div class="main-category">Drótfonat</div>
    <div class="sub-category">Horganyzott</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item2 = `<div class="grid-item" id="002">
    <div class="main-category">Drótfonat</div>
    <div class="sub-category">Műanyaggal bevont</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item3 = `<div class="grid-item" id="003">
    <div class="main-category">Csirkeháló</div>
    <div class="sub-category">Horganyzott huzalból</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item4 = `<div class="grid-item" id="004">
    <div class="main-category">Csirkeháló</div>
    <div class="sub-category">Fekete huzalból</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item5 = `<div class="grid-item" id="005">
    <div class="main-category">Csirkeháló</div>
    <div class="sub-category">Műanyaggal bevont huzalból</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item6 = `<div class="grid-item" id="006">
    <div class="main-category">Szeg</div>
    <div class="sub-category">Huzalszeg</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item7 = `<div class="grid-item" id="007">
    <div class="main-category">Szeg</div>
    <div class="sub-category">Csalettszeg</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item8 = `<div class="grid-item" id="008">
    <div class="main-category">Szeg</div>
    <div class="sub-category">U-szeg</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item9 = `<div class="grid-item" id="009">
    <div class="main-category">Huzal</div>
    <div class="sub-category">Horganyzott lágyhuzal</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item10 = `<div class="grid-item" id="010">
    <div class="main-category">Huzal</div>
    <div class="sub-category">Horganyzott félkemény huzal</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item11 = `<div class="grid-item" id="011">
    <div class="main-category">Huzal</div>
    <div class="sub-category">Fekete lágyhuzal</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item12 = `<div class="grid-item" id="012">
    <div class="main-category">Huzal</div>
    <div class="sub-category">Bevonatlan keményhuzal</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item13 = `<div class="grid-item" id="013">
    <div class="main-category">Huzal</div>
    <div class="sub-category">Műanyaggal bevont huzal</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item14 = `<div class="grid-item" id="014">
    <div class="main-category">Ponthegesztett kerítés</div>
    <div class="sub-category">-</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item15 = `<div class="grid-item" id="015">
    <div class="main-category">Ponthegesztett háló</div>
    <div class="sub-category">-</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item16 = `<div class="grid-item" id="016">
    <div class="main-category">Huzalfeszítő</div>
    <div class="sub-category">-</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item17 = `<div class="grid-item" id="017">
    <div class="main-category">Szögesdrót</div>
    <div class="sub-category">-</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item18 = `<div class="grid-item" id="018">
    <div class="main-category">Ipari kerítés</div>
    <div class="sub-category">-</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item19 = `<div class="grid-item" id="019">
    <div class="main-category">Táblás kerítés</div>
    <div class="sub-category">-</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item20 = `<div class="grid-item" id="020">
    <div class="main-category">Oszlop</div>
    <div class="sub-category">-</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item21 = `<div class="grid-item" id="021">
    <div class="main-category">Rögzítő</div>
    <div class="sub-category">PVC rögzítő</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
let item22 = `<div class="grid-item" id="022">
    <div class="main-category">Rögzítő</div>
    <div class="sub-category">Fém rögzítő</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;

let parent;

window.onload = () => {
    for (let i = 1; i <= 28; i++) {
        let command = `element${i} = document.getElementById("${i}");`;
        eval(command);
    }

    parent = document.getElementById("grid-parent");
};

function clearAll() {
    element1.classList.remove("focus-category");
    element2.classList.remove("focus-category");
    element5.classList.remove("focus-category");
    element9.classList.remove("focus-category");
    element13.classList.remove("focus-category");
    element19.classList.remove("focus-category");
    element20.classList.remove("focus-category");
    element21.classList.remove("focus-category");
    element22.classList.remove("focus-category");
    element23.classList.remove("focus-category");
    element24.classList.remove("focus-category");
    element25.classList.remove("focus-category");
    element26.classList.remove("focus-category");
}

function closeAll() {

    element3.classList.add("visibility");
    element4.classList.add("visibility");
    element6.classList.add("visibility");
    element7.classList.add("visibility");
    element8.classList.add("visibility");
    element10.classList.add("visibility");
    element11.classList.add("visibility");
    element12.classList.add("visibility");
    element14.classList.add("visibility");
    element15.classList.add("visibility");
    element16.classList.add("visibility");
    element17.classList.add("visibility");
    element18.classList.add("visibility");
    element27.classList.add("visibility");
    element28.classList.add("visibility");

}



function collapse() {
    clearAll();
    closeAll();
    element1.classList.add("focus-category");

    parent.innerHTML = "";
    parent.innerHTML += item1;
    parent.innerHTML += item2;
    parent.innerHTML += item3;
    parent.innerHTML += item4;
    parent.innerHTML += item5;
    parent.innerHTML += item6;
    parent.innerHTML += item7;
    parent.innerHTML += item8;
    parent.innerHTML += item9;
    parent.innerHTML += item10;
    parent.innerHTML += item11;
    parent.innerHTML += item12;
    parent.innerHTML += item13;
    parent.innerHTML += item14;
    parent.innerHTML += item15;
    parent.innerHTML += item16;
    parent.innerHTML += item17;
    parent.innerHTML += item18;
    parent.innerHTML += item19;
    parent.innerHTML += item20;
    parent.innerHTML += item21;
    parent.innerHTML += item22;
}


function drotfonat() {
    clearAll();
    closeAll();
    element2.classList.add("focus-category");

    element3.classList.remove("visibility");
    element4.classList.remove("visibility");

    parent.innerHTML = "";
    parent.innerHTML += item1;
    parent.innerHTML += item2;

}



function csirkehalo() {
    clearAll();
    closeAll();
    element5.classList.add("focus-category");

    element6.classList.remove("visibility");
    element7.classList.remove("visibility");
    element8.classList.remove("visibility");

    parent.innerHTML = "";
    parent.innerHTML += item3;
    parent.innerHTML += item4;
    parent.innerHTML += item5;
}



function szegek() {
    clearAll();
    closeAll();
    element9.classList.add("focus-category");

    element10.classList.remove("visibility");
    element11.classList.remove("visibility");
    element12.classList.remove("visibility");

    parent.innerHTML = "";
    parent.innerHTML += item6;
    parent.innerHTML += item7;
    parent.innerHTML += item8;
}



function huzalok() {
    clearAll();
    closeAll();
    element13.classList.add("focus-category");

    element14.classList.remove("visibility");
    element15.classList.remove("visibility");
    element16.classList.remove("visibility");
    element17.classList.remove("visibility");
    element18.classList.remove("visibility");

    parent.innerHTML = "";
    parent.innerHTML += item9;
    parent.innerHTML += item10;
    parent.innerHTML += item11;
    parent.innerHTML += item12;
    parent.innerHTML += item13;
}

function pontker() {
    clearAll();
    closeAll();
    element19.classList.add("focus-category");

    parent.innerHTML = "";
    parent.innerHTML += item14;
}

function ponthal() {
    clearAll();
    closeAll();
    element20.classList.add("focus-category");

    parent.innerHTML = "";
    parent.innerHTML += item15;
}

function huzalfesz() {
    clearAll();
    closeAll();
    element21.classList.add("focus-category");

    parent.innerHTML = "";
    parent.innerHTML += item16;
}

function szoges() {
    clearAll();
    closeAll();
    element22.classList.add("focus-category");

    parent.innerHTML = "";
    parent.innerHTML += item17;
}

function ipari() {
    clearAll();
    closeAll();
    element23.classList.add("focus-category");

    parent.innerHTML = "";
    parent.innerHTML += item18;
}

function tablas() {
    clearAll();
    closeAll();
    element24.classList.add("focus-category");

    parent.innerHTML = "";
    parent.innerHTML += item19;
}

function oszlop() {
    clearAll();
    closeAll();
    element25.classList.add("focus-category");

    parent.innerHTML = "";
    parent.innerHTML += item20;
}


function rogzetok() {
    clearAll();
    closeAll();
    element26.classList.add("focus-category");

    element27.classList.remove("visibility");
    element28.classList.remove("visibility");

    parent.innerHTML = "";
    parent.innerHTML += item21;
    parent.innerHTML += item22;
}
