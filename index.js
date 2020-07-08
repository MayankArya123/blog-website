const images=document.querySelectorAll('.carousel-images img')
console.log(images)
const slide=document.querySelector('.carousel-images')
const prevbtn=document.querySelector('#prev')
const nextbtn=document.querySelector('#next')


let counter =1;
const size=images[1].clientWidth +'px';

console.log(size)

slide.style.transform='translateX('+ (-360 * counter) + 'px)'; 

console.log(nextbtn)

nextbtn.addEventListener('click',()=>{

    if(counter >= 5) return;
    slide.style.transition = 'transform 1s ease-in-out';
    counter++;
    console.log('ma') 
    slide.style.transform='translateX('+(-360  * counter) +'px)';
    
    /*  slide.style.transform='translateX(' + (-size * counter ) + 'px)'; */
})

prevbtn.addEventListener('click',()=>{
      if(counter <= 0) return;
    slide.style.transition = 'transform 1s ease-in-out';
    console.log('ma')
    counter--;
    slide.style.transform='translateX('+(-360  * counter) +'px)';
    
    /*  slide.style.transform='translateX(' + (-size * counter ) + 'px)'; */
})

slide.addEventListener('transitionend' ,()=> {
    if(images[counter].id === 'last-clone') {
        console.log('last clone after transitionend of 5th image by next-button')
        /* setting in the initial position  */
        counter = 1;
         /* setting in the initial position  */
        slide.style.transform='translateX('+(-360 * counter) +'px)';
        slide.style.transition = 'none';
    }

    if(images[counter].id === 'first-clone') {
        console.log('first clone after transitionend of 2nd image by prev-button')

         /* setting in the last position  */
        counter = 4;
         /* setting in the last position  */
        slide.style.transform='translateX('+(-360  * counter) +'px)';
        slide.style.transition = 'none';
    }

});



/* scroll move-up  */   

const moveupicon  = document.querySelector('.move-up span');


moveupicon.addEventListener('click' ,function() {

window.scrollTo ({

    top:0,
    left:0,
    behavior:'smooth'

})

})



/*   side-bar    */

 const button=document.querySelector('.toggle-collapse .toggle-icon')

console.log(button)

button.addEventListener('click',function() {

    button.classList.add('hide')

 const socialIcons = document.querySelector('#navbar .social')
const sidebar= document.querySelector('#navbar .nav-items');



console.log(sidebar)

sidebar.classList.toggle('show')

socialIcons.classList.add('hide')

const closeMark =document.querySelector('.close-icon')

closeMark.classList.add('hide');

closeMark.addEventListener('click',function(){

    sidebar.classList.remove('show')

    closeMark.classList.remove('hide');

    socialIcons.classList.remove('hide')

    button.classList.remove('hide')


})

})  

