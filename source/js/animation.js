$(document).ready(function (){
    
    var $intro = $('.intro');
    var $blog = $('.blog-header');
    var $social = $('.social-wall');
    var $contact = $('.contact');
    var $pgSlider = $('.pg-slider');
    
    var $line = $('.hor-line');
    var $menu = $('.menu-outer');
    var $menuItems = $('.menu-outer').find('li');
    var $verLine = $('.scroll').find('.vert-line');
    
    $intro
        .delay(600,'intro')
        .queue('intro', function (next){
            $intro.find('.coverimg').addClass('animated zoomIn');
            next();
        })
        .delay(600,'intro')
        .queue('intro', function (next){
            $('.intro .logo').addClass('animated fadeUp');
            $('.phrase').each(function (i){
                var $par = $(this);
                setTimeout(function (){
                    $par.find('p').addClass('animated slideUp');
                }, 50 + (i+1)*300);
            });
            next();
        })
        .delay(800,'intro')
        .queue('intro', function (next){
            $line.addClass('lineWidth');
            $menu.addClass('animWidth');
            $verLine.addClass('animeHeight');
            next();
        })
        .delay(500,'intro')
        .queue('intro', function (next){
            $menuItems.each(function (i){
               var $li = $(this);
               setTimeout(function (){
                   $li.addClass('animated fadeUp2');
               }, 50 + (i+1)*100);
            });
            next();
        })
        .delay(300,'intro')
        .queue('intro', function (){
            $('.scroll-text p').addClass('animated slideUp');
            $verLine.css({"transition":"none","-webkit-transition":"none"});
        });
        
        
    $blog
        .delay(600, 'blog')
        .queue('blog', function (next){
            $('.blog-header .logo').addClass('animated fadeUp');
            $menu.addClass('animWidth');
            $('.phrase').each(function (i){
                var $par = $(this);
                setTimeout(function (){
                    $par.find('p').addClass('animated slideUp');
                }, 50 + (i+1)*300);
            });
            next();
        })
        .delay(500, 'blog')
        .queue('blog', function (next){
            $menuItems.each(function (i){
                var $li = $(this);
                setTimeout(function (){
                    $li.addClass('animated fadeUp2');
                }, 50 + (i+1)*100);
            });
            next();
        })
        .delay(300, 'blog')
        .queue('blog', function (next){
            $('.hide-cont h2').addClass('animated slideUp');
            next();
        })
        .delay(200, 'blog')
        .queue('blog', function (){
            $line.addClass('lineWidth');
        });
        
    $social
        .delay(600, 'social')
        .queue('social', function (next){
            $('.social-wall .logo').addClass('animated fadeUp');
            $menu.addClass('animWidth');
            next(); 
        })
        .delay(500, 'social')
        .queue('social', function (next){
            $menuItems.each(function (i){
                var $li = $(this);
                setTimeout(function (){
                    $li.addClass('animated fadeUp2');
                }, 50 + (i+1)*100);
            });
            next();
        })
        .queue('social', function (){
            $('.first-r .facebook').addClass('animated fadeUp2');
            $('.first-r figure').each(function(i){
                var li = $(this);
                setTimeout(function(){
                    li.addClass('animated fadeUp2');
                }, 50 + (i+1)*100);
            });
        });
        
    $contact
        .delay(600, 'contact')
        .queue('contact', function (next){
            $('.contact .logo').addClass('animated fadeUp');
            $menu.addClass('animWidth');
        next();
        })
        .delay(500, 'contact')
        .queue('contact', function (next){
            $menuItems.each(function (i){
                var $li = $(this);
                setTimeout(function (){
                    $li.addClass('animated fadeUp2');
                }, 50 + (i+1)*100);
            });
            next();
        })
        .delay(300, 'contact')
        .queue('contact', function (next){
            $('.contact-form').addClass('animWidth');
            next();
        })
        .delay(400, 'contact')
        .queue('contact', function (){
            $('.contact .wrap').addClass('animated fadeRight');
        });
    
    $pgSlider
        .delay(600, 'pgslider')
        .queue('pgslider', function (next){
            $('.pg-slider .logo').addClass('animated fadeUp');
            $menu.addClass('animWidth');
            next(); 
        })
        .delay(500, 'pgslider')
        .queue('pgslider', function (){
            $menuItems.each(function (i){
                var $li = $(this);
                setTimeout(function (){
                    $li.addClass('animated fadeUp2');
                }, 50 + (i+1)*100);
            });
        });
    
    $(window).load(function(){
        $(".loader").fadeOut('slow', function (){
            if($intro.length){
                $intro.dequeue('intro');
            }  
            if($blog.length){
                $blog.dequeue('blog');
            }
            if($social.length){
                $social.dequeue('social');
            }
            if($contact.length){
                $contact.dequeue('contact');
            }
            if($pgSlider.length){
                $pgSlider.dequeue('pgslider');
            }
        });

       
    });
    

});



