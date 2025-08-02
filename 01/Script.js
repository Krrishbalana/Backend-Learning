// fundaments of js
// arrays and objects
// functions Return
// async JS coding

/* arrays
-- > let arr = [1, 2, 3, 4, "hey", {} , ()=>{}, [], true]; // anything you can put it the arrays of JS
mostly used is arrays --> forEach, map, find, filter indexOf
*/

//forEach -> traverse on each element of array
let arr = [1,2,3,4];
arr.forEach((value) => {
    console.log(value + " Hello");
})

//map -> In JavaScript, a Map is a collection of key-value pairs where keys can be of any type. It preserves the insertion order and provides methods like set(), get(), and has() for efficient data handling.
let ans = arr.map( (value) => {
    return (value + " krish")
})

console.log(ans);

//filter -> filter do not modify the original array give you new array with is smaller than or equal to original array.
let ans2 = arr.filter((val) => {
    if(val >= 3) {
        return true;
    }
})
console.log(ans2); // --> [3,4]

//find -> pehela bnda dhoond kr dega
let ans3 = arr.find((val) => {
    if(val === 2){
        return val;
    }
})
console.log(ans3);

//indexOf -> gives index of element 
console.log(arr.indexOf(ans3));




/* objects -> {} -> In JavaScript, an object is a collection of key-value pairs where keys are strings (or symbols) and values can be any data type. Objects are used to store and organize data, and they allow you to access and modify values using dot (obj.key) or bracket (obj["key"]) notation.
there is a funtion -> Object.freeze(obj_name); to freeze the object we can't change values of object if it is frreezed.  
*/
let obj = {
    name: "krish",
    age: 22,
}
console.log(obj.name); // krish
console.log(obj.age); // 22

// obj.age = 33
// console.log(obj.age) // -> 33

// Object.freeze(obj);
// obj.age = 33;
// console.log(obj.age); // -> 22




//Async JavaScript Coding
fetchUser = async () => {
    let user =  await fetch("https://randomuser.me/api/")
let data = await user.json();

console.log(data);
}

fetchUser();

/*

--> Line by Line code chale use bolte h synchronus
--> jo bhi code asynchronus nature ka ho use side stack mai daal do, or jo bhi agla synchrouns code ho use clao fr
jab main stack khali ho jaye tb side stack check kro ki asynchronus code complete hua ya nahi, or agr vo complete 
hua ho to use main stack mai lao and chlo do. Thats IT.

*/