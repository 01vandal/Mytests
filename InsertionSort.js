

function insertion(arr) {
    let sortedList = [...arr]
    for (i = 1; i < arr.length; i++){
        for(j = i; j > 0; j--){
            if (sortedList[j] < sortedList[j-1]){
                let temp = sortedList[j]
                sortedList[j] = sortedList[j-1]
                sortedList[j-1] = temp
            } else break
        }
    }
    return sortedList
}

console.log(insertion([6, 1, 5, 3, 2, 8, 11, 4]));