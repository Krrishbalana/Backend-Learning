const fs = require('node:fs');


//writefile -> file nna deta h bhailog ye.
// fs.writeFile("hey.txt", "hey hello kasie ho, mujhe node ne bnaya hai !" , (err) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("done hogya ji");
//     }
// })

//appendfile -> ye bani hui file mai kuch add kr deta h bhai log
// fs.appendFile("hey.txt", "mai bhai bhai log, or mujhe append ki madad se add kia gya hai", (err) => {
//     if(err) {
//         console.log(err);
//     }else{
//         console.log("append hogya bhai log");
//     }
// })

//rename -> ye file ko rename krta hai bhai log!
// fs.rename("hey.txt", "Hello.txt", (err) => {
//     if(err){console.log(err);}
//     else{console.log("rename ho gya bhai log");}
// })

//copy -> ye file ko copy krke kahi or paste krna hota hai
// fs.copyFile("Hello.txt", "./copy/copy.txt", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("copy ho gyi");
//     }
// })

//unlink -> ye file ko delete krta hai
// fs.unlink("./copy/eve_hi.txt", (err) => {
//     if(err){console.log(err.message);}
//     else{console.log("deleted");}
// })

//fs.rmdir -> ye directory/folder delete krta hai lekin only empty folder agr folder mai kuch h to nahi htane dega...
//fs.rm -> folder khali na ho to bhi hta deta hai bhai log


//fs.readfile -> file ko read krta hu bhai mai.
fs.readFile("Hello.txt", function(err, data){
    if(err) console.log(err);
    else console.log(`read kr li bhai log ${data}`);
})