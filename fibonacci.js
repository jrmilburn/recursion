function fibs(n) {
    let arr = [];
    let num = 0;
    arr.push(0, 1);
    for (let i = 2; i < n; i++){
        num = arr[i-1] + arr[i-2];
        arr.push(num);
    }
    console.log(arr);
}


function fibsRev(n, arr = []) {

    if(n === 0) {
        return arr = [0]
    }
    if (n === 1) {
        return arr = [0,1]
    } 

    if (arr.length === 0){
        arr = [0,1];
    } 

    if (arr.length < n) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return fibsRev(n, arr);
    }

    return arr


}

let fib = fibsRev(6);

console.log(fib);