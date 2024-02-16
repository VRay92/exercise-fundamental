//////////////////////////////////////////////// soal no 1 ////////////////////////////////////////////////

const arr1 = [12,5,23,18,4,45,32]

// without .sort

function sorter(dataArr){
    let lowest = Math.min.apply(null,arr1)
    let highest = (Math.max.apply(null,arr1))
    let sum = 0
    for (let i = 0; i < arr1.length; i++){
        sum += arr1[i];
    }
    let average = (sum / 7)
    let result = `lowest: ${lowest}, highest: ${highest}, average: ${average}`
    return result
}

console.log(sorter(arr1))


// with .sort

function sorter2(dataArr){
    let numberAsc = arr1.sort(function(a,b){
        return a-b;
    });
    console.log(numberAsc);
    let i = numberAsc.length
    let highest = numberAsc[i-1]
    let sum = 0
    for (let i = 0; i < arr1.length; i++){
        sum += arr1[i];
    }
    let average = (sum / 7)
    let result2 = `lowest: ${numberAsc[0]}, highest: ${highest} , average: ${average}`
    return result2
}

console.log(sorter2(arr1))


//////////////////////////////////////////////// soal no 2 ////////////////////////////////////////////////

const arr2 = ['apple','banana','cherry','date']

function joinArr2(dataArr) {
let newArr = []
    for (let i=0 ; i < dataArr.length-1 ; i++){
        let result = `${dataArr[i]}`
        newArr.push(result)
        if ( i === dataArr.length-2) {
        result = `and ${dataArr[i+1]}`
        newArr.push(result)
        }
    }
    console.log(newArr.join(','))

}
console.log(joinArr2(arr2))


//////////////////////////////////////////////// soal no 3 ////////////////////////////////////////////////

function splitcloning(text,separator){
    let container = []
    console.log(separator)
    console.log(text.length)
    for (let i=0; i < text.length; i++) {
        let text1=""
        let text2=""
        if (text.charAt(i) === separator) {
            text1 = text.slice(0,i)
            text2 = text.slice(i+1,text.length)
            container.push(text1)
            container.push(text2)
            console.log(container)
            break
        }
    }
    
    console.log(container)
    return container
}

console.log(splitcloning("Hello World", " "))

//////////////////////////////////////////////// soal no 4 ////////////////////////////////////////////////

const arr3 = [1,2,3,4]
const arr4 = [3,2,1]
const resulArr = []
function calculateElement(data1,data2){
    if (arr3.length < arr4.length) {
        arr3.push(0)
    } else if (arr3.length > arr4.length) {
    arr4.push(0)
    }

    for (let i=0 ; i < arr2.length ; i++){
        resulArr[i] = arr3[i] + arr4[i]   
    }
    console.log(resulArr)
    return resulArr
}

console.log(calculateElement(arr3,arr4))

//////////////////////////////////////////////// soal no 5 ////////////////////////////////////////////////


const arr5 = [1,2,3,4,5,6,7]
let result3 = []

function pushModified2(dataArr,inputNumber){
    if (!dataArr.includes(inputNumber)){
        dataArr.push(inputNumber)
    }
    return dataArr
}

console.log(pushModified2(arr5,9))