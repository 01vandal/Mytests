

const binSearch = (arr, target)=>
{
    if (arr.length <= 0) return `Not found`

    mindex = Math.floor(arr.length/2)
    mvalue = arr[mindex]

    if (mvalue === target){
        return `Target ${mvalue} is found`
    }
    else if (mvalue > target){
        return binSearch(arr.slice(0, mindex), target)
    }
    else{
        return binSearch(arr.slice(mindex+1), target)
    }
}

console.log(binSearch([1, 2, 4, 6, 7, 9, 11, 15, 16, 21, 22, 24, 25, 29, 30, 34, 35, 40], 11));
console.log(binSearch([1, 2, 4, 6, 7, 9, 11, 15, 16, 21, 22, 24, 25, 29, 30, 34, 35, 40], 44));
console.log(binSearch([1, 2, 4, 6, 7, 9, 11, 15, 16, 21, 22, 24, 25, 29, 30, 34, 35, 40], 7));
console.log(binSearch([1, 2, 4, 6, 7, 9, 11, 15, 16, 21, 22, 24, 25, 29, 30, 34, 35, 40], 30));
