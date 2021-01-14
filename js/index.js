
//Iteration1 Do it again
const hacker1 = "Franck";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Milenna";
console.log(`The navigator's name is ${hacker2}`);

//Iteration2 Do it again
if (hacker1.lenght > hacker2.lenght){
  console.log(`The driver has the longest name, it has ${hacker1.lenght} characters.`);
}
else if (!hacker1.lenght>hacker2.lenght){
console.log(`It seems that the navigator has the longest name, it has ${hacker2.lenght} characters.`);
} 
else (hacker1.lenght==hacker2.lenght){
  console.log(`wow, you both have equally long names, ${hacker2.lenght} characters!`);
}

//Iteration 3 Do it again
let upperHacker1 = hacker1.upperCase();
let driverNameSplit = upperHacker1.split("").join(" ");
console.log(driverNameSplit);

let reverseNavName = hacker2.split("").reverse().join("");
console.log(reverseNavName);

if (hacker1>hacker2){
  console.log("The driver's name goes first");
} else if (!hacker1>hacker2){
  console.log("Yo, the navigator goes first definitely");
} else {console.log ("What?! You both have the same name?");}
