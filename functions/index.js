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
        notification: {
            body: "New assignment added!",
            title: subject 
        },
        topic : topic
    };
    return admin.messaging().send(message)
        .then((response) => {
            // Response is a message ID string.
            console.log('Successfully sent message:', response);
            return null;
        })
        .catch((error) => {
            console.log('Error sending message:', error);
        });
});
