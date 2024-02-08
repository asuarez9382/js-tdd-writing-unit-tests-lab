// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", ()=> {
    it("returns true if the word is a palindrome and false if not", ()=> {
        const word="racecar"
        

        const result=isPalindrome(word)
        
        expect(result).toBe(true)
        
    })

    it("returns true if the word is a palindrome and false if not", ()=> {
        
        const word = "car"

        
        const result= isPalindrome(word)
        
        expect(result).toBe(false)
    })
})