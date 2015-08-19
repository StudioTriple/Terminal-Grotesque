// var $div = $('.text').clone().html('');
// $('.text').contents().each(function(){
//   // var spanClass = '';
//   //
//   // if ($(this).is('span')) {
//   //   spanClass = $(this).attr('class');
//   // }
//
//   $textArray = $(this).text().split('');
//
//   for (var i = 0; i < $textArray.length; i++) {
//     $('<span>').addClass('l'+i+'').text($textArray[i]).appendTo($div);
//   }
// });
// $('.text').replaceWith($div);

var click = 1,
  textsize = 50;


function showletter(){
  var $letters = $('.text span');
  var $letter = $('.text span:nth-child('+click+')');
  $letter.addClass('show');
  $('body').css('font-size', textsize+'vw');
  if(click > $letters.length  + 1){
    $letters.removeClass('show');
    click = 0;
    textsize = 50;
  }
  console.log(click, $letters.length, textsize+'vh');
  click++;
  textsize = textsize / 1.1  + .6;
}

var btn = $('.btn');
btn.click(function(){
  showletter();
});
$('body').keydown(function(){
  showletter();
});

showletter();
