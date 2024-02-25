//exercise no.1
const createTriangle = (height) => {
    let print = "";
    let count = 1;
    // loop untuk berpindah baris
    for (let index = 0 ; index < height; index++){
        // loop untuk membuat kolom
        for (let j = 0 ; j <= index; j++){
            if (count <10) {
                print += "0"
            }
            //task
            print += `${count} `;
            //console.log(print);
            count++;
        }
        // Backslash n untuk berpindah baris
        print += "\n"
    }
    return print;
};

console.log(createTriangle(4))


// exercise no.2

function fizzBuzz(n) {
    let fizzBuzzArr = []
    for (let i=1 ; i <= n; i++) {
        let value = i
        if (value%3 === 0 && value%15 !== 0){
            value = "Fizz"
        } else if (value%5 === 0 && value%15 !== 0) {
            value = "Buzz"
        } else if (value%15 === 0) {
            value = "FizzBuzz"
        }
        console.log(value)
        fizzBuzzArr.push(value)
    }
    return fizzBuzzArr.toString();
}

console.log(fizzBuzz(15))

// exercise no.3

function BodyMassIndex(weight,height){
    const BMI = weight / height;
    console.log(BMI)
    if (BMI < 18.5) {
        return "less weight"
    } else if (BMI >= 18.5 && BMI < 25) {
        return "ideal"
    } else if (BMI >= 25 && BMI < 30) {
        return "overweight"
    } else if (BMI >= 30 && BMI < 40) {
        return "very overweight"
    } else if (BMI > 39.9) {
        return "obesity"
    }
}

console.log(BodyMassIndex(80,1.78))

// exercise no.4
const arr1 = [1,2,3,4,5,6,7,8,9,10]

function extractEvenNumbers(dataArr){
    let evenArr=[]
    for (let i = 0; i < arr1.length; i++){
        let value = arr1[i]
        if (value%2 === 0) {
            evenArr.push(value)
        }
    }
    return evenArr;
}

console.log(extractEvenNumbers(arr1))

// exercise no.5

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

console.log(splitcloning("Hello World", "r"))


