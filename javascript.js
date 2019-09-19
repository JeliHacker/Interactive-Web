/*var chooseScooter = function(){
    var choice = document.createElement("th");
    console.log("choice",choice);
    
    var button = document.querySelector("#scooter");
        console.log("test");
    button.setAttribute("onclick",console.log("test2"));
}


chooseScooter();
*/
var popUp = function(){
    
    
    var node = document.createElement("h2");
    node.innerText = "Dr. B rides his scooter to the store.";
    
    node.setAttribute("onclick", "LimaBeans()");
    
    var body = document.querySelector("body");
    body.appendChild(node);
    document.querySelector("#button1")
        .setAttribute("onclick", null);
    
   /* var body2 = document.querySelector("body");
    body.appendChild(node);
    
    document.querySelector("#button2")
        .setAttribute("onclick", null)*/
}

var chooseSkate = function(){
    
    var node = document.createElement("h2");
    node.innerText = "Dr. B rides his skateboard to the store.";
    
    var node2 = document.createElement("h2");
    node.innerText = "Dr. B rides his skateboard to the store. ";
    
    node.setAttribute("onclick", "toothpaste()");
    
    var body = document.querySelector("body");
    var body2 = document.querySelector("body");
    body.appendChild(node);
    body2.appendChild(node2);
    
    document.querySelector("#button1")
        .setAttribute("onclick", null);
    
   /* var body2 = document.querySelector("body");
    body.appendChild(node);
    
    document.querySelector("#button2")
        .setAttribute("onclick", null)*/
}

var LimaBeans = function()
    {
        var node = document.createElement("h2");
        node.innerText = "Dr. B can't wait to eat his lima beans.";
        
        var body = document.querySelector("body");
        body.appendChild(node);
    }


var chooseCurds = function()
    {
        var node = document.createElement("h2");
        node.innerText = "Dr. B can't wait to eat his cheese curds.";
        
        var body = document.querySelector("body");
        body.appendChild(node);
    }


var chooseMeatballs = function()
    {
        var node = document.createElement("h2");
        node.innerText = "Dr. B's really gonna enjoy those meatballs for dinner.";
        
        var body = document.querySelector("body");
        body.appendChild(node);
    }


var chooseToothpaste = function()
    {
        var node = document.createElement("h2");
        node.innerText = "Dr. B loves brushing his teeth with his favorite toothpaste!";
        
        var body = document.querySelector("body");
        body.appendChild(node);
    }
    


var chooseOintment = function()
    {
        var node = document.createElement("h2");
        node.innerText = "Dr. B really needs his ointment. It makes him feel so much better.";
        
        var body = document.querySelector("body");
        body.appendChild(node);
    }
    
    

var chooseCookies = function()
    {
        var node = document.createElement("h2");
        node.innerText = "Dr. B's favorite flavor is cream-cheese cookie.";
        
        var body = document.querySelector("body");
        body.appendChild(node);
    }

    
