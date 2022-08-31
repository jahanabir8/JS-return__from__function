function addAll(){
    var sum = 0

    for(var i=0; i<arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}

var add1 = addAll(10, 10, 209)
console.log(add1)


// another
function details(value1, value2){
    return{
        name : value1,
        email: value2
    }
    // when using return, it will never execute anithing under this return 
    // lets see how. we will console log here, and it will not show any output
    // because Javascript compiler will never reach in this code that's why this console log will not visible in output
    console.log('This is never be shown')

}

var det = details('Abir Islam Anupom', 'onupomabir@gmail.com')
console.log(det)