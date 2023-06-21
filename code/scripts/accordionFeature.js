var radioButtons = document.querySelectorAll('.navigation_object');

radioButtons.forEach(function(radioButton) {
  radioButton.addEventListener('click', function() {
    let radioBtn = document.getElementById(this.getAttribute('for'));

    console.log("id = " + this.getAttribute('for'));
    console.log("is checked: " + radioBtn.checked);

    if (radioBtn.checked) {
      document.getElementById(this.getAttribute('for')).checked = false;
      console.log("unchecked the radio button");
    } else {
      document.getElementById(this.getAttribute('for')).checked = true;
      console.log("checked the radio button");
    }
  });
});
