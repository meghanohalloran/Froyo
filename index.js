
const userPrompt = () =>{
  let userValue = prompt('Enter your ice cream order separated by commas : ');

  let userOrderString = userValue.split(',');
   return userOrderString;
}
let userData = userPrompt();
const iceCream = {}
for(let index in userData){
    iceCream[index] = userData[index];
}
  console.log(iceCream);

  const iceCreamFlavors = [];

for (let i = 0; i < 5; i++) {
  iceCreamFlavors.push({ value: i, index: i });
  
}

console.log(iceCream); 


// function countOccurrences(arr) {
//   const counts = {};

//   for (const element of arr) {
//     if (counts[element]) {
//       counts[element]++;
//     } else {
//       counts[element] = 1;
//     }
//   }

//   return counts;
// }

// const value = [];
// const result = countOccurrences(value);

// console.log(result); 




// // // A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo 
// // // flavors. 

// // // They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. 

// // // When they view the browser console, they observe an object listing how many of 
// // // each flavor they have ordered. 

// // // In this case, they will be able to observe that they have ordered 
// // // three vanilla, two coffee, and one strawberry froyo.
// // // ==================================================================================
// // // //   (enter your order separated by commas`:);
// // // //   const userOrderString = userOrder.split(`,`);
 

// // // //   const iceCream = {
// // // //     name: ""
// // // //   };
// // //   iceCream.name = userOrderString;
// // // let ArrayFlavorIceCream = [];

// // // console.log(iceCream.name);

// // // //let emptyArray = [];

// // // //checks for a value like vanilla chocolate etc and only adds it once []
// // // //this adds it manually, other options are splice split

// // // // ArrayFlavorIceCream = userOrder ();

// // //  // console.log(userOrderString);
// // //  // for (let i = 0; i <ArrayFlavorIceCream.length ; i++)
// // //   //  if (ArrayFlavorIceCream[0] === emptyArray[0]){
// // //   //    emptyArray = ArrayFlavorIceCream[0]
      
// // // //ask in the empty array is any vanilla
// // // //if not then add vanilla
// // // //if yes skip hile stop

// // // //how to ask code to check each value 

// // // // split or splice array 
// // // //find finds it in an array

// // //     //   if ()
  
// // //     // }
// // //     //this only takes each flavor one time andskips the other

// // //   // console.log(iceCream.name);
  
// // // // prompt user to list yogurt flavors
// // // // take user input and create array (split function)
// // // // observe how much of each flavor they have ordered
// // // // create loop 
// // // // create for in loop
// // // // use if statemnt to count each occurance of flavor
// // //repository is froyo NOT block15Workshop

// //   //for (let i = 0; i < userOrderString.length; i++) {}




// //   //let userValue =  []; userValue = prompt;

//   //console.log(userValue);

//   // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // function addValues(arr) {
// //   const result = [];

// //   for (let i = 0; i < arr.length; i++) {
// //     let sum = arr[i];

// //     for (let j = i + 1; j < arr.length; j++) {
// //       if (arr[i] === arr[j]) {
// //         sum += arr[j];
// //       }
// //     }

// //     if (!result.includes(sum)) {
// //       result.push(sum);
// //     }
// //   }

// //   return result;
// // }

// // const inputArray = [1, 2, 2, 3, 3, 3];
// // const outputArray = addValues(inputArray);

// // console.log(outputArray); 

// // // Output: [1, 4, 9]

// // // [{value: 0, index: 0}, {value: 1, index: 1}, ...]

// //   // function(array:any); any;
// //   // let array = InputDeviceInfo.split(",");
// //   // console.log(array);



