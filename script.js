const arr = [[3,21,37],[61,79,101,120],[133,149]];
const isNumberInArrayOfArrays = (number, array) => {
    for (element of array) {
        for (el of element) {
            if(el>number )  {
                return false;
            }            
            if (el===number) {
                return true;
            }
        }
    }
    return false;
};

console.log(isNumberInArrayOfArrays(0, arr));
console.log(isNumberInArrayOfArrays(21, arr));
console.log(isNumberInArrayOfArrays(221, arr));