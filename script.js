const btn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');

btn.addEventListener('click',()=> {
    nav.classList.toggle('active');
    btn.innerHTML=nav.classList.contains('active')
    ?'<i class="fa-solid fa-xmark"></i>'
    :'<i class="fa-solid fa-bars"></i>';
}); 

document.querySelectorAll('#nav a').forEach(a=>{
    a.addEventListener('click',()=>{
        nav.classList.remove('active');
        btn.innerHTML='<i class="fa-solid fa-bars"></i>';
    });
});