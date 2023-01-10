
let button = document.querySelector('.button');

button.addEventListener("click", function(){
      
    

    if(!sitebar.classList.contains('none')){
        sitebar.classList.remove('is');
        sitebar.classList.add('none');
    }

    else if(sitebar.classList.contains('none')){

        sitebar.classList.remove('none');
        sitebar.classList.add('is');

    }
    
        

});

if (5 == "5"){
    console.log("true");
}


const var1= "1" + "1";
console.log(var1);
