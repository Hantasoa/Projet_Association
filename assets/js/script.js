$(function()
{
	$(".dropdown").hover(
			function()
			{
				$('.dropdown-menu',this).stop(true,true).fadeIn("fast");
					$(this).toggleClass('open');

					
			},

			function()
			{
				$('.dropdown-menu',this).stop(true,true).fadeOut("fast");
					$(this).toggleClass('open');

					
			});

	

});
$(document).ready(function(){
	$('#dem').click(function(){
		
		$('.bloc').hide(1000);
		//$('#div2').removeAttr('style');
		$('#div2').show(1000);
		
	});

	$('#accueil').click(function(){
		$('.bloc').fadeOut('slow');
		$('#div1').show(1000);
	});

	$('#guide').click(function(){
		$('.bloc').hide(1000);
		$('#div3').fadeIn(2000);
	});

	
});