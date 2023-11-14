// Write a JavaScript conditional statement to find the largest of five numbers.Display an alert box to show the results.

// Sample numbers: -5, -2, -6, 0, -1
// Output: 0   // find the bigest number

let arr = [-5, -2, -6, 0, -1]
let swapped
do {
    swapped = false
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
            swapped = true
        }
    }
} while (swapped)

console.log(arr);
console.log(`The bigest number is : ${arr[0]}`);
const h1 = document.querySelector('h1')
h1.innerHTML = 'The bigest number is : ' + arr[0] 