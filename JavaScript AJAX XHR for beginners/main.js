let firstNames = document.getElementById('firstNames');
let output = document.getElementById('output');
let btn = document.getElementById('button').addEventListener('click',loadData);

let url = "https://randomuser.me/api/?results=5";                   // endpoint where JSON Data is sitting

function loadData() {                                               // function that loads more data every time the button is clicked
    let xhr = new XMLHttpRequest();                                 // set up the xhr object - readyState will be 0
    // console.log(xhr);   

    xhr.onreadystatechange = function() {                           // function to console.log the readyState
        // console.log(xhr.readyState);                        

        if (xhr.readyState === 4 && xhr.status === 200) {           // and the readyState is good to go
            // console.log('DATA READY TO GO!');
            // console.log(xhr.responseText);                          // console logs your received data
            let data = JSON.parse(xhr.responseText);                // changes the string(s) into objects
            outputData(data.results)                                        // invokes the function console logging each element in the object
        }
    }                                    
    xhr.open('GET', url);                                   // open the connection - readySTate will be 1
    xhr.send();                                             // send the connection 
}

function outputData(data) {                             // function that loops thru each element in the object/array
    for (let i = 0; i < data.length; i++) {             // that
        console.log(data[i].picture.medium);            //  retrieves
        let img = data[i].picture.medium;               // each medium picture and adding it to the HTML
        output.innerHTML += `                           
        <img src=${img}>
        `
    }
}



// let myObj = {
//     "people": [{
//         "firstName": "Laurence"
//         , "lastName": "Svekis"
//         , "age": 40
//         , "pass": true
//     }, {
//         "firstName": "Linda"
//         , "lastName": "Sveki"
//         , "age": 23
//         , "pass": true
//     }]
// };
// let myStr = '{"people":[{"firstName":"Laurence","lastName":"Svekis","age":40,"pass":true},{"firstName":"Linda","lastName":"Sveki","age":23,"pass":true}]}';
// let myObj1 = JSON.parse(myStr);         // JSON.parse() changes a string into an object
// let myStr1 = JSON.stringify(myObj);     // JSON.stringify() changes a string into an object
// console.log(myObj);

// console.log(myObj);


// function logArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         // console.log(array[i])
//         firstNames.innerHTML += array[i].firstName + ' ' + array[i].lastName + '<div>';
//     }
// }


// logArray(myObj.people);


/*
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState   
**********************************************************
0	UNSENT	Client has been created. open() not called yet.
1	OPENED	open() has been called.
2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	LOADING	Downloading; responseText holds partial data.
4	DONE	The operation is complete.
 
************************************************************
*/
      
        /*        myObj.people.forEach(function (element) {
                    console.log(element) */











// let myCars = {
//     "cars": [{
//             "make": "Honda",
//             "year": "2014",
//             "color": "white"
//         },
//         {
//             "make": "Subaru",
//             "year": "2015",
//             "color": "gray"
//         }
//     ]
// }

// console.log(myCars);
// console.log(myCars.cars[0].make);
// console.log(myCars.cars[1].make);