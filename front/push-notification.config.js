import PushNotification from 'react-native-push-notification';

PushNotification.configure({
    onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
    },

    popInitialNotification: true,
    requestPermissions: true,
});

// Créer un canal de notification (uniquement pour Android)
PushNotification.createChannel(
    {
        channelId: "default-channel-id", // ID du canal
        channelName: "Default Channel", // Nom du canal
        channelDescription: "A default channel", // Description du canal
        playSound: true, // Jouer un son lorsque la notification arrive
        soundName: "default", // Nom du son à jouer (default pour le son par défaut)
        importance: 4, // Importance de la notification (4 = High)
        vibrate: true, // Activer la vibration pour cette notification
    },
    (created) => console.log(`createChannel returned '${created}'`) // Callback, affiche true si le canal a été créé
);
