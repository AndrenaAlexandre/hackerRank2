// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// this was the solution I came up with 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
    const indexFinder = nums.indexOf(target);
    
    if(indexFinder === -1){
        let mapped = nums.map(i => i);

        mapped.push(target);
        let newList = mapped
        newList.sort((a,b) => a - b);
        return newList.indexOf(target);
        
    }

    return indexFinder;
};
//runtime: 64MS, faster than 97.64% of submissions
//memory usage: 40.2MB, less than 5.79% of submission

// memory was horrible so I need to figure out a way to use less 
// also noticed that this solution was meant to be written in o log n runtime complexity
//so that might explain the faster speed then others


