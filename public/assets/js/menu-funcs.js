
   

      
!(function($) {
    "use strict";

    $(document).on('click', '#navvy', function(e) {

 document.getElementById("bod").style.marginLeft = "-300px"
            $("#header").fadeOut();
            if ($("#header").is(":hidden")) {
                document.getElementById("bod").style.marginLeft = "0px"
                $("#header").fadeIn();
            }
      });
      
  })(jQuery);