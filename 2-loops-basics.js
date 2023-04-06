
let scores = [92, 79, 64, 97, 58, 83, 49, 73, 90];

// let newScores = []

// let aGrades = []


let aGrades = scores.filter(x => x < 89)

// console.log(aGrades)

// let newScores = []

scores.forEach(score => {
    if (score > 89){
        newScores.push(score)
    }
})

// console.log(newScores)



// console.log(newScores)

// console.log(aGrades)

// finds scores over 90 using filter
let goodGrades = scores.filter(x => x > 89)

// console.log(goodGrades)