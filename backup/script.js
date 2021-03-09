var textInputElements = document.getElementsByClassName("Textfields");
var urls = document.getElementsByClassName("urls");
var submitbtn = document.getElementById("submit");

var getTextValues = function () {
  var id = this.getAttribute("id");
  var text = this.value;
  console.log(id + " " + text);
};

var getUrlValues = function () {
  var attribute = this.getAttribute("href");
  console.log("Link Clicked:" + attribute);
};

var validate = function () {
  var a = document.getElementById("name").value;
  var b = document.getElementById("firstname").value;
  var c = document.getElementById("lastname").value;
  if (a == "" || b == "" || c == "") {
    console.log("fill fom");
  } else {
    console.log("correct");
  }
};

for (var i = 0; i < 3; i++) {
  textInputElements[i].addEventListener("blur", getTextValues, false);
}

for (var i = 0; i < 3; i++) {
  urls[i].addEventListener("click", getUrlValues, false);
}

submitbtn.addEventListener("click", validate);
