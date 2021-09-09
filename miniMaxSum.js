// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example
// The minimum sum is  and the maximum sum is . The function prints

// 16 24

// Function Description

// Complete the miniMaxSum function in the editor below.

// miniMaxSum has the following parameter(s):

// arr: an array of  integers
// Print
// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14

function miniMaxSum(arr) {

    let minSum = 999999;
    let maxSum = 0;
    let values = [];

    // here I am going to loop through to find the 5 different possible sums creatable then I am going to save them to an empty array
    for(let i = 0; i < arr.length; i++){
        if(i < 2){
            var value = arr[i] + arr[i + 1] + arr [i + 2] + arr[i + 3];
            values.push(value);
        }
        if(i === 2){
            var value2 = arr[i - 2] + arr[i - 1] + arr [i] + arr[i + 2];
            values.push(value2);
        }
        if (i === 3){
            var value3 = arr[i - 2] + arr[i - 1] + arr [i] + arr[i + 1];
            values.push(value3);
        }
        if (i === 4){
            var value4 = arr[i - 4] + arr[i - 3] + arr[i - 1] + arr[i];
            values.push(value4);
        }
    };
    // after I get all the different sums I am going to loop through the list of sums looking for the largest sum and smallest sum 
    for(let i = 0; i < values.length; i++){
        if(values[i] < minSum){
            minSum = values[i]
        }
        if(values[i] > maxSum){
            maxSum = values[i]
        }
    };
    console.log(`${minSum} ${maxSum}`)
}
miniMaxSum([0,1,2,3,4]);
