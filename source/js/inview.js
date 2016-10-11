$(document).ready(function (){
    var $win = $(window);
    
    var $rows = $('.wall .secondary');
    var $philosophyTitle = $('.philosophy .title-box');
    var $collectionTitle = $('.collection .title-box');
    var $collectionLogo = $('.collection .logo');
    
    $win.scroll(function () {
        var winHeight = $win.height(),
            scrolltop = $win.scrollTop(),
            elems = [];
        
        $.each($.cache, function () {
            if (this.events && this.events.inview) {
                elems.push(this.handle.elem);
            }
        });

        if (elems.length) {
            $(elems).each(function () {
                var $el = $(this),
                    top = $el.offset().top,
                    height = $el.height();

                if (scrolltop > (top + height) || scrolltop + winHeight < top) {
                    $el.trigger('inview', [ false ]);                        
                } else if (scrolltop < (top + height)) {
                    $el.trigger('inview', [ true ]);
                }
            });
        }
    });
    
    $('.slider, .arrow-big, .philosophy .ph-parag, .philosophy .discover .btn, .collection .ph-parag, .collection .discover .btn').bind('inview', function(event, visible) {
        if (visible && !$(this).hasClass('animated')) {
            var item = $(this);
            item.addClass('animated slideUp2');
        }
    });
    
    $rows.bind('inview', function (event, visible) {
        var item = $(this);
        if (visible && !item.find('.facebook').hasClass('animated')) {
            setTimeout(function(){
            item.find('.facebook').addClass('animated fadeUp2');
            item.find('figure').each(function(i){
                var li = $(this);
                setTimeout(function(){
                    li.addClass('animated fadeUp2');
                }, 50 + (i+1)*100);
            });
            }, 500);
        }
    });
    
    $philosophyTitle.bind('inview', function(event, visible) {
        var item = $(this);
        if (visible && !item.find('h3').hasClass('animated')) {
            setTimeout(function(){
                item.find('.hide-cont-up h2').addClass('animated slideUp');
                setTimeout(function(){
                    item.find('.title-line').addClass('lineWidth');
                    item.find('.hide-cont-down h3').addClass('animated slideLeft');
                },500);

            },500);

        }
    });
    $collectionTitle.bind('inview', function(event, visible) {
        var item = $(this);
        if (visible && !item.find('h3').hasClass('animated')) {                              
            setTimeout(function(){
                item.find('.hide-cont-up h2').addClass('animated slideUp');
                setTimeout(function(){
                    item.find('.title-line').addClass('lineWidth');
                    item.find('.hide-cont-down h3').addClass('animated slideLeft');
                },500);

            },500);

        }
    });
    
    $collectionLogo.bind('inview', function(event, visible) {
        var item = $(this);
        if (visible && !item.hasClass('animated')) {  
            item.addClass('animated fadeUp');
        }
    });
    
    $('.post-lf').bind('inview', function(event, visible) {
        var item = $(this);
        if (visible && !item.find("img").hasClass('animated')) {
            setTimeout(function(){
                item.find("img").addClass('animated slideUp2');
                setTimeout(function(){
                    item.find("p").addClass('animated slideUp2');
                },500);

            },500);

        }
    });
    $('.post-rg').bind('inview', function(event, visible) {
        var item = $(this);
        if (visible && !item.find("img").hasClass('animated')) {
            var item = $(this);
            setTimeout(function(){
                item.find("img").addClass('animated slideUp2');
                setTimeout(function(){
                    item.find("p").addClass('animated slideUp2');
                },500);

            },500);

        }
    });
    $('.post-rrg').bind('inview', function(event, visible) {
        var item = $(this);
        if (visible && !item.find("img").hasClass('animated')) {
            setTimeout(function(){
                item.find("img").addClass('animated slideUp2');
                setTimeout(function(){
                    item.find("p").addClass('animated slideUp2');
                },500);

            },500);

        }
    });
    $('.post-cnt').bind('inview', function(event, visible) {
        var item = $(this);
        if (visible && !item.find("img").hasClass('animated')) {
            setTimeout(function(){
                item.find("img").addClass('animated fadeUp');
                setTimeout(function(){
                    item.find("p").addClass('animated fadeUp');
                },500);

            },500);

        }
    });
    
    $(window).trigger('scroll');
});


