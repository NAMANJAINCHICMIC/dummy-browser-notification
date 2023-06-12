importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyD_5afWxG48pQO7gk7uQvJug-kbB3ULywI",
    authDomain: "dummy-notification-9a0e0.firebaseapp.com",
    projectId: "dummy-notification-9a0e0",
    storageBucket: "dummy-notification-9a0e0.appspot.com",
    messagingSenderId: "537053205421",
    appId: "1:537053205421:web:28071f99a9d253f803c724",
    measurementId: "G-Z8QQB5QXX2",
});
const messaging = firebase.messaging();