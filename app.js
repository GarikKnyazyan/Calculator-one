let arr = document.querySelectorAll(".box-botton, .box-botton6");
let arrMath=["*","+","/","-"];
for(let i = 0; i < arr.length; i++){
    arr[i].addEventListener("click", function(){
        let val = this.value;
        if (arrMath.includes(val)) {
            const text = document.getElementById("imp").value;
            const endLetter = text.slice(text.length - 1);
            if (arrMath.includes(endLetter)) {
                document.getElementById("imp").value += "";
            }else {
                document.getElementById("imp").value += val; 
            }
           }  else {
                document.getElementById("imp").value += val;
            }
             
         
        

        
    });

}




document.getElementById("ac").addEventListener("click", function (){
    document.getElementById("imp").value = "";
})

// document.getElementById("click").addEventListener("click", function (){
//     document.getElementById("imp").value = "";
// })



document.getElementById("click").addEventListener("click", function () {
    const text = document.getElementById("imp").value;
    console.log(text);
    document.getElementById("imp").value = eval(text);
})
