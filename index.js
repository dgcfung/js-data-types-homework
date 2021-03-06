/********************************
 *
 * DO YOUR ASSIGNMENT IN THIS FILE
 *
 *********************************/

// TEST EARLY AND OFTEN - run the code in the terminal by typing 'node index.js' in this directory
// After each step, git add . AND git commit -m "completed part PART-LETTER-HERE"
// Complete all steps specified below - each piece of each step needs to be logged to the console
// using console.log.
// EXAMPLE - Try running node index.js before working on any of the parts and see what happens in the terminal.



const givenVariable = 20; 
const doubledVariable = givenVariable * 2;
const tripledVariable = givenVariable * 3;
console.log(doubledVariable);
console.log('EXAMPLE', 'tripledVariable', tripledVariable);

var className = "sei-blizzard"
const bestClass= className.toUpperCase()
console.log(bestClass)

const bestClassLowercase= bestClass.toLowerCase()
console.log(bestClassLowercase)

// After running this and feeling comfortable, feel free to comment the above block of code out (either give each line a // or highlight the block of code and press COMMAND - / )

// DATATYPES

/********************************
 *
 * STEP A: Strings
 *
 *********************************/


// Set a constant named 'bestClass' equal to the name of our SEI class (Blizzard) capitalized.
// Log this value to the console.

// let bestClass = 'Blizzard'
// console.log(bestClass)
// let bestClassLowercase = bestClass.toLowerCase()

// Set a constant named bestClassLowercase that converts bestClass to an all lowercase string.
// Log this value to the console.





/********************************
 *
 * STEP B: Total
 *
 *********************************/

const amount1 = 1;
const amount2 = 3;
var total = amount1 + amount2
console.log(total)


// Write an expression here which adds the values of amount1 and amount2 and
// sets them to a variable called total
// Log the value of total to the console







/********************************
 *
 * STEP C: Basic Conversion
 *
 *********************************/

const pounds = 155;
var convertLbKg=.454
var kilograms=  pounds * convertLbKg
console.log(kilograms)

// Write an expression here which converts pounds to kilograms and set the value equal
// to a variable called "kilograms"
// Log kilograms to the console






/********************************
 *
 * STEP D: Grand Hotel Tremezzo: Part 1
 *
 *********************************/


var grandHotelTremezzoGuests = ['George Clooney', 'Silvio Berlusconi', 'Isabella Rosellini']
console.log(grandHotelTremezzoGuests)
grandHotelTremezzoGuests.push('Fabio')
console.log(grandHotelTremezzoGuests)
grandHotelTremezzoGuests.pop(grandHotelTremezzoGuests[3])
console.log(grandHotelTremezzoGuests)

// Create a variable grandHotelTremezzoGuests that is equal to an array containing three strings:
// 'George Clooney' 'Silvio Berlusconi'  and 'Isabella Rossellini'.
// Log grandHotelTremezzoGuests to the console.






// A new guest is checking in! Add "Fabio" to the end of the array.
// Log grandHotelTremezzoGuests to the console.







// False alarm! Fabio was on a roller coaster and got hit in the face with a pigeon
// so he won't be able to stay at the hotel remove him from the end of the array.
// Log grandHotelTremezzoGuests to the console.







// A new guest is checking in for real! Add 'Mario Batali' to the end of our array.
// He is wearing a disguise...but orange crocs.
// Log grandHotelTremezzoGuests to the console.


grandHotelTremezzoGuests.push('Mario Batali')
console.log(grandHotelTremezzoGuests)




// Another new guest is checking in for real! Add 'Mario Balotelli' to the end of our array.
// Log grandHotelTremezzoGuests to the console.









// Create a variable called totalGuests that is equal to the number of guests staying in our hotel
// by checking the items count of grandHotelTremezzoGuests array.
// Log totalGuests to the console.

var totalGuests = grandHotelTremezzoGuests.length
console.log(totalGuests)



/********************************
 *
 * STEP E: Grand Hotel Tremezzo: Part 2
 *
 *********************************/



var grandHotelTremezzoPastGuests= []
console.log(grandHotelTremezzoPastGuests)


// Create a variable 'grandHotelTremezzoPastGuests' set to an empty Array.
// Log grandHotelTremezzoPastGuests to the console


grandHotelTremezzoPastGuests.push(grandHotelTremezzoGuests.splice(0,1))
console.log(grandHotelTremezzoPastGuests)





// George Clooney had a scooter accident so he has to check out.
// Remove him from grandHotelTremezzoGuests using the splice method. (Google and MDN are your friends here 😊)
// Then use the push method to add his name to 'grandHotelTremezzoPastGuests'
// Log both grandHotelTremezzoGuests and grandHotelTremezzoPastGuests in the same console.log statement.


totalGuests= grandHotelTremezzoGuests.length
console.log(totalGuests)







// ***Re-assign*** the variable that is equal to the number of guests staying
// in our hotel by checking the current items count of grandHotelTremezzoGuests array.
// (Don't create a new variable!!)
//  Log the variable to the console.








/********************************
 *
 * STEP F: Grand Hotel Tremezzo: Part 3
 *
 *********************************/


for (let i=0; i<grandHotelTremezzoGuests.length; i++){
    console.log(grandHotelTremezzoGuests[i] + ' gets a bottle of Nero de Como')
}

// The hotel is going to deliver a bottle of Nero de Como to each guest.
// Use a for loop to log out '*PERSON'S NAME* gets a bottle of Nero de Como'
// for each guest in the grandHotelTremezzoGuests array.

for (let i=0; i<grandHotelTremezzoGuests.length; i++){
    console.log(grandHotelTremezzoGuests+ ' please hush up!!!')
}








// The guests drank their bottles of Nero de Como and are getting rowdy.
// Tell them to be quiet by using a for loop to log ... '*PERSON'S NAME* please hush up!!!'
// for each guest in the grandHotelTremezzoGuests array.






/********************************
 *
 * STEP G: Grand Hotel Tremezzo: Part 4
 *
 *********************************/

var sleepingGuests = []
console.log(sleepingGuests)


// Create an empty array assigned to a variable called sleepingGuests
// Log sleepingGuests to the console.



for (var i=0; i < grandHotelTremezzoGuests.length; i++){
    sleepingGuests.push(grandHotelTremezzoGuests[i])

}
console.log(sleepingGuests)


// The guests passed out. Loop over the guests and add them to the sleepingGuests array.
// (Don't remove them from grandHotelTremezzoGuests.)
// Log sleepingGuests to the console.





/********************************
 *
 * BONUS!!!!!!!
 *
 *********************************/

var milan= []
milan.push(grandHotelTremezzoGuests.splice(0, grandHotelTremezzoGuests.length))
// grandHotelTremezzoGuests.splice(0,grandHotelTremezzoGuests.length)
console.log(milan)



// Lake Como has started to flood so all of the guests are fleeing to Milan.
// Use splice to remove all of the guests (simultaneously using push to add them
// to the array of checked out guests). Log both grandHotelTremezzoGuests
// and grandHotelTremezzoPastGuests in the same log statement.






























