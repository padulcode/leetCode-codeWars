// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    let result = []
  for(i=0; i<str.length; i++){
    if(str[i-1]=='-' || str[i-1]=='_'){
      result.pop()
      result.push(str[i].toUpperCase())
    }
    else{
      result.push(str[i])
    }

  }
  return result.join('');
}

console.log (toCamelCase("The_Stealth-Warrior"))