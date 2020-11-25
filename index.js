var readlineSync = require('readline-sync')

const chalk = require('chalk');


var score =0;

var highscore = [
  {
  name :"Shrey",
  score:"30"
  },
  {
  name :"Harsh",
  score:"23"
  }]




console.log(chalk.bgYellow("WELCOME TO  ") + chalk.magenta.bgWhite(" SHREY'S QUIZ ")+chalk.bgGreenBright(" ON INDIA! "))


var username = readlineSync.question("What's your name?")

console.log(chalk.blackBright.bgWhiteBright("Hello, ")+ chalk.bgWhiteBright.black(username.toUpperCase()+"! "))


if(readlineSync.keyInYN('Do you want to Play the Quiz?'))
{
  console.log(chalk.red.bgWhite("\nThere will be total Six questions\nYou Have to Choose any 1 Correct Answer from the 4 given options for every question\n" ))
  console.log("RULES :\n" +
  chalk.red.bgWhite("+5 for every correct answer\n")  +chalk.red.bgWhite("-2 for every wrong answer"))
  
  console.log(chalk.bgYellow("\nOK,Now Let Start the Quiz!\n"))

  

//Question set

var questions =[{
  question: chalk.cyanBright("The Madhubani style of painting is practiced in which state of India?\n") + chalk.blueBright(("A.Orissa \n") +("B.Manipur\n") +("C.Bihar\n") +("D.Madhya Pradesh\n")),
  answer :"c"
}, 
{
  question:chalk.cyanBright("In Which Year,India got it's Independance from British rule?")
  + chalk.blueBright(("\nA.1929 \n") +("B.1947\n") +("C.1950\n") +("D.1948\n")),
  answer : "b"
},
{
   question:chalk.cyanBright("Which state of India has second highest population of Humans?")
   +chalk.blueBright(("\nA.Uttar Pradesh \n") +("B.Rajasthan\n") +("C.Bihar\n") +("D.Maharastra\n"))
  ,answer : "d"
},
{
  question:chalk.cyanBright("Who was the first Prime Minister of India?")+ chalk.blueBright(("\nA.Dr.Rajendra Prasad \n") +("B.Rajeev Gandhi\n") +("C.Jawaharlal Nehru\n") +("D.Lal Bahadur Shastri\n"))
  ,answer:"C"
},
{
  question:chalk.cyanBright("Who was the first women President?")
  +chalk.blueBright(("\nA.Indira Gandhi\n") +("B.Anandiben Patel\n") +("C.Pratibha Patil\n") +("D.Sonia Gandhi\n")),
  answer:"c"
},
{
question:chalk.cyanBright("Who was the first governor-general of the Dominion of India ?")
  +chalk.blueBright(("\nA.Lord Mountbatten\n") +("B.Warren Hastings\n") +("C.Lord William Bentinck\n") +("D.Lord Canning\n")),
  answer: "a"
}
];


//Loop 

for(var i=0;i<questions.length;i++)
{
  var currentques = questions[i];
  
  play(currentques.question ,currentques.answer);
}


//Final Statements

console.log(chalk.underline("Yay! your final  Score is :") + chalk.bgMagenta(score))

console.log("-----------------------------");

console.log(chalk.underline("TOP SCORERS"));

for(var i=0;i<highscore.length;i++)
{
  console.log(highscore[i]);
}

console.log("-----------------------------");

console.log("If your Score is Higher then the Top scorers then share the screenshot on shreymaurya2000@gmail.com")

console.log("-----------------------------");


console.log(chalk.bold("Thank You for Playing this Quiz!"));



}
else
{
  console.log("Thank you for being here,Have a good Day!")
  console.log("-----------------------------")
}




function play(question ,answer){

  var userAnswer = readlineSync.question(chalk.bold(question));


  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.bgGreenBright("Right Answer!"));
    score+=5;
    }
  else{
    console.log(chalk.bgRedBright("Wrong Answer!"));
    console.log(chalk.bgGreenBright("Correct Option is : ")+answer.toUpperCase())
    score-=2;
  }

  console.log("Current Score is: ",score)
  console.log("-------------")
  
}


