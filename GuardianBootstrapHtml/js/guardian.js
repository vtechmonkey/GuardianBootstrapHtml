

$(document).ready(function(){
    $('#laterTag').hover(function() {
        $('#later').addClass('laterIconHover');
    },
           function(){
               $('#later').removeClass('laterIconHover');
        }
    );
});

