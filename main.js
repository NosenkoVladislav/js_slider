(function() {
	const slider = document.querySelector('.slider');
	const content = slider.querySelector('.content');
	const controls = slider.querySelector('.controls');
	
	let changeSlideTime = undefined;
	
		function nextSlide() {
			controls.children[0].addEventListener('click', function(event) {
				content.style.transform = 'translateX(-700px)';
				changeSlideTime= undefined;
				});
			};
	
		function prevSlide() {
			controls.children[1].addEventListener('click', function(event) {
				content.style.cssText = 'transform:translateX(0)'; 
				changeSlideTime= undefined;
				});
			};
	
		function autoSlide() {
			changeSlideTime = setInterval( function() {
				content.style.cssText = 'transform:translateX(-700px)';
			}, 3000);
	
			changeSlideTime = setInterval( function() {
				content.style.cssText = 'transform:translateX(0px)';
			}, 6000);
				
		};
			
	
	console.log(nextSlide());
	console.log(prevSlide());
	console.log(autoSlide());
	
})();