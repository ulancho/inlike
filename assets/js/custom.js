$(document).ready(function(){
	$('.sidebar__nav-open-menu').click(function(){
		$('.sidebar__nav').addClass('open');
		$('.sidebar__nav-open-menu').addClass('open');
		$('.sidebar__nav-dropdown').addClass('open');
		$('.sidebar__nav-users').removeClass('open');
		$('.main').addClass('open-menu');
		$('.main-dropdown').slideDown(200);
		$('.users-nav').slideUp(200);
		return false;
	});
	$('.sidebar__nav-users').click(function(){
		$('.sidebar__nav').addClass('open');
		$('.sidebar__nav-open-menu').removeClass('open');
		$('.sidebar__nav-users').addClass('open');
		$('.sidebar__nav-dropdown').addClass('open');
		$('.main').addClass('open-menu');
		$('.main-dropdown').slideUp(200);
		$('.users-nav').slideDown(200);
		return false;
	});
	
	$('.sidebar__nav-close-menu').click(function(){
		$('.sidebar__nav').removeClass('open');
		$('.sidebar__nav-open-menu').removeClass('open');
		$('.sidebar__nav-dropdown').removeClass('open');
		$('.main').removeClass('open-menu');
		return false;
	});

		$(".dropdown-menu__item > a").click(function() {
			$(".dropdown-menu-list").slideUp(200);
			if (
				$(this)
				.parent()
				.hasClass("active")
				) {
				$(".dropdown-menu__item").removeClass("active");
			$(this)
			.parent()
			.removeClass("active");
		} else {
			$(".dropdown-menu__item").removeClass("active");
			$(this)
			.next(".dropdown-menu-list")
			.slideDown(200);
			$(this)
			.parent()
			.addClass("active");
		}
	});
}); 
