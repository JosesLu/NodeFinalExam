var email = [];
var password = [];
var currentUser = "";

function passwordMismatchError() {
	window.alert("Passwords do not match");
	/*
	document.getElementById("modal-title").textContent = "Error";
	document.getElementById("modal-text").textContent = "Passwords do not match";
	$('#modal').modal('show');
	*/
	$('#regEmail1').val('');
	$('#regPass1').val('');
	$('#regConfPass1').val('');

	window.location = '/register';
}

function emailError() {
	window.alert("Email must contain atleast 3 characters.");
	/*
	document.getElementById("modal-title").textContent = "Error";
	document.getElementById("modal-text").textContent = "Email must contain atleast 3 characters.";
	$('#modal').modal('show');
	*/
	$('#regEmail1').val('');
	$('#regPass1').val('');
	$('#regConfPass1').val('');

	window.location = '/register';
}

function passwordLengthError() {
	window.alert("Passwords must contain atleast 8 characters.");
	/*
	document.getElementById("modal-title").textContent = "Error";
	document.getElementById("modal-text").textContent = "Passwords must contain atleast 8 characters.";
	$('#modal').modal('show');
	*/
	$('#regEmail1').val('');
	$('#regPass1').val('');
	$('#regConfPass1').val('');

	window.location = '/register';
}

function emptyFieldsError() {
	window.alert("All fields require input.");
	/*
	document.getElementById("modal-title").textContent = "Error";
	document.getElementById("modal-text").textContent = "All fields require input.";
	$('#modal').modal('show');	
	*/
	$('#regEmail1').val('');
	$('#regPass1').val('');
	$('#regConfPass1').val('');

	window.location = '/register';
}
function loginemptyFieldsError() {
	window.alert("All fields require input.");
	/*
	document.getElementById("modal-title").textContent = "Error";
	document.getElementById("modal-text").textContent = "All fields require input.";
	$('#modal').modal('show');	
	*/
	$('#regEmail1').val('');
	$('#regPass1').val('');
	$('#regConfPass1').val('');


}
function registrationSuccess() {
	window.alert("Registration complete.");
	/*
	document.getElementById("modal-title").textContent = "Success";
	document.getElementById("modal-text").textContent = "Registration complete.";
	$('#modal').modal('show');
	*/
	$('#regEmail1').val('');
	$('#regPass1').val('');
	$('#regConfPass1').val('');

	window.location = '/register';
}
function register() {
	var counter = 0;
	var regEmail1 = document.getElementById('regEmail').value;
	var regPass1 = document.getElementById('regPass').value;
	var regConfPass1 = document.getElementById('regConfPass').value;
	if (regEmail1.length < 1 && regPass1 < 1 && regConfPass1 < 1 && counter == 0) {
		emptyFieldsError();
		window.location = '/register';
		counter = 1;
	}
	if (regPass1 != regConfPass1 && counter == 0) {
		passwordMismatchError();
		counter = 1;
	}
	if (regPass1.length < 8 && counter == 0) {
		passwordLengthError();
		counter = 1;
	}
	if (regEmail1.length < 3 && counter == 0) {
		emailError();
		counter = 1;
	}
	
	if (counter == 0){
		registrationSuccess();
	}
	counter = 0;
};


function login() {
	$.ajax({
		url: 'http://localhost:8080/db',
		type: 'GET',
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',

		success : function(data) {
			var length = data.length;
			renderHTML(data,length);
		}
	});
	function renderHTML(data,length){
		var counter=0;
		var counter1=0;
		var htUsername = $("#logEmail").val();
		var htPassword = $("#logPass").val();
		for(i = 0; i < length ; i++){
			var username = data[i].username;
			var password = data[i].password;

			if(htUsername == '' || htPassword == '')
			{
				loginemptyFieldsError();
				counter = 1;
			}

			if(username == htUsername && password == htPassword)
			{
				document.getElementById("modal-text").textContent = "Login Successful";
				$('#modal').modal('show');
				currentUser = htUsername;
				$('#logEmail').val('');
				$('#logPass').val('');
				sessionStorage.setItem('achoc', 'nein');
				sessionStorage.setItem('user', currentUser);
				sessionStorage.removeItem('registrationError');
				window.location = '/dashboard';
				counter1=1;

			}
			if (htUsername != '' && htPassword != '' && counter == 0 && counter1 == 0) {
				window.alert('Username or Password incorrect.');
				$("#logEmail").val('');
				$("#logPass").val('');
			}
			
		}

	}
};

function logout() {
	sessionStorage.removeItem('achoc');
	sessionStorage.removeItem('user');
	window.alert('You have successfully logged out.');
	window.location = '/';
	

}

function indextologin() {
	window.location = '/login';
}