let num = Math.random() * 100;
a = Number.parseInt(num)
let score = 100;
let inp=0;
while (inp != a) {
  score = score - 1;
  inp = prompt("Enter your number: ");
  if (inp == a) {
    console.log("congratulations!!your guess is correct")
    console.log("you guessed the correct no. in $(100-score) chances")
  }
  else if (inp > a && a < 100) {
      console.log("your no. is greater than actual no.")
    }
  else if (inp < a && inp > 0) {
      console.log("your guess is less than the actual number")
    }
  else {
      console.log("Enter number between 1 and 100")
    }
}