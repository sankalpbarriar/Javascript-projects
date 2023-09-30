let val=document.getElementById('counter');    //targeted the value

let buttons=document.getElementById('clicks');     //target the button

buttons.addEventListener('click',(e)=>{         //added click eventListener
    e.target.innerHTML=val.innerHTML++;         
})