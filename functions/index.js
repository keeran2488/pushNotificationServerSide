const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


exports.addAssignments = functions.firestore
.document('Assignments/{assignmentID}')
.onCreate((snap, context) => {
    const topic = 'assignmentNotifications';
    const assignemt = snap.data();
    const subject = assignemt.Subject;
    var message = {
        data: {
            Title: "New assignemnt added!",
            Subject: subject 
        },
        topic : topic
    };
    admin.messaging().send(message).then((response) => {
        console.log("Message delivered: ", response);
    })
    .catch((error) => {
        console.log("Error sending message: ", error);
    });
});
