
$(document).ready(function() {
 var groceries = [];


  $("form").submit(function(event) {
    $(".printed").remove();

    var currentInput = $("#groceryInput").val();
    groceries.push(currentInput);
    groceries.sort();

    var groceriesUpper = groceries.map(function(grocery){
      return grocery.toUpperCase();
    })

    groceriesUpper.forEach(function(grocery){
      $(".results").append("<li class='printed'>" + grocery + "</li>");
    });


    event.preventDefault();

  });
});
