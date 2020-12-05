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
        const element = pages[index]
        if(pageIndx === index){
            element.style.zIndex = 1;
            element.style.top = 0;
        }else{
            element.style.top = (index-pageIndx) * height() +'px';
            element.style.zIndex = 10;
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
    // if(nextIndx !== null){
    //     pages[nextIndx].style.transition = '.5s';
    //     pages[nextIndx].top = 0;
    //     setTimeout(function(){
    //         // pages[pageIndx].style.transition = ""; //加了，切换下一张页面松开时，当前页面(已经不是第一张了)会瞬间改变top值，导致看到了页面背后的背景色
    //         pageIndx = nextIndx;
    //         //pages[pageIndx].style.transition = "";//这里才是当前的页面，但是加了动画就没了
    //         nextIndx = null;
    //         pageInit();
    //     },500);
    // }
    if(nextIndx === null){
        pageInit();
        return;
    }
    let nextPage = pages[nextIndx];
    nextPage.style.transition = ".5s";
    nextPage.style.top = 0;

    setTimeout(function(){
        pageIndx = nextIndx;
        nextPage.style.transition = "";
        pageInit();//这里必须要执行初始化操作，因为前面只是改变了nextPage的top，z-index值没有改动
    },500)
}

pageInit();
//有bug  T--T
let pContainer = $('.page_container');
//pContainer.ontouchstart=function(e){
pContainer.addEventListener("touchstart",function(e){
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
            // pContainer.ontouchstart = null;
        } 
    }
},{passiv:true})


function showPage(index){
    let nextPage = pages[index];
    if(index > pageIndx){
        pages[index].style.top = height()+'px';
    }else if(index < pageIndx){
        pages[index].style.top = -height()+'px';
        console.log(pages[index].style.top);
    }else{
        if(pageIndx === 0){
            pageIndx++;
        }else{
            pageIndx--;
        }
        pageInit();
    }
    nextPage.clientHeight;//为了触发浏览器重绘，让当前page的top从0-height-0，不要优化而跳过中间的高度
    nextIndx = index;//有人像家雀儿，不愿意挪窝，有人像候鸟，永远在路上 》 北岛   日暮酒醒人已远，满天风雨下西楼  》 唐 许浑  谢亭送别
    // 才学加持，行稳致远    他一动，要闯祸；他安静，憋坏招儿  


    finish();
}