$(document).ready(function(){
	$('.lang').click(function(){
		$(this).toggleClass('on');
		$(this).find('.lang_list').toggleClass('on')
	});
	$('.lang').mouseleave(function(){
		$(this).removeClass('on');
		$(this).find('.lang_list').removeClass('on');
	});
	$('.gnb ul li').mouseenter(function(){
		cnt = $(this).index()
		$('.gnb_bar').stop().addClass('active');
		$('.gnb_bar ul').hide().eq(cnt).show();
		$('.gnb ul li').removeClass('active').eq(cnt).addClass('active');
		$('.header').addClass('hover');
	});
	$('.gnb ul li').mouseleave(function(){
		cnt = $(this).index()
		$('.gnb_bar').stop().removeClass('active');
		$('.header').removeClass('hover');
	});
	$('.gnb_bar').mouseenter(function(){
		$(this).stop().addClass('active');
		$('.header').addClass('hover');
	});
	$('.gnb_bar').mouseleave(function(){
		$(this).stop().removeClass('active');
		$('.header').removeClass('hover');
	});
	$('.client').click(function(){
		$('.drop_con').slideToggle(500);
		$('.drop_con').toggleClass('open');
	});
	$('.client').mouseleave(function(){
		$('.drop_con').slideUp(500);
		$('.drop_con').removeClass('open');
	});
	
	
});

  var myFullpage = new fullpage('#fullpage', {
        anchors: ['intro', '02', '03','04', '05'],
       // navigation: false,
		menu: '#navi',
      //  navigationPosition: 'right',
        responsiveWidth: 1024,
		afterRender: function(){
			$('.sec01_txt').slick({
				fade:true,
				autoplay:true,
				dots: true,
				infinite: true,
				arrows: false,
				asNavFor: '.sec01_img'
			}),
			$('.sec01_img').slick({
				fade:true,
				autoplay:true,
				dots: true,
				infinite: true,
				arrows: false,
				asNavFor: '.sec01_txt'
			})
		},
		afterLoad: function(anchor, index){
			const change = $('.header').removeClass('change');
			if($('#section0').hasClass('active')) {
				$('#section0').addClass('load');
				$('.header').removeClass('none');
                $('#navi').removeClass('act');
                $('#navi').removeClass('no');
				change;
			} else if ($('#section1').hasClass('active')){
				$('#section1').addClass('load');
				$('.header').addClass('change');
				$('.header').removeClass('none');
                $('#navi').addClass('act');
                $('#navi').removeClass('no');
			}	else if ($('#section2').hasClass('active')){
				$('#section2').addClass('load');
				$('.header').removeClass('none');
                $('#navi').removeClass('act');
                $('#navi').removeClass('no');
				change;
			}	else if ($('#section3').hasClass('active')){
				$('#section3').addClass('load');
				$('.header').removeClass('none');
                $('#navi').removeClass('act');
                $('#navi').removeClass('no');
			}	else if ($('#section4').hasClass('active')){
				$('#section4').addClass('load');
				$('.header').removeClass('none');
                $('#navi').removeClass('act');
                $('#navi').removeClass('no');
			}	else if ($('#section5').hasClass('active')){
				$('.header').addClass('none');
                $('#navi').addClass('no');
			}
			if($('.fp-section.active')) {
			  $(this).addClass('on');
		   }	
		}	

    });
    
    var stickyHeaderTop = $('.header').offset().top;
	
	
	var stickyHeader = function(){
		var scrollTop = $(window).scrollTop(); 
			 
		
		if (scrollTop > stickyHeaderTop) { 
			$('.header').addClass('off');
		} else {
			$('.header').removeClass('off'); 
		}
	};

	stickyHeader();
	
	$(window).scroll(function() {
		stickyHeader();
	});