/*
Nav menu start
*/
!(function($) {
    "use strict";
  
    document.getElementById("pagination-demo").style.margin = "20px 1px";
    document.getElementById("pagination-demo").style.display = "flex";
    

    $(document).on('click', '#navvy', function(e) {

 document.getElementById("bod").style.marginLeft = "-300px"
            $("#header").fadeOut();
            if ($("#header").is(":hidden")) {
                document.getElementById("bod").style.marginLeft = "0px"
                $("#header").fadeIn();
            }
      });
      
  })(jQuery);
/*
Nav menu end
*/



/*
Pagination function start
*/

  $(document).ready(function() {
    $('#pagination-demo').twbsPagination({
    totalPages: 5,
    // the current page that show on start
    startPage: 1,
    
    // maximum visible pages
    visiblePages: 5,
    
    initiateStartPageClick: true,
    
    // template for pagination links
    href: false,
    
    // variable name in href template for page number
    hrefVariable: '{{number}}',
    
    // Text labels
    first: 'First',
    prev: 'Previous',
    next: 'Next',
    last: 'Last',
    
    // carousel-style pagination
    loop: false,
    

    // callback function
    onPageClick: function (event, page) {
       $('.page-active').removeClass('page-active');
      $('#page'+page).addClass('page-active');
      $('html, body').animate({scrollTop : 0});

    },
    
    // pagination Classes
    paginationClass: 'pagination',
    nextClass: 'next',
    prevClass: 'prev',
    lastClass: 'last',
    firstClass: 'first',
    pageClass: 'page',
    activeClass: 'active',
    disabledClass: 'disabled',
    });
    
    });

    /*
     Pagination function end
     */

     /*
     Scroll to top pagination
     */
   
     function toTop() {
      $('html, body').animate({scrollTop : 0});
      }