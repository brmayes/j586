var month = new Date();
var monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("month").innerHTML = monthArray[month.getMonth()];

var day = new Date();
document.getElementById("day").innerHTML = day.getDate();

var years = new Date();
document.getElementById("years").innerHTML = years.getFullYear();

var theFullDate = month + " " + day + ", " + years;