var colorTotal = { // an object with the color count total.
  red: 0,
  yellow: 0,
  green: 0,
  blue: 0,
};
var $newBlock = ""; // the string for the div to be appended.
var nextColor = ""; // the color of the div from the button data.

$(function () { // document ready

  $('.color-button').on('click', function () {
   nextColor = $(this).data('color'); // retrieves the color data

   $newBlock = $('<div class="color-cube ' + nextColor +'"></div>'); // creates a div string with the color-cube and "nextColor" classes.

   $('.container').append($newBlock); // appends the div

   colorTotal[nextColor]++;  // increases the total count of the color

   $('body').find('#'+nextColor).text(colorTotal[nextColor]);
   // updates the total color count in the top table.

  });  // closes the click
}); // closes document ready
