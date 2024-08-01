const simpleSort = arr => 
{
    let sortedArray = arr.slice()

    for (let i = 0; i < sortedArray.length; i++)
    {
        for (let j = 0; j < sortedArray.length - 1 - i; j++) {
            if (sortedArray[j]> sortedArray[j+1])
            {
                let temp = sortedArray[j]
                sortedArray[j] = sortedArray[j+1]
                sortedArray[j+1] = temp
            }
            
        }
    }
    return sortedArray
}

// console.log(simpleSort([5, 1, 6, 3, 2, 7, 8, 11, 9, 14 ,10]));



// const quickSort = arr =>
// {
//     if (arr.length <= 1){
//         return arr;
//     }
//     const dum = arr.slice()
//     const right = []
//     const left = []

//     const pivot = dum[Math.ceil(dum.length /2)]
//     for(let i of dum)
//     {
//         if (i>pivot)
//         {
//             right.push(i)
//         }
//         else if(i<pivot)
//         {
//             left.push(i)
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)]
// }

// console.log(quickSort([5, 11, 9, 10, 2, 4, 1, 0]));


const mergeSort = arr =>
{
    if (arr.length<=1) return arr
    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) =>
{
    let sortedArray = []
    let rindex = 0
    let lindex = 0

    while (rindex< right.length && lindex<left.length)
    {
        if (right[rindex]>left[lindex])
        {
            sortedArray.push(left[lindex])
            lindex++
        } 
        else
        {
            sortedArray.push(right[rindex])
            rindex++
        }
    }
    return [...sortedArray, ...right.slice(rindex), ...left.slice(lindex)]
}

console.log(mergeSort([1, 6, 3, 7, 8, 11, 14, 0, 2, 5]));
console.log(simpleSort([1, 6, 3, 7, 8, 11, 14, 0, 2, 5]));

