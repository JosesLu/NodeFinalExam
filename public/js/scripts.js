var email = [];
var password = [];
var currentUser = "";

function passwordMismatchError() {
	window.alert("Passwords do not match");
	$('#regEmail1').val('');
	$('#regPass1').val('');
	$('#regConfPass1').val('');
	window.location = '/register';
}

function emailError() {
	window.alert("Email must contain atleast 3 characters.");
	$('#regEmail1').val('');
	$('#regPass1').val('');
	$('#regConfPass1').val('');
	window.location = '/register';
}

function passwordLengthError() {
	window.alert("Passwords must contain atleast 8 characters.");
	$('#regEmail1').val('');
	$('#regPass1').val('');
	$('#regConfPass1').val('');
	window.location = '/register';
}

function emptyFieldsError() {
	window.alert("All fields require input.");
	$('#regEmail1').val('');
	$('#regPass1').val('');
	$('#regConfPass1').val('');
	window.location = '/register';
}

function loginemptyFieldsError() {
	window.alert("All fields require input.");
	$('#logEmail').val('');
	$('#logPass').val('');
}

function loginincorrectFieldsError() {
	window.alert("Invalid Credentials.");
	$('#logEmail').val('');
	$('#logPass').val('');
}

function registrationSuccess() {
	window.alert("Registration complete.");
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
	if (counter == 0) {
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
		success: function(data) {
			var length = data.length;
			renderHTML(data, length);
		}
	});

	function renderHTML(data, length) {
		var count = 0;
		var c = 0;
		var htUsername = $("#logEmail").val();
		var htPassword = $("#logPass").val();
		if ((htUsername == "" || htPassword == "") && count == 0) {
			loginemptyFieldsError();
		}
		for (i = 0; i < length; i++) {
			var username = data[i].username;
			var password = data[i].password;
			if (username == htUsername && password == htPassword) {
				document.getElementById("modal-text").textContent = "Login Successful";
				$('#modal').modal('show');
				currentUser = htUsername;
				$('#logEmail').val('');
				$('#logPass').val('');
				sessionStorage.setItem('achoc', 'nein');
				sessionStorage.setItem('user', currentUser);
				sessionStorage.removeItem('registrationError');
				window.location = '/dashboard';
			} else if (username != htUsername && password != htPassword && (htUsername != "" && htPassword != "")) {
				loginincorrectFieldsError();
				break;
			}
		}
	}
}

function logout() {
	sessionStorage.removeItem('achoc');
	sessionStorage.removeItem('user');
	window.alert('You have successfully logged out.');
	window.location = '/';
}

function indextologin() {
	window.location = '/login';
}

function populateTable() {
	$.ajax({
		url: 'http://localhost:8080/db',
		type: 'GET',
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		success: function(data) {
			var length = data.length;
			renderHTML(data, length);
		}
	});

	function renderHTML(data, length) {
		var htUsername = $("#logEmail").val();
		var htPassword = $("#logPass").val();
		for (i = 0; i < length; i++) {
			var usn = data[i].username;
			var id = data[i].ID;
			var table = document.getElementById("userTable");
			// Create an empty <tr> element and add it to the 1st position of the table:
			var row = table.insertRow(i + 1);
			// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(0);
			// Add some text to the new cells:
			cell1.innerHTML = id;
			cell2.innerHTML = usn;
		}
	}
}