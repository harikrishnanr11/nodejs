const fs = require("fs");

// Asynchronous read
fs.readFile("input.txt", function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
const data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());


// Asynchronous - Opening File
console.log("opening file!");
fs.open("input.txt", "r+", function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File open successfully");
});



console.log("writing into existing file");
fs.writeFile("input.txt", "hello world", function (err) {
    if (err) {
        return console.error(err);
    }

    console.log("Data written successfully!");
    console.log("Let's read newly written data");

    fs.readFile("input.txt", function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
    });
});



let data1 = "\nLearn Node.js";

// Append data to file
fs.appendFile(
    "input.txt", data1, "utf8",
    // Callback function
    function (err) {
        if (err) throw err;

        // If no error
        console.log("Data is appended to file successfully.");
    }
);



const data3 = "\nLearn Node.js";

// Append data to file
fs.appendFileSync("input.txt", data3, "utf8");
console.log("Data is appended to file successfully.");





