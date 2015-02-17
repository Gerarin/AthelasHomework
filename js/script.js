$(document).ready(function(){

    $( document ).on("click", ".character-bio", function(){

      	if ( $(".team li").length <3){

      		$(".team").append( $(this) );
      		$(this).toggleClass("character-bio selected")
      	
      	}

     	else {
    	
   			alert('party completo, si deseas da click para deseleccionar');
    	};

		console.log($(".team li").length);

	}); 

    $( document ).on("click", ".selected", function(e){

   		$(".character-list").append( this );
     	$(this).toggleClass("character-bio selected")

		console.log($(".team li").length);

	}); 

});

