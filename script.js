var textInputElements = document.getElementsByClassName("Textfields");
var urls = document.getElementsByClassName("urls");
var submitbtn = document.getElementById("submit");

var api_btn = document.getElementById("apicall");

var final_name;
var firstname;
var lastname;

api_btn.addEventListener("click", apicall);

var getTextValues = function () {
  var id = this.getAttribute("id");
  var text = this.value;
  final_name = text;
  console.log(id + " " + text);
  console.log(final_name);
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

function apicall() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://ncdev.kapitalwise.com/personal/analytics", true);
  xhr.setRequestHeader(
    "Authorization",
    "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDE3Y2MwYmIyNmU3MjMwZTQ5NzU4YjMiLCJpYXQiOjE2MTIzNDI0MzJ9.Z1Xe8HQ9WWJE7YYOScsJGXi3QETagTna91ZtgqJvb_s"
  );
  xhr.onload = function () {
    var response = JSON.parse(xhr.responseText);
    console.log(response);
  };
  xhr.send();
}
