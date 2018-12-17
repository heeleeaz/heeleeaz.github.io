$(document).ready(function () {
    // PRELOADER
    $('#preloader').delay(500).fadeOut('slow'); // will fade out the white DIV that covers the website.

    //PAGE CONFIG
    $.getJSON("config/index.json").done(function (data){    
        $.each(data, function(i, item) {
            document.title = data.siteTitle;
        });
    });

        // PAGE LOADER
    jQuery('#grid-container').on('initComplete.cbp', function () {
        if ($('#ajax-tab-container').length) {
            $('#ajax-tab-container').easytabs({
                tabs: 'header nav ul li'
            });
        }
    });

    // RESPONSIVE MENU
    function transform(){
        var outdiv = '<div class="menuout"><div class="menuin"><ul class="tabs"></ul></div></div>';
        $(outdiv).appendTo("nav");
        var resmenus = $('.tabs').html();
        $(".menuout .menuin .tabs").append(resmenus);
       $('.menuin').hide(); 
    }
    transform();
    $('.hamburger').on('click', function() {
       $('.menuin').slideToggle(); 
    });
    $('.menuout').on('click', function () {
        $('.menuin').slideUp();  
    });

    // OWL CAROUSEL GENERAL JS
    if ($('.owl-carousel').length) {
        $('.owl-carousel').each(function () {
            $(this).owlCarousel({
                items: $(this).data('items') ? $(this).data('items') : 3
                , autoPlay: $(this).data('autoplay') ? $(this).data('autoplay') : 2500
                , pagination: $(this).data('pagination') ? $(this).data('pagination') : false
                , itemsDesktop: [1199, 3]
                , itemsDesktopSmall: [979, 3]
            });
        });
    }    

    // BLOG CONTENT  
    $('#grid-blog').cubeportfolio({
        layoutMode: 'grid',
        gridAdjustment: 'responsive',
        gapVertical: 0,
        gapHorizontal: 0,
        mediaQueries: [{
                width: 700,
                cols: 3,
            }, {
                width: 480,
                cols: 2,
                options: {
                    caption: '',
                    gapHorizontal: 30,
                    gapVertical: 20,
                }
            }, {
                width: 320,
                cols: 1,
                options: {
                    caption: '',
                    gapHorizontal: 50,
                }
            }],
            plugins: {
                loadMore: {
                    element: '#load-posts',
                    action: 'click',
                    loadItems: 3,
                }
            }
    }); 

    // GALLERY WIDGET  
    $('#widget-gallery').cubeportfolio({
        layoutMode: 'grid',
        gridAdjustment: 'responsive',
        gapVertical: 0,
        gapHorizontal: 0,
        mediaQueries: [{
                width: 700,
                cols: 4,
            }, {
                width: 480,
                cols: 2,
                options: {
                    caption: '',
                    gapHorizontal: 30,
                    gapVertical: 20,
                }
            }, {
                width: 320,
                cols: 1,
                options: {
                    caption: '',
                    gapHorizontal: 50,
                }
            }]
    }); 
}); // document ready end 


"use strict";
$(window).load(function () {
}); // window load end 

var getUrlParameter = function getUrlParameter(param) {
    var parameters = window.location.href.split("?")[1],
        varables = parameters.split('&'),
        parameterName,
        i;

    for (i = 0; i < varables.length; i++) {
        parameterName = varables[i].split('=');

        if (parameterName[0] === param) {
            return parameterName[1] === undefined ? true : decodeURIComponent(parameterName[1]);
        }
    }
};

// <!-- Global Site Tag (gtag.js) - Google Analytics -->
var googleAnalytic = function googleAnalytic(id){
    $.getScript("https://www.googletagmanager.com/gtag/js?id=" + id, function(){    
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', id); 
     });
};

$.getJSON("config/index.json").done(function (data){
    googleAnalytic(data.googleAnalyticUA);
});

