import admin from "firebase-admin";

export default function verifyPassword(req: any, res: any) {
  if (!req.body.phoneNumber || !req.body.code) return res.statu(422).send({error: "Phone and code must be provided"});

  const phoneNumber = String(req.body.phoneNumber).replace(/[^\d]/g, "");
  const code = parseInt(req.body.code);

  admin.auth().getUser(phoneNumber).then(() => {
    const ref = admin.database().ref("users/" + phoneNumber);
    ref.on("value", (snapshot) => {
      ref.off();
      const user = snapshot.val();
      if (user.code !== code || !user.codeValid) res.status(422).send({error: "Code not valid"});
      ref.update({codeValid: false});
      admin.auth().createCustomToken(phoneNumber).then((token) => res.send({token: token}));
    });
  }).catch((err) => res.status(422).send({error: err}));
}