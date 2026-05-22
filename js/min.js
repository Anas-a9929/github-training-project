$(document).ready(function(){

    $(".nav-link").click( function(){

        $(".navbar .nav-item .nav-link ").removeClass("active");

        $(this).addClass("active");

    } );
})