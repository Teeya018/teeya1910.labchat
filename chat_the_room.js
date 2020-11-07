var firebaseConfig = {
    apiKey: "AIzaSyBxT77xG6c6v50LmagcJsWPrv2sAXaBqTg",
    authDomain: "kwitter-13b69.firebaseapp.com",
    databaseURL: "https://kwitter-13b69.firebaseio.com",
    projectId: "kwitter-13b69",
    storageBucket: "kwitter-13b69.appspot.com",
    messagingSenderId: "1018166897304",
    appId: "1:1018166897304:web:89350730b53c17b5283eed",
    measurementId: "G-VZ1N065R4L"
};
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Sta Namert code
console.log("Room Name-"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
//you are creating a div which will show the room names there and on click it will redirect us to the room
document.getElementById("output").innerHTML +=row;
//calling here output id that is the id of div 
});});}

getData();
function addRoom()
{
    room_name=document.getElementById("room_name").value;
//taking the value of room name inside variable
firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
});
//adding refernce of he firease that will add the data in datbase where child is a function to give the name to the main folder 
//purpose is the key that is containig adding room name as the value 
localStorage.setItem("room_name",room_name);
//storing the key and the value in the local storage
window.location="kwitter_page.html";
//redirecting to this page location mentioned above 
}
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Sta Namert code
console.log("Room Name-"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
//you are creating a div which will show the room names there and on click it will redirect us to the room
document.getElementById("output").innerHTML +=row;
//calling here output id that is the id of div 
});});}

getData();
function addRoom()
{
    room_name=document.getElementById("room_name").value;
//taking the value of room name inside variable
firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
});
//adding refernce of he firease that will add the data in datbase where child is a function to give the name to the main folder 
//purpose is the key that is containig adding room name as the value 
localStorage.setItem("room_name",room_name);
//storing the key and the value in the local storage
window.location="kwitter_page.html";
//redirecting to this page location mentioned above 
}
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}