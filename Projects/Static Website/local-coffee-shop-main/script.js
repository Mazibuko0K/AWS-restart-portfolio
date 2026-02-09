const navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
	navbar.classList.toggle('active');
	cart.classList.remove('show');
	searchForm.classList.remove('show');
}



const cart = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
	cart.classList.toggle('show');
	navbar.classList.remove('active');
	searchForm.classList.remove('show');
}


const searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
	searchForm.classList.toggle('show');
	navbar.classList.remove('active');
	cart.classList.remove('show');
}


window.onscroll = () => {
	navbar.classList.remove('active');
	cart.classList.remove('show');
	searchForm.classList.remove('show');
}