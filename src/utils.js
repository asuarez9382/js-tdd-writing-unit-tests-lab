// Your code here
export function isPalindrome(word) {
    const splitWord = word.split("")

    const reverseWord = splitWord.reverse().join("")
    console.log(reverseWord)
    if(word === reverseWord){
        return true
    }
    else {
        return false
    }
}

isPalindrome("word")

