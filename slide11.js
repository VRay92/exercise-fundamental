//exercise no 1

function convertColumnNumber(title) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let value = 0
    let frontAlphabetMultiplier = alphabet.indexOf((title.charAt(0)).toLowerCase()) + 1
    console.log(frontAlphabetMultiplier)

    console.log(alphabet.length)
    if (title.length === 1) {
        for (i = 0; i < alphabet.length; i++) {
            if (title.toLowerCase() === alphabet[i]) {
                value = i + 1
            }
        }
    } else if (title.length === 2) {
        for (j = 0; j < alphabet.length; j++) {
            if (title.charAt(1).toLowerCase() === alphabet[j]) {
                value = (j + 1) + (26 * frontAlphabetMultiplier)
            }
        }
    }
    return value;
}

console.log(convertColumnNumber("bz"))



// exercise no 2

let nums = [1, 2, 7, 1, 2];
function findDifferentNumber(arr) {
    let result = 0
    console.log(nums.length)
    for (i = 0; i < nums.length; i++) {
        let newNums = [...nums]
        newNums.splice(i, 1)
        console.log(newNums)
        if (!(newNums.includes(nums[i]))) {
            result = nums[i]
        }
    }
    return result
}
console.log(findDifferentNumber(nums))

// exercise no 3
let s = "bajuri"
let t = "jubari"

let sArr = s.split("")
let tArr = t.split("")
console.log(sArr)
console.log(tArr)
const newsArr = sArr.sort()
const newtArr = tArr.sort()
console.log(newsArr)
console.log(newtArr)
if (newsArr === newtArr) {
    let result = "true"
}
console.log(result)


// exercise no 4

// 1 tangga = 1   => 1
// 2 tangga = 11, 2   => 2
// 3 tangga = 111, 12, 21  => 3
// 4 tangga = 1111, 112, 121, 211, 22  => 5
// 5 tangga = 11111, 1112, 1121, 1211, 2111, 122, 212, 221  => 8

let n = 7;
let prev_num = 0;
let next_num = 1;
let result2 = n > 0 ? 1 : 0;

for(let i=1; i <= n; i++) {
    result2 = prev_num + next_num;
    prev_num = next_num;
    next_num = result2;
    console.log(result2)
}

console.log(n, ".", result2)