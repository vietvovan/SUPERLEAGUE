var ua = navigator.userAgent;
if (ua.indexOf('iPhone') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) || ua.indexOf('Windows Phone') > 0) {
	var device = 'sp';
} else {
	var device = 'pc';
}

$(function() {

	$(".drawer").drawer();
	$('.drawer-close').on('click', function() {
		$('.drawer').drawer('close');
	});
	faqAccordion();
});

// navigation

// rollover
$('a img').each(function(){
	var imgSrc = $(this).attr('src');
	if(imgSrc.match(/(.*)_on(\..*)/)){
		$(this).attr('class','not');
	}
	// smartRollover
	if(imgSrc.match(/(.*)_off(\..*)/)){
		var repSrc = RegExp.$1+'_on'+RegExp.$2;
		$('<img />').attr('src',repSrc);
		$(this).hover(function(){
			$(this).attr('src',repSrc);
			$(this).css({opacity: '1',filter: 'alpha(opacity=100)'});
		},function(){
			$(this).attr('src',imgSrc);
		});
	}else if(!$(this).hasClass('not')){
		$(this).hover(function(){
			$(this).css({
				opacity: '0.8',
				filter: 'alpha(opacity=80)'
			});
		},function(){
			$(this).css({
				opacity: '1',
				filter: 'alpha(opacity=100)'
			});
		});
	}
});

$('.index-features .box').hover(function(){
	 	$(this).find('.info').animate({top: '20px'},20);
	},function(){
		$(this).find('.info').css('top','auto');
});

//----------------------//

function faqAccordion() {
	var $title = $('.info-faq .title01');
	$title.on('click', function() {
		if($(this).next().is('.text')) {
			var $text = $(this).next('.text'),
				height = $text.height(),
				textHeight = $text.get(0).scrollHeight + 39 + 'px';
			$(this).parent('.info-faq').toggleClass('on');
			if(height == 0) {
				$text.css('height', textHeight);
			} else {
				$text.css('height', 0);
			}
		}
	});
}
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".h-nav__inner").removeClass("sticky-menu");
	} else {
		$(".h-nav__inner").addClass("sticky-menu");
	}
});