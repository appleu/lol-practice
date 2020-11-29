~function(){
    $('.menu_switch').onclick = menuExpand;
    function menuExpand(){
        // console.log($('.menu_switch'));
        $('.menu_switch').classList.toggle('menu_expand');
        $('.menu_nav').classList.toggle('menu_nav--expand');
    }
    $('.menu_nav .m_nav_content').onclick = menuExpand;
}()