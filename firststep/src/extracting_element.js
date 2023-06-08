async function extracting_element(csv) {
    let newArray = [];
    for (let element of csv) {
        if (isDefinedAndNotNull(element[process.env.LOCATION]) && isDefinedAndNotNull(element[process.env.PRICE])) {
            let location = element[process.env.LOCATION];
            let price = element[process.env.PRICE].replace(/\\|,/g, '');
          newArray.push({location: location, price: parseInt(price)});
        }
    }

    return newArray;
}

function isDefinedAndNotNull(value) {
    return value !== undefined && value !== null;
}

module.exports = extracting_element;