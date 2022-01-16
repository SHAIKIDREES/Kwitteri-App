var firebaseConfig = {
    apiKey: "AIzaSyCdVPKEogUmHpBpi5DUMa3g2qiLGs7kE88",
  authDomain: "kwitter-app-7ddae.firebaseapp.com",
  databaseURL: "https://kwitter-app-7ddae-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-7ddae",
  storageBucket: "kwitter-app-7ddae.appspot.com",
  messagingSenderId: "591364385322",
  appId: "1:591364385322:web:85129f7cf87b56f8b7f153"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
var user=localStorage.getItem("user_name");
document.getElementById("Username").innerHTML="Welcome "+user+"!";
function adduser(){
      room_name=document.getElementById("roomname").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
localStorage.setItem("Room",room_name);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name is "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirecttoroomname(name){
      localStorage.setItem("rooms",name);
window.location="kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("rooms");
window.location="index.html";
}
