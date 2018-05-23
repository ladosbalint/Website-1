$(document).ready(function(){
	var about = $("div.about");
	var aboutOffset = about.offset().top / 2;
	
	$(document).on("scroll", function(){
		if ($(document).scrollTop() > aboutOffset && about.hasClass("hideBox")) {
			about.removeClass("hideBox");
			$("#arrowDown").remove();
		}
	});
});

var one = true;

function drotfonat() {
	var first = document.getElementById("1");
	var second = document.getElementById("2");
	if (one) {
		first.classList.remove("visibility");
		second.classList.remove("visibility");
		one = false;
	} else {
		first.classList.add("visibility");
		second.classList.add("visibility");
		one = true;
	}
}

var two = true;

function csirkehalo() {
	var third = document.getElementById("3");
	var fourth = document.getElementById("4");
	var fifth = document.getElementById("5");
	if (two) {
		third.classList.remove("visibility");
		fourth.classList.remove("visibility");
		fifth.classList.remove("visibility");
		two = false;
	} else {
		third.classList.add("visibility");
		fourth.classList.add("visibility");
		fifth.classList.add("visibility");
		two = true;
	}
}

var three = true;

function szegek() {
	var sixth = document.getElementById("6");
	var seventh = document.getElementById("7");
	var eight = document.getElementById("8");
	if (three) {
		sixth.classList.remove("visibility");
		seventh.classList.remove("visibility");
		eight.classList.remove("visibility");
		three = false;
	} else {
		sixth.classList.add("visibility");
		seventh.classList.add("visibility");
		eight.classList.add("visibility");
		three = true;
	}
}

var four = true;

function huzalok() {
	var ninth = document.getElementById("9");
	var tenth = document.getElementById("10");
	var eleventh = document.getElementById("11");
	var twelveth = document.getElementById("12");
	var thirteenth = document.getElementById("13");
	if (four) {
		ninth.classList.remove("visibility");
		tenth.classList.remove("visibility");
		eleventh.classList.remove("visibility");
		twelveth.classList.remove("visibility");
		thirteenth.classList.remove("visibility");
		four = false;
	} else {
		ninth.classList.add("visibility");
		tenth.classList.add("visibility");
		eleventh.classList.add("visibility");
		twelveth.classList.add("visibility");
		thirteenth.classList.add("visibility");
		four = true;
	}
}

var five = true;

function rogzetok() {
	var fourteenth = document.getElementById("14");
	var fifteenth = document.getElementById("15");
	if (five) {
		fourteenth.classList.remove("visibility");
		fifteenth.classList.remove("visibility");
		five = false;
	} else {
		fourteenth.classList.add("visibility");
		fifteenth.classList.add("visibility");
		five = true;
	}
}