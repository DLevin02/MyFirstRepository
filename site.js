$('#circle').click(function() {
  $('img').attr('src', 'https://wdef.com/wp-content/uploads/2018/06/08e6f5a9f14ab6c8a299ce273d81f79e-rimg-w720-h540-gmir.jpg');
  // $('p').html("We've changed the text!");
});


$('.square').click(function() {
  $(this).css('background-color', 'blue');
});

$('.square').hover(function() {
  $(this).css('width', '400px');
});

// .addClass(), .removeClass()
// Take a parameter of a class

// .toggleClass()
// Takes the parameter as above, but will do both on the same clickable ID

// .val()
// can pull or set the value from a specified input field

//.hide(), .show() Essentially adds and takes away cSS rule of display: none;

//.fadeIn(), .fadeOut();

//Git Basics
//git init- this will tell get that the directory you are in when this command is run should be tracked by git. You are creating repository in git
