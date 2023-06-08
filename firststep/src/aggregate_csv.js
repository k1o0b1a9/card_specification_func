async function aggregate_csv(detail_list){
    let result = detail_list.reduce((acc, curr) => {
        if(!acc[curr.location]) {
            acc[curr.location] = curr.price;
        } else {
            acc[curr.location] += curr.price;
        }
        return acc;
    }, {});

    let entries = Object.entries(result);  // オブジェクトを配列に変換

    entries = entries.filter(([key, value]) => !isNaN(value));  // NaNの値を取り除く

    entries.sort((a, b) => b[1] - a[1]);  // 降順に並び替え

    let sortedObject = Object.fromEntries(entries);  // 配列をオブジェクトに再変換

    return sortedObject;
}

module.exports = aggregate_csv;