let input= document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');

let string="";
let arr= Array.from(buttons);    //converts buttons into array 'Array.form'
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{          //every time clicked e is passed
        if(e.target.innerHTML=='='){
            string=eval(string);             //eval is inbuilt function injs
            input.value=string; 
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0, string.length-1);
            input.value=string;
        }
        else{
            string+=e.target.innerHTML;
            input.value=string;
        }

        

    })
})
