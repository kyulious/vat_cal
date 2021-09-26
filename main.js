const total = document.getElementById("total");
const total2 = document.getElementById("total2");
const box1 = document.getElementsByClassName("box1")[0];
const box2 = document.getElementsByClassName("box2")[0];
const box3 = document.getElementsByClassName("box3")[0];
const box4 = document.getElementsByClassName("box4")[0];
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const vat = document.getElementById("vat");
const vat2 = document.getElementById("vat2");
const supply = document.getElementById("supply");
const supply2 = document.getElementById("supply2");
const rate = document.getElementById("rate");
const tax = document.getElementById("tax");
const tax2 = document.getElementById("tax2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const initial = document.getElementById("initial");
const change = document.getElementById("change");
const changeprice = document.getElementById("changeprice");
const differ = document.getElementById("differ");
const toggle = document.getElementById("checkbox");
const body = document.getElementsByClassName("body")[0];
const caltitle = document.getElementById("caltitle");
const title1 = document.getElementById("title1");
const title2 = document.getElementById("title2");
const title3 = document.getElementById("title3");
const title4 = document.getElementById("title4");
const title5 = document.getElementById("title5");
const title6 = document.getElementById("title6");
//input 값에 콤마 -> 이거 적용하면 btn클릭값이 계산이 안돼서 원인 찾아야함.
// total.addEventListener("keyup", function(e){
//     var value = e.target.value;
//     value = Number(value.replaceAll(',', ''));
//     var formatValue = value.toLocaleString('ko-KR'); 
//     total.value = formatValue;    
// })
// initial.addEventListener("keyup", function(e){
//     let value = e.target.value;
//     value = Number(value.replaceAll(',', ''));
//     const formatValue = value.toLocaleString('ko-KR'); 
//     initial.value = formatValue;    
// })
// change.addEventListener("keyup", function(e){
//     let value = e.target.value;
//     value = Number(value.replaceAll(',', ''));
//     const formatValue = value.toLocaleString('ko-KR'); 
//     change.value = formatValue;    
// })


//input 입력창에 콤마 넣기 
// function inputNumberFormat() {
//     total.value = comma(uncomma(total.value));
// }
// function comma(str) {
//     str = String(str);
//     return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
// }
// function uncomma(str) {
//     str = String(str);
//     return str.replace(/[^\d]+/g, '');
// }



//부가세계산
btn1.addEventListener("mouseover", function(){
    btn1.style.backgroundColor="rgb(53, 144, 156)";
    btn1.style.color="#fff";
    btn1.style.border="none";
})
btn1.addEventListener("mouseout", function(){
    btn1.style.backgroundColor="rgb(163, 218, 228)";
    btn1.style.color="rgb(53, 144, 156)";
})

btn2.addEventListener("mouseover", function(){
    btn2.style.backgroundColor="rgb(53, 144, 156)";
    btn2.style.color="#fff";
    btn2.style.border="none";
})
btn2.addEventListener("mouseout", function(){
    btn2.style.backgroundColor="rgb(163, 218, 228)";
    btn2.style.color="rgb(53, 144, 156)";
})

//부가세 계산
btn1. addEventListener("click", function(){
    
    supply.innerText =  `${Math.floor(total.value/11*10)}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    tax.innerText = `${Math.ceil(total.value/11)}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
})

total.addEventListener("keyup", function(e){
    e.preventDefault();
    if(e.key === 'Enter' && total.value != ""){
    supply.innerText =  `${Math.floor(total.value/11*10)}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    tax.innerText = `${Math.ceil(total.value/11)}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }})

btn2.addEventListener("click", function(){
    total.value="";
    supply.innerText="0";
    tax.innerText="0";
})

//총액 계산
btn5. addEventListener("click", function(){
    
    var num1 = Number("total2.value");
    var num2 = Number("tax2.innerText");
    tax2.innerText = `${Math.ceil(total2.value/10)}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    supply2.innerText = `${Math.ceil(total2.value*11/10)}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
})

total.addEventListener("keyup", function(e){
    e.preventDefault();
    if(e.key === 'Enter' && total.value != ""){
    supply.innerText =  `${Math.floor(total.value/11*10)}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    tax.innerText = `${Math.ceil(total.value/11)}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }})

btn2.addEventListener("click", function(){
    total.value="";
    supply.innerText="0";
    tax.innerText="0";
})

// 증감률
btn3.addEventListener("mouseover", function(){
    btn3.style.backgroundColor="rgb(53, 144, 156)";
    btn3.style.color="#fff";
    btn3.style.border="none";
})
btn3.addEventListener("mouseout", function(){
    btn3.style.backgroundColor="rgb(163, 218, 228)";
    btn3.style.color="rgb(53, 144, 156)";
})

btn4.addEventListener("mouseover", function(){
    btn4.style.backgroundColor="rgb(53, 144, 156)";
    btn4.style.color="#fff";
    btn4.style.border="none";
})
btn4.addEventListener("mouseout", function(){
    btn4.style.backgroundColor="rgb(163, 218, 228)";
    btn4.style.color="rgb(53, 144, 156)";
})

btn3. addEventListener("click", function(){
    
    changeprice.innerText = `${Math.floor((change.value-initial.value)/initial.value*10000)/100}%`;
    differ.innerText = `${change.value-initial.value}원`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
})
btn4.addEventListener("click", function(){
    initial.value="";
    change.value="";
    changeprice.innerText="0%";
    differ.innerText="0";
})

change.addEventListener("keyup", function(e){
    e.preventDefault();
    if(e.key === 'Enter' && change.value != ""){
        changeprice.innerText = `${Math.floor((change.value-initial.value)/initial.value*10000)/100}%`;
        differ.innerText = `${change.value-initial.value}원`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }})


//input창 마우스 오버 시 테두리
total.addEventListener("mouseover", function(){
    total.style.border="0.2px solid rgb(53, 144, 156)";
})
total.addEventListener("mouseout", function(){
    total.style.border="none";
})
initial.addEventListener("mouseover", function(){
    initial.style.border="0.2px solid rgb(53, 144, 156)";
})
initial.addEventListener("mouseout", function(){
    initial.style.border="none";
})
change.addEventListener("mouseover", function(){
    change.style.border="0.2px solid rgb(53, 144, 156)";
})
change.addEventListener("mouseout", function(){
    change.style.border="none";
})

//다크모드
toggle.addEventListener('click', function(){
    if(toggle.checked != true){
        body.style.backgroundColor="rgb(163, 218, 228)";
        caltitle.style.color="rgb(53, 144, 156)";
        box1.style.backgroundColor="rgb(53, 144, 156)";
        box1.style.border="1px solid rgb(53, 144, 156)";
        box2.style.backgroundColor="rgb(53, 144, 156)";
        box2.style.border="1px solid rgb(53, 144, 156)";
        box3.style.backgroundColor="rgb(53, 144, 156)";
        box4.style.backgroundColor="rgb(53, 144, 156)";
        box4.style.border="1px solid rgb(53, 144, 156)";
        vat.style.backgroundColor="rgb(245, 252, 253)";
        vat.style.border="1px solid rgb(193, 235, 255)";
        vat2.style.backgroundColor="rgb(245, 252, 253)";
        vat2.style.border="1px solid rgb(193, 235, 255)";
        vat2.style.color="black";
        vat.style.color="black";
        vat2.style.color="black";
        btn1.style.color="rgb(53, 144, 156)";
        btn1.style.backgroundColor="rgb(163, 218, 228)";
        btn1.addEventListener("mouseover", function(){
            btn1.style.backgroundColor="rgb(53, 144, 156)";
            btn1.style.color="#fff";
            btn1.style.border="none";
        })
        btn1.addEventListener("mouseout", function(){
            btn1.style.backgroundColor="rgb(163, 218, 228)";
            btn1.style.color="rgb(53, 144, 156)";
        })
        btn2.style.color="rgb(53, 144, 156)";
        btn2.style.backgroundColor="rgb(163, 218, 228)";
        btn2.addEventListener("mouseover", function(){
            btn2.style.backgroundColor="rgb(53, 144, 156)";
            btn2.style.color="#fff";
            btn2.style.border="none";
        })
        btn2.addEventListener("mouseout", function(){
            btn2.style.backgroundColor="rgb(163, 218, 228)";
            btn2.style.color="rgb(53, 144, 156)";
        })
        title1.style.color="rgb(163, 218, 228)";
        title2.style.color="rgb(163, 218, 228)";
        title3.style.color="rgb(163, 218, 228)";
        title4.style.color="rgb(163, 218, 228)";
        title5.style.color="rgb(163, 218, 228)";
        title6.style.color="rgb(163, 218, 228)";
        rate.style.backgroundColor="rgb(245, 252, 253)";
        rate.style.border="1px solid rgb(193, 235, 255)";
        rate.style.color="black";
        btn3.style.color="rgb(53, 144, 156)";
        btn3.style.backgroundColor="rgb(163, 218, 228)";
        btn3.addEventListener("mouseover", function(){
            btn3.style.backgroundColor="rgb(53, 144, 156)";
            btn3.style.color="#fff";
            btn3.style.border="none";
        })
        btn3.addEventListener("mouseout", function(){
            btn3.style.backgroundColor="rgb(163, 218, 228)";
            btn3.style.color="rgb(53, 144, 156)";
        })
        btn4.style.color="rgb(53, 144, 156)";
        btn4.style.backgroundColor="rgb(163, 218, 228)";
        btn4.addEventListener("mouseover", function(){
            btn4.style.backgroundColor="rgb(53, 144, 156)";
            btn4.style.color="#fff";
            btn4.style.border="none";
        })
        btn4.addEventListener("mouseout", function(){
            btn4.style.backgroundColor="rgb(163, 218, 228)";
            btn4.style.color="rgb(53, 144, 156)";
        })
        btn5.style.color="rgb(53, 144, 156)";
        btn5.style.backgroundColor="rgb(163, 218, 228)";
        btn5.addEventListener("mouseover", function(){
            btn5.style.backgroundColor="rgb(53, 144, 156)";
            btn5.style.color="#fff";
            btn5.style.border="none";
        })
        btn5.addEventListener("mouseout", function(){
            btn5.style.backgroundColor="rgb(163, 218, 228)";
            btn5.style.color="rgb(53, 144, 156)";
        })
        btn6.style.color="rgb(53, 144, 156)";
        btn6.style.backgroundColor="rgb(163, 218, 228)";
        btn6.addEventListener("mouseover", function(){
            btn6.style.backgroundColor="rgb(53, 144, 156)";
            btn6.style.color="#fff";
            btn6.style.border="none";
        })
        btn6.addEventListener("mouseout", function(){
            btn6.style.backgroundColor="rgb(163, 218, 228)";
            btn6.style.color="rgb(53, 144, 156)";
        })
    } else{
        body.style.backgroundColor="rgb(3, 0, 0)";
        caltitle.style.color="rgb(255, 255, 255)";
        box1.style.backgroundColor="rgb(40, 40, 40)";
        box1.style.border="1px solid rgb(40, 40, 40)"
        box2.style.backgroundColor="rgb(40, 40, 40)";
        box2.style.border="1px solid rgb(40, 40, 40)"
        box3.style.backgroundColor="rgb(40, 40, 40)";
        box4.style.backgroundColor="rgb(40, 40, 40)";
        box4.style.border="1px solid rgb(40, 40, 40)"
        vat.style.backgroundColor="rgb(60, 60, 60)";
        vat.style.border="1px solid rgb(60, 60, 60)";
        vat.style.color="white";
        vat2.style.backgroundColor="rgb(60, 60, 60)";
        vat2.style.border="1px solid rgb(60, 60, 60)";
        vat2.style.color="white";
        btn1.style.color="#fff";
        btn1.style.backgroundColor="rgb(40, 40, 40)";
        btn1.addEventListener("mouseover", function(){
            btn1.style.backgroundColor="rgb(10, 10, 10)";
            btn1.style.color="#fff";
            btn1.style.border="none";
        })
        btn1.addEventListener("mouseout", function(){
            btn1.style.backgroundColor="rgb(40, 40, 40)";
            btn1.style.color="#fff";
        })
        btn2.style.color="#fff";
        btn2.style.backgroundColor="rgb(40, 40, 40)";
        btn2.addEventListener("mouseover", function(){
            btn2.style.backgroundColor="rgb(10, 10, 10)";
            btn2.style.color="#fff";
            btn2.style.border="none";
        })
        btn2.addEventListener("mouseout", function(){
            btn2.style.backgroundColor="rgb(40, 40, 40)";
            btn2.style.color="#fff";
        })
        title1.style.color="#fff";
        title2.style.color="#fff";
        title3.style.color="#fff";
        title4.style.color="#fff";
        title5.style.color="#fff";
        title6.style.color="#fff";
        rate.style.backgroundColor="rgb(60, 60, 60)";
        rate.style.border="1px solid rgb(60, 60, 60)";
        rate.style.color="white";
        btn3.style.color="#fff";
        btn3.style.backgroundColor="rgb(40, 40, 40)";
        btn3.addEventListener("mouseover", function(){
            btn3.style.backgroundColor="rgb(10, 10, 10)";
            btn3.style.color="#fff";
            btn3.style.border="none";
        })
        btn3.addEventListener("mouseout", function(){
            btn3.style.backgroundColor="rgb(40, 40, 40)";
            btn3.style.color="#fff";
        })
        btn4.style.color="#fff";
        btn4.style.backgroundColor="rgb(40, 40, 40)";
        btn4.addEventListener("mouseover", function(){
            btn4.style.backgroundColor="rgb(10, 10, 10)";
            btn4.style.color="#fff";
            btn4.style.border="none";
        })
        btn4.addEventListener("mouseout", function(){
            btn4.style.backgroundColor="rgb(40, 40, 40)";
            btn4.style.color="#fff";
        })
        btn5.style.color="#fff";
        btn5.style.backgroundColor="rgb(40, 40, 40)";
        btn5.addEventListener("mouseover", function(){
            btn5.style.backgroundColor="rgb(10, 10, 10)";
            btn5.style.color="#fff";
            btn5.style.border="none";
        })
        btn5.addEventListener("mouseout", function(){
            btn5.style.backgroundColor="rgb(40, 40, 40)";
            btn5.style.color="#fff";
        })
        btn6.style.color="#fff";
        btn6.style.backgroundColor="rgb(40, 40, 40)";
        btn6.addEventListener("mouseover", function(){
            btn6.style.backgroundColor="rgb(10, 10, 10)";
            btn6.style.color="#fff";
            btn6.style.border="none";
        })
        btn6.addEventListener("mouseout", function(){
            btn6.style.backgroundColor="rgb(40, 40, 40)";
            btn6.style.color="#fff";
        })
    }
})