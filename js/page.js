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
            // console.log(element.style.top);
        }
    }
    if(pageIndx === 0 && offset > 0) return;//少了边界判断
    if(pageIndx === 2 && offset < 0) return;
    if(pageIndx >=0 && offset < 0){
        nextIndx = pageIndx + 1;
    }else if(pageIndx < pages.length && offset > 0){
        nextIndx = pageIndx - 1
    }else{
        nextIndx = null;        
    }
}

function finish(){
    if(nextIndx !== null){
        pages[nextIndx].style.transition = '.5s';
        pages[nextIndx].top = 0;
        setTimeout(function(){
            // pages[pageIndx].style.transition = ""; //加了，切换下一张页面松开时，当前页面会瞬间改变top值，导致看到了页面背后的背景色
            pageIndx = nextIndx;
            nextIndx = null;
            pageInit();
        },500);
    }
}

pageInit();
//有bug  T--T
let pContainer = $('.page_container');
pContainer.ontouchstart=function(e){
    //console.log(e);
    let y = e.touches[0].clientY;
    //console.log(y);
    pContainer.ontouchmove = function(e){
        let y1 = e.touches[0].clientY-y;
        console.log(y1);
        moving(y1);
        pContainer.ontouchend = function(){
            finish();
            pContainer.ontouchmove = null;
        }
    }
}
