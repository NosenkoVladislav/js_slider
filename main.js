const slider = document.querySelector('.slider');
const content = slider.querySelector('.content');
const controls = slider.querySelector('.controls');

	function nextSlide() {
		controls.children[0].addEventListener('click', function(event) {
			content.style.transform = 'translateX(-700px)';
			content.style.transition = '1s';
		});
	}

	function prevSlide() {
		controls.children[1].addEventListener('click', function(event) {
			content.style.cssText = 'transform:translateX(0)'; 
			content.style.transition = '1s';
		});
	}

console.log(nextSlide());
console.log(prevSlide());