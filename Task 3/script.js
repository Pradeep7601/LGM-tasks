var btn = document.querySelectorAll('button');
var dis = document.querySelector(".display");

btn.forEach(function(button){
    button.addEventListener('click',calc)
});

function calc(e){
    var value = e.target.value;
    if(value === 'C'){
        dis.value = '';
    }else if(value ==='='){
        if(dis.value !== ''){
            dis.value = eval(dis.value);
        }
    }
    else{
        dis.value += value;
    }
}