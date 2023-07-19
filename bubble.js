// bubbleSort([4, 20, 12, 10, 7, 9]) should equal [4, 7, 8, 10, 12, 20]


function bubbleSort(arr) {
    let lower
    let higher
    let count = 0;
    for (i = 0; i < arr.length; i++) {
        // each time we loop, a number to the right is always in the correct place. - i so that we do not need to look at the array that is already in their correct index
        for (let j = 0; j < arr.length - i; j++) {
            count++
            if (arr[j] > arr[j + 1]) {
                lower = arr[j + 1]
                higher = arr[j]
                arr[j] = lower
                arr[j + 1] = higher
            }

        }

    }
    console.log(`count: ${count}`)
    return arr

}




module.exports = bubbleSort;