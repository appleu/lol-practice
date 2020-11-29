function $(select,el){
     el = el || document;
    return el.querySelector(select);
}

function $$(select,el){
    let e = el || document;
    return e.querySelectorAll(select);
}