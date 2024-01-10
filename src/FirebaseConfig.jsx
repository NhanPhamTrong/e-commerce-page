import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyAqYwaLCWNwyKYiQVV8aAx3-q9kHa5dokA",
    authDomain: "e-commerce-page-b0d14.firebaseapp.com",
    projectId: "e-commerce-page-b0d14",
    storageBucket: "e-commerce-page-b0d14.appspot.com",
    messagingSenderId: "127525182099",
    appId: "1:127525182099:web:c0f73cf684663815914b66"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app)