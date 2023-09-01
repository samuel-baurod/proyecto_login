function menuResponsivo() {

		const modal = document.getElementById('myModal');
		const closeButton = document.getElementsByClassName('close')[0];
		modal.style.display = 'block';
		closeButton.onclick = function() {
		modal.style.display = 'none';
  	};
	
  }