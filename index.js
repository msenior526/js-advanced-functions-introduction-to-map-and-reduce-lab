// Your code here
const mapToNegativize = (array) => {
    let newArr = [];
    for (let i = 0; i < array.length; i++){
        let negative = array[i] * -1;
        newArr.push(negative);
    }
    return newArr;
}

const mapToNoChange = (array) => {
    let newArr = [];
    for (let i = 0; i < array.length; i++){
        newArr.push(array[i]);
    }
    return newArr;
}

const mapToDouble = (array) => {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        let newValue = array[i] * 2;
        newArr.push(newValue);
    }
     return newArr;
}

const mapToSquare = (array) => {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        let newValue = array[i] * array[i];
        newArr.push(newValue);
    }
     return newArr;
}

const reduceToTotal = (array, startingPoint = 0) => {
    let newTotal = startingPoint;
    for (let i = 0; i < array.length; i++){
        newTotal += array[i];
    }
    return newTotal;
}


const reduceToAllTrue = (array) => {
    for (let i = 0; i < array.length; i++){
        if (array[i] == false) {
            return false;
        }
    }
    return true;
}

const reduceToAnyTrue = (array) => {
    for (let i = 0; i < array.length; i++){
        if (array[i] == true) {
            return true;
        }
    }
    return false;
}