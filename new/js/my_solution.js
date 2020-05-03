(function () {
    let array = [1, 2, 3, 4, 5, 6]
    for (let i = 0; i < array.length - 1; i += 2) {
        let indexOne = i
        let indexTwo = i + 1
        let temp = array[indexOne]
        array[indexOne] = array[indexTwo]
        array[indexTwo] = temp
    }
    console.log(array)
}())
