function myToggle(){
    const txt = document.querySelectorAll(".toggle_text");
        txt.forEach(x=>x.classList.toggle("toggle_text_no"));
    const plus = document.querySelectorAll(".plus");
        plus.forEach(u=>u.classList.toggle("plus_rotate"))
}

var input1 = document.querySelector("#ask_input_one");
var input2 = document.querySelector("#ask_input_two");
    function mySend(){
        var one = input1.value.length;
        var two = input2.value.length;
        
        if(one < 3 || two < 7){
            return alert("no enough information, fill inputs please");
        }
        else{
            return alert("sent")  
        }
    }
