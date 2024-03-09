import 'dotenv';
import twilio from 'twilio';

const accountSid = process.env.REACT_APP_TWILIO_ACCOUNT_SID;

const authToken = process.env.REACT_APP_TWILIO_AUTH_TOKEN;

module.exports = new twilio.Twilio(accountSid, authToken);

/*
Request 
   ↓
Find the user model
   ↓
Generate code
   ↓
Save code to user
   ↓
Send text message → twilio api
                        ↓
Respond to request  ←----
*/
