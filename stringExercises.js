// JAVASCRIPT string exercises

// Link : https://learn.javascript.ru/string


function ucFirst(str) { // Function up first symbol of string
    if (str == "") {
        return "";
    }
    return  str[0].toUpperCase() + str.slice(1);

}

function checkSpam(str) { // Function check spam symbol in text
    var firstSpamSymbol = 'xxx';
    var secondSpamSymbol = 'viagra';
    var foundPosFirst = str.toLowerCase().indexOf(firstSpamSymbol);
    var foundPosSecond = str.toLowerCase().indexOf(secondSpamSymbol);
    if (foundPosFirst == -1 && foundPosSecond == -1) {
        return false;
    } else {
        return true;
    }
}

function truncate(str, maxlength) { // Check maxlength and length and replace end of string on '...'
    var strlen = str.length;
    if (strlen <= maxlength) {
        return str;
    }
    return (str.substr(0, maxlength - 3) + '...');
}

function extractCurrencyValue(str) {    // Converse cost such a "$120" into a int value
    return +str.slice(1);
}

