const fs = require("fs");

console.log("opening file!");
fs.open("input.txt", "r+", function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File open successfully");
});

fs.close(fd, function (err) {
    if (err) {
        console.log(err);
    }
    console.log("File closed successfully.");
});

