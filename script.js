const Options= ["Rock", "Paper", "Scissors"];   //Options is an array that holds the options
const randomIndex= Math.floor(Math.random() * Options.length);  //
const randomOptions= Options[randomIndex];

console.log(randomOptions);