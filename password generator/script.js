let inputSlider=document.getElementById("inputSlider");
let sliderValue=document.getElementById("sliderValue");
let passBox=document.getElementById("passBox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let numbers=document.getElementById("numbers");
let symbols=document.getElementById("symbols");
let genBtn=document.getElementById("genBtn");
let copyIcon=document.getElementById("copyIcon");


//showing input slider value
sliderValue.textContent=inputSlider.value;   //to show instarting also
inputSlider.addEventListener('input',()=>{    //to show whenver changed
    sliderValue.textContent=inputSlider.value;
});

genBtn.addEventListener('click',()=>{
    passBox.value=generatePassword();
})

let lowerChars="abcdefghijklmnopqrstuvwxyz";
let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumber="0123456789";
let allSymbols="`!@#$%^&*";

//function to generate password
function generatePassword(){
    let genPassword="";
    let allChars="";

    allChars+=lowercase.checked? lowerChars:"";
    allChars+=uppercase.checked? upperChars:"";
    allChars+=numbers.checked? allNumber:"";
    allChars+=symbols.checked? allSymbols:"";

    let i=1;
    while(i<=inputSlider.value){ 
    genPassword+=allChars.charAt(Math.floor(Math.random()*allChars.length)); 
    i++;
    }
    return genPassword;
}

copyIcon.addEventListener('click',()=>{
    if(passBox.value!="" || passBox.value.length>=1){
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText="check";
    copyIcon.title="password copied";

    setTimeout(()=>{
        copyIcon.innerHTML="content_copy";
        copyIcon.title="";
    },3000)

    }
});