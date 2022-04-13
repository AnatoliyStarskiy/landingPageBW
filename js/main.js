$(document).ready(function(){

    
    $('nav a[href^="#"').click(function() {
    // Плавное перемещение по ссылкам
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);

    // Добавляем и удаляем Class="active" для ссылок
        $('nav a[href^="#"').parent().removeClass('active');
        $(this).parent().addClass('active');
        $('.menu').toggle(500);
        $('.menu__burger').toggleClass('close');
        return false;
    });

    // Мобильное меню
    $('.menu__burger').click(function(){
        $('.menu').toggle(500);
        $(this).toggleClass('close');
    })

});