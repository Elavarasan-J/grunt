(function() {
  $(document).on('click', '.head', function() {
    $(this).addClass('hello');
    return console.log('Executed !');
  });

}).call(this);
