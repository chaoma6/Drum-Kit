//Detecting Button Press

let btn = document.querySelectorAll('.drum');

for (let i = 0; i < btn.length; i++) {
	btn[i].addEventListener('click', function () {
		var buttonInnerHTML = this.innerHTML;
		makeSound(buttonInnerHTML);
	});
}

function makeSound(key) {
	switch (key) {
		case 'w':
			var tom1 = new Audio('sounds/tom-1.mp3');
			tom1.play();
			break;
		case 'a':
			var tom1 = new Audio('sounds/tom-2.mp3');
			tom1.play();
			break;
		case 's':
			var tom1 = new Audio('sounds/tom-3.mp3');
			tom1.play();
			break;
		case 'd':
			var tom1 = new Audio('sounds/tom-4.mp3');
			tom1.play();
			break;
		case 'j':
			var tom1 = new Audio('sounds/snare.mp3');
			tom1.play();
			break;
		case 'k':
			var tom1 = new Audio('sounds/crash.mp3');
			tom1.play();
			break;
		case 'l':
			var tom1 = new Audio('sounds/kick-bass.mp3');
			tom1.play();
			break;
		default:
			console.log(buttonInnerHTML);
			break;
	}
}

function buttonAnimation(currentKey) {
	var activeButton = document.querySelector('.' + currentKey);

	





}

//Detecting Keyboard Press

// document.addEventListener('keypress', function (e) {
// 	makeSound(e.key);
// });

// let audio = new Audio('sounds/tom-1.mp3');
// audio.play();

// var houseKeeper1 = { yearsOfExperience, yearsOfExperience: 12, name: 'Jane', clearingRepertoire: ['bathroom', 'bedroom'] };

// Constructor Function

// function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
// 	this.yearsOfExperience = yearsOfExperience;
// 	this.name = name;
// 	this.cleaningRepertoire = cleaningRepertoire;
// 	this.clean = function () {
// 		alert('hihihih');
// 	};
// }

// var HouseKeeper1 = new HouseKeeper(9, 'tom', ['lobby', 'bedroom']);
