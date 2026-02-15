// Import the Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize with the same project details
firebase.initializeApp({
    apiKey: "AIzaSyDQOz-r2LIjk2Eyw19sy7yjzvhxafUFzKI",
    projectId: "family-clean-d428e",
    messagingSenderId: "1067832584063",
    appId: "1:1067832584063:web:4f2c12e7374ccfeea75c4a"
});

const messaging = firebase.messaging();

// This catches notifications when the app is in the background
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Background Message: ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://img.icons8.com/fluency/192/home.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
