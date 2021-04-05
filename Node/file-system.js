
const fs = require('fs');

// ReadFile
fs.readFile('./extras/text-1.txt', (error, data) => {
    if(error){
        console.log("Error");        
    } else {
        console.log('Async', data.toString('utf8'));
    } 
});

// Sync ReadFile
const file = fs.readFileSync('./extras/text-2.txt');
console.log('Sync', file.toString());

// Append
fs.appendFile('./extras/text-1.txt', 'This is an appended text.', error => {
    if(error){
        console.log("Error");
    }
});

// Write
fs.writeFile('./extras/new-text-file.txt', 'I m a new text file.', error => {
    if(error){
        console.log(error);
    }
});

// Delete
fs.unlink('./extras/new-text-file.txt', error => {
    if(error){
        console.log(error);
    }
});