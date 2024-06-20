let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toJSON())
// console.log(myDate.toUTCString())

// let myCreateDate = new Date(2024,3,05)
// console.log(myCreateDate.toDateString())

// let newDate = new Date()
// newDate.toLocaleString("default", {
//     weekday: "long"
// })
// console.log(newDate)

let newDate = new Date();  // Creates a new Date object with the current date and time
newDate.toLocaleString("default", {
    weekday: "long"  // Configures options for formatting the date
});
console.log(newDate);  // Outputs the Date object itself
