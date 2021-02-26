var validate = function () {
  var a = document.getElementById("name").value;
  var b = document.getElementById("firstname").value;
  var c = document.getElementById("lastname").value;
  if (a == "" || b == "" || c == "") {
    console.log("All field Required");
  } else {
    console.log("correct");
  }
};

var getUrlValues = function () {
  var attribute = this.getAttribute("href");
  console.log("Link Clicked:" + attribute);
};

var getTextValues = function () {
  var id = this.getAttribute("id");
  var text = this.value;
  console.log(id + " " + text);
};

$("#submit").click(validate);

$(".urls").click(getUrlValues);

$(".Textfields").blur(getTextValues);

$("#apicall").click(function () {
  console.log("click");
  $.ajax({
    url: "https://www.cloudflare.com/cdn-cgi/trace",
    // headers: {
    //   Authorization:
    //     "Bearer " +
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDE3Y2MwYmIyNmU3MjMwZTQ5NzU4YjMiLCJpYXQiOjE2MTIzNDI0MzJ9.Z1Xe8HQ9WWJE7YYOScsJGXi3QETagTna91ZtgqJvb_s",
    // },
    // data: {
    //   name: "paul rudd",
    //   movies: ["I Love You Man", "Kamlesh"],
    // },
    method: "GET",
    dataType: "TEXT",
    success: function (data) {
      console.log(data);
    },
    // success: function (data) {
    //   console.log(data[0]);
    // },
  });
});
