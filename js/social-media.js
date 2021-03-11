$( ".social-media li" ).hover(
    function() {
      $( this ).append( $( "<span class='line'></span>" ) );
    }, function() {
      $( this ).find( "span" ).last().remove();
    }
  );