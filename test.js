

const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));


const factorial = (n) => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));


const reverseString = (str) => {
    if (str.length === 0) return str;
    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello"));


const isPalindrome = (str) => {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("racecar"));


const sumOfArray = (arr) => {
    if (arr.length === 0) return 0;
    return arr[0] + sumOfArray(arr.slice(1));
}

console.log(sumOfArray([1, 2, 3, 4, 5]));




const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));


const bubbleSort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}


console.log(bubbleSort([5, 3, 8, 4, 2]));


const selectionSort = (arr) => {
    let n = arr.length;


    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

console.log(selectionSort([5, 3, 8, 4, 2]));


const insertionSort = (arr) => {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}


console.log(insertionSort([5, 3, 8, 4, 2]));


const matchingBrackets = (str) => {
    const stack = [];
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let char of str) {
        if (brackets[char]) {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            if (brackets[stack.pop()] !== char) return false;
        }
    }
    return stack.length === 0;
}

console.log(matchingBrackets("{[()]}"))


const reverseWords = (str) => {
    return str.split(' ').reverse().join(' ');
}

console.log(reverseWords("hello world"));


const findFirstNonRepeatingCharacter = (str) => {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str) {
        if (charCount[char] === 1) return char;
    }
    return null;
}

console.log(findFirstNonRepeatingCharacter("leetcode"));



const findLongestSubstring = (str) => {
    let maxLength = 0;
    let currentLength = 0;
    const charMap = {};



    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charMap[char] >= start) {
            start = charMap[char] + 1;
        }
    }
}

console.log(findLongestSubstring("abcabcbb"));


const findLongestPalindrome = (str) => {
    let maxLength = 0;
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let left = i;
        let right = i;

        while (left >= 0 && right < str.length && str[left] === str[right]) {
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1;
                start = left;
            }
        }
    }
    return str.slice(start, start + maxLength);
}

console.log(findLongestPalindrome("babad"));


// common Element in two array

const commonElements = (arr1, arr2) => {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    return [...set1].filter(element => set2.has(element));
}

console.log(commonElements([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// intersection between two array

Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i]);
    }
    return accumulator;
}