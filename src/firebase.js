import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjKPqhN7rWhCloHvAIm3k3_7pUAXnlnLQ",
  authDomain: "platformedu-58686.firebaseapp.com",
  projectId: "platformedu-58686",
  storageBucket: "platformedu-58686.appspot.com",
  messagingSenderId: "410818227914",
  appId: "1:410818227914:web:b73dbdb5a1fa55caf78e33",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
