

var firebaseConfig = {
      apiKey: "AIzaSyCxeVJe46fMgsUqSK0CJLPf_tpzOEE_0Gg",
      authDomain: "kwitter-89197.firebaseapp.com",
      databaseURL: "https://kwitter-89197-default-rtdb.firebaseio.com",
      projectId: "kwitter-89197",
      storageBucket: "kwitter-89197.appspot.com",
      messagingSenderId: "392383640042",
      appId: "1:392383640042:web:d203948562f6fa18c14293"
};


firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!"

function addRoom() {
 room_name = document.getElementById("room_name").value;

 firebase.database().ref("/").child(room_name).update({
 purpse: "adding room name"     
 });

 localStorage.setItem("room_name", room_name);

 window.location = "kwitter_page.html"
}



function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
console.log("Room Name - " + Room_names);
row = "<div class'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
document.getElementById("output").innerHTML  += row
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
