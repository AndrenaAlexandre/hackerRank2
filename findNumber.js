// this hackerrank problem was given any array of intergers check to see if k, another interger, is present in the array 

function findNumber(arr, k) {
    // Write your code here
    var count = 0;
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] === k){
            console.log("YES");
            break
        }
        else{
            count += 1
            if (count === arr.length){
                console.log("NO")
            }
        }
    }
};

findNumber([1, 3, 4, 6, 5], 2)