// Indicação.

var form = document.getElementById('form');
var codeClient = document.getElementById('code');
var indicacaoCode = '1ZDJLW8Z';


/*form.addEventListener('submit', function(e){{
	if (codeClient.value == inidicacaoCode.value) {
		console.log('Value = 1');
		e.preventDefault();
	}
	else{
		console.log('value = 2');
		e.preventDefault();
	}
	e.preventDefault();
}*/

form.addEventListener('submit', function(e){
	// Condição input name.
	if (codeClient.value === indicacaoCode){
		document.getElementById('form').style.display = 'none';	
		document.getElementById('codeUse').innerHTML = 'Codigo usado: ' + codeClient.value + '.'
		e.preventDefault();
	}
	else {
		console.log('code 404');
		e.preventDefault()
		document.getElementById('erro').innerHTML = 'Indique um codigo registrado.'
		var codeError = document.getElementById('erro').style.display = 'block';
		var timeOut = setTimeout(function timernone(){
			codeError = document.getElementById('erro').style.display = 'none';
		}, 3000);
	}
	// console.log(nomeSobrenome.value \n email.value \n password.value confirm_password.value)
});
















/*

	function getRandomNum(lbound, ubound) {
	return (Math.floor(Math.random() * (ubound - lbound)) + lbound);
}

function getRandomChar(number, lower, upper, other, extra) {
	var numberChars = "0123456789";
	var lowerChars = "abcdefghijklmnopqrstuvwxyz";
	var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var otherChars = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/? ";
	var charSet = extra;
	if (number == true)
	charSet += numberChars;
	if (lower == true)
	charSet += lowerChars;
	if (upper == true)
	charSet += upperChars;
	if (other == true)
	charSet += otherChars;
	return charSet.charAt(getRandomNum(0, charSet.length));
}

function getPassword(length, extraChars, firstNumber, firstLower, firstUpper, firstOther,latterNumber, latterLower, latterUpper, latterOther) {
	var rc = "";
	if (length > 0)
		rc = rc + getRandomChar(firstNumber, firstLower, firstUpper, firstOther, extraChars);
	for (var idx = 1; idx < length; ++idx) {
		rc = rc + getRandomChar(latterNumber, latterLower, latterUpper, latterOther, extraChars);
	}
	return rc;
}
*/