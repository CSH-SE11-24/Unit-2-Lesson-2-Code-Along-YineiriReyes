// IF STATEMENT REVIEW
// Day of the Week: Prompt the user to enter a day of the week (e.g., "Monday") and say whether it's a weekday or the weekend.
// let dayOfWeek = prompt("Pick a day of the week")
//.toUpperCase() makes everything uppercase
//.toLowerCase() makes everything lowercase
// dayOfWeek = dayOfWeek.toLowerCase() 
// if (dayOfWeek === "saturday" || dayOfWeek === "sunday"){
//   console.log("Yay, no school!")
// } else {
//   console.log("Yay, school!")
// }
let user=prompt("Whats the day of the week")
if (user === "saturday"|| user === "sunday"){
  console.log("its the weekrnf")
}else{
  console.log("its a school day")
}




// Age Group Classifier: Prompt the user to enter their age and categorize them into different age groups (child (<12), teen (<18), adult (<65), senior)
let age =prompt("what is your age")
age =parseInt(age)

if(age)



// WHILE LOOPS
// Print 1 to 5
let i=1
while(1>=5){
  console.log(1)
  i++
}



// Print from a certain number to 1
let user1=prompt("enter a number")
user1=parseInt(user)
while(user>0){
  console.log(user)
  user1--
}



// Summing up to 5
let sum=0
let counter=1

while(counter<=5){
 sum= counter+sum
  counter++
}
console.log("sum of 1-100",sum)


// Using prompt
let mysteryStudent="yineiri"
let user2=pompt("enter a students's name").toLowercase()

while(mysteryStudent !== user2){
  user2=prompt("try again, guess a different student.").toLocaleLowerCase()
}
conosole.log("Good job!")


