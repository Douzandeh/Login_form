let userNameInput = document.querySelector(".userName");

let passWordInput = document.querySelector(".passWord");

let modal = document.querySelector(".modal");


function dataValidation () {
	let usernameValue = userNameInput.value;
	let passwordValue = passWordInput.value;

	if (usernameValue.length < 12 || passwordValue < 8) {
		modal.innerHTML = "		lotfan Etalat  Dorosti Vared konid";
		modal.style.background= "red";
		modal.style.display = 'inline';
	}else {
		modal.style.background = "green";
		modal.innerHTML = "Welcome";
		modal.style.display="inline";
	}
	setTimeout(function(){
			modal.style.display = 'none';
		},3000)
}