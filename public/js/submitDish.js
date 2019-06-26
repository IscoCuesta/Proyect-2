$(".submitDish").on("click", function(event) {
  event.preventDefault();

  var newDish = {
    dish: $("#name").val().trim(),
    image: $("#image-url").val().trim(),
    PlaceId: $("#place-id").val().trim(),
  };
  console.log(newDish);
  // Send ajax request for new restaurants
  $.ajax("/RedPill/dish", {
    type: "POST",
    data: newDish
  }).then(function() {
    console.log("You just added a new dish to this place");
    // Clear the form when submitting
    $("#name").val("");
    $("#image-url").val("");
    $("#place-id").val("");
  });
});
