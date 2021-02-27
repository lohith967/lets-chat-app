var firebaseConfig = {
    apiKey: "AIzaSyAoHoR-_6Jx9LMs76aMBgjTAvIiMLVzWiY",
    authDomain: "classtest-f7c01.firebaseapp.com",
    projectId: "classtest-f7c01",
    storageBucket: "classtest-f7c01.appspot.com",
    messagingSenderId: "982166527375",
    appId: "1:982166527375:web:5d2202df38aa32c69bfffa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
