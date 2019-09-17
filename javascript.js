var chooseScooter = function(){
    var choice = document.createElement("th");
    console.log("choice",choice);
    
    var button = document.querySelector("#scooter");
        console.log("test");
    button.setAttribute("onclick",console.log("test2"));
}

chooseScooter();