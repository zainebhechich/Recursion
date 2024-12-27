//Decision Making (if-else and switch):
//Ticket Pricing
function TicketsPrice(age) {
    if (age <= 12) {
        return 10; 
    } else if (age >= 13 && age <= 17) {
        return 15; 
    } else {
        return 20; 
    }
}

function isLeapYear(year) {
    if (year % 4 === 0) {
        // Check if the year is divisible by 100
        if (year % 100 === 0) {
            // If divisible by 100, check if it's divisible by 400
            if (year % 400 === 0) {
                return true;  // a leap year
            } else {
                return false;  // Not a leap year
            }
        } else {
            return true;  //  a leap year (not divisible by 100)
        }
    } else {
        return false;  // Not a leap year (not divisible by 4)
    }
}

    
//Recursion:
//Palindrome Checker:
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();    
    function checkRecursive(s) {
        // Base case: if the string has 0 or 1 character, is palindrome
        if (s.length <= 1) {
            return true;
        }
        // Compare the first and last characters
        if (s[0] !== s[s.length - 1]) {
            return false;  // Not a palindrome if the characters don't match
        }
        // Recursively check the inner substring
        return checkRecursive(s.slice(1, s.length - 1));
    }
    
    // Call the recursive helper function
    return checkRecursive(cleanedStr);
}
// console.log(isPalindrome("A man, a plan, a canal: Panama")); // true


//Power Function:
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }    
    if (exponent > 0) {
        return base * power(base, exponent - 1);
    }
    return 1 / power(base, -exponent);
}
// console.log(power(2, 3)); // 8


    
