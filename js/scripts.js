function hideResults(){
    document.getElementById("swings").setAttribute("class","hidden");
    document.getElementById("coaster").setAttribute("class","hidden");
    document.getElementById("tower").setAttribute("class","hidden");
    document.getElementById("sorry").setAttribute("class","hidden");
}

window.onload = function () {
  document.querySelector("form").onsubmit = function (event) {
    event.preventDefault();
    hideResults();
    const age = parseInt(document.querySelector("input#age").value);
    const height = parseInt(document.querySelector("input#height").value);
  };

  // add if statement to call to remove attribute for class per lesson 61, starting at "Adding the First Condition -- Tower of Doom"
};