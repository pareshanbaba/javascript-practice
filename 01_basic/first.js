// // // console.log("hello mandeep")
// // // const profile = {
// // //     Username: "rockey",
// // //     age:56,
// // //     is_follow:true,
// // //     followers:550,
// // //     followiung:200,


// // // };
// // // console.log(profile);
// // // 1
// // // 12
// // // 123
// // // 1234
// // // 12345

// //  let rows = 5;

// // // pattern variable carries the final pattern in string format
// // let pattern = "";

// // // outer loop runs for `rows` no. of times
// // for (let n = 1; n <= rows; n++) {
// //    // inner loop runs for n
// //    for (let num = 1; num <= n; num++) {
// //       pattern += num;
// //    }

// //    // Add a new line character after contents of each line
// //    pattern += "\n";
// // }
// // console.log(pattern);


// for(let num = 1; num <=100; num++){
//     if(num%2===0){
//         console.log(num + "yes")
//     }
//     else{
//         console.log(num+"no")
//     }
// }

row = 5;
pattern = "",
for (let n=1;n<=row;n++){
    for (let num =1; num<=n; num++){
        pattern +=n;
}
pattern += "\n";
}

console.log(pattern)


// let rows = 5;

// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    for (let num = 1; num <= n; num++) {
//       pattern += n;
//    }

//    // Add a new line character after contents of each line
//    pattern += "\n";
// }
// console.log(pattern);