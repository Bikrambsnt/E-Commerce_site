const sidebar = document.querySelector('#sidebar');
const sidebarText = document.querySelectorAll('#sidebar-text');

let shrinkTimeout;

function shrinkSidebar(){
    sidebar.classList.add('w-2');
    sidebar.classList.remove('w-44');
    console.log('Sidebar Added');
}

function resetShrinkTimeout(){
    clearTimeout(shrinkTimeout);
    shrinkTimeout = setTimeout(shrinkSidebar,5000);
}

shrinkTimeout=setTimeout(shrinkSidebar,5000);

sidebar.addEventListener('click', ()=>{
    if(sidebar.classList.contains('w-2')){

        sidebar.classList.remove('w-2');
        sidebar.classList.add('w-44');

    }

    else{
        sidebar.classList.remove('w-44');
        // sidebar.classList.add('w-14');
    }

    sidebarText.forEach ((text)=>{

        text.classList.toggle('hidden');
    });

    resetShrinkTimeout();

});

['mouseover','touchstart','touchmove'].forEach((event)=>{
    sidebar.addEventListener(event,resetShrinkTimeout);

});