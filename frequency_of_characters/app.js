function frequency() {
    var sentence = document.getElementById("string").value;
    var arr = [];
    var noOfCountsOfEachCharacter = {};
    var getCharacter, counter, actualLength, noOfCount;
    for (counter = 0, actualLength = sentence.length; counter <
    actualLength; ++counter) {
    getCharacter = sentence.charAt(counter);
    noOfCount = noOfCountsOfEachCharacter[getCharacter];
    noOfCountsOfEachCharacter[getCharacter] = noOfCount ? noOfCount + 1: 1;
    }
    for (getCharacter in noOfCountsOfEachCharacter) {
    if(getCharacter!=' ') {
    var obj = {
        "Character":getCharacter,
        "Occurrences": noOfCountsOfEachCharacter[getCharacter]
    };
    arr.push(obj);
    var text =document.getElementById("text");
    //text.innerHTML+=("Character="+getCharacter + " Occurrences=" +
    //noOfCountsOfEachCharacter[getCharacter]+"<br>");  
    }
    }
    for (counter = 0, actualLength = arr.length; counter <actualLength; ++counter)
    text.innerHTML+=("Character=" + arr[counter].Character + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + " Occurrences=" + arr[counter].Occurrences + "<br>");
    console.log(arr);
}