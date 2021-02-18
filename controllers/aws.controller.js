const fs = require('fs');
const AWS = require('aws-sdk');
require("dotenv").config();

// ======================= //
// === AWS Bucket Info === //
// ======================= //
const ID = process.env.S3_ID;
const SECRET = process.env.S3_SECRET;
const BUCKET_NAME = process.env.BUCKET_NAME;

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

// ============== //
// === UPLOAD === //
// ============== //
const uploadFile = (fileName) => {

    const fileContent = fs.readFileSync(fileName);

    const params = {
        ACL: 'public-read',
        Bucket: BUCKET_NAME,
        Key: 'bobsyouruncle.jpg', // File name you want to save as in S3
        Body: fileContent
    };

    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
    });

};

uploadFile('./bish.jpg');
