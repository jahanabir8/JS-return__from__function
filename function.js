function addAll(){
    var sum = 0

    for(var i=0; i<arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}

var adddd = addAll(10, 10, 209)
console.log(adddd)

// another

function details(value1, value2){
    return{
        name : value1,
        email: value2
    }

}

var det = details('Abir Islam Anupom', 'onupomabir@gmail.com')
console.log(det)