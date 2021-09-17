/*komentarz*/
//komentarz
//rób komentarzeeee!!!

/*
let const var

var a = 2;
a = 2;

const - używaj do obiektów
*/

const Test = {										// objekt
	wysokosc : 10,										// właściwość
	informacje : function(b, tekst){								// metoda      //b jest wzięte z html,
		var a = 5;
		var wysokosc = Test.wysokosc;						//this.wysokosc
		
		var suma = a+b+wysokosc;
		
		console.log(suma);									 //objekt.metoda(wartość)
	},
	mobile : function(){
		jQuery('nav').toggleClass('active');
		jQuery('nav ul').slideToggle();
	},
	slider : function(){
			jQuery('.lastminute .owl-carousel').owlCarousel({
				loop:true,
				margin:10,
				responsiveClass:true,
				autoplay:true,
				responsive:{
					0:{
						items:1
					},
					1150:{
						items:2
					}
				}
			})
	}
}	


