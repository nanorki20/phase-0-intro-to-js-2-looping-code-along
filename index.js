// Code your solutions in this file


/*  In index.js, build a function named writeCards() 
    that accepts two arguments: an array of string names, 
    and an event name. Create a for loop with a counter that 
    starts at 0 and increments at the end of each loop. 
    The for loop should stop once it has iterated over the 
    length of the array.

    1. create a new, empty array to hold the messages;
    2. iterate through the input array and, inside the loop, build 
    out the 'thank you' message for each name using string i
    nterpolation, then add that message to the new array you created;
    3. after the loop finishes and all of the messages have been added 
    to the new array, return the new array.

 */


const names = ["Guadalupe", "Ollie", "Aki"]
const feeling = 'surprise'

function writeCards(names, feeling) {
    let newArray = []
    for(let i = 0; i< names.length; i++){
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${feeling} gift!`)
       // console.log(`Thank you, ${names[i]}, for the wonderful ${feeling} gift!`)

    }
    return newArray
}
writeCards()


/* 
    To get more acquainted with while, your task is to 
    write a function, countDown, that takes in any positive integer 
    and, starting from that number, counts down to zero using 
    console.log(). Note that this means that running countDown(10); 
    would actually log 11 times:

    10
    9
    8
    7
    6
    5
    4
    3
    2
    1
    0 
*/



function countDown(posInt) {
    let i = posInt + 1
    while(i >= 0, i-- ){
    console.log(i)
    }
}
countDown(10)