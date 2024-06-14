function mergeSort(arr) {

    //base case
    if(arr.length <= 1){
        return arr
    }

    //find the midpoint of the array
    let mid = Math.floor(arr.length/2);

    //if (1 < array length) then the array is large 
    //(has more than one element)

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);


}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i).concat(right.slice(j)));

}

let sortedArr = mergeSort([4,3,2,1, 5, 2,3]);

console.log(sortedArr);