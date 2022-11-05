/* glopale */
$(function(){
   
    'use strict';
    
    // link class active
    $('.nav li a').parent().click(function(){
       
        $(this).addClass('activ').siblings().removeClass('activ');
        
    });
    // start sclor our servises
    $('.nav li a').click(function(){
        $('html, body').animate({
       scrollTop: $('#' + $(this).data("value")).offset().top - 5
            
        }, 1000);
    });
});