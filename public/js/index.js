$(document).ready(function(){
  // Carousel
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  },setTimeout(autoplay, 4500));
  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 7500);
  }
     
  // Select form
  $('select').formSelect();
    
    $.ajaxPrefilter(function( options, original_Options, jqXHR ) {
      options.async = true;
    });
    
  $(".submit").on("click", function(){
    var searchPlace = $("#name").val().trim();
    var searchtype = $("#type").val();
    var url = "/maps/" + searchPlace + "/" + searchtype;
    var baseURL = "https://muysalsa.herokuapp.com";
    window.location.replace(baseURL + url);
  });
});