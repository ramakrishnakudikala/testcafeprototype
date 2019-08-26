// import http from 'http';
import axios from 'axios';

// const getResponseData = (url) => new Promise((resolve, reject) => {
//     http.get(url, res => {
//         const { statusCode } = res;
//         const contentType = res.headers['content-type'];

//         res.setEncoding('utf8');
//         let rawData = '';
//         res.on('data', (chunk) => { rawData += chunk; });
//         res.on('end', () => resolve({ statusCode, contentType, rawData }));
//     }).on('error', e => reject(e));
// });

fixture `Test REST API`;

test('endpoint must return 200', async t => {
    // const response = await getResponseData('https://www.xfinity.com/healthcheck');
    // await t
    //     .expect(response.statusCode).eql(200)

    const response = await axios.get("https://www.xfinity.com/healthcheck");
    await t.expect(response.status).eql(200);
});

