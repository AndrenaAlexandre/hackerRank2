// after thinking about it over night I wanted to write a clearer simplier way to solve this algo so this is my solution version 2


function miniMaxSum(arr) {
    //first I want to set what I want the make the lowest and highest values to compare later
    let minSum = Math.pow(10,15);
    //I used 10 to the 15th power because the highest value it can give me when testing is n to the 9
    let maxSum = 0;

    // my logic is that there are five possible sums that can be derived from combining the different numbers in groups of 4
    var sum1 = arr[1] + arr[2] + arr[3] + arr[4];
    var sum2 = arr[0] + arr[2] + arr[3] + arr[4];
    var sum3 = arr[0] + arr[1] + arr[3] + arr[4];
    var sum4 = arr[0] + arr[1] + arr[2] + arr[4];
    var sum5 = arr[0] + arr[1] + arr[2] + arr[3];

    //then I want to save all the possible sums into an array
    var values = [sum1, sum2, sum3, sum4, sum5];

    // after that I want to loop through the list of values looking for the largest sum and smallest sum 
    for(let i = 0; i < values.length; i++){
        if(values[i] < minSum){
            //since I set the min value to 10 to the power of 9 any value less than that should be saved as the new minimum value
            minSum = values[i]
            // then when it loops again it will check to see if the new value is less than the last value saved
        }
        if(values[i] > maxSum){
            //here we are doing the same thing. max sum is set to 0 so any number greater than 0 should be saved as the new max sum
            maxSum = values[i]
            //and then when it loops again it will check to see if i is greater than the last value set to max sum
        }
    };
    //once we have our sums then we print them to the console
    console.log(`${minSum} ${maxSum}`)
};

miniMaxSum([1,2,3,4,5]);