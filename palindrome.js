
// objective is to see if a string is a palindrome
//  -- Here we are checking to see if this set of characters is already a palindrome as it is, not if "can" be a palindrome when rearranged
//  -- Blank spaces, punctuation and capitalization should be ignored.

// we would need to loop through the string to reverse it and compare it forward and backwards if there is a space I would next it.
// but first I need to pretty much map the string but with out the spaces, punctuation and 


//I want to check through the string and remove the spaces and puntuation
const checkingForPalindrome = (palindrome) =>{
    var noSpaces ="";
    for(let i=0; i < palindrome.length; i ++){
        if(palindrome[i]===" " || palindrome[i]==="." || palindrome[i]==="," || palindrome[i]==="?" || palindrome[i]==="!"){
            continue}
        else{
            noSpaces += palindrome[i];
        }
    };
    // consoling what I have to see result so far
    console.log(noSpaces)

    // setting an empty string of what I want the reverse of the above to be
    revNoSpaces = "";

    for(let i=0; i < noSpaces.length; i ++){
        revNoSpaces = noSpaces[i] + revNoSpaces;
    };

    // checking what I have again
    console.log(revNoSpaces)

    // now we are going to lowercase both variable and compare 
    if(noSpaces.toLowerCase === revNoSpaces.toLowerCase){
        console.log("This is a Palindrome!")
    }
    else{
        console.log("This is not a Palindrome :( ")
    }
}

checkingForPalindrome("A man, a plan, a canal. Panama");