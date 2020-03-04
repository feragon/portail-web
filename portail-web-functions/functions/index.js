const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.createUserRecord = functions.auth.user().onCreate((user) => {
  return admin.firestore().collection('/user').doc(user.uid).set({
    email: user.email,
    firstname: "",
    lastname: "",
    picture_url: "",
    position: "",
  });
});

exports.deleteUserRecord = functions.auth.user().onDelete((user) => {
  return admin.firestore().collection('/user').doc(user.uid).delete();
});
