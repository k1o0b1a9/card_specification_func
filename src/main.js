require('dotenv').config();
const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

const serviceAccount = require('../path/card-specification-firebase-adminsdk-7zxaf-6c29653a2f.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const csv_output = require('./csv_output.js');
const extracting_element = require('./extracting_element.js');
const aggregate_csv = require('./aggregate_csv.js');

// specificationフォルダ内のファイルを取得
const files = fs.readdirSync(process.env.SPECIFICATION);

// ファイルを上から順に処理
(async () => {
  for (const file of files) {
    const filePath = path.join(process.env.SPECIFICATION, file);

    const dataFromCsv = await csv_output(filePath);

    const { newArray: detail_list, date } = await extracting_element(dataFromCsv);

    const aggregate_result = await aggregate_csv(detail_list);

    const docRef = db.collection('credit-card-statistics').doc(date);

    await docRef.set(aggregate_result);
  }
})();
