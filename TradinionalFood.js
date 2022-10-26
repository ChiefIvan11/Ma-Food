const bt = document.querySelector('#bt');
const more = document.querySelector('#more');
const more1 = document.querySelector('#more1');
const more2 = document.querySelector('#more2');

bt.addEventListener('click', () => {
	if(more.classList.contains('hidden')){
		more.classList.remove('hidden');
	}
	if(more1.classList.contains('hidden')){
		more1.classList.remove('hidden');
	}
	if(more2.classList.contains('hidden')){
		more2.classList.remove('hidden');
	}
	if(more3.classList.contains('hidden')){
		more3.classList.remove('hidden');
	}
	if(more4.classList.contains('hidden')){
		more4.classList.remove('hidden');
	}
	if(more5.classList.contains('hidden')){
		more5.classList.remove('hidden');
	}
	else{
		more.classList.add('hidden');
	}
});
bt.addEventListener('click', () => {
	if(!bt.classList.contains('hidden')){
		bt.classList.add('hidden');
	}
	});