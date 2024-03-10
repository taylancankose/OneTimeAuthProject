import admin from "firebase-admin";
import client from "./twilio";
export default function requestOTP(req: any, res: any) {
  if (!req.body.phoneNumber) {
    return res.status(422).send({error: "You must provide a phone number"});
  }

  const phoneNumber = String(req.body.phoneNumber).replace(/[^\d]/g, ""); // remove non-digit characters with empty string

  admin
    .auth()
    .getUser(phoneNumber)
    .then((userRecord) => {
      const code = Math.floor(Math.random() * 8999 + 1000);

      client.messages.create(
        {
          body: "Your code is " + code,
          to: phoneNumber,
          from: process.env.REACT_APP_PHONE_NUMBER,
        },
        (err: any) => {
          if (err) return res.status(422).send({error: err.message});

          admin
            .database()
            .ref("users/" + phoneNumber)
            .update({code: code, codeValid: true}, () => {
              res.send({success: true});
            });
        },
      );
    })
    .catch((err) => {
      res.send(422).send({error: err});
      // res.send(422).send({error: "User not found"}); // for production
    }); // find the particular user that has this phone number. async func
}