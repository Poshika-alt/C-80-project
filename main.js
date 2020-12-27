function getparagraph(){
    var inputs=[];
    for(var i=1; i<=5;i++){
        inputs.push(document.getElementById("input_"+i).value);
   }
    inputs.join(".");
    document.getElementById("show_paragraph").innerHTML=inputs.join(".")
}