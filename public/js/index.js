$(document).ready(function(){
  // Carousel
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  },setTimeout(autoplay, 4500));

  function autoplay() {
    $(".carousel").carousel("next");
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
    
  // $(".location").on("click", function(){
  //   var searchtype = $("#type").val();
  //   var baseURL = "http://localhost:3000";
  //   var url = "/maps/location/" + searchtype;
    
  //   $.ajax(url, {
  //     type: "get",
  //     data: e.latlng
  //   }).then(function() {
  //     console.log("redirecting", e.latlng);
  //   });
  // });


  $("select").formSelect();
  
  // Jquery edit button
  $("#btnEdit").on("click", function() {
    console.log("click");
    var editable = $("#mainTable").attr("contenteditable");
    console.log(editable);
    $("#mainTable").attr("contenteditable", !editable);
  });
  
  $(".submit").on("click", function() {
    var searchPlace = $("#name")
    .val()
    .trim();
    var searchtype = $("#type").val();
    var url = "/maps/" + searchPlace + "/" + searchtype;
    console.log(url);
    $.ajax({
      type: "GET",
      url: url
    }).then(function(resp) {
      $(document.body).html(resp);
    });
  });
});
  
  