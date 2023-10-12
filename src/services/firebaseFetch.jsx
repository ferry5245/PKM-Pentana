import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';

// Initialize Firebase with your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsAHHfPh4GgF8AD0cYQL7a19sRN5A9uJ8",
    authDomain: "sbpentana.firebaseapp.com",
    databaseURL: "https://sbpentana-default-rtdb.firebaseio.com",
    projectId: "sbpentana",
    storageBucket: "sbpentana.appspot.com",
    messagingSenderId: "494625030433",
    appId: "1:494625030433:web:a5dfba640d67fda35cfe60",
    measurementId: "G-FJ7N8XWC61"
  };

// Initialize Firebase
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

// Function to fetch the latest data from Firebase Realtime Database
export const fetchData = async () => {
    try {
      const dataRef = ref(db, '/database3'); // Replace with your path
      const dataSnapshot = await get(dataRef);
  
      if (dataSnapshot.exists()) {
        const data = dataSnapshot.val();
        
        // Extract the keys (IDs) from the data
        const keys = Object.keys(data);
        
        // Find the key (ID) with the highest numerical value
        const latestKey = keys.reduce((a, b) => (Number(a) > Number(b) ? a : b));
        
        // Retrieve the data associated with the latest key
        const latestData = data[latestKey];
        
        return latestData;
      } else {
        console.error('Data not found in Firebase.');
        return null;
      }
    } catch (error) {
      console.error('Error fetching data from Firebase:', error);
      return null;
    }
  };
  