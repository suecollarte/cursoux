var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function(){
	$("#Btn01").click(function(){
		 $("#muestra").toggle();
	});
});

$(document).ready(function(){
$( "#Idx01" ).click(function() {
  $("#Idx01").toggleClass("dbl");
});
});
$(document).ready(function(){
  $( "#Idx02" ).click(function() {
    $("#Idx02").toggleClass("dbl");
  });
  });

 
  
  $(document).ready(function(){
    $( "#botoncorreo" ).click(function() {
      alert("El correo fue enviado correctamente");
    });
    });

      
      $(document).ready(function() {
        $(window).resize(function() {
          if ($(this).width() < 500) {
          
           $("#carousel01").toggleClass("d-none");
          }else{
            $("#carousel01").show();
          }
        });
      });

      $(document).ready(function() {
        
         $("#toca1").click(function() {
          $("#toca1").toggleClass("d-none");
          $("#toca2").toggleClass("d-none");
          $("#toca3").toggleClass("d-none");
         })
          
            
      });
    
      $(document).ready(function() {
        
        $("#toca2").click(function() {
         $("#toca1").toggleClass("d-none");
         $("#toca2").toggleClass("d-none");
         $("#toca3").toggleClass("d-none");
        })
         
           
     });
     $(document).ready(function() {
        
      $("#toca3").click(function() {
       $("#toca1").toggleClass("d-none");
       $("#toca2").toggleClass("d-none");
       $("#toca3").toggleClass("d-none");
      })
       
         
   });