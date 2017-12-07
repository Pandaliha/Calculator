(function ($) {
  var $output = $('#display');
  var $buttons = $('#knoepfe button.number');

  $buttons.on('click', function(evt){
    var value = $(evt.currentTarget).html();
    
    if(value === "Clear"){
      $output.html("");
    }
    else if(value === "="){
      $output.html(calculate($output.html()));
    }
    else{
      $output.html(''+$output.html()+value);
    }
  });
  
  function calculate(input){
    
    var result = eval(input);
    
    return result;
  }
  
})(jQuery);