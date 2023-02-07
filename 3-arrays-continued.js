

let scores = [92, 79, 64, 97, 58, 83, 49, 73, 90];

//find average 

function averages(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }

    let avg = sum / arr.length
    return avg
}

// console.log(averages(scores))

// if divisible by 3 subsitute "base"
// if divisible by 5 substitute "ball"
// if divisible by both "baseball"

//  1 2 base 4 ball base 7 8 base ball 11 base 13 14 baseball

// console.log( 6 % 3 )

//fizzbuzz

function baseBall(num){
    for (let i = 1; i <= num; i++) {
        if (i % 3 == 0 && i % 5 == 0){
            console.log("baseball")
        }
        else if (i % 5 == 0) {
            console.log("ball")
        }
        else if (i % 3 == 0){
            console.log("base")
        }
        else {
            console.log(i)
        }
    }
}


baseBall(10000)

