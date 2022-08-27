n =  [1, 1, 2, 2, 2, 3,3,4,3]

function countDuplicate(arr) {
    let count = 0

    let unique = [...new Set(arr)];

    unique.map(item=>{
        if(arr.indexOf(item) !== arr.lastIndexOf(item)){
            return count++
        }
    })

    return count
}

countDuplicate(n)