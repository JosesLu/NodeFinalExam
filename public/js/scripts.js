var email = [];
var password = [];
var currentUser = "";


function passwordMismatchError() {
	document.getElementById("modal-title").textContent = "Error";
	document.getElementById("modal-text").textContent = "Passwords do not match";
	$('#modal').modal('show');
	$('#regEmail1').val('');
	$('#regPass1').val('');
	$('#regConfPass1').val('');
	$('#modal').on('hidden.bs.modal', function () {window.location = '/register';})
}

function emailError() {
	document.getElementById("modal-title").textContent = "Error";
	document.getElementById("modal-text").textContent = "Email must contain atleast 3 characters.";
	$('#modal').modal('show');
	$('#regEmail1').val('');
	$('#regPass1').val('');
	$('#regConfPass1').val('');
	$('#modal').on('hidden.bs.modal', function () {window.location = '/register';})
}

function passwordLengthError() {
	document.getElementById("modal-title").textContent = "Error";
	document.getElementById("modal-text").textContent = "Passwords must contain atleast 8 characters.";
	$('#modal').modal('show');
	$('#regEmail1').val('');
	$('#regPass1').val('');
	$('#regConfPass1').val('');
	$('#modal').on('hidden.bs.modal', function () {window.location = '/register';})
}

function emptyFieldsError() {
	document.getElementById("modal-title").textContent = "Error";
	document.getElementById("modal-text").textContent = "All fields require input.";
	$('#modal').modal('show');
	$('#regEmail1').val('');
	$('#regPass1').val('');
	$('#regConfPass1').val('');
	$('#modal').on('hidden.bs.modal', function () {window.location = '/register';})
}

function errorSet() {
	var error = sessionStorage.getItem('registrationError');
	document.getElementById("hack").innerHTML = error;
}

function register() {
	var counter = 0;
	var regEmail1 = document.getElementById('regEmail').value;
	var regPass1 = document.getElementById('regPass').value;
	var regConfPass1 = document.getElementById('regConfPass').value;
	if (regPass1 != regConfPass1) {
		passwordMismatchError();
		sessionStorage.setItem('registrationError', '1');
		counter = 1;
	}
	if (regPass1.length < 8) {
		passwordLengthError();
		sessionStorage.setItem('registrationError', '1');
		counter = 1;
	}
	if (regEmail1.length < 3) {
		emailError();
		sessionStorage.setItem('registrationError', '1');
		counter = 1;
	}
	if (regEmail1.length < 1 && regPass1 < 1 && regConfPass1 < 1) {
		emptyFieldsError();
		sessionStorage.setItem('registrationError', '1');
		counter = 1;
	}
	if (counter == 0) {
		sessionStorage.setItem('registrationError', '0');
		window.location = '/register';
		document.getElementById("modal-title").textContent = "Success";
		document.getElementById("modal-text").textContent = "Registration Complete";
	
		$('#modal').modal('show');
		$('#regEmail1').val('');
		$('#regPass1').val('');
		$('#regConfPass1').val('');
		$('#modal').on('hidden.bs.modal', function() {
			window.location = '/login';
		})
	}
	counter = 0;
	location.reload();

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

		var htUsername = $("#logEmail").val();
		var htPassword = $("#logPass").val();
		for(i = 0; i < length ; i++){
			var username = data[i].username;
			var password = data[i].password;

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

			}

		}
	}
};

function logout() {
	sessionStorage.removeItem('achoc');
	sessionStorage.removeItem('user');
	document.getElementById("modal-title").textContent = "Success";
	document.getElementById("modal-text").textContent = "You have successfuly logged out.";
	$('#modal').modal('show');
	$('#regEmail1').val('');
	$('#regPass1').val('');
	$('#regConfPass1').val('');
	$('#modal').on('hidden.bs.modal', function() {
		window.location = '/';
	})

}

function indextologin() {
	window.location = '/login';
}


function rememberMe() {
	if (localStorage.chkbx && localStorage.chkbx != '') {
		$('#remember_me').attr('checked', 'checked');
		$('#logEmail').val(localStorage.usrname);
		$('#logPass').val(localStorage.pass);
	} else {
		$('#remember_me').removeAttr('checked');
		$('#logEmail').val('');
		$('#logPass').val('');
	}

}

