jQuery(document).ready(function() {
	
/*========================================
				NAVIGATION
========================================*/

	$('.menu_icon').on('click',function(){
		$(this).toggleClass('transform');
		if ($(this).hasClass('transform')){
			$('.main_navy').slideDown();
		} else {
			$('.main_navy').slideUp();
		}
	});
	
	$('.main_navy a').on('click',function(event){
			
		var $this = $(this),
			link_class = $this.attr('class'),
			block = $("#"+link_class),
			block_offset = block.offset(),
			block_top = block_offset.top,
			speed = 2,
			time = block_top/speed;	
			
		if(link_class == "home"){
			time = 800;
		}
				
		event.preventDefault();			
		$('body,html').animate({scrollTop:block_top}, time);

		//$('.menu_icon').show(1000);
		//$('.menu_icon').removeClass('transform');
		//$('.main_navy').slideUp();
	});
		
	
	
	$('<div id="arrowUp">UP</div>')
		.css({
			'width':'42px',
			'height':'42px',
			'backgroundColor':'#de2b24',
			'borderRadius':'5px',
			'borderColor':'#fff',
			'borderStyle':'solid',
			'borderWidth':'1px',
			'cursor':'pointer',
			'position':'fixed',
			'right':'20px',
			'bottom':'20px',
			'opacity':'0.4',
			'textAlign':'center',
			'line-height':'42px',
			'color':'#fff',
			'fontWeight':'bold',
		})
		.appendTo('body')
		.hide();
	
		
	$('#arrowUp')
		.hover(function(){
			$(this).animate({
				'opacity':'1'
			},200);
		},function(){
			$(this).animate({
				'opacity':'0.4'
			},600);
		})
		.click(function() {

			$('body, html').animate({scrollTop: 0},'slow');
		});
		
		
	$(window).scroll(function() {
		if ($(this).scrollTop()>250) {
			$('#arrowUp').fadeIn('slow')
		} else {
			$('#arrowUp').fadeOut('slow')
		}
	});
	
/*========================================
				PLACEHOLDER
========================================*/
	
	$("#fb_analysis form input[type='text']").each(function() {
		$(this)
			.data('default', $(this).val())
			.addClass('inactive')
			.focus(function() {	
				$(this).removeClass('inactive');
					if($(this).val() === $(this).data('default') || $(this).val() === '') {
					$(this)
						.val('')
						.css({'color':'#424242'}); 
				}
			})
			.blur(function() {
				if($(this).val() === '') {
					$(this)
					.addClass('inactive')
					.val($(this).data('default'))
					.css({'color':'#d8d8d8'});
				}
			});
	});
	
	$(".subscription input[type='text']").each(function() {
		$(this)
			.data('default', $(this).val())
			.addClass('inactive')
			.focus(function() {	
				$(this).removeClass('inactive');
					if($(this).val() === $(this).data('default') || $(this).val() === '') {
					$(this)
						.val('')
						.css({'color':'#fff'}); 
				}
			})
			.blur(function() {
				if($(this).val() === '') {
					$(this)
					.addClass('inactive')
					.val($(this).data('default'))
					.css({'color':'#cecece'});
				}
			});
	});
	
/*========================================
				FORM
========================================*/

	

	$('.open').on('click', function(){
		$(this)
			//.rotate(-180)
			.next('.form_wrap')
			.slideDown(500, function(){
				$('.close').fadeIn(200);
			});
		
	});
	
	$('.close').on('click', function(){
		$(this)
			.fadeOut(200)
			.parents('.form_wrap')
			.slideUp(500);
	});
			
});




 