var seat = document.getElementById('seat');
var seatnum = document.getElementById('seatnum');
var money = document.getElementById('money');
var selectmoney = document.querySelector('.select-box');
var i=0;
var num=0;
seat.onclick = function(e){
    if(e.target.classList.contains("ico-active")){
        if(e.target.classList.contains("empty")){
            e.target.classList.replace("empty","selecting");
            i++;
        }
        else if(e.target.classList.contains("selecting")){
            e.target.classList.replace("selecting","empty");
            i--;
        }
        seatnum.innerHTML = i;
        
        var clickmoney = selectmoney.selectedIndex;
        num = i*selectmoney[clickmoney].value;
        money.innerHTML = num;
        console.log(num);
    }
    
    
};
