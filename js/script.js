$(document).ready(main);

var contador = 1;

function main(){
	$('.opciones-menu').click(function(){
		// $('nav').toggle(); 

		if(contador == 1){
			$('div').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('div').animate({
				left: '-100%'
			});
		}

	});

};