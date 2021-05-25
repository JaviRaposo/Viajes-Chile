$(function(){
// Smooth scroll
  $("a").click(function(event){
    if (this.hash !== ""){
      event.preventDefault();
      var gato = this.hash;
      $('html, body').animate({
        scrollTop: $(gato).offset().top
      }, 800, function(){
        window.location.hash = gato;
      });
    }
  });

 //Tooltips en los botones de la sección de Destacados
  $('[data-toggle="tooltip"]').tooltip();

 // Popover en el botón de la sección footer
  $('[data-toggle="popover"]').popover();
});
