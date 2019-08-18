
function choice(arr){
    let ind = Math.floor( Math.random() * arr.length );

    return arr[ind]
}

export { choice };