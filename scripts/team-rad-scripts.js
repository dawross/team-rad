

var teamQuestions = [
    {   id: 1,
        question: "What's the output?<br /> var c = { greeting: 'Hey!' };<br> var  d;<br> d = c;<br> c.greeting = 'Hello';<br> console.log(d.greeting);",
        answers: [{
            a: "Hello",
            b: "Hey!",
            c: "Undefined",
            d: "ReferenceError"
        }],
        correctAnswer: "a"
    },
    {
        id: 2,
        question: "What’s the output?<br /> var num = 8; <br> var num = 10; <br> console.log(num);",
        answers: [{
            a: "8",
            b: "10",
            c: "SyntaxError",
            d: "ReferenceError"
        }],
        correctAnswer: "b"
    },
    {
        id: 3,
        question: "What’s the output?<br /> var set = new Set([1, 1, 2, 3, 4]); <br> console.log(set);",
        answers: [{
            a: "[1, 1, 2, 3, 4]",
            b: "[1, 2, 3, 4]",
            c: "{1, 1, 2, 3, 4}",
            d: "{1, 2, 3, 4}"
        }],
        correctAnswer: "d"
    },
    {
        id: 4,
        question: "How do you create a function in JavaScript?",
        answers: [{
            a: "function myFunction()",
            b: "Function == myFunction",
            c: "function.create(myFunction)",
            d: "function:myFunction()"
        }],
        correctAnswer: "a"
    },
    {
        id: 5,
        question: "How do you write an IF statement in JavaScript?",
        answers: [{
            a: "if x=5",
            b: "if (x=5)",
            c: "if x=5 then",
            d: "if x==5 then"
        }],
        correctAnswer: "b"
    },
    {
        id: 6,
        question: "How does a FOR loop start?",
        answers: [{
            a: "for (i=0; i<= 5; i++",
            b: "for i=1 to 5",
            c: "for (i=0; i<=5)",
            d: "for (i<=5; i++)"
        }],
        correctAnswer: "a"
    },
    {
        id: 7,
        question: "What are the keys in this object? <br /> let library = {<br>librarian: ‘Evan’,<br>security: ‘Camille’,<br>books: 1632<br>}",
        answers: [{
            a: "Librarian, Security, Books",
            b: "Evan, Camille, 1632",
            c: "librarian: 'Evan', security: 'Camille', books: 1632",
            d: 'There are no keys'
        }],
        correctAnswer: "a"
    },
    {
        id: 8,
        question: "Which of the following is the correct way to call a function?<br />const divide = (number) => {<br>console.log(number/9)}",
        answers: [{
            a: "divide 300",
            b: "divide [300]",
            c: "divide {300}",
            d: "divide (300)"
        }],
        correctAnswer: "d"
    },
    {
        id: 9,
        question: "How would one access the third item ‘String Cheese’ in the following array?<br />Const snackArray = [‘Wasabi Peas’, ‘Fruit’, ‘String Cheese’, ‘Sushi’]",
        answers: [{
            a: "snackArray{3}",
            b: "snackArray[3]",
            c: "snackArray[2]",
            d: "snackArray['String Cheese']"
        }],
        correctAnswer: "c"
    },
    {
        id: 10,
        question: "What will the following code result in?<br />Let favoriteCandy = [‘Sour Skittles’, ‘Starbursts’, ‘Gummy Bears’];<br>For (let favoriteCandyIndex = 0; favoriteCandyIndex < favoriteCandy.length; favoriteCandyIndex++) {<br>console.log(favoriteCandy[favoriteCandyIndex])}",
        answers: [{
            a: "0: Sour Skittles, 1: Starbursts, 2: Gummy Bears",
            b: "Gummy Bears, Starbursts, Sour Skittles",
            c: "Sour Skittles, Starbursts, Gummy Bears",
            d: "Sour Skittles[0], Starbursts[1], Gummy Bears[2]"
        }],
        correctAnswer: "c"
    }
]

   // Activates knockout.js
   ko.applyBindings(teamQuestions);