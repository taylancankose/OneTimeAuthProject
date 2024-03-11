// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import twilio from 'twilio';

const accountSid = process.env.REACT_APP_TWILIO_ACCOUNT_SID;

const authToken = process.env.REACT_APP_TWILIO_AUTH_TOKEN;

const client = new twilio.Twilio(accountSid, authToken);

export default client;
