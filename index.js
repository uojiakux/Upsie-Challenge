let softwaresUnordered =
[
    {
    "name": "MS Word",
    "version": "13.2.1"
    },
    {
    "name": "MS Excel",
    "version": "13.4.2"
    },
    {
    "name": "AngularJS",
    "version": "1.7.1"
    },
    {
    "name": "Angular",
    "version": "8.1.13"
    },
    {
    "name": "React",
    "version": "0.0.5"
    },
    {
    "name": "Vue.js",
    "version": "2.6"
    },
    {
    "name": "Ember.js",
    "version": "3.10.1"
    },
    {
    "name": "Visual Studio Code",
    "version": "1.39.2"
    },
    {
    "name": "Atom",
    "version": "1.41.0"
    },
    {
    "name": "Sublime",
    "version": "3.12.0"
    },
    {
    "name": "DataGrip",
    "version": "2019.2.6"
    }
]

console.log("Unordered Software List")
console.log(softwaresUnordered)


// Sorting the version numbers in the array
var versionNumbers = ['13.2.1', '13.4.2', '1.7.1', '8.1.13', '0.0.5', '2.6', '3.10.1', '1.39.2', '1.41.0', '3.12.0', '2019.2.6'];
versionNumbers = versionNumbers.map( a => a.replace(/\d+/g, n => +n+100000 ) ).sort()
.map( a => a.replace(/\d+/g, n => +n-100000 ) );

console.log("Version Numbers Ordered")
console.log(versionNumbers)

$("#submit-button").on("click", function () {
    var userInput = document.getElementById('user-input-field').value;

    if (userInput == '') {
        $("#display-results").html("<h3></h3>");
        $("#display-results").append("<h3 class='results'><b> Please submit a version number</b></h3>");
    } else {
        inputValue();
    }
});

// Collect user input
function inputValue(){
    var userInput = document.getElementById('user-input-field').value;
    console.log(userInput);
    versionNumbers.push(userInput);

    versionNumbers = versionNumbers.map( a => a.replace(/\d+/g, n => +n+100000 ) ).sort()
    .map( a => a.replace(/\d+/g, n => +n-100000 ) );
    console.log(versionNumbers);
    
    var userInputIndex = versionNumbers.indexOf(userInput);
    console.log(userInputIndex);
    var newArr = versionNumbers.slice(userInputIndex);
    console.log(newArr);

    $("#display-results").html("<h3></h3>");

    for(var i = 0; i < newArr.length; i++) {
        if (newArr[i] == '0.0.5') {
            console.log("React Version 0.0.5");
            $("#display-results").append("<h3 class='results'> React Version 0.0.5 </h3>");
        }
        if (newArr[i] == '1.7.1') {
            $("#display-results").append("<h3 class='results'> AngularJS Version 1.7.1 </h3>");
        }
        if (newArr[i] == '1.39.2') {
            console.log("Visual Studio Code 1.39.2");
            $("#display-results").append("<h3 class='results'> Visual Studio Code Version 1.39.2 </h3>");
        }
        if (newArr[i] == '1.41.0') {
            console.log("Atom Version 1.41.0");
            $("#display-results").append("<h3 class='results'> Atom Version 1.41.0 </h3>");
        }
        if (newArr[i] == '2.6') {
            console.log("Vue.js Version 2.6");
            $("#display-results").append("<h3 class='results'> Vue.js Version 2.6 </h3>");
        }
        if (newArr[i] == '3.10.1') {
            console.log("Ember.js Version 3.10.1");
            $("#display-results").append("<h3 class='results'> Ember.js Version 3.10.1 </h3>");
        }
        if (newArr[i] == '3.12.0') {
            console.log("Sublime Version 3.12.0");
            $("#display-results").append("<h3 class='results'> Sublime Version 3.12.0 </h3>");
        }
        if (newArr[i] == '8.1.13') {
            console.log("Angular Version 8.1.13");
            $("#display-results").append("<h3 class='results'> Angular Version 8.1.13 </h3>");
        }
        if (newArr[i] == '13.2.1') {
            console.log("MS Word Version 13.2.1");
            $("#display-results").append("<h3 class='results'> MS Word Version 13.2.1 </h3>");
        }
        if (newArr[i] == '13.4.2') {
            console.log("MS Excel Version 13.4.2");
            $("#display-results").append("<h3 class='results'> MS Excel Version 13.4.2 </h3>");
        }
        if (newArr[i] == '2019.2.6') {
            console.log("Data Grip Version 2019.2.6");
            $("#display-results").append("<h3 class='results'> Data Grip Version 2019.2.6 </h3>");
        }
    }

    document.getElementById('user-input-field').value = '';

}