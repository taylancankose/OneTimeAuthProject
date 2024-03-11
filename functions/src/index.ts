/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from 'firebase-functions/v2/https';
import admin = require('firebase-admin');
import createUser from './create_user';
import serviceAccount = require('./service_account.json');
import requestOTP from './request_otp';
import verifyPassword from './verify_one_time_password';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(JSON.stringify(serviceAccount))),
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
});

export const user = onRequest(createUser);
export const requestOneTimePassword = onRequest(requestOTP);
export const verifyOneTimePassword = onRequest(verifyPassword);
