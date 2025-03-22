var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C); 

function sumNPrint(x1, x2) {
    var x3 = x1 + x2;
    console.log(x3);
}

sumNPrint(x, y); 
sumNPrint(A, B); 

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "Banana") {
            // alert("Found the Banana in " + i);
            return;
        }
    }
}

findTheBanana(L1);
findTheBanana(L2);

function findTheBananaForEach(arr, arrayName) {
    arr.forEach(function (item, index) {
        if (item === "Banana") {
            // alert("We found a banana in the " + arrayName);
        }
    });
}

findTheBananaForEach(L1 , "first array");
findTheBananaForEach(L2 , "second array");

function greetingFunc() {
    var d = new Date();
    var h = d.getHours();
    var greeting = "";

    if (h < 12) {
        console.log("Good morning")
        greeting = "Good morning, I am Irene";
    } else if (h < 18) {
        console.log("Good afternoon")
        greeting = "Good afternoon, I am Irene";
    } else if (h < 20) {
        console.log("Good evening")
        greeting = "Good evening, I am Irene";
    } else {
        console.log("Good night")
        greeting = "Good night, I am Irene";
    }

    if (window.location.href.includes("index.html")) {
        var E = document.getElementById("greeting");
        if (E) {
            E.innerHTML = greeting;
        }
    } else {
        console.log(greeting);
    }
}

greetingFunc();

function addYear() {
    document.getElementById("copyYear").textContent = new Date().getFullYear();
}

function showList() {
    let list = document.getElementById("funList");
    let button = document.getElementById("showButton");

    list.style.display = "block";
    button.style.display = "none";
}

$(document).ready(function() {
    $("#toggleBio").click(function() {
        if ($("#extraBio").is(":visible")) {
            $("#extraBio").hide();
            $("#toggleBio").text("Read More");
        } else {
            $("#extraBio").show();
            $("#toggleBio").text("Read Less");
        }
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    let isValid = true;

    function checkField(id, errorId, message) {
        let field = document.getElementById(id);
        let errorSpan = document.getElementById(errorId);
        if (!field.checkValidity()) {
            errorSpan.textContent = message;
            isValid = false;
        } else {
            errorSpan.textContent = "";
        }
    }

    checkField("name", "nameError", "Please enter your name.");
    checkField("email", "emailError", "Please enter a valid email.");
    checkField("message", "messageError", "Please enter a message.");

    if (!isValid) event.preventDefault();
});
