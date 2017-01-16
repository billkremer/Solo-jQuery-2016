var colorTotal = {
  red: 0,
  yellow: 0,
  green: 0,
  blue: 0,
};
var $newBlock = "";
var nextColor = "";

$(function () {

  $('.color-button').on('click', function () {
   nextColor = $(this).data('color');
console.log(nextColor);




  });
}); // closes document ready
