//SOLVED
function plusMinus(arr) {
    const size = arr.length;
    
    let pos = 0;
    let neg = 0;
    let zero = 0;
    
    for (let num of arr) {
        if (num > 0) {
            pos++;
        } else if (num < 0){
            neg++;
        } else {
            zero++;
        }
    }
    
    const ratio1 = (pos/size).toFixed(6);
    const ratio2 = (neg/size).toFixed(6);
    const ratio3 = (zero/size).toFixed(6);
    
    console.log(`${ratio1}
    ${ratio2}
    ${ratio3}`);
}

const arr1 = [1, 2, 3, -1, -2, -3, 0, 0];
plusMinus(arr1)