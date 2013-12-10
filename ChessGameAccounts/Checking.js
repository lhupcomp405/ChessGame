//hasing by Kyle Leber
//all other functions by Wes Hulsizer
//hashes the password on the client side and passes that hashed value to the database.
//in the verify login, it uses the same hashing on the entered password before comparing
//to the database.
function rehash(pt){
	var md5 = CryptoJS.MD5(pt) + '';
	var sha1 = CryptoJS.SHA1(md5) + '';
	document.getElementById("hiddenfield").value = sha1;
}
//verify that email & verify email are typed the same
//changes colors if not matching
function CompareEmail(){
	var email = document.forms["SignUp"]["email"].value;
	var vEmail = document.forms["SignUp"]["vEmail"].value;
		if (email == vEmail){
			document.SignUp.vEmail.style.backgroundColor="white ";
			document.SignUp.vEmail.style.color="black";
		} else if (email != vEmail){
			document.SignUp.vEmail.style.backgroundColor="red ";
			document.SignUp.vEmail.style.color="white";
		}
}
//make sure all values are entered at the signup page
function CheckSignUp(){
var firstname = document.forms["SignUp"]["firstname"].value;
var lastname = document.forms["SignUp"]["lastname"].value;
var username = document.forms["SignUp"]["username"].value;
var alias = document.forms["SignUp"]["alias"].value;
var email = document.forms["SignUp"]["email"].value;
var vEmail = document.forms["SignUp"]["vEmail"].value;
var password = document.forms["SignUp"]["password"].value;
var securityAnswer = document.forms["SignUp"]["securityAnswer"].value;
var phone = document.forms["SignUp"]["phone"].value;
var eula = document.getElementById('eulaCheck');
var eula_confirmed = 1;
	//Check eula check, assign the answer to return true/false	
	if(eula.checked){
		eula_confirmed = 22;
	}else{
		eula_confirmed = 1;	
	}
	//check all fields for completion
	if (firstname == null || firstname ==""){
		alert("Your first name must be entered");
		return false;
	} else if (lastname == null || lastname ==""){
		alert("Your last name must be entered");
		return false;
	} else if (username == null || username ==""){
		alert("Your username must be entered");
		return false;
	} else if (alias == null || alias ==""){
		alert("Your alias must be entered");
		return false;
	} else if (email == null || email ==""){
		alert("Your email must be entered");
		return false;
	} else if (vEmail == null || vEmail ==""){
		alert("You must verify your email");
		return false;
	} else if (password == null || password ==""){
		alert("You must enter a password");
		return false;
	} else if (securityAnswer == null || securityAnswer ==""){
		alert("You must answer your security question");
		return false;
	} else if (phone == null || phone ==""){
		alert("You must enter a 10 digit phone number");
		return false;
	} else if(eula_confirmed == 1){
		alert("You must agree to the Terms and Conditions " +eula_confirmed );
		return false;	
	}else{
		return true;
	}
}
//check that the phone number has the correct length & is a number
function CheckingNumber(){
var phoneNum = document.forms["SignUp"]["phone"].value;
if (isNaN(phoneNum)==true || phoneNum.length != 10){
	document.SignUp.phone.style.backgroundColor="red";
} else {
	document.SignUp.phone.style.backgroundColor="white";
}

}
//check that the phone number has the correct length & is a number
function CheckingNumberandclear(){
var phoneNum = document.forms["SignUp"]["phone"].value;
if (isNaN(phoneNum)==true || phoneNum.length != 10){
	document.forms["SignUp"]["phone"].value = "";
	alert ("Phone number must be a 10 digit number");
	document.SignUp.phone.style.backgroundColor="white";
} 
 
}

function CheckingFunction(){
var Alias = document.forms["Edit"]["Alias"].value;
var OldPassword = document.forms["Edit"]["OldPassword"].value;
var NPassword = document.forms["Edit"]["NPassword"].value;
var vPassword = document.forms["Edit"]["vPassword"].value;
var SQA = document.forms["Edit"]["SQA"].value;
var phoneNum = document.forms["Edit"]["phoneNum"].value;


if (Alias == null || Alias ==""){
	alert("Your alias must be entered");
	return false;
}

else if (SQA == null || SQA ==""){
	alert("You must answer the security question");
	return false;
}
else if (phoneNum == null || phoneNum ==""){
	alert("You must enter a 10 digit phone number");
	return false;
}

}

function CheckingNum(element){
var phoneNum = document.forms["Edit"]["phoneNum"].value;
if (isNaN(phoneNum)==true || phoneNum.length != 10){
    document.forms["Edit"]["phoneNum"].value = "";
	alert ("Phone number must be a 10 digit number");
}

}
//function to open a new window for new password entry and verification
//INCOMPLETE
function openWindow()
{
var left = (screen.width/2);
var top = (screen.height/2);
myWindow=window.open('','','width=400px,height=175px');

myWindow.document.write("<html><head>"
    + "<link rel='stylesheet' type='text/css' href='ChessStyleSheet.css'>"
    + "<script type = 'text/javascript' src = 'Checking.js'></script>"
    + "</head><body id = 'ChangePasswordBody'><table id = 'ChangePasswordTable'>"
    + "<tr><td>Old Password:</td><td><input type = 'password' maxlength='32' name = 'OldPassword' /></td></tr>"
    + "<tr><td>New Password:</td><td><input type = 'password' maxlength='32' name = 'NPassword' id = 'NPassword' /></td></tr>"
    + "<tr><td>Verify New Password:</td><td>"
    + "<input type = 'password' maxlength='32' name = 'vPassword' onblur='alert('dfjksghdlkfg')'/></td>"
    + "<td id = 'Holder'></td></tr>"
    + "<tr><td align = 'right'><input type = 'submit' value = 'Save' onClick = 'CheckPassword();'/></td>"
    + "<td align = 'left'><input type = 'button' value = 'Cancel' onclick='document.location.href='ChessGameLogin.html''/></td></tr>"
    + "</table>"
    + "</body></html>"
);

//myWindow.document.write('<html><head></head><body><input type="button" onclick="alert("hello");"/></body></html>');
myWindow.focus();
}
//check the passwords to make sure all fields are entered
function CheckPassword(){

var OldPassword = document.getElementById('OldPassword').value;
var NPassword = document.getElementById('NPassword').value;
var vPassword = document.getElementById('vPassword').value;

	if (OldPassword == null || OldPassword ==""){
	alert("You must confirm your OldPassword");
	return false;
}
else if (NPassword == null || NPassword ==""){
	alert("You must enter a new password");
	return false;
}
else if (vPassword == null || vPassword ==""){
	alert("You must verify your new password");
	return false;
} else return true;
}

//check to make sure that the new password matches in the N field and the V password
//make sure they verfiy the password
function MatchPassword(vPassword){

var NPassword = document.getElementById('NPassword').value;
var Holder = document.getElementById('Holder').value;
var doesMatch = true;

	if (NPassword == vPassword){
		doesMatch = true;
	} else if (NPassword != vPassword){
		doesMatch = false;
	}

	if (doesMatch == true){
		
	} else {
		
	}
}




