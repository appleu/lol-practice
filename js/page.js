// static
// move
// finish
console.log('page');
let pageIndx = 1;
let nextIndx = null;
let pages = $$('.page_container .page');
/**
 * 页面初始化
 * @param {*} pageIndx 需要显示在视口的页面下标 
 */
function pageInit(/*pageIndx*/){
    console.log('init');
    for (let index = 0; index < pages.length; index++) {
        if(pageIndx === index){
            pages[pageIndx].style.zIndex = 1;
            pages[pageIndx].style.top = 0;
            // const element = pages[index]
        }else{
            pages[index].style.top = (index-pageIndx) * height() +'px';
            pages[index].style.zIndex = 10;
        }
    }
}
/**
 * 移动页面，除了当前显示的页面不动
 * @param {位移量} offset 
 * 
 */
function moving(offset){
    console.log('move');
    for (let index = 0; index < pages.length; index++) {
        if(pageIndx !== index) {
            let element = pages[index];
            element.style.top = (index-pageIndx)*height()+offset+'px';
            console.log(element.style.top);
        }
    }

}

function finish(){

}

pageInit();
