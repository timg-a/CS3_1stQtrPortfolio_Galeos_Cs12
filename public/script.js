var age = window.prompt("Enter your age in years:", "0");
var maxAge = window.prompt("Enter the age you would want to live to in years:", "0");
var numPerDay = window.prompt("Enter how many snacks you eat per day:", "0");
var totalNeeded = (maxAge - age) * numPerDay;

document.write(`You need ${totalNeeded} snacks to last until the ripe old age of ${maxAge}`)