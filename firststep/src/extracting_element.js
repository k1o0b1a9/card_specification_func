const moment = require('moment');

async function extracting_element(csv) {
    let newArray = [];
    let date;

    for (let element of csv) {
        if (moment(element[process.env.DATE], process.env.FORMAT, true).isValid()) {
            if (!date) {
                date = moment(element[process.env.DATE], process.env.FORMAT).format('YYYY_MM');
            }
            if (isDefinedAndNotNull(element[process.env.LOCATION]) && isDefinedAndNotNull(element[process.env.PRICE])) {
                let location = element[process.env.LOCATION];
                let price = element[process.env.PRICE].replace(/\\|,/g, '');
                newArray.push({location: location, price: parseInt(price)});
            }
        }
    }
    return {newArray, date};
}

function isDefinedAndNotNull(value) {
    return value !== undefined && value !== null;
}

module.exports = extracting_element;
