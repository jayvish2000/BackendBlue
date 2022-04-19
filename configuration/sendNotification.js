const admin = require("firebase-admin");

var serviceAccount = require("./adminbluemoon-firebase-adminsdk-k0690-4aace30d5f");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.notification = async ({ title, body }) =>
  await admin
    .messaging()
    .send({
      data: { title, body },
      notification: {},
      android: {
        priority: "high",
      },
      topic: "admin",
    })
    .then(function (response) {
      console.log("Successfully sent message:", response);
    })
    .catch(function (error) {
      console.log("Error sending message:", error);
    });

exports.notificationTo = async ({ title, body, token }) =>
  await admin
    .messaging()
    .send({
      data: { title, body },
      notification: {},
      android: {
        priority: "high",
      },
      token: token,
    })
    .then(function (response) {
      console.log("Successfully sent message:", response);
    })
    .catch(function (error) {
      console.log("Error sending message:", error);
    });
