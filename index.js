// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrap = "*"){
    return function (adjective){
        return `You are ${wrap}${adjective}${wrap}!`
    }
}

let result = wrapAdjective("*");
let emphatic = result("a hard worker")
console.log(result + emphatic);
