import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB2eehte70uKfmBGuyTG3zNjuD3E8EALcg",
  authDomain: "the-todo-app-1.firebaseapp.com",
  projectId: "the-todo-app-1",
  storageBucket: "the-todo-app-1.appspot.com",
  messagingSenderId: "346603028256",
  appId: "1:346603028256:web:1737377b0ed9b85320a145",
  measurementId: "G-HG6B3VGNRE",
};

export const app = initializeApp(firebaseConfig);
