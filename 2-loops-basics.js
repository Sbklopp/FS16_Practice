
let scores = [92, 79, 64, 97, 58, 83, 49, 73, 90];

let newScores = []

let aGrades = []




// for (let i=0; i<10; i++) {
//     // console.log(i)
// }

// we use a loop to add 3 to each score 
for (let i = 0; i < scores.length; i++){
    newScores.push(scores[i] + 3)
}

// we loops to find the scores that are greater than 90
for (let i = 0; i < scores.length; i++){
    if (scores[i] >= 90){
        aGrades.push(scores[i])
    }
}

// console.log(newScores)

// console.log(aGrades)

// finds scores over 90 using filter
let goodGrades = scores.filter(x => x > 89)

// console.log(goodGrades)