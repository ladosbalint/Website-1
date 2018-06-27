var section1 = true;
var element1;
var section2 = false;
var element2;
var section3 = false;
var element3;
var section4 = false;
var element4;
var section5 = false;
var element5;
var section6 = false;
var element6;
var section7 = false;
var element7;
var section8 = false;
var element8;
var section9 = false;
var element9;
var section10 = false;
var element10;
var section11 = false;
var element11;
var section12 = false;
var element12;
var section13 = false;
var element13;

var first;
var second;
var third;
var fourth;
var sixth;
var seventh;
var eighth;
var ninth;
var tenth;
var eleventh;
var twelveth;
var thirteenth;
var fourteenth;
var fifteenth;

var item1 = `<div class="grid-item" id="001">
    <div class="main-category">Drótfonat</div>
    <div class="sub-category">Horganyzott</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
var item2 = `<div class="grid-item" id="002">
    <div class="main-category">Drótfonat</div>
    <div class="sub-category">Műanyaggal bevont</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
var item3 = `<div class="grid-item" id="003">
    <div class="main-category">Csirkeháló</div>
    <div class="sub-category">Horganyzott huzalból</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
var item4 = `<div class="grid-item" id="004">
    <div class="main-category">Csirkeháló</div>
    <div class="sub-category">Fekete huzalból</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
var item5 = `<div class="grid-item" id="005">
    <div class="main-category">Csirkeháló</div>
    <div class="sub-category">Műanyaggal bevont huzalból</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
var item6 = `<div class="grid-item" id="006">
    <div class="main-category">Szeg</div>
    <div class="sub-category">Huzalszeg</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
var item7 = `<div class="grid-item" id="007">
    <div class="main-category">Szeg</div>
    <div class="sub-category">Csavartszeg</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
var item8 = `<div class="grid-item" id="008">
    <div class="main-category">Szeg</div>
    <div class="sub-category">U-szeg</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
var item9 = `<div class="grid-item" id="009">
    <div class="main-category">Huzal</div>
    <div class="sub-category">Horganyzott lágyhuzal</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
var item10 = `<div class="grid-item" id="010">
    <div class="main-category">Huzal</div>
    <div class="sub-category">Horganyzott félkemény huzal</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
var item11 = `<div class="grid-item" id="011">
    <div class="main-category">Huzal</div>
    <div class="sub-category">Fekete lágyhuzal</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
var item12 = `<div class="grid-item" id="012">
    <div class="main-category">Huzal</div>
    <div class="sub-category">Bevonatlan keményhuzal</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
var item13 = `<div class="grid-item" id="013">
    <div class="main-category">Huzal</div>
    <div class="sub-category">Műanyaggal bevont huzal</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
var item14 = `<div class="grid-item" id="014">
    <div class="main-category">Ponthegesztett kerítés</div>
    <div class="sub-category">-</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
var item15 = `<div class="grid-item" id="015">
    <div class="main-category">Ponthegesztett háló</div>
    <div class="sub-category">-</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
var item16 = `<div class="grid-item" id="016">
    <div class="main-category">Huzalfeszítő</div>
    <div class="sub-category">-</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
var item17 = `<div class="grid-item" id="017">
    <div class="main-category">Szögesdrót</div>
    <div class="sub-category">-</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
var item18 = `<div class="grid-item" id="018">
    <div class="main-category">Ipari kerítés</div>
    <div class="sub-category">-</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
var item19 = `<div class="grid-item" id="019">
    <div class="main-category">Táblás kerítés</div>
    <div class="sub-category">-</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
var item20 = `<div class="grid-item" id="020">
    <div class="main-category">Oszlop</div>
    <div class="sub-category">-</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
var item21 = `<div class="grid-item" id="021">
    <div class="main-category">Rögzítő</div>
    <div class="sub-category">PVC rögzítő</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;
var item22 = `<div class="grid-item" id="022">
    <div class="main-category">Rögzítő</div>
    <div class="sub-category">Fém rögzítő</div>
    <img class="grid-image" src="http://via.placeholder.com/350x200" />
</div>`;

var parent;

window.onload = () => {
    element1 = document.getElementById("a");
    element2 = document.getElementById("b");
    element3 = document.getElementById("c");
    element4 = document.getElementById("d");
    element5 = document.getElementById("e");
    element6 = document.getElementById("f");
    element7 = document.getElementById("g");
    element8 = document.getElementById("h");
    element9 = document.getElementById("i");
    element10 = document.getElementById("j");
    element11 = document.getElementById("k");
    element12 = document.getElementById("l");
    element13 = document.getElementById("m");
    first = document.getElementById("1");
    second = document.getElementById("2");
    third = document.getElementById("3");
    fourth = document.getElementById("4");
    fifth = document.getElementById("5");
    sixth = document.getElementById("6");
    seventh = document.getElementById("7");
    eighth = document.getElementById("8");
    ninth = document.getElementById("9");
    tenth = document.getElementById("10");
    eleventh = document.getElementById("11");
    twelveth = document.getElementById("12");
    thirteenth = document.getElementById("13");
    fourteenth = document.getElementById("14");
    fifteenth = document.getElementById("15");

    parent = document.getElementById("grid-parent");
};

function clearAll() {
    element1.classList.remove("focus-category");
    element2.classList.remove("focus-category");
    element3.classList.remove("focus-category");
    element4.classList.remove("focus-category");
    element5.classList.remove("focus-category");
    element6.classList.remove("focus-category");
    element7.classList.remove("focus-category");
    element8.classList.remove("focus-category");
    element9.classList.remove("focus-category");
    element10.classList.remove("focus-category");
    element11.classList.remove("focus-category");
    element12.classList.remove("focus-category");
    element13.classList.remove("focus-category");
}

function closeAll() {

    first.classList.add("visibility");
    second.classList.add("visibility");
    third.classList.add("visibility");
    fourth.classList.add("visibility");
    fifth.classList.add("visibility");
    sixth.classList.add("visibility");
    seventh.classList.add("visibility");
    eighth.classList.add("visibility");
    ninth.classList.add("visibility");
    tenth.classList.add("visibility");
    eleventh.classList.add("visibility");
    twelveth.classList.add("visibility");
    thirteenth.classList.add("visibility");
    fourteenth.classList.add("visibility");
    fifteenth.classList.add("visibility");

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

    first.classList.remove("visibility");
    second.classList.remove("visibility");

    parent.innerHTML = "";
    parent.innerHTML += item1;
    parent.innerHTML += item2;

}



function csirkehalo() {
    clearAll();
    closeAll();
    element3.classList.add("focus-category");

    third.classList.remove("visibility");
    fourth.classList.remove("visibility");
    fifth.classList.remove("visibility");

    parent.innerHTML = "";
    parent.innerHTML += item3;
    parent.innerHTML += item4;
    parent.innerHTML += item5;
}



function szegek() {
    clearAll();
    closeAll();
    element4.classList.add("focus-category");

    sixth.classList.remove("visibility");
    seventh.classList.remove("visibility");
    eighth.classList.remove("visibility");

    parent.innerHTML = "";
    parent.innerHTML += item6;
    parent.innerHTML += item7;
    parent.innerHTML += item8;
}



function huzalok() {
    clearAll();
    closeAll();
    element5.classList.add("focus-category");

    ninth.classList.remove("visibility");
    tenth.classList.remove("visibility");
    eleventh.classList.remove("visibility");
    twelveth.classList.remove("visibility");
    thirteenth.classList.remove("visibility");

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
    element6.classList.add("focus-category");

    parent.innerHTML = "";
    parent.innerHTML += item14;
}

function ponthal() {
    clearAll();
    closeAll();
    element7.classList.add("focus-category");

    parent.innerHTML = "";
    parent.innerHTML += item15;
}

function huzalfesz() {
    clearAll();
    closeAll();
    element8.classList.add("focus-category");

    parent.innerHTML = "";
    parent.innerHTML += item16;
}

function szoges() {
    clearAll();
    closeAll();
    element9.classList.add("focus-category");

    parent.innerHTML = "";
    parent.innerHTML += item17;
}

function ipari() {
    clearAll();
    closeAll();
    element10.classList.add("focus-category");

    parent.innerHTML = "";
    parent.innerHTML += item18;
}

function tablas() {
    clearAll();
    closeAll();
    element11.classList.add("focus-category");

    parent.innerHTML = "";
    parent.innerHTML += item19;
}

function oszlop() {
    clearAll();
    closeAll();
    element12.classList.add("focus-category");

    parent.innerHTML = "";
    parent.innerHTML += item20;
}


function rogzetok() {
    clearAll();
    closeAll();
    element13.classList.add("focus-category");

    fourteenth.classList.remove("visibility");
    fifteenth.classList.remove("visibility");

    parent.innerHTML = "";
    parent.innerHTML += item21;
    parent.innerHTML += item22;
}
