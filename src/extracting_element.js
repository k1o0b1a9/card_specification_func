const moment = require('moment');

async function extracting_element(csv) {
    let newArray = [];
    let date;

    for (let element of csv) {
        const elementDate = moment(element[process.env.DATE], process.env.FORMAT, true);
        if (elementDate.isValid()) {
            if (!date) {
                date = elementDate.format('YYYY_MM');
            }
            const location = element[process.env.LOCATION];
            const price = element[process.env.PRICE] && element[process.env.PRICE].replace(/\\|,/g, '');
            if (isDefinedAndNotNull(location) && isDefinedAndNotNull(price)) {
                newArray.push({location, price: parseInt(price)});
            }
        }
    }
    return {newArray, date};
}

function isDefinedAndNotNull(value) {
    return value !== undefined && value !== null;
}

module.exports = extracting_element;
