function formValidate() {
    let name = document.forms["contactForm"]["fname"].value;
    let email = document.forms["contactForm"]["email"].value;
    let city = document.forms["contactForm"]["browser"].value;
    let address = document.forms["contactForm"]["caddress"].value;
    let postal = document.forms["contactForm"]["code"].value;
    let message = document.forms["contactForm"]["cmessage"].value;
    let rate = document.forms["contactForm"]["area"].value;
}
function hideShowJacks(val) {
      if (val == "hiring") {
        $("#area").show();
    } else {
        $("#area").hide();
    }
}