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
	if(!bt.classList.contains('hidden')){
		bt.classList.add('hidden');
	}
	else{
		more.classList.add('hidden');
	}
});
a.addEventListener('mouseover', () => {
	if(!a.classList.contains('animate-ping')){
			b.classList.add('animate-ping')
		}
	});
a.addEventListener('mouseout', () => {
	if (b.classList.contains('animate-ping')) {
			b.classList.remove('animate-ping')
	}
	});
c.addEventListener('mouseover', () => {
	if(!c.classList.contains('animate-ping')){
			d.classList.add('animate-ping')
		}
	});
c.addEventListener('mouseout', () => {
	if (d.classList.contains('animate-ping')) {
			d.classList.remove('animate-ping')
	}
	});
window.addEventListener("load", loader);
function loader() {
	bouncer.classList.add("hidden");
	ok.classList.add("hidden");
	main.classList.remove("hidden");
	main2.classList.remove("hidden");
	main3.classList.remove("hidden");
}