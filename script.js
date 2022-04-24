window.addEventListener('load' , function(){ 

let text = document.querySelector('#text');
let textAll = text.innerHTML;
text.innerHTML = '';
let i = 0;


function Copy(txt)
{
    let newtext=''
    for(let sym = 0; sym < txt.length-1; sym++)
    newtext += txt.charAt(sym);
    return newtext;
}

function print(){
    
    if(i <= textAll.length)
    {
        text.innerHTML += textAll.charAt(i)
        i++;
    }
        else
    {
    textAll = Copy(textAll);
    text.innerHTML = textAll;
    if(textAll.length == 0)
    clearInterval(id);
    }
}
let id = setInterval(print,100);
//print();
}) 