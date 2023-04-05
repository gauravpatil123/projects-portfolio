const $icon = document.querySelector('.icon');
const $arrow = document.querySelector('.arrow');

$arrow.animate([
    {top: '0'},
    {top: '6px'},
    {top: '0'}
  ],{
    duration: 1000,
    iterations: Infinity
  });

$("#enter-button-wrapper").hover(function() {
    $("#enter-button-link").html("Enter");
    $(".icon").css("display", "none");
    $(".arrow-2").css("display", "none");
    $(".arrow-3").css("display", "none");
}, function(){
    $("#enter-button-link").html("")
    $(".icon").css("display", "block");
    $(".arrow-2").css("display", "block");
    $(".arrow-3").css("display", "block");
    $arrow.animate([
        {top: '0'},
        {top: '10px'},
        {top: '0'}
      ],{
        duration: 1000,
        iterations: Infinity
      });
})

