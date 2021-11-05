// function getRandomNum(lbound, ubound) {
// 	return (Math.floor(Math.random() * (ubound - lbound)) + lbound);
// }

// function getRandomChar(number, lower, upper, other, extra) {
// 	var numberChars = "0123456789";
// 	var lowerChars = "abcdefghijklmnopqrstuvwxyz";
// 	var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// 	var otherChars = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/? ";
// 	var charSet = extra;
// 	if (number == true)
// 	charSet += numberChars;
// 	if (lower == true)
// 	charSet += lowerChars;
// 	if (upper == true)
// 	charSet += upperChars;
// 	if (other == true)
// 	charSet += otherChars;
// 	return charSet.charAt(getRandomNum(0, charSet.length));
// }

// function getPassword(length, extraChars, firstNumber, firstLower, firstUpper, firstOther,latterNumber, latterLower, latterUpper, latterOther) {
// 	var rc = "";
// 	if (length > 0)
// 		rc = rc + getRandomChar(firstNumber, firstLower, firstUpper, firstOther, extraChars);
// 	for (var idx = 1; idx < length; ++idx) {
// 		rc = rc + getRandomChar(latterNumber, latterLower, latterUpper, latterOther, extraChars);
// 	}
// 	return rc;
// }

// Gera um número aleatório
function returnRand() {
var randomization = Math.random().toString();
var lengthNumbers = randomization.length;
var sort = randomization.substring(lengthNumbers, lengthNumbers – 1);
return sort;
}

// Gera uma senha simples
function generatePasswordEasy() {
var retorno = ‘password’;
var letters = [‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’, ‘g’, ‘h’, ‘i’, ‘j’];

retorno = letters[returnRand()].toUpperCase() + letters[returnRand()] + letters[returnRand()] +
returnRand() + returnRand() + returnRand();

return retorno;
}

// Gera uma senha complexa
function generatePassword(len) {
var pwd = [],
cc = String.fromCharCode,
R = Math.random,
rnd, i;
pwd.push(cc(48 + (0 | R() * 10))); // push a number
pwd.push(cc(65 + (0 | R() * 26))); // push an upper case letter

for (i = 2; i < len; i++) { rnd = 0 | R() * 62; // generate upper OR lower OR number pwd.push(cc(48 + rnd + (rnd > 9 ? 7 : 0) + (rnd > 35 ? 6 : 0)));
}

// shuffle letters in password
return pwd.sort(function() { return R() – .5; }).join(”);
}