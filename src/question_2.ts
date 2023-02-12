// Question 2
// NameCases:

var personNameUp = "SHOAIB"
var personNamesmall = "shoaib"

// to lowercase
console.log(personNameUp.toLowerCase());

// to uppercase
console.log(personNamesmall.toUpperCase())

// Title case
function toTitlecase(text: string){
    var newString = "";
    let text_array: Array<string>;
    text_array = text.split(' ');
    for ( var value of text_array){
        var saveValue = value.toUpperCase();
        newString += saveValue;
        newString += " ";
    }
    console.log(newString);

}

toTitlecase("hello my name is shoaib");