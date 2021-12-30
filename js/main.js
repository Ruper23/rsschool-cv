const geek = document.querySelector('#geekbrains');
const geekPopUp = document.querySelector('.course-geek');
const wayupJs = document.querySelector('#wayup-js');
const wuJsPopUp = document.querySelector('.course-wu-js');
const wayupFigma = document.querySelector('#wayup-figma');
const wuFigmaPopUp = document.querySelector('.course-wu-figma');

geek.addEventListener('click', () => {
	geekPopUp.classList.toggle('active');
	wuJsPopUp.classList.remove('active');
	wuFigmaPopUp.classList.remove('active');

})
wayupJs.addEventListener('click', () => {
	wuJsPopUp.classList.toggle('active');
	geekPopUp.classList.remove('active');
	wuFigmaPopUp.classList.remove('active');

})
wayupFigma.addEventListener('click', () => {
	wuFigmaPopUp.classList.toggle('active');
	wuJsPopUp.classList.remove('active');
	geekPopUp.classList.remove('active');

})
// burger menu

let burgIcon = document.querySelector('.burger-menu-icon');

if (burgIcon) {
	let burgMenu = document.querySelector('.burger-navigation');
	burgIcon.addEventListener("click", function (e) {
		burgMenu.classList.toggle('active');
		burgIcon.classList.toggle('active');

	})
}