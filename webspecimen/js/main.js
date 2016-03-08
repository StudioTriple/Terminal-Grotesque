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
