function validate(){
	var attempt=3;
	var id=form.id.value;
	var psw=form.psw.value;

	if(id=="1" && psw=="1234567"){
		alert("Login successfully");
		return false;
	}

	else{
		attempt--;
		alert("You have left "+attempt+" attempt;");

		if(attempt ==0){
			form.id.disabled=true;
			form.psw.disabled=true;
			return false;
		}
	}
}