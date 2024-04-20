$(document).ready(function(){

	var flag=false;
	var scroll;
	var flag2=true;

	var botones;
	
	 var navesconder = $("#navdescroll");
	
	
	
	
    var botones = $("#slider");   // INICIO Efecto para los botones
	var izq = $(".left");
	var der = $(".right");

	var abierto3 = true; // sin uso

	botones.mouseover(function(){ // Evento para cuando el mouse entra en el slider, que se lo asigne a la variable botones, (afecta tanto cuando entra al slider como a los elementos de adentro)
		if(abierto3){
			izq.css("transition","all .3s linear 0s");	 
			izq.css({"display":"block","background":"black","border":"3px solid #fff","color":"white"});
			der.css("transition","all .3s linear 0s");	 
			der.css({"display":"block","background":"black","border":"3px solid #fff","color":"white"});
			
		botones.mouseout(function(){ // Evento para cuando saco el mouse del slider 
		if(abierto3){
			izq.css("transition","all .6s linear 0s");
			izq.css({"background":"transparent","border":"transparent","color":"transparent"});
			der.css("transition","all .6s linear 0s");
			der.css({"background":"transparent","border":"transparent","color":"transparent"});
			
		}
		});
				
		}
		
	}); // FIN Efecto para los botones
	
	
	
	
	
	  var menutransicion = $(".menu_bar2");
	
	
	if ($(window).width() >= 1000){ //Si la pantalla Abre grande.
	
	$(window).scroll(function(){
		
		scroll=$(window).scrollTop();
		
		if(scroll>90){
			if ($(window).width() >= 1000){
			if(!flag){
			menutransicion.css("transition","all .5s linear 0s");	
			menutransicion.css({"top":"11px","display":"block","position":"fixed","background":" rgb(217, 217, 217)"});
			$("#navdescroll").css({"display":"block","background":"#a3b6e0"}) // Si no lo pongo trae errores, el problema es cuando esta chica tiene display none porque esta el otro nav(ver el else1)
			flag=true;                          // si de ahi la agrando no se ve.
			
				
  
	var navdescroll = $("#navdescroll");
	var menu2 = $(".menu_bar2");

	var abierto2 = true;

	menu2.click(function(){
		if(abierto2){
			navdescroll.css("transition","all .5s linear 0s");	 //VER! POR AHORA PARA QUE HAYA TRANSICION TENGO QUE CREAR UNA VARIABLE.
			navdescroll.css({"top":"0","background":"#a3b6e0"});
			
			
		
		}else{
			navdescroll.css("transition","all .7s linear 0s");
			navdescroll.css({"top":"-800px","background":"transparent"});
			
		}
		abierto2 =!abierto2;
	});
	
	
	var menu2 = $(".esconderbarra2");
	var navdescroll = $("#navdescroll");

	var abierto2 = true;

	menu2.click(function(){
		if(abierto2){
			navdescroll.css("transition","all .5s linear 0s");	
			navdescroll.css({"top":"0","background":"#a3b6e0"});
		}else{
			navdescroll.css("transition","all .7s linear 0s");
			navdescroll.css({"top":"-800px","background":"transparent"});
		}
		abierto2 =!abierto2;
	});
			
			
			
			
			
			}}
	}else{  //else1
		if(flag){
		    menutransicion.css("transition","all .5s linear 0s");	
			menutransicion.css({"top":"-80px","display":"block","position":"fixed","background":"transparent"});
		navesconder.css("transition","all .7s linear 0s");
			navesconder.css({"top":"-800px","background":"transparent"});
		flag=false;
			}
	}
		
	});
	} // Hasta aca es si la Pantalla se abre grande

		
		
		
		
		
		if(flag2){ //Este flag2 no cambia el valor creo.
		 $(window).resize(function(){ // Evento para un cambio de tamaño de ventana, si abre chica al cambio de tamaño se activa esto.
		if ($(window).width() < 1000){ //Si la pantalla abra chica.
			
			menutransicion.css({"top":"-80px","display":"block","position":"fixed","background":"transparent"});
			navesconder.css("transition","all .7s linear 0s");
			navesconder.css({"top":"-800px","background":"transparent"});
									  
									  
		}else{
	if ($(window).width() >= 1000){
		
		//$(".menu_bar2").css({"display":"block","position":"fixed"})  Esto soluciona el problema del scroll cuando pasas de chico a grande, pero trae el problema q superpone los nav.
		$(window).scroll(function(){
		
		scroll=$(window).scrollTop();
		
		if(scroll>90){
			if ($(window).width() >= 1000){
			if(!flag){
			
			menutransicion.css("transition","all .5s linear 0s");	
			menutransicion.css({"top":"11px","display":"block","position":"fixed","background":"rgb(169, 192, 242)"});
			
			flag=true;
			
				
    var menu2 = $(".menu_bar2");
	var navdescroll = $("#navdescroll");

	var abierto2 = true;

	menu2.click(function(){
		if(abierto2){
			navdescroll.css("transition","all .5s linear 0s");	
			navdescroll.css({"top":"0","background":"#456bbc"});
		}else{
			navdescroll.css("transition","all .7s linear 0s");
			navdescroll.css({"top":"-800px","background":"transparent"});
		}
		abierto2 =!abierto2;
	});
	
	
	var menu2 = $(".esconderbarra2");
	var navdescroll = $("#navdescroll");

	var abierto2 = true;

	menu2.click(function(){
		if(abierto2){
			navdescroll.css("transition","all .5s linear 0s");	
			navdescroll.css({"top":"0","background":"#456bbc"});
		}else{
			navdescroll.css("transition","all .7s linear 0s");
			navdescroll.css({"top":"-800px","background":"transparent"});
		}
		abierto2 =!abierto2;
	});
			
			
			
			}}
	}else{
		if(flag){
		menutransicion.css("transition","all .5s linear 0s");	
		menutransicion.css({"top":"-80px","display":"block","position":"fixed","background":"transparent"});
		navesconder.css("transition","all .7s linear 0s");
		navesconder.css({"top":"-800px","background":"transparent"});
		
		flag=false;
			}
	}
		
	});
	}
	
	
}
			
									});
									
									
			
		} //Hasta aca el flag2
							
	
		
	
	
			
		
	

// A partir de aca para abajo es para el nav para movil

	var menu = $(".menu_bar");
	var nav = $("#navPrincipal");

	var abierto = true;

	menu.click(function(){
		if(abierto){
			nav.css("transition","left .5s linear 0s");
			nav.css("left","0");
		}else{
			nav.css("transition","left .7s linear 0s");
			nav.css("left","-100%");
		}
		abierto =!abierto;
	});
	
	
	
	
	
	var menu = $(".esconderbarra");
	var nav = $("#navPrincipal");

	var abierto = true;

	menu.click(function(){
		if(abierto){
			nav.css("transition","left .5s linear 0s");
			nav.css("left","0");
		}else{
			nav.css("transition","left .7s linear 0s");
			nav.css("left","-100%");
		}
		abierto =!abierto;
	});
	
	
	
	
	
	
	

	
	
	
});//Cierra el ready



	
	var indicador = 0;
$(document).ready(function(){
    $('.left').on('click',function(e){
        e.preventDefault();
        moveSlider('left');
    });
    $('.right').on('click',function(e){
        e.preventDefault();
        moveSlider('right');
    });


        function auto(){
            intv = setInterval(function(){
            $('.right').click();
            }, 3000);
            }
             auto(); // start
            $('.form_conteiner').hover(function( e ){
            return e.type=='mouseenter'?clearInterval(intv):auto();
            });
    defineSizes();
});
$(window).on('resize',defineSizes);
    function defineSizes(){
        $('.form_conteiner .slide').each(function(i,el){
            $(el).css({
            'background-image': 'url('+$(el).data('background')+')',
            'height': ($('.form_conteiner').width()*0.25)+'px',
            'width': ($('.form_conteiner').width())+'px'
            });
        });
    $('.form_conteiner .slideConteiner').css({
        'margin-left': -(indicador * $('.form_conteiner').width())+'px'
    });
}
function moveSlider(direccion){

    var limite = $('.form_conteiner .slide').length;

    indicador = (direccion == 'right') ? indicador + 1 : indicador - 1;
    indicador = (indicador >= limite) ? 0 : indicador;
    indicador = (indicador < 0) ? limite - 1 : indicador;

    $('.form_conteiner .slideConteiner').animate({
        'margin-left': -(indicador * $('.form_conteiner').width())+'px'
    });
}
	
	

