import * as functions from 'firebase-functions';

export const test = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});