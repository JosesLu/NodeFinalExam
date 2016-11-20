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
	$.ajax({
		type: "POST",
		url: 'http://localhost:3000/users/',
		data: {
			"username": regEmail,
			"password": regPass

		},
		success: function() {
			console.log("Added Successfully");
		},

	});
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

	var counter = 0;
	var logEmail = $('#logEmail').val();
	var logPass = $('#logPass').val();
	$.getJSON('data.json', function(data) {

		var obj = jQuery.parseJSON(JSON.stringify(data));

		for (var i = 0; i < obj.users.length; i++) {
			if (logEmail == obj.users[i].username && logPass == obj.users[i].password) {
				document.getElementById("modal-title").textContent = "Success";
				document.getElementById("modal-text").textContent = "Login Successful";
				$('#modal').modal('show');
				currentUser = logEmail;
				$('#logEmail').val('');
				$('#logPass').val('');
				counter++;
				sessionStorage.setItem('achoc', 'nein');
				sessionStorage.setItem('user', currentUser);
				window.location = '/dashboard';

			}

		}

	});

	if (counter == 0) {
		document.getElementById("modal-title").textContent = "Error";
		document.getElementById("modal-text").textContent = "Incorrect Email/Password";

		$('#modal').modal('show');
		$('#logEmail').val('');
		$('#logPass').val('');
	}
	counter = 0;

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