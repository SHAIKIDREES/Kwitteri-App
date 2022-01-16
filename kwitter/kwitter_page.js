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
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("rooms");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      }) ;
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name1=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name2="<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>";
message2="<h4 class='message_h4'>"+message+"</h4>";
likebtn="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclicks='updatelike(this.id)'> ";

spanwithtag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button>";
row=name2+message2+likebtn+spanwithtag;
document.getElementById("output").innerHTML+=row;


//End code
      } });  }); }
getData();

function updatelike(message_id){
      console.log(message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });

}


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("rooms");
      window.location="index.html";
      }
      