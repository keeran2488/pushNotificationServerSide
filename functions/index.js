const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


exports.addAssignments = functions.firestore
.document('Assignments/{assignmentID}')
.onCreate((snap, context) => {
    console.log("Hello World!");
    const assignemt = snap.data();
    const subject = assignemt.Subject;
    console.log(subject);
});
