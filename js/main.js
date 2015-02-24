$(function(){
	$('#sidebar').helio();
});

function SmoothlyMenu() {
    if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        $('.helio-menu').hide();
        // For smoothly turn on menu
		setTimeout(function () {
			$('.helio-menu').fadeIn(500);
		}, 100);
    } else if ($('body').hasClass('fixed-sidebar')){
        $('.helio-menu').hide();
		setTimeout(function () {
			$('.helio-menu').fadeIn(500);
		}, 300);
    } else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        $('.helio-menu').removeAttr('style');
    }
}