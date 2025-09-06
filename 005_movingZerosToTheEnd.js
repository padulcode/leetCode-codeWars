// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let result = [];
    for (let i = arr.length-1; i >= 0; i--) {
        if (arr[i]===0) {
            result.push(arr[i])
        }
        else {
        result.unshift(arr[i])
        }
    }
    return result
  }

  console.log (moveZeros([false,1,0,1,2,0,1,3,"a"]))


// Best Solution :

// ----->

// var moveZeros = function (arr) {
//     var filtedList = arr.filter(function (num){return num !== 0;});
//     var zeroList = arr.filter(function (num){return num === 0;});
//     return filtedList.concat(zeroList);
//   }