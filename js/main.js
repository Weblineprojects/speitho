// Wow JS

if(document.querySelector('.wow'))
	new WOW().init();

// Wow JS


let akkordion = document.querySelectorAll('.akkordion')
let cc = 0

akkordion.forEach((item) => {

	let itemHeight = item.querySelector('.akkordion__body').offsetHeight
	item.querySelector('.akkordion__body').style.height = '0px'


	item.querySelector('.akkordion__head').onclick = function () {
		this.closest('.akkordion').classList.toggle('akkordion_active')
		if( this.closest('.akkordion').classList.contains('akkordion_active') ){
			this.closest('.akkordion').querySelector('.akkordion__body').style.height = itemHeight+'px';
		}
		else{
			this.closest('.akkordion').querySelector('.akkordion__body').style.height = '0px';
		}
	}
})


document.querySelectorAll('.button-popup-open').forEach((pop) => {

	pop.onclick = function () {
		document.querySelector('.popup').classList.add('popup_open')
	}

})
document.querySelector('.popup__close').onclick = function () {
	this.closest('.popup').classList.remove('popup_open')
}
document.querySelector('.popup__bgd').onclick = function () {
	this.closest('.popup').classList.remove('popup_open')
}

document.querySelectorAll('.li__block').forEach((item) => {

	if( item.querySelector('span, b').offsetHeight > 190 ){
		item.classList.add('li__block_mini')
	}

})































