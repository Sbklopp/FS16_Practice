let scores = [92, 79, 64, 97, 58, 83, 49, 73, 90];



let newScores = []
// we use a loop to add 3 to each score 
for (let i = 0; i < scores.length; i++){
    newScores.push(scores[i] + 3)
}


//recreate the above function using map
let newScoresMap = scores.map(x => x + 3)
// console.log(newScoresMap)

// add 11 points to the failing scores
let curve = scores.map(x => x < 59 ? x + 11 : x)
// console.log(curve)


let num = 2

//ternary operator
num > 3 ? console.log('more than 3') : console.log('not more than 3')


// subtract 10 points from the A scores
let fail = scores.map(x => x > 89 ? x - 10 : x)
// console.log(fail)

