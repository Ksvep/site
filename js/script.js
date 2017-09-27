$(document).ready(function(){
    
    //nojs
    $("body").removeClass("no-js");
    
    //------------------------------------------------------------------------//
    
    //fakelink
    $('a[href="#"]').on('click',function(e){e.preventDefault();});
    
    //------------------------------------------------------------------------//
    
    //drop down menu
    $(".menu li").has('ul').addClass('dropdown');
    $('.menu li').hover(function(){$('ul',this).slideDown(0);},function(){$('ul',this).slideUp(0);}); 
    //doubleTapToGo
    $(".menu > li:has(ul)").doubleTapToGo(); 
    
    //------------------------------------------------------------------------//
    
    //placeholder
    $('input[placeholder], textarea[placeholder]').placeholder();
    
    //------------------------------------------------------------------------//
    
    //menu responsive
	$('.open-mobile-menu').on('click',function(){
		$(this).toggleClass('active');
		$('.mobile-menu').slideToggle();
	});
	$('.hl1,.hl2,.hl3').on('click',function(){
		if($(this).hasClass('current')){
			$('.hl1,.hl2,.hl3').removeClass('current');
			$('.sub-menu').slideUp(function(){
				$(".sub-menu").mCustomScrollbar('destroy');		
			});
			$(".sub-menu").mCustomScrollbar("update"); 				
		}else{
			$('.hl1,.hl2,.hl3').removeClass('current');
			$('.sub-menu').slideUp(function(){
				$(".sub-menu").mCustomScrollbar('destroy');		
			});
			$(this).addClass('current');
			$(this).parent().find('.sub-menu').slideDown(function(){
				$(".sub-menu").mCustomScrollbar({
						scrollButtons:{
							enable:false
						}
					});
				});
			
		}
		return false;
	});
	$(".sub-menu").mCustomScrollbar({advanced:{  
		updateOnBrowserResize:true,   
		updateOnContentResize:true   
	  } 
	});
	$('.hl1 em, .hl2 em, .hl3 em').on('click',function(){
		var link = $(this).parents("a").attr("href");
		window.location.href = link;
		return false;
	});
	
	$(".load-more.lm-catalog").on("click", function() {
		
		$(".columns.catalog-list:hidden").slice(0, 8).fadeIn(250, function() {
			
		});
		
		if (!$(".columns.catalog-list:hidden").length) {
			$(this).remove();
		}
		
		return false;
		
	});
    
    //------------------------------------------------------------------------//
	
	//slider
	
	var loop = true;
	if ($(".swiper-slide").length <= 1) {
		loop = false;
		$('.arrow-left, .arrow-right').hide();
	}
	
	var mySwiper = new Swiper('.swiper-container',{
		speed: 1000,
		pagination: false,
		loop:loop,
		grabCursor: true,
		paginationClickable: true,
		autoplay: 5000
	 });
	 
	 
	 $('.arrow-left').on('click', function(e){
		e.preventDefault()
		mySwiper.swipePrev()
	 })
	 $('.arrow-right').on('click', function(e){
		e.preventDefault()
		mySwiper.swipeNext()
	 });
	 
	 
    //------------------------------------------------------------------------//
	
	//carousel
	var owl = $('.owl-carousel');
      owl.owlCarousel({
        margin: 25,
        loop: true,
		nav: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      })
    //------------------------------------------------------------------------//
	
	//radio
	$('.order-box .radio-label').bind("click touchstart",function(e){
		$('input[type="radio"]').removeAttr('checked','checked');
		$('.radio-label').removeClass('active');
		$(this).find('input[type="radio"]').attr('checked','checked');
		$(this).addClass('active');
	});
	$('#r1').bind("click touchstart",function(e){
		$('#rl2').removeClass('active');
		$('#rl1').addClass('active');
	});
	$('#r2').bind("click touchstart",function(e){
		$('#rl1').removeClass('active');
		$('#rl2').addClass('active');
	});
	$('.rb-geo .radio-label').bind("click touchstart",function(e){
		$('input[type="radio"]').removeAttr('checked','checked');
		$('.radio-label').removeClass('active');
		$(this).find('input[type="radio"]').attr('checked','checked');
		$(this).addClass('active');
	});
	
	$('#r1-geo').bind("click touchstart",function(e){
		$('#rl2-geo').removeClass('active');
		$('#rl1-geo').addClass('active');
		
		$(".mg-box").removeClass("map-geo-2").addClass("map-geo-1");
		$(".map_geo_1").show();
		$(".map_geo_2").hide();
		
	});
	$('#r2-geo').bind("click touchstart",function(e){
		$('#rl1-geo').removeClass('active');
		$('#rl2-geo').addClass('active');
		
		$(".mg-box").removeClass("map-geo-1").addClass("map-geo-2");
		$(".map_geo_1").hide();
		$(".map_geo_2").show();
		
	});
    
	//------------------------------------------------------------------------//
	
	//order-form
	$('.first-description .send-order').on('click',function(e){
		$('.first-description').hide();
		$('#desktop').show();
		$('.form-title').show();
	});
	$('.mobile-order .send-order').on('click',function(e){
		$(this).hide();
		$('.first-description').hide();
		$('#mobile').slideDown();
	});
    
	//------------------------------------------------------------------------//
	
	//slider	
	 $( "#slider-range-min-1" ).slider({
		range: "min",
		value: 37,
		min: 1,
		max: 750,
		slide: function( event, ui ) {
		$( "#amount-1" ).val( ui.value );
		}
	});
	$( "#amount-1" ).val( $( "#slider-range-min-1" ).slider( "value" ) );
	
	$( "#slider-range-min-2" ).slider({
		range: "min",
		value: 37,
		min: 1,
		max: 100,
		slide: function( event, ui ) {
		$( "#amount-2" ).val( ui.value );
		}
	});
	$( "#amount-2" ).val( $( "#slider-range-min-2" ).slider( "value" ) );
	$( "#slider-range-min-11" ).slider({
		range: "min",
		value: 37,
		min: 1,
		max: 750,
		slide: function( event, ui ) {
		$( "#amount-11" ).val( ui.value );
		}
	});
	$( "#amount-11" ).val( $( "#slider-range-min-11" ).slider( "value" ) );
	
	$( "#slider-range-min-22" ).slider({
		range: "min",
		value: 37,
		min: 1,
		max: 100,
		slide: function( event, ui ) {
		$( "#amount-22" ).val( ui.value );
		}
	});
	$( "#amount-22" ).val( $( "#slider-range-min-22" ).slider( "value" ) );
    
	//------------------------------------------------------------------------//
	
	
    // fancybox
	$(".fancy").fancybox({
		openEffect:'none',
		closeEffect:'none'
	});
    
	//------------------------------------------------------------------------//
	
	$('.datepicker').datepicker({
		dateFormat: "d M yy"
	}); 
	
	//datepicker
	$.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		prevText: '&#x3c;Пред',
		nextText: 'След&#x3e;',
		currentText: 'Сегодня',
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
		'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
		'Июл','Авг','Сен','Окт','Ноя','Дек'],
		dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
		dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false
		};
		$.datepicker.setDefaults($.datepicker.regional['ru']);
    
	//------------------------------------------------------------------------//
	
	//pointer
	$('.pointer-link').on('click',function(e){
		if($(this).hasClass('active')){
			$('.popup').hide();
			$('.pointer-link').removeClass('active');
		}else{
			$('.popup').hide();
			$('.pointer-link').removeClass('active');
			$(this).parent().find('.popup').show();
			$(this).addClass('active');
		}
	});
	
	if ($(".columns.columns-list .column-3x1").length) {
		var maxHeight = 0;
		$(".columns.columns-list .column-3x1").each(function() {
			var h = $(this).height();
			if (maxHeight < h) { maxHeight = h; }
		});
		$(".columns.columns-list .column-3x1").height(maxHeight+10);
	}
	
	$(".pt-item.pti-contact").click(function() {
		$(".columns.columns-list").slideToggle(250, function() {
			
		});
		return false;
	});
    
});//document ready