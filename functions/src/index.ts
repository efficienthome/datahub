import * as functions from 'firebase-functions';

export const test2 = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});