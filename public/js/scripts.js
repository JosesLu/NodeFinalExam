var email = [];
var password = [];
var currentUser = "";

function passwordMismatchError() {
	document.getElementById("modal-title").textContent = "Error";
	document.getElementById("modal-text").textContent = "Passwords do not match";
	$('#modal').modal('show');
	$('#regEmail').val('');
	$('#regPass').val('');
	$('#regConfPass').val('');
}

function emailError() {
	document.getElementById("modal-title").textContent = "Error";
	document.getElementById("modal-text").textContent = "Email must contain atleast 3 characters.";
	$('#modal').modal('show');
	$('#regEmail').val('');
	$('#regPass').val('');
	$('#regConfPass').val('');
}

function passwordLengthError() {
	document.getElementById("modal-title").textContent = "Error";
	document.getElementById("modal-text").textContent = "Passwords must contain atleast 8 characters.";
	$('#modal').modal('show');
	$('#regEmail').val('');
	$('#regPass').val('');
	$('#regConfPass').val('');
}

function emptyFieldsError() {
	document.getElementById("modal-title").textContent = "Error";
	document.getElementById("modal-text").textContent = "All fields require input.";
	$('#modal').modal('show');
	$('#regEmail').val('');
	$('#regPass').val('');
	$('#regConfPass').val('');
}

function register() {
	var counter = 0;
	var regEmail = document.getElementById('regEmail').value;
	var regPass = document.getElementById('regPass').value;
	var regConfPass = document.getElementById('regConfPass').value;
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
	$('#regEmail').val('');
	$('#regPass').val('');
	$('#regConfPass').val('');
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

