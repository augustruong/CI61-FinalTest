// Prints help message to the console
// let inputArray = [2, 3, -5, -2, 4];
// console.log(adjacentElementsProduct(inputArray)); 

// Returns a string
function adjacentElementsProduct(inputArray) {
    let res = 0;
    for (let i = 0; i < inputArray.length-1; i++) {
        let product = inputArray[i]*inputArray[i+1];
        if (product > res) res = product;
    }
    return res;
}

// Prints help message to the console
// let inputArray = [60, 40, 55, 75, 64];
// console.log(alternatingSums(inputArray)); 

// Returns a string
function alternatingSums(a) {
    let res = [0,0];
    for (let i = 0; i < a.length; i++) {
        if (i%2==0) {
            res[0] += a[i];
        } else {
            res[1] += a[i];
        }
    }
    return res;
}
