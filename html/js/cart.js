let a=0;
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const box = document.querySelector('.box');
plus.addEventListener('click',eo =>{
    a++;
    box.value = a;
})

minus.addEventListener('click', (eo)=>{
    if(a!=0)
    a--
    box.value= a
    });