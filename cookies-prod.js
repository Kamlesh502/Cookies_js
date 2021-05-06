var API_URL = "https://ncapi.kapitalwise.com";

function get_cookie() {
  var name = "cookieId";
  var cookieArr = document.cookie.split(";");
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    if (cookiePair[0].trim() == name) {
      return decodeURIComponent(cookiePair[1]);
    }
    return null;
  }
}

function unique_id() {
  var dt = new Date().getTime();
  return Math.floor((dt + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function set_cookie() {
  var cookie_value = unique_id() + unique_id();
  var cookieId = "cookieId";
  document.cookie =
    cookieId +
    "=" +
    cookie_value +
    ";path=/" 
}

function check_status() {
  var value = get_cookie();

  if (value == null) {
    set_cookie();
    console.log("Cookies has been set");
  } else {
    console.log("Cookies are already set with value:" + value);
  }
}
document.addEventListener("DOMContentLoaded", check_status);



function sendMessage() {
  var value = get_cookie();
  var currentURL = window.location.href;
  const body = {
    action: "view",
    website: currentURL,
    cookieId:value
  };
  var xhr = new XMLHttpRequest();
  xhr.open("POST", API_URL+"/sendMessage", false);
  xhr.send(JSON.stringify(body))
  
}
document.addEventListener("DOMContentLoaded", sendMessage);
