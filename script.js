var myList = [["Macbook Pro", 2], ["PS 5", 1],
              ["Hands free", 2], ["Fruits", 5], 
              ["Shirt", 5], ["Trousers", 3], 
              ["Ergonomic chair", 1],
              ["Anti-glare glass", 1],
              ["shoes", 3]];

//Remove first and last element in myList and save in another array               
var removeFirst = [myList.shift()];
var removeLast = [myList.pop()];

//Replace third element with another array
myList.splice(2, 1, ["Orange Juice", 17]);
//myList[2] = ["Orange Juice", 17];
console.log(myList);
//Loop through myList and print an object to the console using the first element
//of each sub-array as the key and the second element as the value of the object

let orderedList = {};


for (i = 0; i < myList.length; i++) {
    orderedList[myList[i][0]] = myList[i][1];
}

console.log(orderedList);