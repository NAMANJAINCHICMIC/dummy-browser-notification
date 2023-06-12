// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_5afWxG48pQO7gk7uQvJug-kbB3ULywI",
  authDomain: "dummy-notification-9a0e0.firebaseapp.com",
  projectId: "dummy-notification-9a0e0",
  storageBucket: "dummy-notification-9a0e0.appspot.com",
  messagingSenderId: "537053205421",
  appId: "1:537053205421:web:28071f99a9d253f803c724",
  measurementId: "G-Z8QQB5QXX2",
  vapidKey: "BH97sCiiuQaJKqadPgn-fpwEhtoPkt9tUe5Z6Za58YXdickEDo5Skh4b7DJf8y0rQ4uZ_GCOJTtUbn7iVtG8XSw"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyD_5afWxG48pQO7gk7uQvJug-kbB3ULywI",
        authDomain: "dummy-notification-9a0e0.firebaseapp.com",
        projectId: "dummy-notification-9a0e0",
        storageBucket: "dummy-notification-9a0e0.appspot.com",
        messagingSenderId: "537053205421",
        appId: "1:537053205421:web:28071f99a9d253f803c724",
        measurementId: "G-Z8QQB5QXX2",
        vapidKey: "BH97sCiiuQaJKqadPgn-fpwEhtoPkt9tUe5Z6Za58YXdickEDo5Skh4b7DJf8y0rQ4uZ_GCOJTtUbn7iVtG8XSw"
    },
  };