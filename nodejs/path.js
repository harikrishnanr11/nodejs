const path = require('path');
const filePath = path.join('C:', 'Users', 'harik', 'OneDrive', 'Desktop', 'New folder','nodejs','path.js');

console.log("File name: " + path.basename(filePath));
console.log("File extension: " + path.extname(filePath));
console.log("Directory name: " + path.dirname(filePath));
const parsePath = path.parse(filePath);
console.log("parse path format: " + path.format(parsePath));
console.log("Is absolute path: " + path.isAbsolute(filePath));
console.log("Join path: " + path.join('C:', 'Users', 'harik', 'OneDrive', 'Desktop', 'New folder','nodejs','path.js'));
console.log("Normalize path: " + path.normalize(filePath));
console.log("Relative path: " + path.relative(
    path.join('C:', 'Users', 'harik', 'OneDrive', 'Desktop'),
    path.join('C:', 'Users', 'harik', 'OneDrive', 'Desktop', 'New folder','nodejs','path.js')
));
console.log("Separator: " + path.sep);
console.log("Delimiter: " + path.delimiter);
console.log("Absolute path: " + path.resolve('C:', 'Users', 'harik', 'OneDrive', 'Desktop', 'New folder','nodejs','path.js'));

  
