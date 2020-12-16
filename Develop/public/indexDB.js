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
    let db = target.request
    // check if app is online before reading db
    if (navigator.online){
        checkDatabase();
    }
};

// what happens if not online
request.onerror = function(event) {
    // show an error in console => console.log(err)
};

// save to db (called if offline - request fail)
function saveRecord(record) {
    // just saving a record
};

// back online, send to mongoDB and clear pending IndexDB 
function checkDatabase(){
    // make trans and store(key word) variables
    // add a const(getE) for the store.getAll method
    // use const getE.onsuccess = function (){ fetch => .then (return trans in json) .then (delete the records if successful (store.clear))}
    const transaction = db.transaction(["pending"], "readwrite");
    const store = transaction.objectStore("pending");
    store.clear();
};

// listen for app coming back online
window.addEventListener("online", checkDatabase);