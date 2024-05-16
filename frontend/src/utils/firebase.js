import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCIuMq24ZWO7JR34RgyOz5HaakzPdJtNJE",
  authDomain: "first-nft-metadata.firebaseapp.com",
  databaseURL: "https://first-nft-metadata-default-rtdb.firebaseio.com",
  projectId: "first-nft-metadata",
  storageBucket: "first-nft-metadata.appspot.com",
  messagingSenderId: "377785220608",
  appId: "1:377785220608:web:43ce1c968d04c7f73022e5",
  measurementId: "G-LQ2RW6XHL9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
export default database;
