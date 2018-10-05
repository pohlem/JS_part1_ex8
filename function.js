function show(){
	var age = parseInt(document.getElementById("age").value);
	var div = document.getElementById("legal");  
    div.textContent = "my text";
	if(age >= 18){
		document.write("<p>Vous êtes majeur</p>");
	} else if(age <=18 && age >=0){
		document.write("<p>Vous êtes mineur</p>");
	} else {
		document.write("<p>Ce n'est pas possible !</p>");
	}
}