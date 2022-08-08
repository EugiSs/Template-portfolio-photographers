// Header
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

window.addEventListener('resize', function () {
	if (this.innerWidth >= 769) {
		menu.classList.remove('show');
		burger.classList.remove('active');
	}
});

document.addEventListener('click', function (e) {
	// close burger when clicked outside of it
	if (burger.classList.contains('active') && !e.target.closest('.header__menu')) {
		menu.classList.remove('show');
		burger.classList.remove('active');
	};

	// open/close burger menu
	if (e.target.closest('.header__burger_open')) {
		menu.classList.add('show');
		burger.classList.add('active');
	}
	if (e.target.closest('.header__burger_close')) {
		menu.classList.remove('show');
		burger.classList.remove('active');
	};



});

function headerScroll() {
	let header = document.querySelector('.header');
	let scrollPrev = 0;
	window.addEventListener('scroll', function () {
		let scrolled = window.scrollY;

		if (burger.classList.contains('active')) {
			return;
		};

		if (scrolled >= 50) {
			if (scrolled > scrollPrev) {
				header.classList.add('out');
			} else {
				header.classList.remove('out');
				header.classList.add('p-2');
			}
		} else {
			header.classList.remove('p-2');
			return;
		}

		scrollPrev = scrolled;
	})
};
headerScroll();


// Portfolio
const images = document.querySelectorAll('.portfolio__row');

for (let img of images) {
	img.addEventListener('click', resizeImg);
};

function resizeImg(e) {
	console.log(e.target.closest('.portfolio__row'));
	e.target.closest('.portfolio__row').classList.toggle('full');
	document.querySelector('body').classList.toggle('lock');
};


// Contact
const submitBtn = document.querySelector('#submit');
const nameInfo = document.querySelector('#name');
const mailInfo = document.querySelector('#email');
const messageInfo = document.querySelector('#message');
const inputs = document.querySelectorAll('input,textarea');

for (let input of inputs) {
	input.addEventListener('focus', function (e) {
		e.target.style.borderBottom = '1px solid white';
	})
};

submitBtn.addEventListener('click', function () {
	if (checkInputs()) {
		alert('Inputs cannot be empty')
		return;
	}

	if (isEmailValid(mailInfo.value)) {
		alert('Data sent successfully');
	} else {
		mailInfo.style.borderBottom = '1px solid red';
		alert('Email address entered incorrectly');
	}
});

function checkInputs() {
	let empty = false;

	for (let input of inputs) {
		if (input.value == '') {
			input.style.borderBottom = '1px solid red';
			empty = true;
		}
	}
	return empty;
};

function isEmailValid(value) {
	const str = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	return str.test(value);
};


