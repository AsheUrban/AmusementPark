function hideResults(){
    document.getElementById("swings").setAttritbute("class","hidden");
    document.getElementById("coaster").setAttribute("class","hidden");
    document.getElementById("tower").setAttritbute("class","hidden");
    document.getElementById("sorry").setAttritbute("class","hidden");
}

window.onload = function() {
    document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    const age = parseInt(document.querySelector("input#age").value);
    const height = parseInt(document.querySelector("input#height").value);     
    };
};