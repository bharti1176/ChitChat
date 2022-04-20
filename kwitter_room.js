
const firebaseConfig = {
      apiKey: "AIzaSyCQawT-roXBMsYSOJgcD1E2z9NimoS4KrA",
      authDomain: "kwitter-9a3d7.firebaseapp.com",
      databaseURL: "https://kwitter-9a3d7-default-rtdb.firebaseio.com",
      projectId: "kwitter-9a3d7",
      storageBucket: "kwitter-9a3d7.appspot.com",
      messagingSenderId: "572772899469",
      appId: "1:572772899469:web:80a59b69a809d2cf5c60c4"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
