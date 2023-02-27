//1

const cars = ["porsche", "toyota", "fiat", "bmw"]
for (let i = 0; i<cars.length; i++){
    console.log(cars[i])
}


//2


function display(x,func) {
    let message = func(x)
    document.write(message)
}

function priceCalculator(price) {
    if(price > 50)
    return "Expensive"
    else if (price >= 20 && price < 50)
    return"Good Price"
    else(price < 20)
    return "Cheap"
}

display(27, priceCalculator)





//3

const numbers = [15,53,22,198,10,28,16,70,33,951,]

for (let i=0; i < numbers.length; i++) {
    if (numbers[i] % 1 == 0){
    console.log("evens", numbers[i])
}
}
