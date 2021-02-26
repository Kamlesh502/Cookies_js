var cookie_btn = document.getElementById("set_cookie_button");

cookie_btn.addEventListener("click", check_status);

function get_cookie() {
  var cookie_val = document.cookie;
  return cookie_val;
}

function unique_id() {
  var dt = new Date().getTime();
  return Math.floor((dt + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function set_cookie() {
  var cookie_value = unique_id() + unique_id();
  var name = "Cookie_id";
  document.cookie = name + "=" + cookie_value;
}

function check_status() {
  var value = get_cookie();

  if (value == "") {
    set_cookie();
    window.alert("Cookies has been set");
  } else {
    console.log("Cookies are already set with value:" + value);
  }
}

console.log(navigator.appCodeName);

if (/Mobi|Android/i.test(navigator.userAgent)) {
  console.log("On Mobile");
} else {
  console.log("On Desktop");
}
