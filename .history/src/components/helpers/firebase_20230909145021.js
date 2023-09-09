import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDj_TDrxtKNXkOeuKMlxa6iUJ_VLTy5Q38",
  authDomain: "nur-tuber.firebaseapp.com",
  projectId: "nur-tuber",
  storageBucket: "nur-tuber.appspot.com",
  messagingSenderId: "927478785195",
  appId: "1:927478785195:web:b2d2c1a30b94c3d32fc3ee",
};

 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);



