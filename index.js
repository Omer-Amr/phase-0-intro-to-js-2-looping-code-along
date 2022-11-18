// Code your solutions in this file
let names = ["Guadalupe", "Ollie", "Aki"];
let event = "surprise";

function writeCards (names, event) {
    let thanksArr = [];
    for (let i=0; i < names.length; i++){
        thanksArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thanksArr;
}


function countDown(num){
    while(0 <= num){
        console.log(num--);
    }
}
countDown(10);
countDown(4);