~function(){
    function toggleNav(){
        // console.log($('.menu_switch'));
        // 这个menuExpand函数写死的
        $('.menu_switch').classList.toggle('menu_expand');
        $('.menu_nav').classList.toggle('menu_nav--expand');
    }
    $('.menu_switch').onclick = toggleNav;
    $('.menu_nav .m_nav_content').onclick = toggleNav;
}() 