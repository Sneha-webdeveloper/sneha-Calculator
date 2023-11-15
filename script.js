
// display number in text box

function displayNum(num){
    result.value+=num;
}

//clear text box

function clearBox(){

    result.value=""
}

//evaluate expression
 function evaluateOperator(){

result.value=eval(result.value)
}

// 4.remove last item from list

function delButton(){
    result.value=result.value.slice(0,-1)
}

//for toggling
let toggleBtn=document.querySelector('.tgl');
let body=document.querySelector('body')

toggleBtn.onclick=function(){
    body.classList.toggle('light')
}