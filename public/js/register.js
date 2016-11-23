var express    = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());

app.post('/uploaded',function(req, res, next){
    var username = req.body.regEmail;
    var pass = req.body.regPass;
    console.log("yea son");
    //...
});

///////////////////
  var counter = 0;

  console.log("lmao");

  if (regPass != regConfPass) {
    passwordMismatchError();
    counter = 1;
  }
  if (regPass.length < 8) {
    passwordLengthError();
    counter = 1;
  }
  if (regEmail.length < 3) {
    emailError();
    counter = 1;
  }
  if (regEmail.length < 1 && regPass < 1 && regConfPass < 1) {
    emptyFieldsError();
    counter = 1;
  }
  if (counter == 0) {







    document.getElementById("modal-title").textContent = "Success";
    document.getElementById("modal-text").textContent = "Registration Complete";

    $('#modal').modal('show');
    $('#regEmail').val('');
    $('#regPass').val('');
    $('#regConfPass').val('');
    $('#modal').on('hidden.bs.modal', function() {
      window.location = '/login';
    })
  }
  counter = 0;

