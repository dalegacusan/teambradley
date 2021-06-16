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

let button = (modulenumber)=>{

    const show = document.getElementById("default");
    const def = document.getElementById("default1");
    const content = document.getElementById("content1");

    if(modulenumber == 1)
    {
        parent.document.getElementById("default1").src = "https://www.youtube.com/embed/zj-cLpCdWaM";
        
    }
    else if(modulenumber == 2)
    {
        parent.document.getElementById("default1").src = "https://www.youtube.com/embed/-RJSbO8UZVY";
    }
    else if(modulenumber ==3){
        parent.document.getElementById("default1").src = "https://www.youtube.com/embed/-RJSbO8UZVY";
    }
    

}