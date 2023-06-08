// B_func.js
const fs = require('fs');
const csv = require('csv-parser');
const iconv = require('iconv-lite');

async function csv_output(path) {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(path)
        .pipe(iconv.decodeStream('Shift_JIS'))
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => resolve(results))
        .on('error', (error) => reject(error));
    });
}

module.exports = csv_output;
