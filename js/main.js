$(function(){

$('.close').click(function(){
  $(this).parent().hide();
  })



$('.search-wrapper').click(function(){
  $(this).addClass('active');
  })
});

 // ------ start input width calendar---
$( function() {
    $( "#datepicker").datepicker({
      showOn: "button",
      buttonImage: "img/calend.svg",
      buttonImageOnly: true,
      buttonText: "Select date"
    });
  } );
// ------ end input width calendar---

