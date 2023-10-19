var readlineSync = require("readline-sync");
var userName = readlineSync.question("What's your name : ");
console.log("Welcome " + userName + " to my coding world");
var yourAge = readlineSync.question("What's your age " + userName + " : ");
if(yourAge >= 18){
  console.log("Congrat's " + userName + " Now you are already adult, I hope you know, just for conformation to us");
} else {
  console.log("hey " + userName + " you are still a kid to your parents and to the our Indian socity as well");
}
//
var asking = readlineSync.question("hey "+userName + " do you like to know who are my superheros are : ");
if(asking.toLowerCase() == "yes") {
var superHeros = [
  {
    name: "Spiderman",
    costumeColor: "red",
  },
  {
    name: "Batman",
    costumeColor: "black",
  },
  {
    name: "Superman",
    costumeColor: "Blue and Red",
  },
];

function printSuperHero(fun) {
  console.log("Name: " + fun.name);
  console.log("Costume color: " + fun.costumeColor);
  console.log(".................................");
}

for (var i = 0; i < superHeros.length; i++) {
  printSuperHero(superHeros[i]);
}
} else {
  console.log("But I would let you know my superheros are : ");
  var superHeros = [
    {
      name: "Spiderman",
      costumeColor: "red",
    },
    {
      name: "Batman",
      costumeColor: "black",
    },
    {
      name: "Superman",
      costumeColor: "Blue and Red",
    },
  ];

  function printSuperHero(fun) {
    console.log("Name: " + fun.name);
    console.log("Costume color: " + fun.costumeColor);
    console.log(".................................");
  }

  for (var i = 0; i < superHeros.length; i++) {
    printSuperHero(superHeros[i]);
  }
}
//
var readlineSync = require("readline-sync");
var userInput = readlineSync.question("Do have any question " + userName + " : ");
var score = 1;
function checkAnswer(question, answer){ // parameters 
  if(userInput.toUpperCase() == "NO"){ 
    console.log("You are right");
    score+= 1;
    console.log("Your score is : " + score);
    console.log("Your reward on your response : " + score);
  } else {
    console.log("You are wrong");
    score-= 1;
    console.log("Your score is : " + score)
    console.log("Your reward on your response : " + score);
  }
  console.log("question :"+ question);
  console.log("answerno : "+ answer);
}
checkAnswer("what's your question", "nothing"); // arguments
//

var crickFan = readlineSync.question("hello "+ userName + " do you like cricket and do you want me know my favourite players and their streangth's : ")
if(crickFan.toUpperCase() == "YES") {
  var kohli = {
    centurys : 78,
    number : 18,
  bat : "MRF",
  country : "INDIA",
  fans : "500M",
  inteligence : 100,
  proved : 1,
  comeback : 1,
  }

  var steveSmith = {
      centurys : 44,
      number : 49,
    bat : "New balance",
    country : "Austrila",
    fans : "100M",
    inteligence : 80,
    proved : 2,
    comeback : 2,
    }

  console.log(steveSmith.country);
  console.log(kohli.country);
  console.log("steveSmith.comeback > kohli.comeback : ");
  console.log(steveSmith.comeback > kohli.comeback);
  console.log(kohli.fans);
  console.log(steveSmith.fans);
  console.log("kohli.fans > steveSmith.fans : ")
  console.log(kohli.fans > steveSmith.fans);
} else {
  console.log("I know "+userName+ " you don't like, but I would like to show you cause this is my treat "+userName);
  var kohli = {
    centurys : 78,
    number : 18,
  bat : "MRF",
  country : "INDIA",
  fans : "500M",
  inteligence : 100,
  proved : 1,
  comeback : 1,
  }

  var steveSmith = {
      centurys : 44,
      number : 49,
    bat : "New balance",
    country : "Austrila",
    fans : "100M",
    inteligence : 80,
    proved : 2,
    comeback : 2,
    }

  console.log(steveSmith.country);
  console.log(kohli.country);
  console.log("steveSmith.comeback > kohli.comeback : ");
  console.log(steveSmith.comeback > kohli.comeback);
  console.log(kohli.fans);
  console.log(steveSmith.fans);
  console.log("kohli.fans > steveSmith.fans : ")
  console.log(kohli.fans > steveSmith.fans);
}
