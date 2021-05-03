
// ***** FUNCTIONS FOR LOCAL STORAGE *****

//Default values (autocomplete) function
function loadDefaults() {
    if (typeof(Storage) != "undefined") {
        if (localStorage.last_pages_adv) {
            document.getElementById('num-pages').value = localStorage.last_pages_adv;
        }
        if (localStorage.last_copies_adv) {
            document.getElementById('num-copies').value = localStorage.last_copies_adv;
        }
    }
    else {
        document.getElementById('exp-input').innerHTML += "<p>Storage not supported</p>";
    }
}

//Store the values of the inputs as local storage variables
function storeDefaults() {
    if (typeof(Storage) != "undefined") {
        var current_pages = document.getElementById('num-pages').value;
        var current_copies = document.getElementById('num-copies').value;

        if (isNaN(current_pages) || isNaN(current_copies)) {
            current_pages = 100;
            current_copies = 1000;
        }

        localStorage.last_pages_adv = current_pages;
        localStorage.last_copies_adv = current_copies;
    }
    else {
        //Does not support
        document.getElementById('exp-input').innerHTML += "<p>Storage not supported</p>";
    }
}