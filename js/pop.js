
   function showPop(id){
    //    console.log(1);
        $('#'+id).style.display = '';
   } 

   let array = $$('.pop_close');
   for (let i = 0; i < array.length; i++) {
       const element = array[i];
       element.onclick = function(){
           let el = this.parentElement.parentElement;
            el.style.display="none";           
       }
   }

$('.pop_wechat').onclick = function(){
    this.classList.add('selected');
    $('.pop_qq').classList.remove('selected');
}

$('.pop_qq').onclick = function(){
    this.classList.add('selected');
    $('.pop_wechat').classList.remove('selected');
}