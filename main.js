const search = document.querySelector('.search-input');
function OpenSearch() {
    search.classList.remove('d-none');
}
function CloseSearch() {
    search.classList.add('d-none');
}

const slideBarMini = document.querySelector('.slidebar-mini');
const mainContent = document.querySelector('.main-content');
const minibarWrapper = document.querySelector('.minibar-wrapper');
function OpenSlidebarMini() {
    slideBarMini.classList.add('slidebar-mini-active');
    mainContent.classList.add('main-content-hide');
    minibarWrapper.classList.remove('d-none');
}
function CloseSlidebarMini() {
    slideBarMini.classList.remove('slidebar-mini-active');
    mainContent.classList.remove('main-content-hide');
    minibarWrapper.classList.add('d-none');
}


const minibarLinkList = document.querySelectorAll('.minibar-link');
minibarLinkList.forEach(function(item){
    const miniBtn = item.querySelector(".minilink-btn");
    miniBtn.addEventListener('click',function(){
        item.querySelector('.minibar-link-arrow').classList.toggle('rotate-arrow');
        item.querySelector('.link-list').classList.toggle('d-none');
        item.querySelector('.link-wrapper').classList.toggle('link-list-open');
    })
})

const minibarFootList = document.querySelectorAll('.foot-minibar');
minibarFootList.forEach(function(item){
    const miniFootBtn = item.querySelector(".foot-minibar-btn");
    miniFootBtn.addEventListener('click',function(){
        item.querySelector('.foot-minibar-btn-arrow').classList.toggle('rotate-arrow-foot');
        item.querySelector('.link-foot-mini').classList.toggle('d-none');
        // item.querySelector('.links-foot-mini').classList.toggle('link-list-open');
    })
})



