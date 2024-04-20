const fs = require('fs');
const Set = require('collections/Set'); // Using the `Set` class from the `collections` module

function filterAndWriteFile(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) throw err;
        // Regular expression for non-ASCII characters
        const nonAsciiRegex = /[^\x00-\x7F]/;
        const filteredLines = new Set(); // Use a Set to store unique lines
        data.split('\n').forEach(line => {
            if (line.length >= 8 &&
                line.length < 18 &&
                !nonAsciiRegex.test(line) &&
                !line.includes(' ') &&
                !line.includes('-') &&
                !line.includes('_') &&
                !line.includes('xtc') &&
                !line.includes('.com') &&
                !line.includes('.com.vn') &&
                !line.includes('.com.vn') &&
                !line.includes('facebook.com')) {
                filteredLines.add(line); // Add unique lines to the Set
            }
        });

        // Update the file with filtered content
        fs.writeFile(filename, Array.from(filteredLines).join('\n'), 'utf8', (err) => {
            if (err) throw err;
            console.log(`Successfully updated ${filename} with filtered content.`);
        });
    });
}

filterAndWriteFile('vn.txt');
