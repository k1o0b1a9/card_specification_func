require('dotenv').config()
const admin = require('firebase-admin');
const serviceAccount = require('../path/card-specification-firebase-adminsdk-7zxaf-6c29653a2f.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const csv_output = require('./csv_output.js');
const extracting_element = require('./extracting_element.js');
const aggregate_csv = require('./aggregate_csv.js');

(async () => {
    const dataFromCsv = await csv_output(process.env.CREDIT_SPEC_LOCATION);

    const detail_list = await extracting_element(dataFromCsv);

    const aggregate_result=await aggregate_csv(detail_list);

    const docRef = db.collection('credit-card-statistics').doc('June-2023');

    await docRef.set(aggregate_result);

    console.log('Data successfully saved.');
})();
