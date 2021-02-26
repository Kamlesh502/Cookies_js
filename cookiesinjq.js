var urlstring = "http://www.ecample.com/api?user=kamlesh29&age=27";

let url = new URL(urlstring);
let searchstring = url.search.slice(1);
let searchParams = new URLSearchParams(searchstring);
var personid = searchParams.get("user");

console.log("Person_id:" + personid);

$("#set_cookie_button").click(check_status);

function check_status() {
  var cookie_value = Cookies.get("cookie_value");
  if (cookie_value == null) {
    set_cookie();
    window.alert("Cookies set successfully");
  } else {
    console.log("Cookie already exist with value::" + cookie_value);
  }
}

function unique_id() {
  var dt = new Date().getTime();
  return Math.floor((dt + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function set_cookie() {
  Cookies.set("cookie_value", unique_id(), { expires: 1 });
}
