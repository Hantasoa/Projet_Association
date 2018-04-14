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

	$('#ex').click(function(){
		
		$('.bloc').hide(1000);
		//$('#div2').removeAttr('style');
		$('#div4').show(1000);
		
	});
	$('#fi').click(function(){
		
		$('.bloc').hide(1000);
		//$('#div2').removeAttr('style');
		$('#div5').show(1000);
		
	});
	$('#evo').click(function(){
		
		$('.bloc').hide(1000);
		//$('#div2').removeAttr('style');
		$('#div6').show(1000);
		
	});
	$('#gest').click(function(){
		
		$('.bloc').hide(1000);
		//$('#div2').removeAttr('style');
		$('#div7').show(1000);
		
	});
	$('#ress').click(function(){
		
		$('.bloc').hide(1000);
		//$('#div2').removeAttr('style');
		$('#div8').show(1000);
		
	});
	$('#diss').click(function(){
		
		$('.bloc').hide(1000);
		//$('#div2').removeAttr('style');
		$('#div9').show(1000);
		
	});

	
});