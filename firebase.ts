import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getMessaging, Messaging, isSupported } from 'firebase/messaging';
import { IFirebaseConfig } from './lib/utils/interfaces';

export const initialize = (config: IFirebaseConfig): Messaging | null => {
  // Check if any critical Firebase config variables are missing or empty
  if (
    !config.FIREBASE_KEY ||
    !config.FIREBASE_AUTH_DOMAIN ||
    !config.FIREBASE_PROJECT_ID ||
    !config.FIREBASE_STORAGE_BUCKET ||
    !config.FIREBASE_MSG_SENDER_ID ||
    !config.FIREBASE_APP_ID ||
    !config.FIREBASE_MEASUREMENT_ID
  ) {
    console.error(
      '🔥 Missing Firebase configuration values. Firebase will not be initialized.'
    );
    return null; // Return null if config is incomplete
  }

  try {
    // Check if Firebase App is already initialized
    const existingApps = getApps();
    if (existingApps.length > 0) {
      return getMessaging(existingApps[0]); // Use the first initialized app
    }

    const firebaseConfig = {
  apiKey: "AIzaSyBMC16d-mWpG9mtyX5ml67h0GZo2fhkwX4",
  authDomain: "mana-kuntloor-1.firebaseapp.com",
  databaseURL: "https://mana-kuntloor-1-default-rtdb.firebaseio.com",
  projectId: "mana-kuntloor-1",
  storageBucket: "mana-kuntloor-1.firebasestorage.app",
  messagingSenderId: "338731555945",
  appId: "1:338731555945:web:d9180f973623593d7496f8"
};

    // Initialize Firebase
    const app: FirebaseApp = initializeApp(firebaseConfig);
    return getMessaging(app);
  } catch (error) {
    console.error('Firebase initialization failed:', error);
    return null;
  }
};

export const isFirebaseSupported = async (): Promise<boolean> => {
  return await isSupported();
};
