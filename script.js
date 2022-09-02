const navbarEl=document.querySelector('.top-container');

const bottomContainerEl=document.querySelector('.bottom-container');

console.log(window.scrollY);
console.log(bottomContainerEl.offsetTop);

window.addEventListener('scroll',()=>{
     if(window.scrollY>bottomContainerEl.offsetTop-navbarEl.offsetHeight){
         navbarEl.classList.add('active');
     }

     else{
        navbarEl.classList.remove('active');
     }
})