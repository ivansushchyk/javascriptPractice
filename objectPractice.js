// Object exercises
// Link : https://learn.javascript.ru/object-for-in


// example for array
// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
//}

function isEmpty(obj) {    // check object property
    var count = 0;
    for(key in obj){
        count++;
    }

    if(count == 0) {
        return true;
    }
    return false;
}

function sallarySum(obj)  {
    var sum = 0;
    for(name in obj){
        sum += salaries[name];
    }
    return sum;
}


function showWhoEarnMax(obj) {
    var maxsalary = 0;
    var foundName;
    for (name in obj){
        if(obj[name] > maxsalary){
            maxsalary = obj[name];
            foundName = name;
        }
    }
    return foundName;
    
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function multiplyNumeric(obj) {
    for(name in obj){
        if(isNumeric(obj[name])){
            obj[name] = obj[name] * 2;
        }
    }
    return obj;
}x``

