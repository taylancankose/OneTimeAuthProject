import admin = require("firebase-admin");

export default function createUser(req : any, res: any) {
  // Verify the user provided a phone number
  // If there is no phone number provided send error
  if (!req.body.phoneNumber) {
    return res.status(422).send({error: "Wrong credentials"});
  }

  // Format the phone number to remove dashes and paranthesis
  // Replace the all characters that is not a number.
  // with using RegEx, replacing them with ""
  const phoneNumber = String(req.body.phoneNumber).replace(/[^\d]/g, "");

  // Create a new user account using the provided phone number
  admin.auth().createUser({
    uid: phoneNumber, // their id are their phone number
  }).then((user) => res.send(user))
    .catch((err) => res.status(422).send({error: err}));

  // Respond to the user request, saying the account has been created
}