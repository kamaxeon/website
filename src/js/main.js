/*
$(document).ready(function() {
  //variable for the 'stroke-dashoffset' unit
  var $dashOffset = $(".path").css("stroke-dashoffset");
  //on a scroll event - execute function
  $(window).scroll(function() {
    //calculate how far down the page the user is
    var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 100);
    //convert dashoffset pixel value to interger
    var $newUnit = parseInt($dashOffset, 10);
    //get the value to be subtracted from the 'stroke-dashoffset'
    var $offsetUnit = $percentageComplete * ($newUnit / 100);
    //set the new value of the dashoffset to create the drawing effect
    $(".path").css("stroke-dashoffset", $newUnit - $offsetUnit);
      console.log("tamaño -> ", $newUnit - $offsetUnit);
  });
});
//BORRAR DE AQUI PARA ARRIBA*/


//smooth scroll
$(function() {
    $('.scroll-to a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

/* ==============================================
 Auto Close Responsive Navbar on Click
 =============================================== */

function close_toggle() {
    if ($(window).width() <= 768) {
        $('.navbar-collapse a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });
    }
    else {
        $('.navbar .navbar-default a').off('click');
    }
}
close_toggle();

$(window).resize(close_toggle);





/* ==============================================
 WOW plugin triggers animate.css on scroll
 =============================================== */

var wow = new WOW(
    {
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 100, // distance to the element when triggering the animation (default is 0)
        mobile: false  // trigger animations on mobile devices (true is default)
    }
);
wow.init();



 $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          $('#mainNav').removeClass('cabecera-hidden');
      }
      else {
          $('#mainNav').addClass('cabecera-hidden');
      }
  });

/******************************* G SUITE NUEVO *************************/



//smooth scroll
$(function() {
    $('.scroll-to a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

/* ==============================================
 Auto Close Responsive Navbar on Click
 =============================================== */

function close_toggle() {
    if ($(window).width() <= 768) {
        $('.navbar-collapse a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });
    }
    else {
        $('.navbar .navbar-default a').off('click');
    }
}
close_toggle();

$(window).resize(close_toggle);


function click_and_get_description(element) {
    var indicators_array = ['gmail-indicator', 'hangouts-indicator', 'calendar-indicator', 'g+-indicator',
        'docs-indicator', 'spreadsheets-indicator', 'forms-indicator', 'slides-indicator', 'sites-indicator',
        'drive-indicator', 'admin-indicator', 'keep-indicator'];
    indicators_array.forEach(function(element) {
        if (typeof(document.getElementById(element)) !== null)
            {   console.log(document.getElementById(element).style.display == null);
                document.getElementById(element).style.display = 'none';}
    });
    var descriptions_array = ['gmail-description', 'hangouts-description', 'calendar-description', 'g+-description',
        'docs-description', 'spreadsheets-description', 'forms-description', 'slides-description', 'sites-description',
        'drive-description', 'admin-description', 'keep-description'];
    descriptions_array.forEach(function(element) {
        document.getElementById(element).style.display = 'none';
    });
    switch (element) {
        case 'gmailicon':
            document.getElementById('gmail-indicator').style.display = 'block';
            document.getElementById('gmail-description').style.display = 'block';
            break;
        case 'hangoutsicon':
            document.getElementById('hangouts-indicator').style.display = 'block';
            document.getElementById('hangouts-description').style.display = 'block';
            break;
        case 'calendaricon':
            document.getElementById('calendar-indicator').style.display = 'block';
            document.getElementById('calendar-description').style.display = 'block';
            break;
        case 'g+icon':
            document.getElementById('g+-indicator').style.display = 'block';
            document.getElementById('g+-description').style.display = 'block';
            break;
        case 'docsicon':
            document.getElementById('docs-indicator').style.display = 'block';
            document.getElementById('docs-description').style.display = 'block';
            break;
        case 'spreadsheeticon':
            document.getElementById('spreadsheets-indicator').style.display = 'block';
            document.getElementById('spreadsheets-description').style.display = 'block';
            break;
        case 'formicon':
            document.getElementById('forms-indicator').style.display = 'block';
            document.getElementById('forms-description').style.display = 'block';
            break;
        case 'slideicon':
            document.getElementById('slides-indicator').style.display = 'block';
            document.getElementById('slides-description').style.display = 'block';
            break;
        case 'sitesicon':
            document.getElementById('sites-indicator').style.display = 'block';
            document.getElementById('sites-description').style.display = 'block';
            break;
        case 'driveicon':
            document.getElementById('drive-indicator').style.display = 'block';
            document.getElementById('drive-description').style.display = 'block';
            break;
        case 'adminicon':
            document.getElementById('admin-indicator').style.display = 'block';
            document.getElementById('admin-description').style.display = 'block';
            break;
        case 'keepicon':
            document.getElementById('keep-indicator').style.display = 'block';
            document.getElementById('keep-description').style.display = 'block';
            break;
        default:
    }
}
/*
function click_and_get_image(element) {
    var indicators_array = ['work-indicator', 'meetings-indicator', 'signage-indicator', 'kiosk-indicator'];
    indicators_array.forEach(function(element) {
        document.getElementById(element).style.display = 'none';
    });
    var descriptions_array = ['work-description', 'meetings-description', 'signage-description', 'kiosk-description'];
    descriptions_array.forEach(function(element) {
        document.getElementById(element).style.display = 'none';
    });
    switch(element) {
        case 'work-title':
            document.getElementById('work-indicator').style.display = 'block';
            document.getElementById('work-description').style.display = 'block';
            break;
        case 'meetings-title':
            document.getElementById('meetings-indicator').style.display = 'block';
            document.getElementById('meetings-description').style.display = 'block';
            break;
        case 'signage-title':
            document.getElementById('signage-indicator').style.display = 'block';
            document.getElementById('signage-description').style.display = 'block';
            break;
        case 'kiosk-title':
            document.getElementById('kiosk-indicator').style.display = 'block';
            document.getElementById('kiosk-description').style.display = 'block';
            break;
        default:
    }
}


/* ==============================================
 WOW plugin triggers animate.css on scroll
 =============================================== */

var wow = new WOW(
    {
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 100, // distance to the element when triggering the animation (default is 0)
        mobile: false        // trigger animations on mobile devices (true is default)
    }
);
wow.init();

//sticky header on scroll
$(window).load(function() {

    click_and_get_description('gmailicon');

    var buttons_array = ['gmailicon', 'hangoutsicon', 'calendaricon', 'g+icon', 'docsicon', 'spreadsheeticon',
        'formicon', 'slideicon', 'sitesicon', 'driveicon', 'adminicon', 'keepicon'];
    buttons_array.forEach(function(element) {
        document.getElementById(element).addEventListener('click', function() {
            click_and_get_description(element);
        });
    });

    var overlay_array = ['gmail-transparencia', 'hangouts-transparencia', 'calendar-transparencia', 'gplus-transparencia',
        'docs-transparencia', 'spreadsheets-transparencia', 'forms-transparencia', 'slides-transparencia',
        'sites-transparencia', 'drive-transparencia', 'admin-transparencia', 'keep-transparencia'];
    overlay_array.forEach(function(element) {
        $('#'+element).hover(function () {
            $(this).fadeTo(400, 0);
        });
        $('#'+element).mouseleave(function () {
            $(this).fadeTo(400, 0.6);
        });
    });
});



