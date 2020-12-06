function validate(form){
	//validate Phone number
	var phone = form.phone.value;
	//alert(phone.length);
		if (phone.length > 0 ) {
	var phoneFlag=isValidTelephoneNumber(phone);
		if (phoneFlag==false) {
			alert("Please Enter valid phone number");

		}
	}
  //validate email
	if(CheckEmail(form.email.value)){
		alert("Please input your Email!");

	}
	else {
		var valid = isValidEmail(form.email.value);
		if (valid==false) {
			alert("Invalid Email Format ...Try again!");

		}
	}
	//validate password
	if(CheckPassword(form.password.value)) {
		alert("Please input your password");

	}
	else {
		var pass=form.password.value.length;

		if (pass< 5  || pass >16) {
			alert("Password length has too few or too many");

		}
	}

  //confirm Password
 if(form.confirmpw.value != form.password.value){
   alert("Plase enter valid confirm password.")
 }
}//function

function CheckEmail(email){

if (email==""){ return true; }
               else { return false; }

}
function CheckPassword(password){

if (password==""){ return true; }
               else { return false; }

}
function isValidEmail(emailAddress)
{
var emailRegExp = /^([^<>()\[\],;:@"\x00-\x20\x7F]|\\.)+@(([a-z]|#\d+?)([a-z0-9-]|#\d+?)*([a-z0-9]|#\d+?)\.)+([a-z]{2,4})$/i;
return emailRegExp.test(emailAddress);
}




function isValidTelephoneNumber(telephoneNumber)
{

  var telRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return telRegExp.test( telephoneNumber );
}
