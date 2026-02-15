importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDQOz-r2LIjk2Eyw19sy7yjzvhxafUFzKI",
    authDomain: "family-clean-d428e.firebaseapp.com",
    databaseURL: "https://family-clean-d428e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "family-clean-d428e",
    storageBucket: "family-clean-d428e.firebasestorage.app",
    messagingSenderId: "1067832584063",
    appId: "1:1067832584063:web:4f2c12e7374ccfeea75c4a"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://img.icons8.com/fluency/192/home.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
