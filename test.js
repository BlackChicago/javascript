// var database = [
//     {
//         username: "andrei",
//         password: "supersecret",
//     }
// ];

// var newsFeed = [
//     {
//         username: "Bobby",
//         timeline: 'So tired from all that learning',
//     }
// ];


// var userNamePrompt = prompt("what is your user name?");
// var passwordPrompt = prompt("What's your Pasword?");

// function signIn(user , pass){
//     if (user === database[0].username && pass === database[0].password){
//         console.log(newsFeed);
//     }else{
//         alert("Sorry, wrong username and password!")
//     }


// }

// signIn(userNamePrompt,passwordPrompt);


var todos = [
    "test",
    'play',
    'clean',
    'fight'
];

var todosLenght = todos.length;

// var counterOne = 10;
// while (counterOne > 0){
//     console.log(counterOne);
//     counterOne--;
// }

var counterTwo = 10;
do{
    console.log(counterTwo);
    counterTwo--;

}while(counterTwo>0);

todos.forEach(function(i) {
    console.log(i);
})