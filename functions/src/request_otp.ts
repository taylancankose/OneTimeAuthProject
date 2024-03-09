import admin from 'firebase-admin';

export default function requestOTP(req: any, res: any) {
  if (!req.body.phoneNumber) {
    return res.status(422).send({error: 'You must provide a phone number'});
  }

  const phoneNumber = String(req.body.phoneNumber).replace(/[^\d]/g, ''); // remove non-digit characters with empty string

  admin
    .auth()
    .getUser(phoneNumber)
    .then(userRecord => {})
    .catch(err => {
      res.send(422).send({error: err});
      // res.send(422).send({error: "User not found"}); // for production
    }); // find the particular user that has this phone number. async func
}
