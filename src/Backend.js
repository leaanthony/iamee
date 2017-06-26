
import firebase from 'firebase';

// Initialize Firebase
var config = {
apiKey: "AIzaSyACdc1P3AFBqljOIhWzytIFS0nwn5mEmOA",
authDomain: "iamee-eec5c.firebaseapp.com",
databaseURL: "https://iamee-eec5c.firebaseio.com",
projectId: "iamee-eec5c",
storageBucket: "iamee-eec5c.appspot.com",
messagingSenderId: "135063325745"
};

var fire = firebase.initializeApp(config);
let auth = fire.auth();
let database = fire.database();

//debug
window.fire = firebase;

/**
 * Facebook Sign in
 */
var fbprovider = new firebase.auth.FacebookAuthProvider();
fbprovider.addScope('user_birthday');

var currentUser = {};

let Backend = {
    FBSignin: function() {
        auth.signInWithRedirect(fbprovider);
    },
    onAuthStateChanged: function(callback) {
        auth.onAuthStateChanged(function(user) {
            callback(user);
        });
    },
    logout: function() {
        auth.signOut().then(function() {
            // Sign-out successful.
            }).catch(function(error) {
            // An error happened.
            });
    },
    getCurrentUser: function() {
        return auth.currentUser;
    },
    getRedirectResult: function(callback, error) {
        auth.getRedirectResult().then(callback).catch(error);
    },
    // getActivities: function(callback) {
    //     var userId = auth.currentUser.uid;
    //     database.ref('/activities/' + userId).once('value', function(snapshot) {
    //         callback(snapshot.val());
    //     });
    // },
    // setActivities: function(activities) {
    //     var userId = auth.currentUser.uid;
    //     database.ref('/activities/' + userId).set(activities);

    // },
    getUserData: function(key, callback) {
        var userId = auth.currentUser.uid;
        database.ref('/' + key + '/' + userId).once('value', function(snapshot) {
            callback(snapshot.val());
        });
    },
    setUserData: function(key, data) {
        var userId = auth.currentUser.uid;
        database.ref('/' + key + '/' + userId).set(data);

    },
};

export default Backend;

      