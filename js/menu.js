~function(){
    $('.menu_switch').onclick = function(){
        // console.log($('.menu_switch'));
        this.classList.toggle('menu_expand');
        $('.menu_nav').classList.toggle('menu_nav--expand');
    }
}()