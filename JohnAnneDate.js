// T.T.T.49: John and Anne's sweet date

// Story
// John and Anne are a pair of lovebirds. They have their own jobs. John works w1 days off for r1 day and Anne works w2 days off for r2 days. Only when they have a rest, they can go out for a sweet date. Please calculate, they can date how many days in a time period? For example:

// John works 3 days off for 1 day 
// Anne works 7 days off for 3 days
// In a time period 10 day
// John: work work work rest work work work rest work work
//                                            |
// Anne: work work work work work work work rest rest rest
// They have only one sweet date in 10 days

// In a time period 1000 day
// John: work work work rest work work work rest work work ....
//                                            |
// Anne: work work work work work work work rest rest rest ....
// They will have 100 times sweet date in 1000 days
// Task
// Complete function sweetDate() that accepts 5 arguments:

// w1,r1: The work days and rest days of John

// w2,r2: The work days and rest days of Anne

// timePeriod: A time period that we need to calculate the sweet date

// Return a number that How many times can Anne and John have a sweet date.

// Example
// sweetDate(3,1,7,3,10)  === 1

// sweetDate(3,1,7,3,20)  === 2

// sweetDate(4,2,7,3,20)  === 1

// sweetDate(4,2,7,3,30)  === 3

// sweetDate(3,1,7,3,1000)  === 100

function sweetDate(w1,r1,w2,r2,timePeriod) {
    let john = '1'.repeat(w1).concat('0'.repeat(r1)).repeat(Math.ceil(timePeriod / (w1+r1))).slice(0, timePeriod);
    let anne = '1'.repeat(w2).concat('0'.repeat(r2)).repeat(Math.ceil(timePeriod / (w2+r2))).slice(0, timePeriod);
    return [...john].reduce((a,c,i) => c === '0' && anne[i] === '0' ? a+1 : a, 0);
}