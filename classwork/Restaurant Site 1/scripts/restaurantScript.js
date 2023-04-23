// local js to Activate Carousel for manu page rather than bootstrap (but it also doesn't work)
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
  $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
  $("#myCarousel").carousel("prev");
});

// reset functionfor contact form
function clearFormfunction() {  
   document.getElementById("contactPanda").reset();  
 } 