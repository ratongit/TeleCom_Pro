import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyACzODsxWGbu3yIpicocXfJr9irZGBQ7BU",
  authDomain: "task-manager-3ae38.firebaseapp.com",
  projectId: "task-manager-3ae38",
  storageBucket: "task-manager-3ae38.appspot.com",
  messagingSenderId: "900588680236",
  appId: "1:900588680236:web:4385cae9aaaef9083b0d89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;