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

// I've solved it but I want to return at a later time to see how I can make it either faster or with less memory 

var sortedSquares = function(nums) {
    var emptyArr = new Array(nums.length);
    
    for(i=0; i < nums.length; i++){
        var squared = nums[i] * nums[i];
        emptyArr[i]= squared;
    };
    emptyArr.sort((a,b)=>a-b);
    return emptyArr;
    
};

// so I've made a slight adjustment and decided to use Array() to create a new array set to the legth of the array being passed in to cut down on memory being seeked
//each time the for loop iterates

// the results of the tweak resulted in 124MS runtime, faster than 52.96% of submissions. Decreased speed by about 4%
// but the memory of 45.1MB, less than 98.36% of submissions! so this leaves the question of which is of greater inportance? Speed or memory? 
// I guess it all depends on what you are trying to accomplish to determine which should be sacrificed for what