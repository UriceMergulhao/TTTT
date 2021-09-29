
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAlowlIPxDnoBHqLfZ-QIQGj5UVSkSuftk",
    authDomain: "pratice-2b625.firebaseapp.com",
    databaseURL: "https://pratice-2b625-default-rtdb.firebaseio.com",
    projectId: "pratice-2b625",
    storageBucket: "pratice-2b625.appspot.com",
    messagingSenderId: "327563827070",
    appId: "1:327563827070:web:de6fabbea73b1bacc8c52f",
    measurementId: "G-9HM5ZY1TNP"
  };
  
  // Initialize Firebase
  var app = initializeApp(firebaseConfig);

  function adduser(){
      username=document.getElementById("user name").value;
      firebase.database().ref("/").child(username).update({
          purpose:"addinguser"
      });
  }