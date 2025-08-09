const firebaseConfig = {
  apiKey: "AIzaSyA4QkYH0V2MBK09k2unIcZWnOQb4r9_IQY",
  authDomain: "weavetrace.firebaseapp.com",
  projectId: "weavetrace",
  storageBucket: "weavetrace.firebasestorage.app",
  messagingSenderId: "783334842607",
  appId: "1:783334842607:web:b1df1d38cc02127aadbb1a",
  measurementId: "G-XMN22HXQTT"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
auth.signInAnonymously().catch(console.error);
