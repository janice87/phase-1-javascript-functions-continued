// code your solution here
function saturdayFun(activity="roller-skate") {
    return "This Saturday, I want to " + activity + "!";
}

let mondayWork = function(toDo = "go to the office") {
    return `This Monday, I will ${toDo}.`;
}

const wrapAdjective = function(result="*") {
 return function(adjective="special") {
  return `You are ${result}${adjective}${result}!`
 }
}
