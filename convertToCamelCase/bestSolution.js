function toCamelCase(str){
    return str.replace(/[_-]\w/gi, ch => ch[1].toUpperCase());
  }

  
console.log (toCamelCase("The_Stealth-Warrior"))