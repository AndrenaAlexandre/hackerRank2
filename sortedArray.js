// the objective of this algo was to return an array of numbers, in ascending order, of the squared values of the integars given array.

// the solution I came to below had the results of 120ms runtime which was faster than 63.04% of submissions
// memory of 46MB less than 25.09% of submissions

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    var emptyArr = [];
    
    for(i=0; i < nums.length; i++){
        var squared = nums[i] * nums[i];
        emptyArr.push(squared);
    };
    emptyArr.sort((a,b)=>a-b);
    return emptyArr;
    
};

// I've solved it but I want to return at a later time to see how I can make it faster 