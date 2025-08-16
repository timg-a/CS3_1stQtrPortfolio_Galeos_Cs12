var age = window.prompt("Enter your age in years:", "0");
var maxAge = window.prompt("Enter the age you would want to live to in years:", "0");
var numPerDay = window.prompt("Enter how many snacks you eat per day:", "0");
var totalNeeded = ((maxAge - age) * 365) * numPerDay;

var confirmation = window.confirm(`You entered: \n${age} for age\n${maxAge} for the age you want to live to\n${numPerDay} for the muber of snacks you eat per day\n\nIs your input correct?`);

if (confirmation == true) {
    document.write(`You need ${totalNeeded} snacks to last until the ripe old age of ${maxAge}`);
} else {
    window.alert("Run this code again.");
}
