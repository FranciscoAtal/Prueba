  $(function (){

    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
  
        var gato = this.hash;
  
        $("html, body").animate({
          scrollTop: $(gato).offset().top
        }, 800, function(){
          window.location.hash = gato;
        }
        );
      }
    });
  
    $('[data-toggle="tooltip"]').tooltip();
    
  });

    $(function(){
      $("h4").dblclick(function(){
      $(this).css("color", "red");
    });
    });

    function envia() {
      alert("El correo fue enviado correctamente");
    };
