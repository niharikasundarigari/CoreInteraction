alert ("Hello world");

var myName = "Niharika Sundarigari";

var integer = 33;

var number = "33";

var egg = true;

console.log (myName)
console.log (integer)
console.log (number)
console.log (egg)
console.log (myName + egg)


console.log (30+3)
console.log (29+4)
console.log (28+5)
console.log (27+6)
console.log (26+7)

var countries = ["Maldives","Greece","Turkey","Australia"]
console.log (countries[0])
console.log (countries.length)

console.log ("The current time is" + new Date())


var currentHour = new Date().getHours()
console.log(currentHour);

 if (currentHour==11) {
   var message= "Its 11 now"
} else {
	var message= "its not 11 yet"
};

console.log (message);



if(myName.length - 2 <= 9) {
	var response = "my name is relatively short"

} else if (myName.length - 2 >= 14 ) {
	var response = "my name is relatively long"
} else {
	var response = "My name is neither short nor long"
 }

console.log(message);

 

 if (myName.length - 1 <= 9) {
  var response = "My name is relatively short."
 } else if (myName.length - 1 >= 14) {
  var response = "My name is relatively long."
 } else {
  var response = "My name is neither short nor long."
 }

 console.log(response);



var weather= "43"
var country= "69"

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;

  var message = "The temperature in New york is " +
   fToCel + '\xB0C at 10:30'
    console.log(message);
} 
fToC(43);



function fToCl(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;

  var message = "The temperature in Greece is " +
   fToCel + '\xB0C at 10:30'
    console.log(message);
} 

fToCl(69);



$('document').ready(function(){ 

for(var i=0; i<30; i++){

        var box2 = '<p class="bluetext">!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>';
        $('.box').append(box2); 
  
  }
// jQuery magic; 

});









