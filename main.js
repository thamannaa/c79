var pizzaarray=["mushroom pizza","country special pizza","mexican pizza"];
function buttonmenu(){
    var data; 
    data="<ol class='pizza'>";
    for(var i=0; i<pizzaarray.length();i++){
        data=data+'<li>' + pizzaarray[i] + '</li>'; 
    }
    data=data+"</ol>";
    document.getElementById("display").innerHTML = data;
}