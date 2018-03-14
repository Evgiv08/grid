!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];
	if(!d.getElementById(id)){js=d.createElement(s);js.id=id;
		js.src='https://weatherwidget.io/js/widget.min.js';
		fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

$(`.chk`).on(`click`, function() {
	if (!this.querySelector(`div`).classList.contains(`chk1`)) {
		this.querySelector(`div`).classList.add(`chk1`);
	} else {
		this.querySelector(`div`).classList.remove(`chk1`);
	}
});
$(`#next`).on(`click`, function() {
	if ($('#slide_two').hasClass('slide_two')) {
		$('#slide_two').removeClass('slide_two');
		$('#slide_one').addClass('slide_two');
	} else {
		$('#slide_one').removeClass('slide_two');
		$('#slide_two').addClass('slide_two');
	}
});
$(`#prew`).on(`click`, function() {
	if ($('#slide_two').hasClass('slide_two')) {
		$('#slide_two').removeClass('slide_two');
		$('#slide_one').addClass('slide_two');
	} else {
		$('#slide_one').removeClass('slide_two');
		$('#slide_two').addClass('slide_two');
	}
});
