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
        'Persons Nmae' : value1,
        'Persons Email' : value2
    }
    // when using return, it will never execute anithing under this return 
    // lets see how. we will console log here, and it will not show any output
    // because Javascript compiler will never reach in this code that's why this console log will not visible in output
    console.log('This is never be shown')

}

var det = details('Abir Islam Anupom', 'onupomabir@gmail.com')
console.log(det)


// complexe type of return in function
function welcomeMsg1(name1, ret1){
    console.log('Welcome Mr. ' + name1);
    return function Option(){
        console.log('Do you like '+ ret1 + ' Mr. ' + name1)
    }()
}
welcomeMsg1('Abir Islam Anupom', 'Coffee')


// another one is this . this two return functions are same but in different way
function welcomeMsg2(name2){
    console.log('Welcome Mr. '+ name2)

    return function Option(menu2){
        console.log('Do you line ' + menu2 + ' Mr. ' + name)
    }
}
welcomeMsg2('Abir Islam Anupom') ('Coffee')
