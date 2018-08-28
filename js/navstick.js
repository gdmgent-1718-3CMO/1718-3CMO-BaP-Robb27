var  mn = $(".main-nav");
var win = $(window).height();

$(window).scroll(function() {
  if( $(this).scrollTop() > win ) {
    mn.addClass("main-nav-scrolled");
  } else {
    mn.removeClass("main-nav-scrolled");
  }
});





$('#groendiv').hover(
    function() {
        $('#groen').fadeIn('fast');
    },function() {
        $('#groen').fadeOut('fast');
    }
);

$('#groendiv2').hover(
    function() {
        $('#groen2').fadeIn('fast');
    },function() {
        $('#groen2').fadeOut('fast');
    }
);

$('#groendiv3').hover(
    function() {
        $('#groen3').fadeIn('fast');
    },function() {
        $('#groen3').fadeOut('fast');
    }
);

$('#groendiv4').hover(
    function() {
        $('#groen4').fadeIn('fast');
    },function() {
        $('#groen4').fadeOut('fast');
    }
);
$('#groendiv5').hover(
    function() {
        $('#groen5').fadeIn('fast');
    },function() {
        $('#groen5').fadeOut('fast');
    }
);
$('#groendiv6').hover(
    function() {
        $('#groen6').fadeIn('fast');
    },function() {
        $('#groen6').fadeOut('fast');
    }
);
$('#groendiv7').hover(
    function() {
        $('#groen7').fadeIn('fast');
    },function() {
        $('#groen7').fadeOut('fast');
    }
);
$('#groendiv8').hover(
    function() {
        $('#groen8').fadeIn('fast');
    },function() {
        $('#groen8').fadeOut('fast');
    }
);