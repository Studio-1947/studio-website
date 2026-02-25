const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('public/Untitled document.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('blogs-extracted.txt', data.text);
    console.log("Extraction complete.");
}).catch(function(error) {
    console.error("Error extracting:", error);
});
