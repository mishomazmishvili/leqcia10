//1

// const cars = ["porsche", "toyota", "fiat", "bmw"]
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i])
// }


//2


// function display(x, func) {
//     let message = func(x)
//     document.write(message)
// }

// function priceCalculator(price) {
//     if (price > 50)
//         return "Expensive"
//     else if (price >= 20 && price < 50)
//         return "Good Price"
//     else (price < 20)
//     return "Cheap"
// }

// display(27, priceCalculator)





//3

// const numbers = [15, 53, 22, 198, 10, 28, 16, 70, 33, 951,]

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 1 == 0) {
//         console.log("evens", numbers[i])
//     }
// }

//4


const movietheater = {
    moivetheaterName: "Amirani",
    movielanguages: ["English", "Georgian", "German"],
    adress: "Kostava str",
    mainmovies: [
        {moviename: "Inglorious Basterds imdb 8.3/10"},
        {moviename: "Django Uncained  imdb 8.4/10"},
        {moviename: "Pulp Fiction imdb 8.9/10"}
    ],
}

document.write("<h1> Movietheater Amirani Presents </h1>")

for ( let i = 0; i <movietheater.movielanguages.length; i ++) {
    document.write(movietheater.movielanguages[i] + "<br/>" )
}

document.write("<h2> Main Movie </h2>")

for ( let i = 0; i <movietheater.mainmovies.length; i ++ ) {
    document.write(movietheater.mainmovies[i].moviename + "<br/>" )
}


