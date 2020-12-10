const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

let db; 
const request = indexedDB.open("budget", 1);

// schema
request.onupgradeneeded = ({ target }) => {
    let db = target.request;
    db.createObjectStore("pending", {autoIncrement: true})
};

// if not online check DB
request.onsuccess = ({ target }) => {

};

// what happens if not online
request.onerror = function(event) {

};

// save to db (called if offline - request fail)
function saveRecord(record) {

};

// back online, send to mongoDB and clear pending IndexDB 
function checkDatabase(){

};

// listen for app coming back online
window.addEventListener("online", checkDatabase);