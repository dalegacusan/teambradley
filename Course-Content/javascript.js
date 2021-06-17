// Comment
let add = () => {
    let comment = document.querySelector('.input-group #comment'); 
     
    if (comment.value != "") { 
     
    let list = document.querySelector('.list'); 
    let time = new Date();
    let h = time.getHours(); 
    let m = time.getMinutes(); 
    let s = time.getSeconds(); 
    let now = h + " : " + m + " : " + s;
    let list_item = document.createElement ("l1"); 
     
    list_item.innerHTML = `
    <span>
    
    </span>
    <p>${comment.value} ${now}</p>
    <hr>
    `;
    list.append(list_item); 
    }
     
    if (comment.value == "") {
    let list = document.querySelector('.list'); 
    let list_item = document.createElement ("l2"); 
    var warn = 'Please a comment!';  
    list_item.innerHTML = `
    <span>
    <p>${warn}</p> 
    </span>
    `;
    list.append(list_item); 
     }
    comment.value = "";
    }
//Module Content Clicker
let button = (modulenumber)=>{

    const show = document.getElementById("default");
    const def = document.getElementById("default1");
    const content = document.getElementById("content1");

    if(modulenumber == 1)
    {
        parent.document.getElementById("default1").src = "https://www.youtube.com/embed/zj-cLpCdWaM";
        style.backgroundcolor = '#337ab7';
    }
    else if(modulenumber == 2)
    {
        parent.document.getElementById("default1").src = "https://www.youtube.com/embed/-RJSbO8UZVY";
    }
    else if(modulenumber ==3){
        parent.document.getElementById("default1").src = "files/JSP-Overview.pdf#toolbar=0";
    }
}

//Timer
var start = document.querySelector(".start");
var reset = document.querySelector(".reset");

var hour = document.querySelector(".hour");
var minute = document.querySelector(".minute");
var second = document.querySelector(".seconds");

// Store a reference to the variable
var startTimer = null;

function timer(){
     if(hour.value == 0 && minute.value == 0 && second.value == 0){

         hour.value = 0;
         minute.value = 0;
         second.value = 0; 
     } else if(second.value != 0){
         second.value--;
     }else if(minute.value != 0 && second.value == 0){
         second.value = 59;
         minute.value--;
     }else if(hour.value != 0 && minute.value == 0){
         minute.value = 59;
         hour.value--;

     }
     return;
}

function StopTimer(){
    clearInterval(startTimer);
}

start.addEventListener('click',function() { 
    //initial the variable startTimer
    function startInterval(){
        startTimer = setInterval(() => {
            timer();
        }, 1000);
    }
    startInterval();
})

reset.addEventListener('click', function(){
    hour.value = 0;
    minute.value = 0;
    second.value = 0;
    StopTimer();
})

//Timer2
var start2 = document.querySelector(".start2");
var reset2 = document.querySelector(".reset2");

var hour2 = document.querySelector(".hour2");
var minute2 = document.querySelector(".minute2");
var second2 = document.querySelector(".seconds2");

// Store a reference to the variable
var startTimer2 = null;

function timer2(){
     if(hour2.value == 0 && minute2.value == 0 && second2.value == 0){

         hour2.value = 0;
         minute2.value = 0;
         second2.value = 0; 
     } else if(second2.value != 0){
         second2.value--;
     }else if(minute2.value != 0 && second2.value == 0){
         second2.value = 59;
         minute2.value--;
     }else if(hour2.value != 0 && minute2.value == 0){
         minute2.value = 59;
         hour2.value--;

     }
     return;
}

function StopTimer2(){
    clearInterval(startTimer2);
}

start2.addEventListener('click',function() { 
    //initial the variable startTimer
    function startInterval2(){
        startTimer2 = setInterval(() => {
            timer2();
        }, 1000);
    }
    startInterval2();
})

reset2.addEventListener('click', function(){
    hour2.value = 0;
    minute2.value = 0;
    second2.value = 0;
    StopTimer2();
})



//Show Timer
    var isclick = false;
    var timershow = document.querySelector(".timerjs");
function showtimer(){
    
    if(isclick == true){
        timershow.style.display = 'none';
        isclick = false;
    }else{
        isclick = true;
        timershow.style.display ='block';
    }

    console.log(isclick);
}
 
var isclick1 = false;
var timershow1 = document.querySelector(".timerjs1");

function showtimer1(){
    if(isclick1 == true){
        timershow1.style.display = 'none';
        isclick1 = false;
    }else{
        isclick1 = true;
        timershow1.style.display ='block';
    }

    console.log(isclick1);
}

var isclick2 = false;
var timershow2 = document.querySelector(".timerjs2");

function showtimer2(){
    if(isclick2 == true){
        timershow2.style.display = 'none';
        isclick2 = false;
    }else{
        isclick2 = true;
        timershow2.style.display ='block';
    }

    console.log(isclick2);
}

var isclick3 = false;
var timershow3 = document.querySelector(".timerjs3");

function showtimer3(){
    if(isclick3 == true){
        timershow3.style.display = 'none';
        isclick3 = false;
    }else{
        isclick3 = true;
        timershow3.style.display ='block';
    }

    console.log(isclick3);
}

var isclick4 = false;
var timershow4 = document.querySelector(".timerjs4");

function showtimer4(){
    if(isclick4 == true){
        timershow4.style.display = 'none';
        isclick4 = false;
    }else{
        isclick4 = true;
        timershow4.style.display ='block';
    }

    console.log(isclick4);
}
