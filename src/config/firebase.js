import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1VLgX7izH2v54hUmtxKUEHW7PIdNlFlg",
  authDomain: "wild-beans-fdb66.firebaseapp.com",
  projectId: "wild-beans-fdb66",
  storageBucket: "wild-beans-fdb66.firebasestorage.app",
  messagingSenderId: "398120657852",
  appId: "1:398120657852:web:65da3ea45f9c7fc8b3c1b9",
  measurementId: "G-Z1JFKL28FC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);

export default app;
