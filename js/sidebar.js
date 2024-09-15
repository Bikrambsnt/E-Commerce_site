const sidebar = document.querySelector('#sidebar');
const sidebarText = document.querySelectorAll('#sidebar-text');

// setInterval(()=>{
//     sidebar.style.opacity =0.1;
    
// },5000);



 sidebar.addEventListener('click', (e)=>{
    sidebar.classList.toggle('w-14');
    sidebar.classList.toggle('w-40');
    // sidebar.style.opacity=1;


sidebarText.forEach((text)=>{
text.classList.toggle('hidden');
})

 });



